import {
  getMessaging as getFirebaseMessaging,
  getToken as getFirebaseToken,
  onMessage as firebaseOnMessage,
} from 'firebase/messaging';
import { firebaseApp } from '../configs/firebase.config.ts';
import { Dispatch, SetStateAction } from 'react';
import { MessagePayload, NotificationPayload } from '@firebase/messaging';

export class NotificationService {
  async getToken(setTokenFound: Dispatch<SetStateAction<boolean>>) {
    return getFirebaseToken(this.getMessaging())
      .then((currentToken) => {
        if (currentToken) {
          console.log('current token for client: ', currentToken);
          setTokenFound(true);
        } else {
          console.log('No registration token available. Request permission to generate one.');
          setTokenFound(false);
        }
      })
      .catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
      });
  }

  getMessaging() {
    return getFirebaseMessaging(firebaseApp);
  }

  requestPermission() {
    console.log('Requesting permission...');
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        console.log('Notification permission granted...');
      } else {
        console.log('Do not have permissions');
      }
    });
  }

  async onMessage(): Promise<NotificationPayload> {
    return new Promise((resolve) => {
      firebaseOnMessage(this.getMessaging(), (payload: MessagePayload) => {
        if (payload.notification) {
          resolve(payload.notification);
        }
      });
    });
  }
}
