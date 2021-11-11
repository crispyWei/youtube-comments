import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsReplyListComponent } from './comments-reply-list.component';

describe('CommentsReplyListComponent', () => {
  let component: CommentsReplyListComponent;
  let fixture: ComponentFixture<CommentsReplyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentsReplyListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsReplyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
