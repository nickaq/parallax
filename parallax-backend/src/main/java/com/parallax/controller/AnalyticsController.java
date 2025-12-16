package com.parallax.controller;

import com.parallax.dto.InteractionDTO;
import com.parallax.dto.PageViewDTO;
import com.parallax.dto.StatsDTO;
import com.parallax.model.Interaction;
import com.parallax.model.PageView;
import com.parallax.service.AnalyticsService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/analytics")
public class AnalyticsController {
    
    private final AnalyticsService analyticsService;
    
    public AnalyticsController(AnalyticsService analyticsService) {
        this.analyticsService = analyticsService;
    }
    
    @PostMapping("/pageview")
    public ResponseEntity<Map<String, Object>> recordPageView(
            @RequestBody PageViewDTO dto,
            HttpServletRequest request) {
        PageView saved = analyticsService.recordPageView(dto, request);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(Map.of("success", true, "id", saved.getId()));
    }
    
    @PostMapping("/interaction")
    public ResponseEntity<Map<String, Object>> recordInteraction(@RequestBody InteractionDTO dto) {
        Interaction saved = analyticsService.recordInteraction(dto);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(Map.of("success", true, "id", saved.getId()));
    }
    
    @GetMapping("/stats")
    public ResponseEntity<StatsDTO> getStats() {
        return ResponseEntity.ok(analyticsService.getStats());
    }
}
