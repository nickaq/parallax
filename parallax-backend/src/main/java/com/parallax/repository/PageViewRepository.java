package com.parallax.repository;

import com.parallax.model.PageView;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface PageViewRepository extends JpaRepository<PageView, Long> {
    List<PageView> findByPage(String page);
    
    long countByTimestampAfter(LocalDateTime timestamp);
    
    @Query("SELECT COUNT(DISTINCT p.sessionId) FROM PageView p")
    long countUniqueSessions();
    
    @Query("SELECT COUNT(DISTINCT p.sessionId) FROM PageView p WHERE p.timestamp > :since")
    long countUniqueSessionsSince(LocalDateTime since);
}
