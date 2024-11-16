import { Component } from '@angular/core';
import { IconPipe } from '../../../common/pipes/icon.pipe';
import { SignInFormComponent } from '../../components/sign-in-form/sign-in-form.component';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [IconPipe, SignInFormComponent],
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {}
