package com.parallax.dto;

public record StatsDTO(
    Long totalPageViews,
    Long uniqueSessions,
    Long totalInteractions,
    Long totalSubscribers,
    Long totalMessages,
    Double avgScrollDepth
) {}
