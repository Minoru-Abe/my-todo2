package com.example.my_todo2_back.service;

import com.example.my_todo2_back.model.Task;
import com.example.my_todo2_back.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {

    @Autowired
    private TaskRepository taskRepository;

    public List<Task> getTasksByStatus(String status) {
        return taskRepository.findByStatus(status);
    }

    public Task createTask(Task task) {
        task.setStatus("incomplete");
        return taskRepository.save(task);
    }

    public Task completeTask(Long taskId) {
        Task task = taskRepository.findById(taskId).orElseThrow();
        task.setStatus("complete");
        return taskRepository.save(task);
    }

    public void deleteTask(Long taskId) {
        taskRepository.deleteById(taskId);
    }

    public Task revertTask(Long taskId) {
        Task task = taskRepository.findById(taskId).orElseThrow();
        task.setStatus("incomplete");
        return taskRepository.save(task);
    }
}
