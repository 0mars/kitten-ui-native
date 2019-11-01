import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  TopNavigation,
  TopNavigationProps,
} from '@kitten/ui';
import { SafeAreaView } from '@src/core/navigation';
import { Profile } from '@src/core/model';

interface ComponentProps {
  interlocutor: Profile;
  lastSeen: string;
  onBack: () => void;
  onProfile: (profile: Profile) => void;
}

export type SearchHeaderProps = ThemedComponentProps & ComponentProps & NavigationScreenProps;

class SearchHeaderComponent extends React.Component<SearchHeaderProps> {

  private onBack = (): void => {
    this.props.onBack();
  };


  private renderInterlocutorProps = (): TopNavigationProps | null => {
    const { interlocutor, lastSeen } = this.props;

    return interlocutor && {
      title: `Contextful`,
      subtitle: ``, // todo omar, subtitle here
      // rightControls: this.renderRightControls(),
    };
  };

  public render(): React.ReactNode {
    const { themedStyle, interlocutor } = this.props;

    return (
      <SafeAreaView style={themedStyle.container}>
        <TopNavigation
          alignment='center'
          {...this.renderInterlocutorProps()}
        />
      </SafeAreaView>
    );
  }
}

export const SearchHeader = withStyles(SearchHeaderComponent, (theme: ThemeType) => ({
  container: {
    backgroundColor: theme['background-basic-color-1'],
  },
}));

