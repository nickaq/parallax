package com.parallax.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "interactions")
public class Interaction {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String sessionId;
    private String eventType;
    private String section;
    private Double scrollDepth;
    private Integer duration;
    private LocalDateTime timestamp = LocalDateTime.now();
    
    public Interaction() {}
    
    public Interaction(String sessionId, String eventType, String section) {
        this.sessionId = sessionId;
        this.eventType = eventType;
        this.section = section;
        this.timestamp = LocalDateTime.now();
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getSessionId() { return sessionId; }
    public void setSessionId(String sessionId) { this.sessionId = sessionId; }
    public String getEventType() { return eventType; }
    public void setEventType(String eventType) { this.eventType = eventType; }
    public String getSection() { return section; }
    public void setSection(String section) { this.section = section; }
    public Double getScrollDepth() { return scrollDepth; }
    public void setScrollDepth(Double scrollDepth) { this.scrollDepth = scrollDepth; }
    public Integer getDuration() { return duration; }
    public void setDuration(Integer duration) { this.duration = duration; }
    public LocalDateTime getTimestamp() { return timestamp; }
    public void setTimestamp(LocalDateTime timestamp) { this.timestamp = timestamp; }
}
