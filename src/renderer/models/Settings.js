
import db from "./../datastore"
import store from "./../store";

export default {
    getToken() {
        db.findOne({ type: 'settings' }, (err, doc) => {
            if (doc) {
                store.commit("setToken", doc.data.token);
                store.dispatch('getQuotes');
                return true;
            } else {
                console.log("no settings to load just yet");
                return false;
            }
        });
    },
    saveToken(token) {
        db.findOne({ type: 'settings' }, (err, doc) => {
            if (!doc) {
                console.log('creating token');
                db.insert(
                    {
                        type: 'settings',
                        data: {
                            token: token
                        }
                    },
                    (err, newDoc) => {
                        if (err) {
                            return false;
                        } else {
                            return true
                        }
                    }
                );
            } else {
                db.update(
                    { type: 'settings' },
                    { $set: { data: { token: this.token } } },
                    {},
                    () => { return true }
                );
            }
            store.commit('setToken', token);
        });
    }

}