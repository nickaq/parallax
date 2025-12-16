package com.parallax.service;

import com.parallax.dto.ContactDTO;
import com.parallax.model.ContactMessage;
import com.parallax.repository.ContactRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class ContactServiceTest {

    @Mock
    private ContactRepository contactRepository;

    @InjectMocks
    private ContactService contactService;

    @Test
    void submitContact_ShouldSaveMessage() {
        ContactDTO dto = new ContactDTO("John Doe", "john@example.com", "Test", "Hello!");
        ContactMessage savedMessage = new ContactMessage("John Doe", "john@example.com", "Test", "Hello!");
        savedMessage.setId(1L);

        when(contactRepository.save(any(ContactMessage.class))).thenReturn(savedMessage);

        ContactMessage result = contactService.submitContact(dto);

        assertNotNull(result);
        assertEquals(1L, result.getId());
        assertEquals("John Doe", result.getName());
        verify(contactRepository).save(any(ContactMessage.class));
    }

    @Test
    void getAllMessages_ShouldReturnList() {
        when(contactRepository.findAllByOrderByCreatedAtDesc()).thenReturn(Collections.emptyList());

        List<ContactMessage> result = contactService.getAllMessages();

        assertNotNull(result);
        assertTrue(result.isEmpty());
        verify(contactRepository).findAllByOrderByCreatedAtDesc();
    }

    @Test
    void markAsRead_ShouldUpdateMessage() {
        ContactMessage message = new ContactMessage();
        message.setId(1L);
        message.setRead(false);

        when(contactRepository.findById(1L)).thenReturn(Optional.of(message));

        contactService.markAsRead(1L);

        assertTrue(message.isRead());
        verify(contactRepository).save(message);
    }
}
