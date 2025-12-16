package com.parallax.controller;

import com.parallax.dto.SubscribeDTO;
import com.parallax.model.Subscriber;
import com.parallax.service.NewsletterService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/newsletter")
public class NewsletterController {
    
    private final NewsletterService newsletterService;
    
    public NewsletterController(NewsletterService newsletterService) {
        this.newsletterService = newsletterService;
    }
    
    @PostMapping("/subscribe")
    public ResponseEntity<Map<String, Object>> subscribe(@Valid @RequestBody SubscribeDTO dto) {
        Subscriber subscriber = newsletterService.subscribe(dto);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(Map.of(
                        "success", true,
                        "message", "Successfully subscribed!",
                        "email", subscriber.getEmail()
                ));
    }
    
    @DeleteMapping("/unsubscribe")
    public ResponseEntity<Map<String, Object>> unsubscribe(@RequestParam String email) {
        boolean success = newsletterService.unsubscribe(email);
        if (success) {
            return ResponseEntity.ok(Map.of("success", true, "message", "Successfully unsubscribed"));
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND)
                .body(Map.of("success", false, "message", "Email not found"));
    }
    
    @GetMapping("/check")
    public ResponseEntity<Map<String, Object>> checkSubscription(@RequestParam String email) {
        boolean subscribed = newsletterService.isSubscribed(email);
        return ResponseEntity.ok(Map.of("subscribed", subscribed));
    }
}
