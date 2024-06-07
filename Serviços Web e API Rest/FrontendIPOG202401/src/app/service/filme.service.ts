import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Filme} from '../model/filme';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  constructor(private httpCliente: HttpClient) { }

  private url = "http://localhost:8080/cfilme/filme"


  //Métodos locais (projeto da view, para consumir as APIs disponíveis do backend)
  listarFilmes(): Observable<Filme[]> {

    return this.httpCliente.get<Filme[]>(`${this.url}`);

  }

  //Chama o método GET, passando o parametro que é o ID do filme, para que ele seja consultado
  consultarFilme(id: number): Observable<Filme>{
    return this.httpCliente.get<Filme>(`${this.url}/${id}`);
  }

  //Chama o método DELETE, passando o parametro que é o ID do filme
  excluirFilme(id: number): Observable<Object>{
    return this.httpCliente.delete(`${this.url}/${id}`)
  }

  //Chama o método POST, passando o parametro o filme
  inserirFilme(filme: Filme): Observable<object>{
    return this.httpCliente.post(`${this.url}`, filme);
  }

  //Chama o método PUT, passando o parametro o ID do filme + o objeto Filme
  alterarFilme(id: number, filme: Filme): Observable<object>{
    return this.httpCliente.put(`${this.url}/${id}`, filme);
  }

}
