import db from '@infrastructure/database/db';
import {NewObject} from 'vasern/vasern/src/plugins/vasern-objectid';
import {User} from '@domain/models';
import {Document} from 'vasern/vasern';

export class UserNotFoundError extends Error {

}


// UserProvider
export class VasernUserProvider {
    private model: Document;
    private ready: boolean = false;

    public constructor() {
        this.model = db.get('User');
        // 1st updates: remove this.modal.load()
        this.model.onLoaded(() => {this.ready = true;})
    }

    public whenReady(fn: Function) {
      this.model.onLoaded(fn);
    }

    public authorize(user: User): Promise<NewObject[]> {
        return new Promise<NewObject[]>((resolve => {
            const ret = this.model.insert(user);
            if (ret) {
                resolve(ret);
            } else {
                throw new Error('AuthorizationFailed');
            }
        }));
    }

    public get(): Promise<User> {
        console.log(this.model.data()); // remark on here
        return new Promise((resolve, reject) => {
            if (this.model.length() < 1) {
                // throw new UserNotFoundError('User not found!')
            }
            console.log(this.model.data());
            resolve(<User>this.model.data()[0]);
        });
    }

    private removeAll() {
        // this.model.data().forEach(function (item) {
        //     db.remove(item, true);
        // });
        this.model.removeAllRecords();
        this.model.save();
    }
}

export const vasernUserProvider = new VasernUserProvider();
;
