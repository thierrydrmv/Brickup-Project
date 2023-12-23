package com.brickup.challenge.controller.dto;

import com.brickup.challenge.entity.model.Task;
import java.sql.Blob;

public record TaskDto(Long id, String name, String description, String status, Blob image) {
  public Task toTask(){
    return new Task(id, name, description, status, image);
  }
}
