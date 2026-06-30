package com.shopsmart.shopsmart.Controller;

import com.shopsmart.shopsmart.Model.Cupon;
import com.shopsmart.shopsmart.Service.CuponService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/cupones")
@CrossOrigin(origins = "http://localhost:4200") 
public class CuponController extends BaseController {

    @Autowired
    private CuponService service;

    // Endpoint de validación exacto: /cupones/validar/{codigo}
    @GetMapping("/validar/{codigo}")
    public ResponseEntity<?> validarCupon(@PathVariable String codigo) {

        Cupon cupon = service.buscarPorCodigo(codigo); 
        
        if (cupon != null) {
            return ResponseEntity.ok(cupon); 
        } else {
            return ResponseEntity.status(404).body("❌ El cupón ingresado no existe o venció.");
        }
    }
}