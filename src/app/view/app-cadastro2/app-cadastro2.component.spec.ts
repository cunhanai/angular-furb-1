import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCadastro2Component } from './app-cadastro2.component';

describe('AppCadastro2Component', () => {
  let component: AppCadastro2Component;
  let fixture: ComponentFixture<AppCadastro2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppCadastro2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppCadastro2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
