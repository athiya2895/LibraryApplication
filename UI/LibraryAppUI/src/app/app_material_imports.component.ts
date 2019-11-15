// tslint:disable-next-line:max-line-length
import { MatDialogModule, MatButtonModule, MatCardModule, MatGridListModule, MatDividerModule, MatMenuModule, MatListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

@NgModule({
    imports : [MatDialogModule,
        MatButtonModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatGridListModule,
        MatDividerModule,
        MatMenuModule,
        MatListModule],
    exports: [MatDialogModule,
        MatButtonModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatGridListModule,
        MatDividerModule,
        MatMenuModule,
        MatListModule]
})

export class AngularMaterialModule {

}
