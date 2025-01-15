import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventManagementCRUDComponent } from './event-management-crud.component';

describe('EventManagementCRUDComponent', () => {
  let component: EventManagementCRUDComponent;
  let fixture: ComponentFixture<EventManagementCRUDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventManagementCRUDComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventManagementCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
