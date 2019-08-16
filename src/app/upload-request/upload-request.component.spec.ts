import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadRequestComponent } from './upload-request.component';

describe('UploadRequestComponent', () => {
  let component: UploadRequestComponent;
  let fixture: ComponentFixture<UploadRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
