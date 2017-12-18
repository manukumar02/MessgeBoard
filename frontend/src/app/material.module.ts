
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatSnackBarModule
} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatCardModule,
        MatSnackBarModule
    ],
    exports: [
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatCardModule,
        MatSnackBarModule
    ]
})

export class MaterialModule {

}
