import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewComponent } from './new/new.component';
import { OkComponent } from './ok/ok.component'
const routes: Routes = [
      {
          path: 'new',
          component: NewComponent
      },
      {
         path: 'ok',
         component: OkComponent
       }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
