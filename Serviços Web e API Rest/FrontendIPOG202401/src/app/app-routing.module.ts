import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './view/inicio/inicio.component';
import { ListarFilmeComponent } from './view/listar-filme/listar-filme.component';
import { IncluirFilmeComponent } from './view/incluir-filme/incluir-filme.component';
import { AlterarFilmeComponent } from './view/alterar-filme/alterar-filme.component';
import { ConsultarFilmeComponent } from './view/consultar-filme/consultar-filme.component';

const routes: Routes = [

  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path: 'inicio', component: InicioComponent},
  {path: 'listar-filme', component: ListarFilmeComponent},
  {path: 'incluir-filme', component: IncluirFilmeComponent},
  {path: 'alterar-filme/:id', component: AlterarFilmeComponent},
  {path: 'consultar-filme/:id', component: ConsultarFilmeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
