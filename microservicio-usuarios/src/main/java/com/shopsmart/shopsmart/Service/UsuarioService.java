package com.shopsmart.shopsmart.Service;

import com.shopsmart.shopsmart.Model.Usuario;
import com.shopsmart.shopsmart.Repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public Usuario crearUsuario(Usuario usuario) {
        return usuarioRepository.save(usuario);
    }

    public List<Usuario> listarUsuarios() {
        return usuarioRepository.findAll();
    }

    public Usuario obtenerPorId(Long id) {
        return usuarioRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));
    }

    public void eliminarUsuario(Long id) {
        usuarioRepository.deleteById(id);
    }
     public Usuario login(String email, String password) {

        Usuario usuario =
            usuarioRepository.findByEmail(email);

        if (
            usuario != null &&
            usuario.getPassword().equals(password)
        ) {

            return usuario;

        }

        return null;

    }
    
}