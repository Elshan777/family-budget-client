import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Entry } from 'src/app/entry';
import { EntryService } from 'src/app/entry.service';

@Component({
  selector: 'app-entry-new',
  templateUrl: './entry-new.component.html',
  styleUrls: ['./entry-new.component.css']
})
export class EntryNewComponent  {

  constructor(private entryService: EntryService, private router: Router) { }

  public onSave(entry: Entry): void {
    this.entryService.add(entry).subscribe(() => {
      this.router.navigate(['/entries']);
    });
  }

}
