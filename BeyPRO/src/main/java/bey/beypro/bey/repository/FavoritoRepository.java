package bey.beypro.bey.repository;

import bey.beypro.bey.entity.Favorito;
import bey.beypro.usuario.entity.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FavoritoRepository extends JpaRepository<Favorito, Integer> {
    
    // Buscar todos os favoritos de um usuário
    List<Favorito> findByUsuario(Usuario usuario);
    
    // Buscar por ID de usuário
    List<Favorito> findByUsuarioId(Integer idUsuario);
}
