package com.shopsmart.shopsmart;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
// 💡 IMPORTANTE: Importamos la clase principal usando el paquete real de este microservicio
import com.shopsmart.microserviciospagos.ShopsmartApplication;

@SpringBootTest(classes = ShopsmartApplication.class)
class ShopsmartApplicationTests {

    @Test
    void contextLoads() {
        // Valida que el contexto local encienda de manera óptima sin errores de configuración
    }
}