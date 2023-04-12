package com.rgt.todolist.todo;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface ToDoRepository extends CrudRepository<ToDo, Long> {

    @Query("SELECT t " +
            "FROM ToDo t " +
            "WHERE t.person.id = :person_id")
    List<ToDo> findByPersonId(@Param("person_id") String person_id);

    @Modifying
    @Query("DELETE " +
            "FROM ToDo t " +
            "WHERE t.person.id = :person_id")
    @Transactional
    void deleteAllByPersonId(@Param("person_id") int person_id);
}
