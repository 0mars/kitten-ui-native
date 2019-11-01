import db from '@infrastructure/database/db';
import {NewObject} from 'vasern/vasern/src/plugins/vasern-objectid';
import {User} from '@domain/models';
import {Document} from 'vasern/vasern';

export class UserRepository {
    private model: Document;

    public constructor() {
        this.model = db.get('User');
        this.model.load();
    }

    public async save(user: User): Promise<false | NewObject[]> {
        this.removeAll();
        return this.model.insert(user, true);
    }

    private removeAll() {
        this.model.data().forEach(function (item) {
            db.remove(item, true);
        });
    }
}

export const userRepository = new UserRepository();
