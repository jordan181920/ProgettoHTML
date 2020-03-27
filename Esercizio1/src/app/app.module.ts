import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppComponentComponent } from './components/app-component/app-component.component';
import { MenuComponentComponent } from './components/menu-component/menu-component.component';
import { HomecomponentComponent } from './components/homecomponent/homecomponent.component';
import { NgComponent } from './components/ng/ng.component';
import { GameDetailComponentComponent } from './components/game-detail-component/game-detail-component.component';
import { EditGameComponentComponent } from './components/edit-game-component/edit-game-component.component';
import { GameListComponent } from './components/game-list/game-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AppComponentComponent,
    MenuComponentComponent,
    HomecomponentComponent,
    NgComponent,
    GameDetailComponentComponent,
    EditGameComponentComponent,
    GameListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
