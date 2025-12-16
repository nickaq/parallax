package com.parallax.repository;

import com.parallax.model.Interaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface InteractionRepository extends JpaRepository<Interaction, Long> {
    List<Interaction> findBySessionId(String sessionId);
    List<Interaction> findBySection(String section);
    List<Interaction> findByEventType(String eventType);
    
    @Query("SELECT AVG(i.scrollDepth) FROM Interaction i WHERE i.scrollDepth IS NOT NULL")
    Double getAverageScrollDepth();
    
    @Query("SELECT i.section, COUNT(i) FROM Interaction i GROUP BY i.section")
    List<Object[]> countBySection();
}
