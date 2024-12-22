package com.example.my_todo2_back;

import com.example.my_todo2_back.model.Task;
import com.example.my_todo2_back.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MyTodo2BackApplication {


	public static void main(String[] args) {

		SpringApplication.run(MyTodo2BackApplication.class, args);

		Task task = new Task(1L, "Task 1", "John", "incomplete");
		System.out.println(task);

		TaskService taskService = new TaskService();
		taskService.createTask(task);




	}

}
