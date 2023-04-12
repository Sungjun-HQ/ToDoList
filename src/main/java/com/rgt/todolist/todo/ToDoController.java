package com.rgt.todolist.todo;

import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ToDoController {
    private final ToDoRepository todolistRepository;

    public ToDoController(ToDoRepository todolistRepository) {
        this.todolistRepository = todolistRepository;
    }

    @GetMapping("/todolist")
    @Transactional(readOnly = true)
    public @ResponseBody Iterable<ToDo> findAllToDo() {
        return todolistRepository.findAll();
    }

    @GetMapping("/todolist/{personId}")
    @Transactional(readOnly = true)
    public List<ToDo> getToDoById(@PathVariable("personId") String personId) {
        return todolistRepository.findByPersonId(personId);
    }

    @DeleteMapping("/todolist/{id}")
    public void deleteToDoList(@PathVariable int id) {
//        todolistRepository.deleteById(id);
        todolistRepository.deleteAllByPersonId(id);
    }
}
