import { Component, OnInit } from '@angular/core';
import { Filme } from '../../model/filme';
import { FilmeService } from '../../service/filme.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-alterar-filme',
  templateUrl: './alterar-filme.component.html',
  styleUrl: './alterar-filme.component.css'
})
export class AlterarFilmeComponent implements OnInit{

  id!: number;
  filme!: Filme;

  constructor(private filmeService : FilmeService, private router : Router, private aroute : ActivatedRoute){}

  ngOnInit(): void {

    this.id = this.aroute.snapshot.params['id'];
    this.filme = new Filme();

    this.filmeService.consultarFilme(this.id).subscribe(data => {
      this.filme = data;
    });
    
  }

  onSubmit(){
    this.filmeService.alterarFilme(this.id, this.filme).subscribe(data =>{
      console.log(data);
      this.voltar();
    })
  }

  voltar(){
    this.router.navigate(['listar-filme']);
  }

}
