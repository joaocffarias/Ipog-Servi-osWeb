import { Component, OnInit } from '@angular/core';
import { Filme } from '../../model/filme';
import { FilmeService } from '../../service/filme.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-incluir-filme',
  templateUrl: './incluir-filme.component.html',
  styleUrl: './incluir-filme.component.css'
})
export class IncluirFilmeComponent implements OnInit{

  filme: Filme = new Filme();

  constructor(private filmeService: FilmeService, private router: Router){}

  ngOnInit(): void {
  }

  onSubmit(){
    this.inserirFilme();
  }

  inserirFilme() {
    this.filme.id = 0;
    this.filmeService.inserirFilme(this.filme).subscribe(data => {
      console.log(data);
      this.voltar();
    });

  }

  voltar() {
    this.router.navigate(['listar-filme']);
  }

}
