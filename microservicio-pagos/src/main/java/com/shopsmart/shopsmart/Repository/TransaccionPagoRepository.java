package com.shopsmart.shopsmart.Repository;

import com.shopsmart.shopsmart.Model.TransaccionPago;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TransaccionPagoRepository extends JpaRepository<TransaccionPago, Integer> {
}