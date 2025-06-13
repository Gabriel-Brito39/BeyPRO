package bey.beypro.bey.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "bit")
public class Bit {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String nome;
    private String tipo;
    private String cor;
    private Double peso;
    private String img;
    public Integer getId() { return id; } public void setId(Integer id) { this.id = id; }
    public String getNome() { return nome; } public void setNome(String nome) { this.nome = nome; }
    public String getTipo() { return tipo; } public void setTipo(String tipo) { this.tipo = tipo; }
    public String getCor() { return cor; } public void setCor(String cor) { this.cor = cor; }
    public Double getPeso() { return peso; } public void setPeso(Double peso) { this.peso = peso; }
    public String getImg() { return img; } public void setImg(String img) { this.img = img; }
}