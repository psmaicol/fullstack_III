package com.shopsmart.microservicio_resenas;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
// Asegúrate de importar la clase de inicio correcta de tu carpeta src/main/java
import com.shopsmart.shopsmart.MicroservicioResenasApplication;

// 💡 SOLUCIÓN: Declaramos explícitamente la clase para el contexto local
@SpringBootTest(classes = MicroservicioResenasApplication.class)
class MicroservicioResenasApplicationTests {

    @Test
    void contextLoads() {
        // Verifica de forma local que el contexto de Spring enciende de manera óptima
    }
}