package com.example.my_todo2_back;

import com.example.my_todo2_back.model.Task;
import com.example.my_todo2_back.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MyTodo2BackApplication implements CommandLineRunner {

	@Autowired
	private TaskRepository taskRepository;

	public static void main(String[] args) {
		SpringApplication.run(MyTodo2BackApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		Task task = new Task("Task 1", "John", "incomplete");
		taskRepository.save(task);
		System.out.println("Task saved: " + task);
	}
}
