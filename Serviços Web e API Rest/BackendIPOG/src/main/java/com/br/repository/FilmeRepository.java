package com.br.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.br.model.filme;

public interface FilmeRepository extends JpaRepository<filme, Long>{

}
