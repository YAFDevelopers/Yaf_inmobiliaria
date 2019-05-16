import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuInicoComponent } from './menu-inico.component';

describe('MenuInicoComponent', () => {
  let component: MenuInicoComponent;
  let fixture: ComponentFixture<MenuInicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuInicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuInicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
