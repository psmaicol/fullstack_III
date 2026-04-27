package com.shopsmart.shopsmart.Model;

import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "transaccion_pago")
public class TransaccionPago {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String metodoPago;
    private String estadoPago;
    private String codigoAutorizacion;
    private Date fechaPago;
    private Integer pedidoId;

    // Constructores, Getters y Setters
    public TransaccionPago() {}
    
    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }
    public String getMetodoPago() { return metodoPago; }
    public void setMetodoPago(String metodoPago) { this.metodoPago = metodoPago; }
    public String getEstadoPago() { return estadoPago; }
    public void setEstadoPago(String estadoPago) { this.estadoPago = estadoPago; }
    public String getCodigoAutorizacion() { return codigoAutorizacion; }
    public void setCodigoAutorizacion(String codigoAutorizacion) { this.codigoAutorizacion = codigoAutorizacion; }
    public Date getFechaPago() { return fechaPago; }
    public void setFechaPago(Date fechaPago) { this.fechaPago = fechaPago; }
    public Integer getPedidoId() { return pedidoId; }
    public void setPedidoId(Integer pedidoId) { this.pedidoId = pedidoId; }
}