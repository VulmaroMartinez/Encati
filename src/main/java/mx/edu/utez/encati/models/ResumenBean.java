package mx.edu.utez.encati.models;

public class ResumenBean {
    String tiendita;
    Double porcentaje;
    Double porcentajeTotal;

    public ResumenBean() {
    }

    public ResumenBean(String tiendita, Double porcentaje, Double porcentajeTotal) {
        this.tiendita = tiendita;
        this.porcentaje = porcentaje;
        this.porcentajeTotal = porcentajeTotal;
    }

    public ResumenBean(double porcentajeEnTotal) {
        this.porcentajeTotal = porcentajeEnTotal;
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

    public Double getPorcentajeTotal() {
        return porcentajeTotal;
    }

    public void setPorcentajeTotal(Double porcentajeTotal) {
        this.porcentajeTotal = porcentajeTotal;
    }

}
