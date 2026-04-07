package com.expensetracker.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.expensetracker.model.Expense;
import com.expensetracker.repository.ExpenseRepository;

@RestController
@RequestMapping("/api/expenses")
@CrossOrigin
public class ExpenseController {
	
	@Autowired
	private ExpenseRepository repo;
	
	@PostMapping
	public Expense addExpense(@RequestBody Expense expense)
	{
		return repo.save(expense);
	}
	
	@GetMapping
	public List<Expense> getAlExpense()
	{
		return repo.findAll();
	}
	
	@GetMapping("/{id}")
	public Expense getExpenseById(@PathVariable Long id) {
	    return repo.findById(id).orElse(null);
	}
	
	@PutMapping("/{id}")
	public Expense updateExpense(@PathVariable Long id, @RequestBody Expense updatedExpense) {

	    Expense expense = repo.findById(id).orElse(null);

	    if (expense != null) {
	        expense.setTitle(updatedExpense.getTitle());
	        expense.setAmount(updatedExpense.getAmount());
	        expense.setCategory(updatedExpense.getCategory());
	        expense.setDate(updatedExpense.getDate());

	        return repo.save(expense);
	    }

	    return null;
	}
	
	@DeleteMapping("/{id}")
	public String deleteExpense(@PathVariable Long id) {
	    repo.deleteById(id);
	    return "Deleted successfully";
	}
}
