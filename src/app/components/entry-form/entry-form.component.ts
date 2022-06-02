import { Component, EventEmitter, Input, OnInit, Output, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Entry } from 'src/app/entry';

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css']
})
export class EntryFormComponent implements OnInit, OnChanges {
  @Input()  entry: Entry;

  @Output() save: EventEmitter<Entry> = new EventEmitter<Entry>();

  public entryForm: FormGroup;
  issueForm: any;

  constructor(private formBuilder: FormBuilder) { }

  public ngOnInit(): void {
    this.entryForm = this.formBuilder.group({
      id: [ this.entry?.id ],
      title: [ this.entry?.title, [ Validators.required ]],
      amount: [this.entry?.amount, [Validators.min(0)] ],
      category: [ this.entry?.category, [ Validators.required]]
    });
  }

  public ngOnChanges(): void {
    this.entryForm = this.formBuilder.group({
      id: [ this.entry?.id ],
      title: [ this.entry?.title, [ Validators.required ]],
      amount: [this.entry?.amount, [Validators.min(0)] ],
      category: [ this.entry?.category, [ Validators.required]]
    });
  }
  public onSave(): void {
    this.save.emit(this.entryForm.value);
  }
  
  public isInvalidAndTouchedOrDirty(name: string): boolean {
    let res1 = !this.entryForm.get(name)?.valid;
    let res2 = this.entryForm.get(name)?.touched as boolean;
    let res3 = this.entryForm.get(name)?.dirty as boolean;
    
    return res1 && (res2 || res3);
  }
}
