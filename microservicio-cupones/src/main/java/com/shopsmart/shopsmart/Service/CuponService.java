package com.shopsmart.shopsmart.Service;

import com.shopsmart.shopsmart.Model.Cupon;
import com.shopsmart.shopsmart.Repository.CuponRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class CuponService {

    @Autowired
    private CuponRepository repository;

    public Cupon crearCupon(Cupon cupon) {
        return repository.save(cupon);
    }

    public Cupon validarCupon(String codigo) {
        // Buscamos el cupón. Si no existe o expiró, arrojamos un error.
        return repository.findByCodigo(codigo.toUpperCase()).map(cupon -> {
            if (cupon.getActivo() && cupon.getFechaExpiracion().after(new Date())) {
                return cupon; // El cupón es válido
            }
            throw new RuntimeException("Cupón inválido o expirado");
        }).orElseThrow(() -> new RuntimeException("Cupón no encontrado"));
    }
}