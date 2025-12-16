package com.parallax.service;

import com.parallax.dto.SubscribeDTO;
import com.parallax.model.Subscriber;
import com.parallax.repository.SubscriberRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class NewsletterServiceTest {

    @Mock
    private SubscriberRepository subscriberRepository;

    @InjectMocks
    private NewsletterService newsletterService;

    @Test
    void subscribe_NewSubscriber_ShouldSave() {
        SubscribeDTO dto = new SubscribeDTO("jane@example.com", "Jane Doe");
        Subscriber savedSubscriber = new Subscriber("jane@example.com", "Jane Doe");
        savedSubscriber.setId(1L);

        when(subscriberRepository.findByEmail("jane@example.com")).thenReturn(Optional.empty());
        when(subscriberRepository.save(any(Subscriber.class))).thenReturn(savedSubscriber);

        Subscriber result = newsletterService.subscribe(dto);

        assertNotNull(result);
        assertEquals("jane@example.com", result.getEmail());
        assertTrue(result.isActive());
        verify(subscriberRepository).save(any(Subscriber.class));
    }

    @Test
    void subscribe_ExistingInactiveSubscriber_ShouldReactivate() {
        SubscribeDTO dto = new SubscribeDTO("jane@example.com", "Jane");
        Subscriber existing = new Subscriber("jane@example.com", "Jane");
        existing.setActive(false);

        when(subscriberRepository.findByEmail("jane@example.com")).thenReturn(Optional.of(existing));
        when(subscriberRepository.save(existing)).thenReturn(existing);

        Subscriber result = newsletterService.subscribe(dto);

        assertTrue(result.isActive());
        assertNull(result.getUnsubscribedAt());
        verify(subscriberRepository).save(existing);
    }

    @Test
    void unsubscribe_ExistingSubscriber_ShouldDeactivate() {
        Subscriber existing = new Subscriber("jane@example.com", "Jane");
        existing.setActive(true);

        when(subscriberRepository.findByEmail("jane@example.com")).thenReturn(Optional.of(existing));

        boolean result = newsletterService.unsubscribe("jane@example.com");

        assertTrue(result);
        assertFalse(existing.isActive());
        assertNotNull(existing.getUnsubscribedAt());
        verify(subscriberRepository).save(existing);
    }
}
