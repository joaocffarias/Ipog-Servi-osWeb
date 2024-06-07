package com.br.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.br.exception.ResourceNotFoundException;
import com.br.model.filme;
import com.br.repository.FilmeRepository;

@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/cfilme/")
@RestController
public class FilmeController {
	
	@Autowired
	private FilmeRepository rep;

	//Função responsável por disponibilizar o método http GET no seguinte endereço --> http://localhost:8080/cfilme/filme
	@GetMapping("/filme")
	public List<filme> listar(){
		
		//Cria o objeto para a ordenação descendente a partir do campo ID
		Sort sortby = Sort.by(Sort.Direction.DESC, "id");
		
		return this.rep.findAll(sortby);
		
	}
	
	
	//Função responsável por disponibilizar o método http GET no seguinte endereço --> http://localhost:8080/cfilme/filme/{id}
	@GetMapping("/filme/{id}")
	public ResponseEntity<filme> consultar(@PathVariable Long id){
			
		filme filme = this.rep.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Filme não encontrado: " + id));
			
		return ResponseEntity.ok(filme);
			
	}
		
	
	//Função responsável por disponibilizar o método http DELETE no seguinte endereço --> http://localhost:8080/cfilme/filme/{id}
	@DeleteMapping("/filme/{id}")
	public ResponseEntity<Map<String, Boolean>> excluir(@PathVariable Long id){
		
		filme filme = this.rep.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Filme não encontrado: " + id));
		
		this.rep.delete(filme);
		
		Map<String, Boolean> retorno = new HashMap<>();
		retorno.put("Filme excluido", Boolean.TRUE);
		
		return ResponseEntity.ok(retorno);
	}
	
	//Função responsável por inserir novos registros de filmes - POST --> http://localhost:8080/cfilme/filme
	@PostMapping("/filme")
	public filme inserir(@RequestBody filme filme) {
		
		return this.rep.save(filme);
	}
	
	//Função responsável por disponibilizar o método http PUT no seguinte endereço --> http://localhost:8080/cfilme/filme/{id}
		@PutMapping("/filme/{id}")
		public ResponseEntity<filme> alterar(@PathVariable Long id, @RequestBody filme filme){
			
			filme filmeConsult = this.rep.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Filme não encontrado: " + id));
			
			filmeConsult.setId(filme.getId());
			filmeConsult.setAnolancamento(filme.getAnolancamento());
			filmeConsult.setDiretor(filme.getDiretor());
			filmeConsult.setDuracao(filme.getDuracao());
			filmeConsult.setGenero(filme.getGenero());
			filmeConsult.setTitulo(filme.getTitulo());
			
			filme filmeAtualizado = this.rep.save(filmeConsult);
			
			return ResponseEntity.ok(filmeAtualizado);
		}
	
}
