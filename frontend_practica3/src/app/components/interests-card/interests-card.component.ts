import { Component, Input } from '@angular/core';
import Profile from 'src/app/models/user.model';
@Component({
  selector: 'app-interests-card',
  templateUrl: './interests-card.component.html',
  styleUrls: ['./interests-card.component.scss'],
})
export class InterestsCardComponent {

  @Input() interests!: Profile['user']['interest'];

}
