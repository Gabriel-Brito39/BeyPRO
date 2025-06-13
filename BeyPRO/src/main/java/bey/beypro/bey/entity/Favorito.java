package bey.beypro.bey.entity;
import bey.beypro.usuario.entity.Usuario;
import jakarta.persistence.*;

@Entity
@Table(name = "favoritos")
public class Favorito {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String tipo;

    @ManyToOne @JoinColumn(name = "idusuario")
    private Usuario usuario;

    @ManyToOne @JoinColumn(name = "idbey")
    private Bey bey;

    public Integer getId() { return id; } public void setId(Integer id) { this.id = id; }
    public String getTipo() { return tipo; } public void setTipo(String tipo) { this.tipo = tipo; }
    public Usuario getUsuario() { return usuario; } public void setUsuario(Usuario usuario) { this.usuario = usuario; }
    public Bey getBey() { return bey; } public void setBey(Bey bey) { this.bey = bey; }
}
