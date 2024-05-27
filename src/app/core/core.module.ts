import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { httpInterceptorsProviders } from './interceptors';
import { HeaderComponent } from './components/header/header.component';
import * as fr from '@angular/common/locales/fr';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderComponent
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    httpInterceptorsProviders
  ],
  exports: [
    HeaderComponent
  ]
})
export class CoreModule { 

  constructor(){

    registerLocaleData(fr.default);
  }
}
