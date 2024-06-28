import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { By } from '@angular/platform-browser';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a form with email and password controls', () => {
    expect(component.loginform.contains('email')).toBeTruthy();
    expect(component.loginform.contains('password')).toBeTruthy();
  });

  


  it('should make the email control required', () => {
    const emailControl = component.loginform.get('email')!;
    emailControl.setValue('');
    expect(emailControl.valid).toBeFalsy();
    expect(emailControl.errors!['required']).toBeTruthy();
  });

  it('should validate email minimum length', () => {
    const emailControl = component.loginform.get('email')!;
    emailControl.setValue('abc');
    expect(emailControl.valid).toBeFalsy();
    expect(emailControl.errors!['minlength']).toBeTruthy();
  });

  it('should make the password control required', () => {
    const passwordControl = component.loginform.get('password')!;
    passwordControl.setValue('');
    expect(passwordControl.valid).toBeFalsy();
    expect(passwordControl.errors!['required']).toBeTruthy();
  });

  it('should validate password minimum length', () => {
    const passwordControl = component.loginform.get('password')!;
    passwordControl.setValue('123');
    expect(passwordControl.valid).toBeFalsy();
    expect(passwordControl.errors!['minlength']).toBeTruthy();
  });

  // it('should disable the submit button if the form is invalid', () => {
  //   component.loginform.get('email')!.setValue('');
  //   component.loginform.get('password')!.setValue('');
  //   fixture.detectChanges();

  //   const submitButton = fixture.debugElement.query(By.css('input[type="submit"]')).nativeElement;
  //   expect(submitButton.disabled).toBeTruthy();
  // });

  // it('should enable the submit button if the form is valid', (done) => {
  //   component.loginform.get('email')!.setValue('test@example.com');
  //   component.loginform.get('password')!.setValue('password');
  //   fixture.detectChanges();

  //   fixture.whenStable().then(() => {
  //     fixture.detectChanges(); // Trigger change detection again after stable
  //     const submitButton = fixture.debugElement.query(By.css('input[type="submit"]')).nativeElement;
  //     expect(submitButton.disabled).toBeFalsy();
  //     done();
  //   });
  // });

  it('should log form value on submit', () => {
    spyOn(console, 'log');
    component.loginform.get('email')!.setValue('test@example.com');
    component.loginform.get('password')!.setValue('password');
    component.login();

    expect(console.log).toHaveBeenCalledWith({
      email: 'test@example.com',
      password: 'password'
    });
  });
});
