import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MisDatosComponent } from './mis-datos.component';

describe('MisDatosComponent', () => {
  let component: MisDatosComponent;
  let fixture: ComponentFixture<MisDatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisDatosComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MisDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
