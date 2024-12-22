package com.example.my_todo2_back.controller;

import com.example.my_todo2_back.model.Task;
import com.example.my_todo2_back.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tasks")
public class TaskController {

    @Autowired
    private TaskService taskService;

    @GetMapping("/incomplete")
    public List<Task> getIncompleteTasks() {
        return taskService.getTasksByStatus("incomplete");
    }

    @GetMapping("/complete")
    public List<Task> getCompleteTasks() {
        return taskService.getTasksByStatus("complete");
    }

    @PostMapping
    public Task createTask(@RequestBody Task task) {
        return taskService.createTask(task);
    }

    @PutMapping("/complete/{id}")
    public Task completeTask(@PathVariable Long id) {
        return taskService.completeTask(id);
    }

    @PutMapping("/revert/{id}")
    public Task revertTask(@PathVariable Long id) {
        return taskService.revertTask(id);
    }

    @DeleteMapping("/{id}")
    public void deleteTask(@PathVariable Long id) {
        taskService.deleteTask(id);
    }
}
