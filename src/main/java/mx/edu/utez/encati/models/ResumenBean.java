package mx.edu.utez.encati.models;

public class ResumenBean {
    String tiendita;
    Double porcentaje;

    public ResumenBean() {
    }

    public ResumenBean(String tiendita, Double porcentaje) {
        this.tiendita = tiendita;
        this.porcentaje = porcentaje;
    }

    public String getTiendita() {
        return tiendita;
    }

    public void setTiendita(String tiendita) {
        this.tiendita = tiendita;
    }

    public Double getPorcentaje() {
        return porcentaje;
    }

    public void setPorcentaje(Double porcentaje) {
        this.porcentaje = porcentaje;
    }
}
