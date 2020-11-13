import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// Material Modules
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatIconModule } from "@angular/material/icon";
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from "@angular/material/expansion";
import {PlatformModule} from '@angular/cdk/platform';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { WorksComponent } from './components/works/works.component';
import { FetureComponent } from './components/feture/feture.component';
import { ContactComponent } from './components/contact/contact.component';
import { FotterComponent } from './components/fotter/fotter.component';
import { PriceComponent } from './components/price/price.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { StandardComponent } from './components/price/standard/standard.component';
import { BusinessComponent } from './components/price/business/business.component';
import { PremiumComponent } from './components/price/premium/premium.component';
import { BannerComponent } from './components/header/banner/banner.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { OrderComponent } from './components/order/order.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WorksComponent,
    FetureComponent,
    ContactComponent,
    FotterComponent,
    PriceComponent,
    ServicesComponent,
    AboutPageComponent,
    StandardComponent,
    BusinessComponent,
    PremiumComponent,
    BannerComponent,
    ProjectsComponent,
    OrderComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatTabsModule,
    MatExpansionModule,
    PlatformModule,
    RouterModule.forRoot([
      {path: "about", component: AboutPageComponent},
      {path: "standard", component: StandardComponent},
      {path: "business", component: BusinessComponent},
      {path: "premium", component: PremiumComponent},
      {path: "api/dashboard", component: DashboardComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
