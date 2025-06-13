package bey.beypro.bey.controller;

import bey.beypro.bey.entity.Favorito;
import bey.beypro.bey.repository.FavoritoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/favoritos")
public class FavoritoController {

    @Autowired private FavoritoRepository favoritoRepository;

    @GetMapping
    public List<Favorito> listar() {
        return favoritoRepository.findAll();
    }

    @PostMapping
    public Favorito criar(@RequestBody Favorito favorito) {
        return favoritoRepository.save(favorito);
    }

    @DeleteMapping("/{id}")
    public void deletar(@PathVariable Integer id) {
        favoritoRepository.deleteById(id);
    }
} 