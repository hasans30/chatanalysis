import {appStateVar} from '../../cache';
import AppState from "../../models/AppState";

export default function createAppState(value:AppState){
    appStateVar(value);
}