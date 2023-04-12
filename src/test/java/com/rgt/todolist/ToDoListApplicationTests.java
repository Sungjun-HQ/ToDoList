package com.rgt.todolist;

import com.rgt.todolist.person.Person;
import com.rgt.todolist.person.PersonRepository;
import org.junit.After;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@RunWith(SpringRunner.class)
@SpringBootTest
class ToDoListApplicationTests {

    @Autowired
    PersonRepository personRepository;

    @After
    public void cleanup() {
        personRepository.deleteAll();
    }

    @Test
    void contextLoads() {
        personRepository.save(new Person("Tester"));

        List<Person> personList = personRepository.findAll();

        Person person = personList.get(0);
        assertEquals(person.getName(), "Tester");
    }

}
