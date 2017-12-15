import { Component, OnInit } from '@angular/core';
import { WebService } from './web.service';

@Component({
    selector: 'new-message',
    template: `
        <mat-card class="card">
            <mat-card-content>
                <mat-form-field class="example-full-width">
                    <input [(ngModel)]="message.owner" matInput placeholder="Name">
                </mat-form-field>
                <mat-form-field>
                    <textarea [(ngModel)]="message.text" matInput placeholder="Messages"></textarea>
                </mat-form-field>
                <mat-card-actions>
                    <button (click)="post()" mat-raised-button color="primary">POST</button>
                </mat-card-actions>
            </mat-card-content>
        </mat-card>
    `
})
export class NewMessagesComponent {
    message = {
        owner: '',
        text: ''
    };

    constructor(private webService: WebService) {

    }

    post() {
        this.webService.postMessages(this.message);
    }
}
