package com.shopsmart.shopsmart.Controller;

import com.shopsmart.shopsmart.Model.TransaccionPago;
import com.shopsmart.shopsmart.Service.TransaccionPagoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/pagos")
@CrossOrigin("*")
public class TransaccionPagoController {

    @Autowired
    private TransaccionPagoService service; // Ahora llama al servicio

    @PostMapping("/procesar")
    public TransaccionPago procesarPago(@RequestBody TransaccionPago pago) {
        // El controlador solo delega el trabajo al servicio
        return service.procesarPago(pago);
    }
}