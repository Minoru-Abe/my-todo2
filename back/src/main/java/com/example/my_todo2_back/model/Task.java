package com.example.my_todo2_back.model;

import jakarta.persistence.*;

@Entity
@Table(name = "tasks")
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String assignee;
    private String status;

    public void setStatus(String status) {
        this.status = status;
    }

    // Getters and setters
}
