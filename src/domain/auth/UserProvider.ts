import db from '@infrastructure/database/db';
import {NewObject} from 'vasern/vasern/src/plugins/vasern-objectid';
import {User} from '@domain/models';
import {Document} from 'vasern/vasern';
import {AsyncStorage} from 'react-native';

export class UserNotFoundError extends Error {

}

export class UserProvider {
    // private model: Document;
    private key: string = 'user_data';

    public constructor() {
        // this.model = db.get('User');
        // this.model.load();
    }

    public async authorize(user: User): Promise<void> {
        this.removeAll();
        await AsyncStorage.setItem(this.key, JSON.stringify(user));
    }

    public async get(): Promise<User | null> {
        return await AsyncStorage.getItem(this.key).then((value) => {
            console.info(value);
            console.info(typeof value);
            if (value) {
                return JSON.parse(value);
            } else {
                throw new UserNotFoundError('User is logged out!');
            }
        });
    }

    public removeAll() {
        return AsyncStorage.removeItem(this.key);
    }
}

export const userProvider = new UserProvider();
