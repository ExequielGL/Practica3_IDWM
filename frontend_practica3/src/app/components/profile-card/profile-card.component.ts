import { Component, Input } from '@angular/core';
import Profile from 'src/app/models/user.model';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
})
export class ProfileCardComponent {

  @Input() profile!: Profile;

}
