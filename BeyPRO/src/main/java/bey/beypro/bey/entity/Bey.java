package bey.beypro.bey.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "bey")
public class Bey {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String serie;
    private String tipo;
    private String modelo;
    private String img;

    @ManyToOne @JoinColumn(name = "idblade")
    private Blade blade;

    @ManyToOne @JoinColumn(name = "idratchet")
    private Ratchet ratchet;

    @ManyToOne @JoinColumn(name = "idbit")
    private Bit bit;

    public Integer getId() { return id; } public void setId(Integer id) { this.id = id; }
    public String getSerie() { return serie; } public void setSerie(String serie) { this.serie = serie; }
    public String getTipo() { return tipo; } public void setTipo(String tipo) { this.tipo = tipo; }
    public String getModelo() { return modelo; } public void setModelo(String modelo) { this.modelo = modelo; }
    public String getImg() { return img; } public void setImg(String img) { this.img = img; }
    public Blade getBlade() { return blade; } public void setBlade(Blade blade) { this.blade = blade; }
    public Ratchet getRatchet() { return ratchet; } public void setRatchet(Ratchet ratchet) { this.ratchet = ratchet; }
    public Bit getBit() { return bit; } public void setBit(Bit bit) { this.bit = bit; }
}