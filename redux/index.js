import { createContext } from "react";
import app from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';
import store from './store/store';

const FirebaseContext = createContext(null);

const FirebaseProvider = ({ config, appcat, children }) => {
    let firebase = {
        app: null,
        database: null,
        auth: null,
        storage: null,
    }

    if (!app.apps.length) {
        app.initializeApp(config);
    } else {
        firebase = {
            app: app,
            config: config,
            appcat: appcat,
            database: app.database(),
            auth: app.auth(),
            storage: app.storage(),
            authRef: app.auth()
        }
    }
    return (
        <FirebaseContext.Provider value={firebase}>
            {children}
        </FirebaseContext.Provider>
    )
}

export {
    FirebaseContext,
    FirebaseProvider,
    store
}
