import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateauctionComponent } from './createauction.component';

describe('CreateauctionComponent', () => {
  let component: CreateauctionComponent;
  let fixture: ComponentFixture<CreateauctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateauctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateauctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
