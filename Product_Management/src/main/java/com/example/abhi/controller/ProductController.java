package com.example.abhi.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.abhi.ProductEntity;
import com.example.abhi.entity.Product;
import com.example.abhi.service.ProductService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ProductController {

	@Autowired
	ProductService service;
	
	@GetMapping("/getAll")
	ResponseEntity<?> getAll()
{
		return new ResponseEntity<>(service.getAll(),HttpStatus.OK);
}
	@PostMapping("/get")
	public ResponseEntity<?> get(@RequestBody ProductEntity pe)
	{
		
		return new ResponseEntity<>(service.getProduct(pe.getPid()),HttpStatus.OK);
		
	}
	@PostMapping("/save")
	public String save(@RequestBody Product p)
	{
		service.saveProduct(p);
		return "Success";
	}
	@PostMapping("/delete")
	public String delete(@RequestBody ProductEntity p)
	{
		service.deleteProduct(p.getPid());
		return "Success";
	}
}
