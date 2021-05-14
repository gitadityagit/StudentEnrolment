package com.example.StudentEnrolment.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.StudentEnrolment.models.Student;

@Repository
public interface StudentRepo extends JpaRepository<Student,Long>{
	
}
