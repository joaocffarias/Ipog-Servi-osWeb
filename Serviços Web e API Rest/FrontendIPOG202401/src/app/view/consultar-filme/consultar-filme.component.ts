import { Component, OnInit } from '@angular/core';
import { Filme } from '../../model/filme';
import { FilmeService } from '../../service/filme.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-consultar-filme',
  templateUrl: './consultar-filme.component.html',
  styleUrl: './consultar-filme.component.css'
})
export class ConsultarFilmeComponent implements OnInit{

  filme!: Filme;
  id!: number;

  constructor(private filmeService: FilmeService, private router: Router, private aroute: ActivatedRoute){}

  ngOnInit(): void {
    
    this.id = this.aroute.snapshot.params['id'];

    this.filme = new Filme();

    this.filmeService.consultarFilme(this.id).subscribe(data => {
      this.filme = data;
    });
    
  }

  voltar(){
    this.router.navigate(['listar-filme']);
  }

  

}
