import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

const MaterialModules = [
  MatCardModule,
  MatButtonModule
]



@NgModule({
  imports: [... MaterialModules],
  exports: [MatCardModule,MatButtonModule]
})

export class MaterialModule {}
