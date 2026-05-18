package com.shopsmart.shopsmart.Repository;

import com.shopsmart.shopsmart.Model.Resena;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ResenaRepository extends JpaRepository<Resena, Long> {
    // Función para buscar reseñas de un solo producto
    List<Resena> findByProductoId(Long productoId);
}