package com.parallax.repository;

import com.parallax.model.ContactMessage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ContactRepository extends JpaRepository<ContactMessage, Long> {
    List<ContactMessage> findByReadFalseOrderByCreatedAtDesc();
    List<ContactMessage> findAllByOrderByCreatedAtDesc();
    long countByReadFalse();
}
