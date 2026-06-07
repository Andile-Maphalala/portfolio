import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-thank-you',
  imports: [CommonModule],
  templateUrl: './thank-you.component.html',
  styleUrl: './thank-you.component.scss',
})
export class ThankYouComponent {

  steps = [
    { title: "I'll review your message", desc: 'Usually within a few hours', last: false },
    { title: "I'll get back to you", desc: 'Expect a reply within 24–48 hours', last: false },
    ];
}
