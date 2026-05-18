package com.shopsmart.shopsmart.Repository;


import com.shopsmart.shopsmart.Model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UsuarioRepository
    extends JpaRepository<Usuario, Long> {

    Usuario findByEmail(String email);

}