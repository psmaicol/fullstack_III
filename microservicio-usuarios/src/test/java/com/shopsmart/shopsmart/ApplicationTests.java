package com.shopsmart.shopsmart;

import com.shopsmart.shopsmart.Model.Usuario;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest
class ApplicationTests {

    // PRUEBA 2: Verifica que la entidad Usuario asigne bien el rol
    @Test
    void verificarAsignacionDeRolUsuario() {
        // 1. Preparamos los datos (Arrange)
        Usuario usuario = new Usuario();
        
        // 2. Ejecutamos la acción (Act)
        usuario.setNombre("Bryan");
        usuario.setEmail("bryan@correo.com");
        usuario.setRol("CLIENTE");

        // 3. Verificamos que el resultado sea el esperado (Assert)
        assertNotNull(usuario, "El usuario no debe ser nulo");
        assertEquals("bryan@correo.com", usuario.getEmail(), "El correo debe coincidir");
        assertEquals("CLIENTE", usuario.getRol(), "El rol asignado debe ser CLIENTE");
    }

}