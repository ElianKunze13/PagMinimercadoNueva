import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfonegocioComponent } from './infonegocio.component';

describe('InfonegocioComponent', () => {
  let component: InfonegocioComponent;
  let fixture: ComponentFixture<InfonegocioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfonegocioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfonegocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
