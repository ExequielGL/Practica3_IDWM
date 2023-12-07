import { Component, Input } from '@angular/core';
import Profile from 'src/app/models/user.model';

@Component({
  selector: 'app-frameworks-card',
  templateUrl: './frameworks-card.component.html',
  styleUrls: ['./frameworks-card.component.scss'],
})
export class FrameworksCardComponent {
  @Input() frameworks!: Profile['user']['framework'];
}
