package mx.edu.utez.encati.models;

public class EncuestaBean {
    private String id_encuesta;
    private String nombre;

    public String getId_encuesta() {
        return id_encuesta;
    }

    public void setId_encuesta(String id_encuesta) {
        this.id_encuesta = id_encuesta;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public EncuestaBean(String id_encuesta, String nombre) {
        this.id_encuesta = id_encuesta;
        this.nombre = nombre;
    }

    public EncuestaBean() {
    }
}
