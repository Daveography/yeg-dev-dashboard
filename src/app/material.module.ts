import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatGridListModule, MatSidenavModule, MatButtonModule, MatToolbarModule, MatIconModule, MatListModule, MatExpansionModule, MatFormFieldModule, MatSelectModule, MatChipsModule, MatDialogModule, MatDividerModule, MatInputModule, MAT_CHIPS_DEFAULT_OPTIONS } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  exports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    MatSidenavModule,
    MatToolbarModule
  ],
})
export class MaterialModule { }
