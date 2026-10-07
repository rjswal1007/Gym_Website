import { Component, computed, effect, inject, input, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { Reveal } from '../shared/reveal';
import { CONTACT, PLANS } from '../shared/data';

type FieldName = 'name' | 'gender' | 'email' | 'phone' | 'address' | 'pincode' | 'plan' | 'agree';

@Component({
  selector: 'app-join',
  imports: [ReactiveFormsModule, Reveal],
  templateUrl: './join.html',
  styleUrl: './join.css',
})
export class Join {
  /** Pre-selects a plan from `?plan=` (component input binding is wired via the router). */
  readonly plan = input<string>();

  private readonly fb = inject(FormBuilder);
  protected readonly plans = PLANS;
  protected readonly contact = CONTACT;
  protected readonly submitted = signal(false);

  protected readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    gender: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern(/^(\+91)?[6-9]\d{9}$/)]],
    address: ['', Validators.required],
    pincode: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]],
    plan: ['premium', Validators.required],
    agree: [false, Validators.requiredTrue],
  });

  private readonly selectedId = toSignal(this.form.controls.plan.valueChanges, {
    initialValue: this.form.controls.plan.value,
  });
  protected readonly selected = computed(
    () => this.plans.find((p) => p.id === this.selectedId()) ?? this.plans[0],
  );

  constructor() {
    effect(() => {
      const p = this.plan();
      if (p && this.plans.some((x) => x.id === p)) this.form.controls.plan.setValue(p);
    });
  }

  protected invalid(name: FieldName) {
    const control = this.form.controls[name];
    return control.invalid && (control.touched || control.dirty);
  }

  protected submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.submitted.set(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
