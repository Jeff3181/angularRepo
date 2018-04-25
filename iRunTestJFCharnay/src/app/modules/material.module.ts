import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import 'hammerjs/hammer';
import { MatFormFieldModule,
      MatInputModule,
      MatCheckboxModule,
      MatRadioModule,
      MatSlideToggleModule,
      MatSelectModule,
      MatSliderModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatAutocompleteModule,
      MatButtonModule,
      MatMenuModule,
      MatSidenavModule,
      MatToolbarModule,
      MatListModule,
      MatGridListModule,
      MatCardModule,
      MatStepperModule,
      MatTabsModule,
      MatExpansionModule,
      MatButtonToggleModule,
      MatChipsModule,
      MatIconModule,
      MatIconRegistry,
      MatProgressSpinnerModule,
      MatProgressBarModule,
      MatTableModule,
      MatPaginatorModule,
      MatSortModule
       } from '@angular/material';

const MATERIAL = [
  MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatSliderModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule

];

@NgModule({
  imports: [
    CommonModule,
    ...MATERIAL
  ],
  declarations: [],
  exports: MATERIAL
})
export class MaterialModule { }
