package com.shopsmart.shopsmart.Controller;

import com.shopsmart.shopsmart.Model.TransaccionPago;
import com.shopsmart.shopsmart.Repository.TransaccionPagoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.Date;
import java.util.UUID;

@RestController
@RequestMapping("/api/pagos")
@CrossOrigin("*")
public class TransaccionPagoController {

    @Autowired
    private TransaccionPagoRepository repository;

    @PostMapping("/procesar")
    public TransaccionPago procesarPago(@RequestBody TransaccionPago pago) {
        // Simulamos la aprobación automática para el proyecto [cite: 200]
        pago.setEstadoPago("Aprobado");
        pago.setCodigoAutorizacion("AUTH-" + UUID.randomUUID().toString().substring(0, 8).toUpperCase());
        pago.setFechaPago(new Date());
        return repository.save(pago);
    }
}