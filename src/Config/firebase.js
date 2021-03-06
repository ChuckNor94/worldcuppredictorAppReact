import * as firebase from "firebase";
import 'firebase/database';

//import { FirebaseConfig } from "../Config/keys";
import { FirebaseConfig } from "./keys";


firebase.initializeApp(FirebaseConfig);

export const databaseRef = firebase.database().ref();
export const upcomingMatchesFBRef = databaseRef.child("upcomingmatches");
export const matchPredictionsFBRef = databaseRef.child("matchPredictions");
export const matchPredictionResultsFBRef = databaseRef.child("matchPredictionResults");
export const matchResultsFBRef = databaseRef.child("matchResults");
