package com.shopsmart.shopsmart.Repository;

import com.shopsmart.shopsmart.Model.Cupon;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CuponRepository extends JpaRepository<Cupon, Long> {
    // Función especial para buscar el cupón por su texto (Ej: "VERANO50")
    Optional<Cupon> findByCodigo(String codigo);
}
