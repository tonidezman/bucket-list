import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBucketComponent } from './new-bucket.component';

describe('NewBucketComponent', () => {
  let component: NewBucketComponent;
  let fixture: ComponentFixture<NewBucketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBucketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBucketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
