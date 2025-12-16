package com.parallax.service;

import com.parallax.dto.ConfigDTO;
import com.parallax.model.ParallaxConfig;
import com.parallax.repository.ConfigRepository;
import jakarta.annotation.PostConstruct;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class ConfigService {
    
    private final ConfigRepository configRepository;
    
    public ConfigService(ConfigRepository configRepository) {
        this.configRepository = configRepository;
    }
    
    @PostConstruct
    public void initDefaultPresets() {
        if (configRepository.count() == 0) {
            ParallaxConfig defaultConfig = new ParallaxConfig("default", "Default parallax settings");
            defaultConfig.setHeroOrbSpeed(-0.5);
            defaultConfig.setHeroOrbAmplitude(400);
            defaultConfig.setHeroOrbMouseIntensity(0.02);
            defaultConfig.setHeroCardSpeed(0.8);
            defaultConfig.setHeroCardAmplitude(500);
            defaultConfig.setHeroCardMouseIntensity(0.06);
            defaultConfig.setDemoShapeSpeed(1.0);
            defaultConfig.setDemoShapeAmplitude(600);
            defaultConfig.setDemoShapeMouseIntensity(0.07);
            defaultConfig.setDefault(true);
            configRepository.save(defaultConfig);
            
            ParallaxConfig subtle = new ParallaxConfig("subtle", "Subtle parallax effect");
            subtle.setHeroOrbSpeed(-0.2);
            subtle.setHeroOrbAmplitude(100);
            subtle.setHeroOrbMouseIntensity(0.01);
            subtle.setHeroCardSpeed(0.3);
            subtle.setHeroCardAmplitude(150);
            subtle.setHeroCardMouseIntensity(0.02);
            subtle.setDemoShapeSpeed(0.4);
            subtle.setDemoShapeAmplitude(200);
            subtle.setDemoShapeMouseIntensity(0.03);
            configRepository.save(subtle);
            
            ParallaxConfig extreme = new ParallaxConfig("extreme", "Maximum parallax intensity");
            extreme.setHeroOrbSpeed(-0.8);
            extreme.setHeroOrbAmplitude(800);
            extreme.setHeroOrbMouseIntensity(0.05);
            extreme.setHeroCardSpeed(1.2);
            extreme.setHeroCardAmplitude(900);
            extreme.setHeroCardMouseIntensity(0.10);
            extreme.setDemoShapeSpeed(1.5);
            extreme.setDemoShapeAmplitude(1000);
            extreme.setDemoShapeMouseIntensity(0.12);
            configRepository.save(extreme);
        }
    }
    
    public List<ParallaxConfig> getAllPresets() {
        return configRepository.findAll();
    }
    
    public Optional<ParallaxConfig> getPresetByName(String name) {
        return configRepository.findByName(name);
    }
    
    public Optional<ParallaxConfig> getDefaultPreset() {
        return configRepository.findByIsDefaultTrue();
    }
    
    @Transactional
    public ParallaxConfig savePreset(ConfigDTO dto) {
        ParallaxConfig config = new ParallaxConfig(dto.name(), dto.description());
        config.setHeroOrbSpeed(dto.heroOrbSpeed());
        config.setHeroOrbAmplitude(dto.heroOrbAmplitude());
        config.setHeroOrbMouseIntensity(dto.heroOrbMouseIntensity());
        config.setHeroCardSpeed(dto.heroCardSpeed());
        config.setHeroCardAmplitude(dto.heroCardAmplitude());
        config.setHeroCardMouseIntensity(dto.heroCardMouseIntensity());
        config.setDemoShapeSpeed(dto.demoShapeSpeed());
        config.setDemoShapeAmplitude(dto.demoShapeAmplitude());
        config.setDemoShapeMouseIntensity(dto.demoShapeMouseIntensity());
        config.setDefault(dto.isDefault() != null && dto.isDefault());
        return configRepository.save(config);
    }
    
    @Transactional
    public void deletePreset(String name) {
        configRepository.findByName(name).ifPresent(configRepository::delete);
    }
}
