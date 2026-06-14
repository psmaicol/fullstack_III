package com.shopsmart.shopsmart;

import com.shopsmart.shopsmart.Model.Producto;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest
class ShopsmartApplicationTests {

    // PRUEBA 1: Verifica que la entidad Producto guarde bien los datos
    @Test
    void verificarCreacionDeProducto() {
        // 1. Preparamos los datos (Arrange)
        Producto producto = new Producto();
        
        // 2. Ejecutamos la acción (Act)
        producto.setNombre("Teclado Mecánico");
        producto.setPrecio(45000.0);
        producto.setStock(10);

        // 3. Verificamos que el resultado sea el esperado (Assert)
        assertNotNull(producto, "El producto no debe ser nulo");
        assertEquals("Teclado Mecánico", producto.getNombre(), "El nombre debe coincidir");
        assertEquals(10, producto.getStock(), "El stock debe ser 10");
    }

}