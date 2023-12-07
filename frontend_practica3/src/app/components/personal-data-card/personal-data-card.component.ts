import { Component, Input } from '@angular/core';
import Profile from 'src/app/models/user.model';

@Component({
  selector: 'app-personal-data-card',
  templateUrl: './personal-data-card.component.html',
  styleUrls: ['./personal-data-card.component.scss'],
})
export class PersonalDataCardComponent {
  @Input() personalData!: Profile['user']['personal_data'];
}
