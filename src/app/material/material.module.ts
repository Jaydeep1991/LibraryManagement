import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';

const materialComponents=[
  MatButtonModule,MatIconModule,MatMenuModule,MatToolbarModule,MatDialogModule,MatInputModule,MatSidenavModule,MatDividerModule,
  MatListModule,MatExpansionModule,MatCardModule,MatFormFieldModule,MatSelectModule,MatTableModule,MatPaginatorModule
]


@NgModule({
  imports: [
    materialComponents
  ],
  exports:[
    materialComponents
  ]
})
export class MaterialModule { }
