package com.parallax.service;

import com.parallax.dto.ContactDTO;
import com.parallax.model.ContactMessage;
import com.parallax.repository.ContactRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class ContactService {
    
    private final ContactRepository contactRepository;
    
    public ContactService(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
    }
    
    @Transactional
    public ContactMessage submitContact(ContactDTO dto) {
        ContactMessage message = new ContactMessage(
            dto.name(),
            dto.email(),
            dto.subject(),
            dto.message()
        );
        return contactRepository.save(message);
    }
    
    public List<ContactMessage> getAllMessages() {
        return contactRepository.findAllByOrderByCreatedAtDesc();
    }
    
    public List<ContactMessage> getUnreadMessages() {
        return contactRepository.findByReadFalseOrderByCreatedAtDesc();
    }
    
    @Transactional
    public void markAsRead(Long id) {
        contactRepository.findById(id).ifPresent(msg -> {
            msg.setRead(true);
            contactRepository.save(msg);
        });
    }
    
    public long getUnreadCount() {
        return contactRepository.countByReadFalse();
    }
}
