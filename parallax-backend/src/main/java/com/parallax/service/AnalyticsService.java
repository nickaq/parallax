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
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class AnalyticsService {
    
    private final PageViewRepository pageViewRepository;
    private final InteractionRepository interactionRepository;
    private final ContactRepository contactRepository;
    private final SubscriberRepository subscriberRepository;
    
    public AnalyticsService(PageViewRepository pageViewRepository,
                           InteractionRepository interactionRepository,
                           ContactRepository contactRepository,
                           SubscriberRepository subscriberRepository) {
        this.pageViewRepository = pageViewRepository;
        this.interactionRepository = interactionRepository;
        this.contactRepository = contactRepository;
        this.subscriberRepository = subscriberRepository;
    }
    
    @Transactional
    public PageView recordPageView(PageViewDTO dto, HttpServletRequest request) {
        PageView pageView = new PageView(dto.page(), dto.sessionId(), dto.referrer());
        pageView.setUserAgent(request.getHeader("User-Agent"));
        pageView.setIpAddress(getClientIp(request));
        return pageViewRepository.save(pageView);
    }
    
    @Transactional
    public Interaction recordInteraction(InteractionDTO dto) {
        Interaction interaction = new Interaction(dto.sessionId(), dto.eventType(), dto.section());
        interaction.setScrollDepth(dto.scrollDepth());
        interaction.setDuration(dto.duration());
        return interactionRepository.save(interaction);
    }
    
    public StatsDTO getStats() {
        return new StatsDTO(
            pageViewRepository.count(),
            pageViewRepository.countUniqueSessions(),
            interactionRepository.count(),
            subscriberRepository.countByActiveTrue(),
            contactRepository.count(),
            interactionRepository.getAverageScrollDepth()
        );
    }
    
    private String getClientIp(HttpServletRequest request) {
        String xForwardedFor = request.getHeader("X-Forwarded-For");
        if (xForwardedFor != null && !xForwardedFor.isEmpty()) {
            return xForwardedFor.split(",")[0].trim();
        }
        return request.getRemoteAddr();
    }
}
