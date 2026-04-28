package com.shopsmart.shopsmart.Controller;

import com.shopsmart.shopsmart.Model.TransaccionPago;
import com.shopsmart.shopsmart.Repository.TransaccionPagoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/pagos")
public class TransaccionPagoController {

    @Autowired
    private TransaccionPagoRepository repository;

    // 🔹 Obtener todas las transacciones
    @GetMapping
    public List<TransaccionPago> obtenerTodas() {
        return repository.findAll();
    }

    // 🔹 Obtener por ID
    @GetMapping("/{id}")
    public Optional<TransaccionPago> obtenerPorId(@PathVariable Integer id) {
        return repository.findById(id);
    }

    // 🔹 Crear nueva transacción
    @PostMapping
    public TransaccionPago crear(@RequestBody TransaccionPago transaccion) {
        return repository.save(transaccion);
    }

    // 🔹 Actualizar transacción
    @PutMapping("/{id}")
    public TransaccionPago actualizar(@PathVariable Integer id, @RequestBody TransaccionPago nueva) {
        return repository.findById(id).map(transaccion -> {
            transaccion.setMetodoPago(nueva.getMetodoPago());
            transaccion.setEstadoPago(nueva.getEstadoPago());
            transaccion.setCodigoAutorizacion(nueva.getCodigoAutorizacion());
            transaccion.setFechaPago(nueva.getFechaPago());
            transaccion.setPedidoId(nueva.getPedidoId());
            return repository.save(transaccion);
        }).orElseThrow(() -> new RuntimeException("Transacción no encontrada"));
    }

    // 🔹 Eliminar transacción
    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable Integer id) {
        repository.deleteById(id);
    }
}