import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  private fb = inject(FormBuilder);
  private http = inject(HttpClient);

  status: 'idle' | 'sending' | 'success' | 'error' = 'idle';

  form = this.fb.group({
    name:    ['', [Validators.required, Validators.minLength(2)]],
    email:   ['', [Validators.required, Validators.email]],
    phone:   [''],
    subject: ['', Validators.required],
    message: ['', [Validators.required, Validators.minLength(20)]]
  });

  isInvalid(field: string): boolean {
    const c = this.form.get(field);
    return !!(c?.invalid && c.touched);
  }

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.status = 'sending';
    const payload = {
      access_key: environment.web3FormsKey,
      subject: `V4 Entertainments enquiry from ${this.form.value.name}`,
      from_name: this.form.value.name,
      replyto: this.form.value.email,
      ...this.form.value
    };
    this.http.post('https://api.web3forms.com/submit', payload).subscribe({
      next: () => { this.status = 'success'; this.form.reset(); },
      error: () => { this.status = 'error'; }
    });
  }
}
