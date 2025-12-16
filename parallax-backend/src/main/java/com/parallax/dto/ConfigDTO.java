package com.parallax.dto;

public record ConfigDTO(
    String name,
    String description,
    Double heroOrbSpeed,
    Integer heroOrbAmplitude,
    Double heroOrbMouseIntensity,
    Double heroCardSpeed,
    Integer heroCardAmplitude,
    Double heroCardMouseIntensity,
    Double demoShapeSpeed,
    Integer demoShapeAmplitude,
    Double demoShapeMouseIntensity,
    Boolean isDefault
) {}
