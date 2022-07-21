import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientLodgeComponent } from './client-lodge.component';

describe('ClientLodgeComponent', () => {
  let component: ClientLodgeComponent;
  let fixture: ComponentFixture<ClientLodgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientLodgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientLodgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
