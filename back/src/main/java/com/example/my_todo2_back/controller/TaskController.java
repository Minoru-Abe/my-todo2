package com.example.my_todo2_back.controller;

import com.example.my_todo2_back.model.Task;
import com.example.my_todo2_back.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping
public class TaskController {

    @Autowired
    private TaskService taskService;

    @GetMapping("/tasks/incomplete")
    public List<Task> getIncompleteTasks() {
        return taskService.getTasksByStatus("incomplete");
    }

    @GetMapping("/tasks/complete")
    public List<Task> getCompleteTasks() {
        return taskService.getTasksByStatus("complete");
    }

    @PostMapping("/tasks")
    public Task createTask(@RequestBody Task task) {
        System.out.println(task);
        return taskService.createTask(task);
    }

    @PutMapping("/tasks/complete/{id}")
    public Task completeTask(@PathVariable Long id) {
        return taskService.completeTask(id);
    }

    @PutMapping("/tasks/revert/{id}")
    public Task revertTask(@PathVariable Long id) {
        return taskService.revertTask(id);
    }

    @DeleteMapping("/tasks/{id}")
    public void deleteTask(@PathVariable Long id) {
        taskService.deleteTask(id);
    }
}
