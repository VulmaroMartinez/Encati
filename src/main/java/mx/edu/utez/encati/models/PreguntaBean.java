package mx.edu.utez.encati.models;

public class PreguntaBean {
    private Integer id_pregunta;
    private String pregunta;

    public Integer getId_pregunta() {
        return id_pregunta;
    }

    public void setId_pregunta(Integer id_pregunta) {
        this.id_pregunta = id_pregunta;
    }

    public String getPregunta() {
        return pregunta;
    }

    public void setPregunta(String pregunta) {
        this.pregunta = pregunta;
    }

    public PreguntaBean(Integer id_pregunta, String pregunta) {
        this.id_pregunta = id_pregunta;
        this.pregunta = pregunta;
    }

    public PreguntaBean (){

    }
}
