package com.brickup.challenge.service;

import com.brickup.challenge.entity.model.Task;
import java.util.List;
import java.util.Optional;

public interface TaskService {
  public Task addTask(Task task);
  public List<Task> getAllTasks();
  public Optional<Task> updateTask(Long id, Task task);

  public Optional<Task> removeTaskById(Long id);
}
