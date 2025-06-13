package bey.beypro.bey.entity;

import jakarta.persistence.*;

// ---------- Blade ----------
@Entity
@Table(name = "blade")
public class Blade {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String nome;
    private Double peso;
    private String cor;
    private String img;
    public Integer getId() { return id; } public void setId(Integer id) { this.id = id; }
    public String getNome() { return nome; } public void setNome(String nome) { this.nome = nome; }
    public Double getPeso() { return peso; } public void setPeso(Double peso) { this.peso = peso; }
    public String getCor() { return cor; } public void setCor(String cor) { this.cor = cor; }
    public String getImg() { return img; } public void setImg(String img) { this.img = img; }
}