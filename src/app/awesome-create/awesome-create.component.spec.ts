import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwesomeCreateComponent } from './awesome-create.component';

describe('AwesomeCreateComponent', () => {
  let component: AwesomeCreateComponent;
  let fixture: ComponentFixture<AwesomeCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwesomeCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwesomeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
