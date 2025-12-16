package com.parallax.dto;

public record PageViewDTO(
    String page,
    String sessionId,
    String referrer
) {}
