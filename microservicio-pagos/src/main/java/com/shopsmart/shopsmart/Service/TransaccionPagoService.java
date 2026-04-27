package com.shopsmart.shopsmart.Service;

import com.shopsmart.shopsmart.Model.TransaccionPago;
import com.shopsmart.shopsmart.Repository.TransaccionPagoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.UUID;

@Service
public class TransaccionPagoService {

    @Autowired
    private TransaccionPagoRepository repository;

    public TransaccionPago procesarPago(TransaccionPago pago) {
        // Toda la lógica de negocio va aquí, no en el controlador
        pago.setEstadoPago("Aprobado");
        pago.setCodigoAutorizacion("AUTH-" + UUID.randomUUID().toString().substring(0, 8).toUpperCase());
        pago.setFechaPago(new Date());
        
        return repository.save(pago);
    }
}