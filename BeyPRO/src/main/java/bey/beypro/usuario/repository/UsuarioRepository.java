package bey.beypro.usuario.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import bey.beypro.usuario.entity.Usuario;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {
	Usuario findByUsername(String username);
}




