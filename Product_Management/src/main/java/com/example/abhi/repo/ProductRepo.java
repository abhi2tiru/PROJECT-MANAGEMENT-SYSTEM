package com.example.abhi.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.abhi.entity.Product;

public interface ProductRepo extends JpaRepository<Product, Long> {



}
