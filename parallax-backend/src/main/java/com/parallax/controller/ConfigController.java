package com.parallax.controller;

import com.parallax.dto.ConfigDTO;
import com.parallax.model.ParallaxConfig;
import com.parallax.service.ConfigService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/config")
public class ConfigController {
    
    private final ConfigService configService;
    
    public ConfigController(ConfigService configService) {
        this.configService = configService;
    }
    
    @GetMapping("/presets")
    public ResponseEntity<List<ParallaxConfig>> getAllPresets() {
        return ResponseEntity.ok(configService.getAllPresets());
    }
    
    @GetMapping("/presets/default")
    public ResponseEntity<ParallaxConfig> getDefaultPreset() {
        return configService.getDefaultPreset()
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
    
    @GetMapping("/presets/{name}")
    public ResponseEntity<ParallaxConfig> getPresetByName(@PathVariable String name) {
        return configService.getPresetByName(name)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
    
    @PostMapping("/presets")
    public ResponseEntity<ParallaxConfig> createPreset(@RequestBody ConfigDTO dto) {
        ParallaxConfig saved = configService.savePreset(dto);
        return ResponseEntity.status(HttpStatus.CREATED).body(saved);
    }
    
    @DeleteMapping("/presets/{name}")
    public ResponseEntity<Map<String, Object>> deletePreset(@PathVariable String name) {
        configService.deletePreset(name);
        return ResponseEntity.ok(Map.of("success", true, "deleted", name));
    }
}
