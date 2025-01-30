import {
  getMessaging as getFirebaseMessaging,
  getToken as getFirebaseToken,
  onMessage as firebaseOnMessage,
} from 'firebase/messaging';
import { firebaseApp } from '../configs/firebase.config.ts';
import { MessagePayload, NotificationPayload } from '@firebase/messaging';
import BaseActions from '../redux/base-actions.ts';
import { ENDPOINT } from '../constants/endpoint.ts';
import AuthServices from './auth.service.ts';

export class NotificationService extends BaseActions {
  private authService = new AuthServices();

  async getToken() {
    const token = localStorage.getItem('fcm-token');
    if (!token) {
      return getFirebaseToken(this.getMessaging())
        .then((currentToken) => {
          localStorage.setItem('fcm-token', currentToken);
          if (currentToken) {
            if (this.authService.authCheck()) {
              this.saveToken(currentToken);
            }
          } else {
            console.error('No registration token available. Request permission to generate one.');
          }
        })
        .catch((err) => {
          console.error('An error occurred while retrieving token. ', err);
        });
    } else {
      if (this.authService.authCheck()) {
        console.info('FCM TOKEN SUCCESS SAVED');
        this.saveToken(token);
      }
      return token;
    }
  }

  getMessaging() {
    return getFirebaseMessaging(firebaseApp);
  }

  requestPermission() {
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        console.info('Notification permission granted...');
      } else {
        console.info('Do not have permissions');
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

  private saveToken(token: string) {
    this.httpService.PATCH(ENDPOINT.SAVE_FCM_TOKEN(token)).then();
  }
}
