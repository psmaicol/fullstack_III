package com.shopsmart.microserviciospagos.Controller;

import com.shopsmart.microserviciospagos.Model.Pedido;
import com.shopsmart.microserviciospagos.Repository.PedidoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*; 
import java.util.List;

@RestController 
@RequestMapping("/pedidos")
@CrossOrigin(origins = "http://localhost:4200")
public class PedidoController extends BaseController {

    @Autowired
    private PedidoRepository pedidoRepository;

    // GET: Listar todos los pedidos
    @GetMapping
    public List<Pedido> obtenerPedidos() {
        return pedidoRepository.findAll();
    }

    // POST: Crear un nuevo pedido
    @PostMapping
    public Pedido crearPedido(@RequestBody Pedido pedido) {
        // Si no mandan estado, lo ponemos como PENDIENTE por defecto
        if (pedido.getEstado() == null || pedido.getEstado().isEmpty()) {
            pedido.setEstado("PENDIENTE");
        }
        return pedidoRepository.save(pedido);
    }
}