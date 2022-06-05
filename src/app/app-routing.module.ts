import { PassandoPropriedadesComponent } from './paginas/passando-propriedades/passando-propriedades.component';
import { RotasComParametroComponent } from './paginas/rotas-com-parametro/rotas-com-parametro.component';
import { DisciplinasComponent } from './paginas/disciplinas/disciplinas.component';
import { CicloComponent } from './paginas/ciclo/ciclo.component';
import { FormularioComponent } from './paginas/formulario/formulario.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: '', component: CicloComponent },
	{ path: 'disciplinas', component: DisciplinasComponent },
	{ path: 'rotas-com-parametro', component: RotasComParametroComponent },
	{ path: 'passando-propriedades', component: PassandoPropriedadesComponent },
	{ path: 'form', component: FormularioComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
