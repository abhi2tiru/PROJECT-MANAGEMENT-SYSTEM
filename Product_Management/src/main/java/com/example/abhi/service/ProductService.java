package com.example.abhi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.abhi.entity.Product;
import com.example.abhi.repo.ProductRepo;

@Service
public class ProductService {

	@Autowired
	private ProductRepo repo;
	
	public List<Product> getAll()
	{
		return repo.findAll();	
	}
	
	public void saveProduct(Product p)
	{
		 repo.save(p);
		
	}
	public void deleteProduct(long pid)
	{
		repo.deleteById(pid);
	}

	public Product editProduct(Product p)
	{
		Product old=repo.findById(p.getPid()).get();
		old.setPcost(p.getPcost());
		old.setPname(p.getPname());
		old.setDescription(p.getDescription());
		old.setStatus(p.getStatus());
		 return repo.save(old);
	}

	public Product getProduct(long pid) {
		// TODO Auto-generated method stub
		return repo.findById(pid).get();
	}
	
}
