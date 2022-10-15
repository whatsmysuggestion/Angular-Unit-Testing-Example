import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

 
  it(`should have as title 'testingExample'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
	
	// expect(app.display()).not.toBeGreaterThan(10);
	//expect(app.b).not.toBeTruthy();
	//expect(app.title).not.toBeDefined();
   expect(app.title).not.toEqual('hello welcome');
  });

	it(`should have as a 'testingExample'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
	
    expect(app.a).toEqual(10);
  });
  
  
 
});
