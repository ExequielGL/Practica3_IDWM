import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';
import { ProfileCardComponent } from 'src/app/components/profile-card/profile-card.component';
import { InterestsCardComponent } from 'src/app/components/interests-card/interests-card.component';
import { PersonalDataCardComponent } from 'src/app/components/personal-data-card/personal-data-card.component';
import { SocialNetworksCardComponent } from 'src/app/components/social-networks-card/social-networks-card.component';
import { FrameworksCardComponent } from 'src/app/components/frameworks-card/frameworks-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule
  ],
  declarations: [ProfilePage, ProfileCardComponent, InterestsCardComponent, PersonalDataCardComponent, SocialNetworksCardComponent, FrameworksCardComponent]
})
export class ProfilePageModule {}
