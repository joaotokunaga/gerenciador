import { DisciplinasComponent } from './paginas/disciplinas/disciplinas.component';
import { CicloComponent } from './paginas/ciclo/ciclo.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MiscComponent } from './paginas/misc/misc.component';

const routes: Routes = [
	{ path: '', component: CicloComponent },
	{ path: 'disciplinas', component: DisciplinasComponent },
	{ path: 'misc', component: MiscComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes), HttpClientModule],
	exports: [RouterModule]
})
export class AppRoutingModule { }
