import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightBulbComponent } from './light-bulb.component';

describe('LightBulbComponent', () => {
  let component: LightBulbComponent;
  let fixture: ComponentFixture<LightBulbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LightBulbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LightBulbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // check when it first runs that isOn is false
  it('light should initially be off', ()=>{
    expect(component.isOn).toBe(false)
  })

  it('toggle on/off after clicks',()=>{
    component.clicked()
    expect(component.isOn)
    .toBe(true)
    component.clicked()
    expect(component.isOn)
    .toBe(false)
  })

  it('message reads correctly (off to begin)', ()=>{
    expect(component.message)
    .toMatch(/is off/i) // regex
  })

});
