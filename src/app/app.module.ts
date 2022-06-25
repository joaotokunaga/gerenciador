import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule } from "@angular/forms";
import { CicloComponent } from './paginas/ciclo/ciclo.component';
import { DisciplinasComponent } from './paginas/disciplinas/disciplinas.component';
import { FormularioDisciplinasComponent } from './paginas/formulario-disciplinas/formulario-disciplinas.component';
import { FormularioCicloComponent } from './paginas/formulario-ciclo/formulario-ciclo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlocosDetalhesComponent } from './paginas/blocos-detalhes/blocos-detalhes.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormularioEstudosComponent } from './paginas/formulario-estudos/formulario-estudos.component';
import { RodadaComponent } from './paginas/rodada/rodada.component';
import { MiscComponent } from './paginas/misc/misc.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		MenuComponent,
		CicloComponent,
		DisciplinasComponent,
		FormularioDisciplinasComponent,
		FormularioCicloComponent,
		BlocosDetalhesComponent,
		FormularioEstudosComponent,
		RodadaComponent,
		MiscComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		BrowserAnimationsModule,
		MatDialogModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
