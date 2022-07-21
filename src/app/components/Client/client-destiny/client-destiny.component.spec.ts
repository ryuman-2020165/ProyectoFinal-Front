import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDestinyComponent } from './client-destiny.component';

describe('ClientDestinyComponent', () => {
  let component: ClientDestinyComponent;
  let fixture: ComponentFixture<ClientDestinyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientDestinyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientDestinyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
