package com.shopsmart.shopsmart.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.shopsmart.shopsmart.Model.Producto;

@Repository
public interface ProductoRepository extends JpaRepository<Producto, Long> {
}