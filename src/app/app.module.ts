import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule } from "@angular/forms";
import { CicloComponent } from './paginas/ciclo/ciclo.component';
import { DisciplinasComponent } from './paginas/disciplinas/disciplinas.component';
import { RotasComParametroComponent } from './paginas/rotas-com-parametro/rotas-com-parametro.component';
import { PassandoPropriedadesComponent } from './paginas/passando-propriedades/passando-propriedades.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    CicloComponent,
    DisciplinasComponent,
    RotasComParametroComponent,
    PassandoPropriedadesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
