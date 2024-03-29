/* eslint-disable max-len */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from 'src/app/services/authGuard/auth-guard.service';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    canActivate: [AuthGuardService],
    children:[
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule),
        canActivate: [AuthGuardService],
      },
      {
        path: 'user-list',
        loadChildren: () => import('../UAM/user-list/user-list.module').then( m => m.UserListPageModule),
        canActivate: [AuthGuardService],
      },
      {
        path: 'visualization',
        loadChildren: () => import('../visualization/visualization.module').then( m => m.VisualizationPageModule),
        canActivate: [AuthGuardService],
      },
      {
        path: 'create-user',
        loadChildren: () => import('../UAM/create-user/create-user.module').then( m => m.CreateUserPageModule)
      },
      {
        path: 'update-user',
        loadChildren: () => import('../UAM/update-user/update-user.module').then( m => m.UpdateUserPageModule),
        canActivate: [AuthGuardService],
      },
      {
        path: 'user-details',
        loadChildren: () => import('../UAM/user-details/user-details.module').then( m => m.UserDetailsPageModule),
        canActivate: [AuthGuardService],
      },
      {
        path: 'lookup-list',
        loadChildren: () => import('../lookup/lookup-list/lookup-list.module').then( m => m.LookupListPageModule),
        canActivate: [AuthGuardService],
      },
      {
        path: 'create-lookup',
        loadChildren: () => import('../lookup/create-lookup/create-lookup.module').then( m => m.CreateLookupPageModule),
        canActivate: [AuthGuardService],
      },
      {
        path: 'update-lookup',
        loadChildren: () => import('../lookup/update-lookup/update-lookup.module').then( m => m.UpdateLookupPageModule),
        canActivate: [AuthGuardService],
      },
      {
        path: 'settings',
        loadChildren: () => import('../settings/settings/settings.module').then( m => m.SettingsPageModule),
        canActivate: [AuthGuardService],
      },
      {
        path: 'parcel-list',
        loadChildren: () => import('../parcels/parcel-list/parcel-list.module').then( m => m.ParcelListPageModule)
      },
      {
        path: 'view-parcel',
        loadChildren: () => import('../parcels/parcel-details/parcel-details.module').then( m => m.ParcelDetailsPageModule)
      },
      {
        path: 'update-parcel',
        loadChildren: () => import('../parcels/update-parcel/update-parcel.module').then( m => m.UpdateParcelPageModule)
      },
      {
        path: 'create-parcel',
        loadChildren: () => import('../parcels/create-parcel/create-parcel.module').then( m => m.CreateParcelPageModule)
      },
      {
        path: 'dealer-list',
        loadChildren: () => import('../dealers/dealer-list/dealer-list.module').then( m => m.DealerListPageModule)
      },
      {
        path: 'sub-dealer-list',
        loadChildren: () => import('../sub-dealers/sub-dealer-list/sub-dealer-list.module').then( m => m.SubDealerListPageModule)
      },
      {
        path: 'view-sub-dealer',
        loadChildren: () => import('../sub-dealers/view-sub-dealer/view-sub-dealer.module').then( m => m.ViewSubDealerPageModule)
      },
      {
        path: 'create-sub-dealer',
        loadChildren: () => import('../sub-dealers/create-sub-dealer/create-sub-dealer.module').then( m => m.CreateSubDealerPageModule)
      },
      {
        path: 'update-sub-dealer',
        loadChildren: () => import('../sub-dealers/update-sub-dealer/update-sub-dealer.module').then( m => m.UpdateSubDealerPageModule)
      },
      {
        path: 'qr-code',
        loadChildren: () => import('../qr-code/qr-code/qr-code.module').then( m => m.QrCodePageModule)
      },
      {
        path: 'scan-qr-code',
        loadChildren: () => import('../qr-code/scan-qr-code/scan-qr-code.module').then( m => m.ScanQrCodePageModule)
      }
    
      ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
