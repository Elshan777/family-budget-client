import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { EntryDetailComponent } from './components/entry-detail/entry-detail.component';
import { EntryEditComponent } from './components/entry-edit/entry-edit.component';
import { EntryListComponent } from './components/entry-list/entry-list.component';
import { EntryNewComponent } from './components/entry-new/entry-new.component';
import { IndexComponent } from './components/index/index.component';

const routes: Routes = [
  {
    path: "",
    component: IndexComponent,
  },
  {
    path: "entries",
    component: EntryListComponent,
  },
  {
    path: "entries/new",
    component: EntryNewComponent,
  },
  {
    path: "entries/:id",
    component: EntryDetailComponent,
  },
  {
    path: "entries/:id/edit",
    component: EntryEditComponent,
  },
  {
    path: "about",
    component: AboutComponent,
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
