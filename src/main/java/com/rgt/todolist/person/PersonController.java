package com.rgt.todolist.person;

import com.rgt.todolist.todo.ToDoRepository;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class PersonController {

    private final PersonRepository personRepository;

    public PersonController(PersonRepository personRepository, ToDoRepository todolistRepository) {
        this.personRepository = personRepository;
    }

    @GetMapping("/")
    @Transactional(readOnly = true)
    public String showPerson(Model model) {
        model.addAttribute("personList", personRepository.findAll());
        return "main.html";
    }

    @GetMapping("/person")
    @Transactional(readOnly = true)
    public @ResponseBody List<Person> findAllPersons() {
        return personRepository.findAll();
    }
}
