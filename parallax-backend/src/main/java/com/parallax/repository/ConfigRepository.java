package com.parallax.repository;

import com.parallax.model.ParallaxConfig;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ConfigRepository extends JpaRepository<ParallaxConfig, Long> {
    Optional<ParallaxConfig> findByName(String name);
    Optional<ParallaxConfig> findByIsDefaultTrue();
    boolean existsByName(String name);
}
