package com.shopsmart.shopsmart.Controller;

import com.shopsmart.shopsmart.Model.Cupon;
import com.shopsmart.shopsmart.Service.CuponService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/cupones")
public class CuponController {

    @Autowired
    private CuponService service;

    // Para que tú puedas crear cupones nuevos desde Postman/Angular
    @PostMapping
    public Cupon crear(@RequestBody Cupon cupon) {
        return service.crearCupon(cupon);
    }

    // Para que Angular valide el código que escribe el cliente en el carrito
    @GetMapping("/validar/{codigo}")
    public Cupon validar(@PathVariable String codigo) {
        return service.validarCupon(codigo);
    }
}