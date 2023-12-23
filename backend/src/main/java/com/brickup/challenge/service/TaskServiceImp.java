package com.brickup.challenge.service;

import com.brickup.challenge.entity.model.Task;
import com.brickup.challenge.entity.repository.TaskRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TaskServiceImp implements TaskService {

  @Autowired
  private TaskRepository taskRepository;
  @Override
  public Task addTask(Task task) {
    return taskRepository.save(task);
  }

  @Override
  public List<Task> getAllTasks() {
    return taskRepository.findAll();
  }

  @Override
  public Optional<Task> updateTask(Long id, Task task) {
    Optional<Task> taskOptional = taskRepository.findById(id);

    if(taskOptional.isPresent()){
      Task taskFromDb = taskOptional.get();
      taskFromDb.setName(task.getName());
      taskFromDb.setDescription(task.getDescription());
      taskFromDb.setStatus(task.getStatus());

      Task updateTask = taskRepository.save(taskFromDb);
      return Optional.of(updateTask);
    }
    return taskOptional;
  }
}
