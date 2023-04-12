package com.rgt.todolist.person;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface PersonRepository extends CrudRepository<Person, Long> {

    Person findById(long id);

    long count();

    List<Person> findAll();
}
