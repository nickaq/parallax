package com.parallax.service;

import com.parallax.dto.InteractionDTO;
import com.parallax.dto.PageViewDTO;
import com.parallax.dto.StatsDTO;
import com.parallax.model.Interaction;
import com.parallax.model.PageView;
import com.parallax.repository.ContactRepository;
import com.parallax.repository.InteractionRepository;
import com.parallax.repository.PageViewRepository;
import com.parallax.repository.SubscriberRepository;
import jakarta.servlet.http.HttpServletRequest;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class AnalyticsServiceTest {

    @Mock
    private PageViewRepository pageViewRepository;
    @Mock
    private InteractionRepository interactionRepository;
    @Mock
    private ContactRepository contactRepository;
    @Mock
    private SubscriberRepository subscriberRepository;

    @InjectMocks
    private AnalyticsService analyticsService;

    @Test
    void recordPageView_ShouldSavePageView() {
        PageViewDTO dto = new PageViewDTO("/home", "session-123", "google.com");
        HttpServletRequest request = mock(HttpServletRequest.class);
        when(request.getHeader("User-Agent")).thenReturn("Mozilla/5.0");
        when(request.getRemoteAddr()).thenReturn("127.0.0.1");

        PageView savedPageView = new PageView("/home", "session-123", "google.com");
        when(pageViewRepository.save(any(PageView.class))).thenReturn(savedPageView);

        PageView result = analyticsService.recordPageView(dto, request);

        assertNotNull(result);
        verify(pageViewRepository).save(any(PageView.class));
    }

    @Test
    void recordInteraction_ShouldSaveInteraction() {
        InteractionDTO dto = new InteractionDTO("session-123", "click", "hero", 50.0, 100);
        Interaction savedInteraction = new Interaction("session-123", "click", "hero");
        when(interactionRepository.save(any(Interaction.class))).thenReturn(savedInteraction);

        Interaction result = analyticsService.recordInteraction(dto);

        assertNotNull(result);
        verify(interactionRepository).save(any(Interaction.class));
    }

    @Test
    void getStats_ShouldReturnAggregatedStats() {
        when(pageViewRepository.count()).thenReturn(100L);
        when(pageViewRepository.countUniqueSessions()).thenReturn(50L);
        when(interactionRepository.count()).thenReturn(200L);
        when(subscriberRepository.countByActiveTrue()).thenReturn(10L);
        when(contactRepository.count()).thenReturn(5L);
        when(interactionRepository.getAverageScrollDepth()).thenReturn(75.0);

        StatsDTO stats = analyticsService.getStats();

        assertEquals(100L, stats.totalPageViews());
        assertEquals(50L, stats.uniqueSessions());
        assertEquals(10L, stats.totalSubscribers());
        assertEquals(75.0, stats.avgScrollDepth());
    }
}
