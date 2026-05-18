package com.shopsmart.shopsmart.Controller;
import com.shopsmart.shopsmart.Repository.ProductoRepository;
import com.shopsmart.shopsmart.model.Producto;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/productos")
@CrossOrigin(origins = "http://localhost:4200")
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
    @DeleteMapping("/{id}")
    public void eliminarProducto(@PathVariable Long id) {
        productoRepository.deleteById(id);
    }
}