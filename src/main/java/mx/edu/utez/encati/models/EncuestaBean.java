package mx.edu.utez.encati.models;

public class EncuestaBean {
    private Integer id_encuesta;
    private String nombre;

    public Integer getId_encuesta() {
        return id_encuesta;
    }

    public void setId_encuesta(Integer id_encuesta) {
        this.id_encuesta = id_encuesta;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public EncuestaBean(Integer id_encuesta, String nombre) {
        this.id_encuesta = id_encuesta;
        this.nombre = nombre;
    }

    public EncuestaBean() {
    }
}
