package com.parallax.dto;

public record InteractionDTO(
    String sessionId,
    String eventType,
    String section,
    Double scrollDepth,
    Integer duration
) {}
