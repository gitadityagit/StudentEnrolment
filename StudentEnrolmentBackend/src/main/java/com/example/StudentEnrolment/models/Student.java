package com.example.StudentEnrolment.models;

import java.sql.Date;
import java.time.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
public class Student {
	@Id
	@GeneratedValue 
	private long id;
	private String name;
	private String email;
	private long phone;
	private int standard;
	private int marks;
	private Date date;

	public Student() {}
	
	public Student(long id, String name, String email, long phone, int standard, int marks, Date date) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.phone = phone;
		this.standard = standard;
		this.marks = marks;
		this.date = date;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public long getPhone() {
		return phone;
	}

	public void setPhone(long phone) {
		this.phone = phone;
	}

	public int getStandard() {
		return standard;
	}

	public void setStandard(int standard) {
		this.standard = standard;
	}

	public int getMarks() {
		return marks;
	}

	public void setMarks(int marks) {
		this.marks = marks;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}
}
