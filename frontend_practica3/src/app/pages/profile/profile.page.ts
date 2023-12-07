import { Component, OnInit } from '@angular/core';
import Profile from 'src/app/models/user.model';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  profile!: Profile;

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.profileService.getProfile().subscribe(
      (profile: Profile) => {
        this.profile = profile;
      },
      (error) => {
        console.error('Error al obtener el perfil', error);
      }
    );
  }

}
