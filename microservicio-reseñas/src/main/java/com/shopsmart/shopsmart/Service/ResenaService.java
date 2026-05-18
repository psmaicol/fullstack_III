package com.shopsmart.shopsmart.Service;

import com.shopsmart.shopsmart.Model.Resena;
import com.shopsmart.shopsmart.Repository.ResenaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class ResenaService {

    @Autowired
    private ResenaRepository repository;

    public Resena guardarResena(Resena resena) {
        // Agrega la fecha actual automáticamente
        resena.setFecha(new Date());
        return repository.save(resena);
    }

    public List<Resena> obtenerResenasPorProducto(Long productoId) {
        return repository.findByProductoId(productoId);
    }
}
