package com.shopsmart.shopsmart.Controller;

import com.shopsmart.shopsmart.Model.Resena;
import com.shopsmart.shopsmart.Service.ResenaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/resenas")
@CrossOrigin(origins = "http://localhost:4200")
public class ResenaController extends BaseController {

    @Autowired
    private ResenaService service;

    @PostMapping
    public Resena crear(@RequestBody Resena resena) {
        return service.guardarResena(resena);
    }

    @GetMapping("/producto/{productoId}")
    public List<Resena> listarPorProducto(@PathVariable Long productoId) {
        return service.obtenerResenasPorProducto(productoId);
    }
}