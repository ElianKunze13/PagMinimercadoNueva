import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntasfrecComponent } from './preguntasfrec.component';

describe('PreguntasfrecComponent', () => {
  let component: PreguntasfrecComponent;
  let fixture: ComponentFixture<PreguntasfrecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreguntasfrecComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreguntasfrecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
