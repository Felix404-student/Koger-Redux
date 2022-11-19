import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { SeatDescriptionsPage } from './seat-descriptions.page';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';


describe('SeatDescriptionPage', () => {
  let component: SeatDescriptionsPage;
  let fixture: ComponentFixture<SeatDescriptionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeatDescriptionsPage ],
      imports: [IonicModule.forRoot(), RouterTestingModule, ExploreContainerComponentModule]
    }).compileComponents();
  }));

  beforeEach(async(() =>{
    fixture = TestBed.createComponent(SeatDescriptionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  }));
});
