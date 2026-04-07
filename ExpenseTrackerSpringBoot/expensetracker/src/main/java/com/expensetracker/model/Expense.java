package com.expensetracker.model;

import java.time.LocalDate;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "expenses")

public class Expense {

		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		
		private Long id;
		private String title;
		private Double amount;
		@Enumerated(EnumType.STRING)
	    private Category category;
		private LocalDate date;
		
		public Expense() {
		}
		
		public Expense(Long id, String title, Double amount, Category category, LocalDate date) {
			
			this.id = id;
			this.title = title;
			this.amount = amount;
			this.category = category;
			this.date = date;
		}
		
		
		public long getId() {
			return id;
		}
		public void setId(Long id) {
			this.id = id;
		}
		public String getTitle() {
			return title;
		}
		public void setTitle(String title) {
			this.title = title;
		}
		public double getAmount() {
			return amount;
		}
		public void setAmount(Double amount) {
			this.amount = amount;
		}
		public Category getCategory() {
			return category;
		}
		public void setCategory(Category category) {
			this.category = category;
		}
		public LocalDate getDate() {
			return date;
		}
		public void setDate(LocalDate date) {
			this.date = date;
		}
		

}
