package mx.edu.utez.encati.models;

public class RespuestaBean {

    Integer id_respuesta;
    String id_tiendita;
    String id_encuesta;
    String id_pregunta;
    Integer valor;

    public Integer getId_respuesta() {
        return id_respuesta;
    }

    public void setId_respuesta(Integer id_respuesta) {
        this.id_respuesta = id_respuesta;
    }

    public String getId_tiendita() {
        return id_tiendita;
    }

    public void setId_tiendita(String id_tiendita) {
        this.id_tiendita = id_tiendita;
    }

    public String getId_encuesta() {
        return id_encuesta;
    }

    public void setId_encuesta(String id_encuesta) {
        this.id_encuesta = id_encuesta;
    }

    public String getId_pregunta() {
        return id_pregunta;
    }

    public void setId_pregunta(String id_pregunta) {
        this.id_pregunta = id_pregunta;
    }

    public Integer getValor() {
        return valor;
    }

    public void setValor(Integer valor) {
        this.valor = valor;
    }

    public RespuestaBean() {
    }

    public RespuestaBean(String id_tiendita, String id_encuesta, String id_pregunta, Integer valor) {
        this.id_tiendita = id_tiendita;
        this.id_encuesta = id_encuesta;
        this.id_pregunta = id_pregunta;
        this.valor = valor;
    }
}
