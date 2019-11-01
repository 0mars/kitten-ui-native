import React from 'react';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import {
  Profile,
  ProfileActivity,
  ProfileSocials,
} from '@src/core/model';
import { Profile7 } from './profile7.component';
import {
  profile6,
  profileActivity1,
  profileSocials1,
} from '@src/core/data/profile';

interface State {
  profile: Profile;
  socials: ProfileSocials;
  activity: ProfileActivity[];
}

export class Profile7Container extends React.Component<NavigationStackScreenProps, State> {

  public state: State = {
    profile: profile6,
    socials: profileSocials1,
    activity: profileActivity1,
  };

  private navigationKey: string = 'Profile7Container';

  private onFollowPress = () => {

  };

  private onMessagePress = () => {
    this.props.navigation.navigate({
      key: this.navigationKey,
      routeName: 'Chat 1',
    });
  };

  private onFollowersPress = () => {

  };

  private onFollowingPress = () => {

  };

  private onPostsPress = () => {

  };

  private onFriendPress = (index: number) => {

  };

  private onPhotoPress = (index: number) => {

  };

  public render(): React.ReactNode {
    return (
      <Profile7
        profile={this.state.profile}
        socials={this.state.socials}
        activities={this.state.activity}
        onFollowPress={this.onFollowPress}
        onMessagePress={this.onMessagePress}
        onFollowersPress={this.onFollowersPress}
        onFollowingPress={this.onFollowingPress}
        onPostsPress={this.onPostsPress}
        onFriendPress={this.onFriendPress}
        onPhotoPress={this.onPhotoPress}
      />
    );
  }
}
