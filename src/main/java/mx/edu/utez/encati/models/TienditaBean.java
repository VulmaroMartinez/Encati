package mx.edu.utez.encati.models;

public class TienditaBean {
    private Integer id_tiendita;
    private String nombre;

    public Integer getId_tiendita() {
        return id_tiendita;
    }

    public void setId_tiendita(Integer id_tiendita) {
        this.id_tiendita = id_tiendita;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public TienditaBean(Integer id_tiendita, String nombre) {
        this.id_tiendita = id_tiendita;
        this.nombre = nombre;
    }

    public TienditaBean (){

    }
}
