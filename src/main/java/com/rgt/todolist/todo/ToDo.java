package com.rgt.todolist.todo;

import com.rgt.todolist.person.Person;
import jakarta.persistence.*;

@Entity
@Table(name = "todolists")
public class ToDo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String content;
    private int state;
    @ManyToOne
    @JoinColumn(name = "PERSON_ID")
    private Person person;

    public ToDo() {
    }

    public Long getId() {
        return id;
    }

    public String getContent() {
        return content;
    }

    public int getState() {
        return state;
    }

    public Long getPerson() {
        return person.getId();
    }

    public void setContent(String content) {
        this.content = content;
    }

    public void setState(int state) {
        this.state = state;
    }

    public void setPerson(Person person) {
        this.person = person;
    }

    public void setPerson(long l) {
        this.person.setId(l);
    }
}
