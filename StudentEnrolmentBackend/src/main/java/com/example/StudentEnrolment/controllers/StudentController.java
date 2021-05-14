package com.example.StudentEnrolment.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.StudentEnrolment.models.Student;
import com.example.StudentEnrolment.repos.StudentRepo;
import java.util.*;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class StudentController {
	
	@Autowired
	StudentRepo studentRepo;

	@RequestMapping("/")
	public String home() {
		return "welcome Student Enrolment web application";
	}
	
	@PostMapping("/students")
	public void addStudent(@RequestBody Student student) {
		studentRepo.save(student);
	}
	
	@GetMapping("/students")
	public List<Student> getAllStudents() {
		return studentRepo.findAll();
	}
	
	@GetMapping("/students/{id}")
	public Student getStudent(@PathVariable long id) {
		return studentRepo.findById(id).orElse(null);
	}
	
	@PutMapping("/students/{id}")
	public Student updateStudent(@PathVariable long id,@RequestBody Student student) {
		studentRepo.save(student);
		return student;
	}
	
	@DeleteMapping("/students/{id}")
	public Student deleteStudent(@PathVariable long id) {
		
		Student student=studentRepo.findById(id).orElse(null);
		studentRepo.deleteById(id);
		return student;
		
	}
}
