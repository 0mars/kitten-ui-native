import React from 'react';
import {
    NavigationScreenProps,
    NavigationScreenConfig, NavigationActions,
} from 'react-navigation';
import {
    ChatHeader,
    ChatHeaderNavigationStateParams,
} from '@src/components/messaging';
import {
    Conversation,
} from '@src/core/model';
import {conversation5} from '@src/core/data/conversation';
import {StyleSheet, Text, Image, TouchableWithoutFeedback} from 'react-native';
import {
    ReactiveBase,
    DataSearch,
    ReactiveList,
} from '@appbaseio/reactivesearch-native';


import {ScrollView, View} from 'react-native';
import {ListItem} from '@kitten/ui';


import {SearchHeader} from '@src/components/search/search.header';
import {userProvider} from "../../../../domain/auth/UserProvider";
import {Screen} from "../../../../core/navigation/screens";


interface State {
    newMessageText: string;
    conversation: Conversation;
}


const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginTop: 25,
    },
    image: {
        width: 100,
        height: 100,
    },
    result: {
        flexDirection: 'row',
        width: '100%',
        margin: 5,
        alignItems: 'center',
    },
    item: {
        flexDirection: 'column',
        paddingLeft: 10,
    },
    title: {
        fontWeight: 'bold',
    },
});


export class SearchContainer extends React.Component<NavigationScreenProps, State> {

    public state: State = {
        newMessageText: '',
        conversation: conversation5,
    };

    static navigationOptions: NavigationScreenConfig<any> = ({navigation, screenProps}) => {
        const headerProps: ChatHeaderNavigationStateParams = {
            interlocutor: navigation.getParam('interlocutor', conversation5.interlocutor),
            lastSeen: navigation.getParam('lastSeen', 'today'),
            onBack: navigation.getParam('onBack'),
            onProfile: navigation.getParam('onProfile'),
        };

        const header = (navigationProps: NavigationScreenProps) => {
            return (
                <SearchHeader
                    {...navigationProps}
                    {...headerProps}
                />
            );
        };

        return {...navigation, ...screenProps, header};
    };

    public async componentWillMount(): void {
        this.props.navigation.setParams({
            interlocutor: this.state.conversation.interlocutor,
            lastSeen: this.state.conversation.lastSeen,
            onBack: this.onBackPress,
        });

        await userProvider.get().catch(() => {
            this.props.navigation.navigate(Screen.Login);
        });
    }

    private onBackPress = (): void => {
        this.props.navigation.goBack(null);
    };

    private say(deText): void {
        // Speech.speak(deText, {
        //     'language': 'de-DE',
        // });
    }

    public render(): React.ReactNode {
        return (
            <ReactiveBase
                app='talks'
                url='http://talks.humanoyd.com:9200'
                headers={{'X-Api-Key': '2AyMr4NI8rLFYYYoJ1R8RPrzlQ7T8l9bYZpT5uUn'}}>
                <View>
                    <DataSearch
                        componentId='searchbox'
                        dataField={[
                            'sentence',
                            'sentence.en',
                            'sentence.de',
                            'raw.translated',
                        ]}
                        highlight={true}
                        placeholder='words or expressions'
                        autosuggest={false}
                    />
                </View>
                <ScrollView
                    stickyHeaderIndices={[1]}
                >
                    <View>

                        <ReactiveList
                            componentId='results'
                            dataField='sentence.de'
                            size={7}
                            showResultStats={false}
                            pagination={true}
                            react={{
                                and: 'searchbox',
                            }}
                            onData={res => (

                                <View style={styles.result}>
                                    <ListItem
                                        onLongPress={() => this.say(res.sentence.de)}
                                        title={res.sentence.de}
                                        description={res.raw.translated}
                                    />
                                </View>

                            )}
                        />
                    </View>
                </ScrollView>
            </ReactiveBase>
        );
    }
}
