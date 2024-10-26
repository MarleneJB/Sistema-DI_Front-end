import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitadoDashboardComponent } from './invitado-dashboard.component';

describe('InvitadoDashboardComponent', () => {
  let component: InvitadoDashboardComponent;
  let fixture: ComponentFixture<InvitadoDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvitadoDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvitadoDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
