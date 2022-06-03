import { Component, OnInit } from '@angular/core';
import { Entry } from 'src/app/entry';
import { EntryService } from 'src/app/entry.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  public entries: Array<Entry> = [];

  public income: number = 0;
  public outcome: number = 0;
  constructor(private entryService: EntryService) { }

  ngOnInit(): void {
    this.entryService.getAll().subscribe((data) => {
      this.entries = data;
      console.log(data);
      data.filter((entry) => {
        this.income +=  (entry.amount>0 ? entry.amount : 0);
        this.outcome += (entry.amount<0 ? entry.amount : 0);
      })
    })
    
  }

}
