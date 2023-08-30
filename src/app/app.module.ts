import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { FooterComponent } from './footer/footer.component';
import { PlayComponent } from './play/play.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { SafeUrlPipe } from './safe-url.pipe';
import { EpisodesComponent } from './episodes/episodes.component';
import { DetailsComponent } from './details/details.component';
import { LineComponent } from './line/line.component';
import { CarouselComponent } from './carousel/carousel.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'list', component: ListComponent },
  { path: 'list/play/:id', component: PlayComponent },
  { path: 'play/:id', component: PlayComponent },
  { path: 'episodes/:id', component: EpisodesComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ButtonComponent,
    CardComponent,
    FooterComponent,
    PlayComponent,
    HomeComponent,
    ListComponent,
    SafeUrlPipe,
    EpisodesComponent,
    DetailsComponent,
    LineComponent,
    CarouselComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
