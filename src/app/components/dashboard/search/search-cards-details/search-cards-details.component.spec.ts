import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCardsDetailsComponent } from './search-cards-details.component';

describe('SearchCardsDetailsComponent', () => {
  let component: SearchCardsDetailsComponent;
  let fixture: ComponentFixture<SearchCardsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchCardsDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchCardsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
