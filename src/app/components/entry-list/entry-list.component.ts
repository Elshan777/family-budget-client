import { Component, OnInit } from '@angular/core';
import { Entry } from 'src/app/entry';
import { EntryService } from 'src/app/entry.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {

  public entries: Array<Entry> = [];

  constructor(private entryService: EntryService) { }

  ngOnInit(): void {
    this.entryService.getAll().subscribe((data) => {
      this.entries = data;
    })
  }

}
