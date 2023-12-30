package com.brickup.challenge.entity.model;

import jakarta.annotation.Nonnull;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import java.sql.Blob;
import org.antlr.v4.runtime.misc.NotNull;
import org.hibernate.annotations.NotFound;

/**
 * Task entity.
 */
@Entity
public class Task {

  public Task() {
  }

  public Task(Long id, String name, String description, String status, String image) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.status = status;
    this.image = image;
  }

  @Id
  // id autoincrement
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  private String name;
  private String description;
  private String status;
  private String image;

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public String getStatus() {
    return status;
  }

  public void setStatus(String status) {
    this.status = status;
  }

  public String getImage() {
    return image;
  }

  public void setImage(String image) {
    this.image = image;
  }
}
