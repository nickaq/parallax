package com.parallax.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;

import java.time.LocalDateTime;

@Entity
@Table(name = "parallax_configs")
public class ParallaxConfig {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @NotBlank
    @Column(unique = true)
    private String name;
    
    private String description;
    private Double heroOrbSpeed;
    private Integer heroOrbAmplitude;
    private Double heroOrbMouseIntensity;
    private Double heroCardSpeed;
    private Integer heroCardAmplitude;
    private Double heroCardMouseIntensity;
    private Double demoShapeSpeed;
    private Integer demoShapeAmplitude;
    private Double demoShapeMouseIntensity;
    private boolean isDefault = false;
    private LocalDateTime createdAt = LocalDateTime.now();
    private LocalDateTime updatedAt;
    
    public ParallaxConfig() {}
    
    public ParallaxConfig(String name, String description) {
        this.name = name;
        this.description = description;
        this.createdAt = LocalDateTime.now();
    }
    
    @PreUpdate
    protected void onUpdate() {
        updatedAt = LocalDateTime.now();
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    public Double getHeroOrbSpeed() { return heroOrbSpeed; }
    public void setHeroOrbSpeed(Double heroOrbSpeed) { this.heroOrbSpeed = heroOrbSpeed; }
    public Integer getHeroOrbAmplitude() { return heroOrbAmplitude; }
    public void setHeroOrbAmplitude(Integer heroOrbAmplitude) { this.heroOrbAmplitude = heroOrbAmplitude; }
    public Double getHeroOrbMouseIntensity() { return heroOrbMouseIntensity; }
    public void setHeroOrbMouseIntensity(Double heroOrbMouseIntensity) { this.heroOrbMouseIntensity = heroOrbMouseIntensity; }
    public Double getHeroCardSpeed() { return heroCardSpeed; }
    public void setHeroCardSpeed(Double heroCardSpeed) { this.heroCardSpeed = heroCardSpeed; }
    public Integer getHeroCardAmplitude() { return heroCardAmplitude; }
    public void setHeroCardAmplitude(Integer heroCardAmplitude) { this.heroCardAmplitude = heroCardAmplitude; }
    public Double getHeroCardMouseIntensity() { return heroCardMouseIntensity; }
    public void setHeroCardMouseIntensity(Double heroCardMouseIntensity) { this.heroCardMouseIntensity = heroCardMouseIntensity; }
    public Double getDemoShapeSpeed() { return demoShapeSpeed; }
    public void setDemoShapeSpeed(Double demoShapeSpeed) { this.demoShapeSpeed = demoShapeSpeed; }
    public Integer getDemoShapeAmplitude() { return demoShapeAmplitude; }
    public void setDemoShapeAmplitude(Integer demoShapeAmplitude) { this.demoShapeAmplitude = demoShapeAmplitude; }
    public Double getDemoShapeMouseIntensity() { return demoShapeMouseIntensity; }
    public void setDemoShapeMouseIntensity(Double demoShapeMouseIntensity) { this.demoShapeMouseIntensity = demoShapeMouseIntensity; }
    public boolean isDefault() { return isDefault; }
    public void setDefault(boolean isDefault) { this.isDefault = isDefault; }
    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
    public LocalDateTime getUpdatedAt() { return updatedAt; }
    public void setUpdatedAt(LocalDateTime updatedAt) { this.updatedAt = updatedAt; }
}
