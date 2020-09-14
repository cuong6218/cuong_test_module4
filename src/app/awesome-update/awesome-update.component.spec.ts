import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwesomeUpdateComponent } from './awesome-update.component';

describe('AwesomeUpdateComponent', () => {
  let component: AwesomeUpdateComponent;
  let fixture: ComponentFixture<AwesomeUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwesomeUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwesomeUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
