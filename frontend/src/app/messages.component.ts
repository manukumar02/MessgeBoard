import { Component, OnInit } from '@angular/core';
import { WebService } from './web.service';

@Component({
    selector: 'message',
    template: `
        <div *ngFor="let message of webService.messages">
            <mat-card class="card">
                <mat-card-title>{{ message.owner }}</mat-card-title>
                <mat-card-content>{{ message.text }}</mat-card-content>
            </mat-card>
        </div>
    `
})
export class MessagesComponent {
    constructor(private webService: WebService) {

    }
}
