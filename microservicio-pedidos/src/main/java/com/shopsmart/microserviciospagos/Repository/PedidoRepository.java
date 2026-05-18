package com.shopsmart.microserviciospagos.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.shopsmart.microserviciospagos.Model.Pedido;

@Repository
public interface PedidoRepository extends JpaRepository<Pedido, Long> {
    
}       
