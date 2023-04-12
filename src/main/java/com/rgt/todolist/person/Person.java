package com.rgt.todolist.person;

import com.rgt.todolist.todo.ToDo;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "persons")
public class Person {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "PERSON_ID")
    private Long id;
    private String name;

    @OneToMany(mappedBy = "person")
    private List<ToDo> toDoLists = new ArrayList<>();

    public Person() {
    }

    public Person(String name) {
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public List<ToDo> getToDoLists() {
        return toDoLists;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
