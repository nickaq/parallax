package com.parallax.service;

import com.parallax.dto.ConfigDTO;
import com.parallax.model.ParallaxConfig;
import com.parallax.repository.ConfigRepository;
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
class ConfigServiceTest {

    @Mock
    private ConfigRepository configRepository;

    @InjectMocks
    private ConfigService configService;

    @Test
    void initDefaultPresets_ifEmpty_ShouldSaveDefaults() {
        when(configRepository.count()).thenReturn(0L);

        configService.initDefaultPresets();

        // Expect 3 default configs to be saved
        verify(configRepository, times(3)).save(any(ParallaxConfig.class));
    }

    @Test
    void getPresetByName_ShouldReturnConfig() {
        ParallaxConfig config = new ParallaxConfig("test", "Test Config");
        when(configRepository.findByName("test")).thenReturn(Optional.of(config));

        Optional<ParallaxConfig> result = configService.getPresetByName("test");

        assertTrue(result.isPresent());
        assertEquals("test", result.get().getName());
    }

    @Test
    void savePreset_ShouldSaveConfig() {
        ConfigDTO dto = new ConfigDTO(
            "custom", "Custom Config",
            0.1, 100, 0.01,
            0.2, 200, 0.02,
            0.3, 300, 0.03,
            true
        );

        ParallaxConfig savedConfig = new ParallaxConfig("custom", "Custom Config");
        when(configRepository.save(any(ParallaxConfig.class))).thenReturn(savedConfig);

        ParallaxConfig result = configService.savePreset(dto);

        assertNotNull(result);
        assertEquals("custom", result.getName());
        verify(configRepository).save(any(ParallaxConfig.class));
    }
}
