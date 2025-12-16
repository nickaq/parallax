package com.parallax.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record SubscribeDTO(
    @NotBlank(message = "Email is required")
    @Email(message = "Invalid email format")
    String email,
    
    String name
) {}
