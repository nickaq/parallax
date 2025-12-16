package com.parallax.service;

import com.parallax.dto.SubscribeDTO;
import com.parallax.model.Subscriber;
import com.parallax.repository.SubscriberRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class NewsletterService {
    
    private final SubscriberRepository subscriberRepository;
    
    public NewsletterService(SubscriberRepository subscriberRepository) {
        this.subscriberRepository = subscriberRepository;
    }
    
    @Transactional
    public Subscriber subscribe(SubscribeDTO dto) {
        Optional<Subscriber> existing = subscriberRepository.findByEmail(dto.email());
        
        if (existing.isPresent()) {
            Subscriber subscriber = existing.get();
            if (!subscriber.isActive()) {
                subscriber.setActive(true);
                subscriber.setUnsubscribedAt(null);
                return subscriberRepository.save(subscriber);
            }
            return subscriber;
        }
        
        Subscriber subscriber = new Subscriber(dto.email(), dto.name());
        return subscriberRepository.save(subscriber);
    }
    
    @Transactional
    public boolean unsubscribe(String email) {
        Optional<Subscriber> subscriber = subscriberRepository.findByEmail(email);
        if (subscriber.isPresent()) {
            Subscriber sub = subscriber.get();
            sub.setActive(false);
            sub.setUnsubscribedAt(LocalDateTime.now());
            subscriberRepository.save(sub);
            return true;
        }
        return false;
    }
    
    public boolean isSubscribed(String email) {
        return subscriberRepository.findByEmail(email)
                .map(Subscriber::isActive)
                .orElse(false);
    }
    
    public long getActiveSubscriberCount() {
        return subscriberRepository.countByActiveTrue();
    }
}
