package com.shopsmart.shopsmart.Controller;

import com.shopsmart.shopsmart.Model.Cupon;
import com.shopsmart.shopsmart.Service.CuponService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/cupones")
public class CuponController extends BaseController {

    @Autowired
    private CuponService service;

    @PostMapping
    public Cupon crear(@RequestBody Cupon cupon) {
        return service.crearCupon(cupon);
    }

    @GetMapping("/validar/{codigo}")
    public Cupon validar(@PathVariable String codigo) {
        return service.validarCupon(codigo);
    }
}