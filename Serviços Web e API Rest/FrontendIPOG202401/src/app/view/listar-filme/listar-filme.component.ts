import { Component, OnInit } from '@angular/core';
import { Filme } from '../../model/filme';
import { FilmeService } from '../../service/filme.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-filme',
  templateUrl: './listar-filme.component.html',
  styleUrl: './listar-filme.component.css'
})
export class ListarFilmeComponent implements OnInit {

  filmes! : Filme[]

  constructor(private filmeService: FilmeService, private router: Router){}

  ngOnInit(): void{

    this.listarFilme();

  }

  private listarFilme(){
    this.filmeService.listarFilmes().subscribe(data => {
      this.filmes = data;
    });
  }

  excluirFilme(id: number){

    if(confirm("Confirma a exclusão do filme?")){
      this.filmeService.excluirFilme(id).subscribe(data => {
        console.log(data);
        this.listarFilme();
      });
    }
    
  }

  consultarFilme(id: number){
    this.router.navigate(['consultar-filme', id]);
  }

  alterarFilme(id: number){
    this.router.navigate(['alterar-filme', id]);
  }

  

  inserirFilme(){
    this.router.navigate(['incluir-filme']);
  }

}
