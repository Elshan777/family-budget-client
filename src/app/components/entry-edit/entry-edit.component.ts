import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Entry } from 'src/app/entry';
import { EntryService } from 'src/app/entry.service';

@Component({
  selector: 'app-entry-edit',
  templateUrl: './entry-edit.component.html',
  styleUrls: ['./entry-edit.component.css']
})
export class EntryEditComponent implements OnInit {

  public entry: Entry;

  constructor(
    private entryService: EntryService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  public ngOnInit(): void {
    let id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.entryService.get(id).subscribe((data: Entry) => {
      this.entry = data;
    });
  }

  public onSave(entry: Entry): void {
    this.entryService.update(entry.id, entry).subscribe(() => {
      this.router.navigate(['/entries']);
    });
  }

}
