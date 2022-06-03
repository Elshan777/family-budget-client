import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { EntryFormComponent } from './components/entry-form/entry-form.component';
import { EntryEditComponent } from './components/entry-edit/entry-edit.component';
import { EntryDetailComponent } from './components/entry-detail/entry-detail.component';
import { IndexComponent } from './components/index/index.component';
import { EntryNewComponent } from './components/entry-new/entry-new.component';
import { EntryListComponent } from './components/entry-list/entry-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    EntryFormComponent,
    EntryEditComponent,
    EntryDetailComponent,
    IndexComponent,
    EntryNewComponent,
    EntryListComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
