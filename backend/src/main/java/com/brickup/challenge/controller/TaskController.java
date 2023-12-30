package com.brickup.challenge.controller;

import com.brickup.challenge.controller.dto.TaskDto;
import com.brickup.challenge.entity.model.Task;
import com.brickup.challenge.service.TaskServiceImp;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/task")
@CrossOrigin
public class TaskController {
  @Autowired
  private TaskServiceImp taskService;

  @PostMapping()
  public ResponseEntity<Task> createTask(@RequestBody Task task){
    Task newTask = taskService.addTask(task);
    return ResponseEntity.status(HttpStatus.CREATED).body(newTask);
  }
  @GetMapping()
  public List<Task> getAllTasks(){
    return taskService.getAllTasks();
  }

  @PutMapping({"/{id}"})
  public ResponseEntity<Task> updateTask(@PathVariable Long id, @RequestBody TaskDto taskDto) {
    Optional<Task> optionalTask = taskService.updateTask(id, taskDto.toTask());

    if(optionalTask.isEmpty()){
      ResponseEntity.status(HttpStatus.NOT_FOUND).body("Not found");
    }

    return ResponseEntity.status(HttpStatus.OK).body(optionalTask.orElse(null));
  }

  @DeleteMapping({"/{id}"})
  public ResponseEntity<Task> removeTaskById(@PathVariable Long id) {
    Optional<Task> optionalTask = taskService.removeTaskById(id);

    if(optionalTask.isEmpty()){
      ResponseEntity.status(HttpStatus.NOT_FOUND).body("Not found");
    }

    return ResponseEntity.status(HttpStatus.OK).body(optionalTask.orElse(null));
  }

}
