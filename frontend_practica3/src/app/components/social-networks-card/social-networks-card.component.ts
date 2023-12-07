import { Component, Input } from '@angular/core';
import Profile from 'src/app/models/user.model';

@Component({
  selector: 'app-social-networks-card',
  templateUrl: './social-networks-card.component.html',
  styleUrls: ['./social-networks-card.component.scss'],
})
export class SocialNetworksCardComponent {
  
  @Input() socialNetworks!: Profile['user']['social_network'];

}
