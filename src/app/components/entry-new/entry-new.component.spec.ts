import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryNewComponent } from './entry-new.component';

describe('EntryNewComponent', () => {
  let component: EntryNewComponent;
  let fixture: ComponentFixture<EntryNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntryNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
