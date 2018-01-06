import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class WebService {
    BASE_URL = 'http://localhost:8000/api';
    messages = [];

    constructor(private http: Http, private sb: MatSnackBar) {
        this.getMessages();
    }

    async getMessages() {
        try {
            const response = await this.http.get(this.BASE_URL + '/messages').toPromise();
            this.messages = response.json();
        } catch (error) {
            console.log('Unable to get Messages');
            this.sb.open('Unable to get Messages', 'Close', {
                duration: 5000,
                horizontalPosition: 'right',
                verticalPosition: 'top'
            });
        }
    }
    async postMessages(message) {
        const response = await this.http.post(this.BASE_URL + '/message', message).toPromise();
        this.messages.push(response.json());
    }
}
