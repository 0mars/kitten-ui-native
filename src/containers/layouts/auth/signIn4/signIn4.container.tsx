import React from 'react';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { SignInForm2Data } from '@src/components/auth';
import { SignIn4 } from './signIn4.component';

export class SignIn4Container extends React.Component<NavigationStackScreenProps> {

  private navigationKey: string = 'SignIn4Container';

  private onSignInPress = (data: SignInForm2Data) => {
    this.props.navigation.goBack();
  };

  private onSignUpPress = () => {
    this.props.navigation.navigate({
      key: this.navigationKey,
      routeName: 'Sign Up 4',
    });
  };

  private onForgotPasswordPress = () => {
    this.props.navigation.navigate({
      key: this.navigationKey,
      routeName: 'Forgot Password',
    });
  };

  private onGooglePress = () => {

  };

  private onFacebookPress = () => {

  };

  private onTwitterPress = () => {

  };

  public render(): React.ReactNode {
    return (
      <SignIn4
        onSignInPress={this.onSignInPress}
        onSignUpPress={this.onSignUpPress}
        onForgotPasswordPress={this.onForgotPasswordPress}
        onGooglePress={this.onGooglePress}
        onFacebookPress={this.onFacebookPress}
        onTwitterPress={this.onTwitterPress}
      />
    );
  }
}
