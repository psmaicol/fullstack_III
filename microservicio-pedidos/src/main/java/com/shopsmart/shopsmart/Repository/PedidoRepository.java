package com.shopsmart.shopsmart.Repository;

import com.shopsmart.shopsmart.model.Pedido;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PedidoRepository extends JpaRepository<Pedido, Long> {
    
}       
