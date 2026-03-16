package com.shopsmart.shopsmart.controller;

import com.shopsmart.shopsmart.model.Producto;
import com.shopsmart.shopsmart.repository.ProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/productos")
public class ProductoController {

    @Autowired
    private ProductoRepository productoRepository;

    // GET: Obtiene todos los productos desde Supabase
    @GetMapping
    public List<Producto> obtenerProductos() {
        return productoRepository.findAll();
    }

    // POST: Guarda un nuevo producto en Supabase
    @PostMapping
    public Producto crearProducto(@RequestBody Producto producto) {
        return productoRepository.save(producto);
    }
}