import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { AuthorizationService } from './authorization.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let bannerHeading: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [RouterTestingModule.withRoutes([])],
      providers: [AuthorizationService]
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    bannerHeading = fixture.nativeElement.querySelector('h3 a');
  });

  it('should create the app', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title in a h1 tag', () => {
    fixture.detectChanges();
    expect(bannerHeading.textContent).toContain('Secure Cloud storage');
  });
});
