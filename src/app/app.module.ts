import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewComponent } from './components/new/new.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { ListComponent } from './components/list/list.component';
import { ReadComponent } from './components/read/read.component';
import { UpdateComponent } from './components/update/update.component';
import { DeleteComponent } from './components/delete/delete.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    ListComponent,
    ReadComponent,
    UpdateComponent,
    DeleteComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  entryComponents: [
    UpdateComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
