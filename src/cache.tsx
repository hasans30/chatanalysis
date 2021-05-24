import { InMemoryCache, ReactiveVar, makeVar } from "@apollo/client";
import AppState from './models/AppState';

export const cache: InMemoryCache = new InMemoryCache(
    {
        typePolicies: {
            Query: {
                fields: {
                    appState: {
                        read() {
                            return appStateVar();
                        }
                    }
                }
            }
        }
    }
);

const initialState: AppState = {};
export const appStateVar: ReactiveVar<AppState> = makeVar<AppState>(initialState);