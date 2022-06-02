import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Entry } from 'src/app/entry';
import { EntryService } from 'src/app/entry.service';

@Component({
  selector: 'app-entry-detail',
  templateUrl: './entry-detail.component.html',
  styleUrls: ['./entry-detail.component.css']
})
export class EntryDetailComponent implements OnInit {
  public entry: Entry = new Entry;

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

  public onDeleteClick() {
    this.entryService.delete(this.entry.id).subscribe(() => {
      this.router.navigate(['/entries']);
    });
  }

}
