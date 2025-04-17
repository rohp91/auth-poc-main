import { Component, Injector, signal } from '@angular/core';
import { IDynSrevice, isMockSharedService } from '../core/config';
import { AccessService } from '../core/services/access.service';
import { RouterLink } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon'

@Component({
  selector: 'app-navigation',
  imports: [RouterLink,MatToolbarModule,MatIconModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  items: any[] | undefined;
  subItems: any[] | undefined;
  service: IDynSrevice['service'];
  user:any;
  darkMode=signal(true)
  constructor(private accessService:AccessService, private injector: Injector){
        this.service = this.injector.get<IDynSrevice['service']>(isMockSharedService)
    }

  ngOnInit() {
    document.body.style.setProperty('color-scheme','dark');
      console.log("Navigation component");
      
      this.user = this.accessService.getUserInfo();
      this.items = [
          {
              label: 'Home',
              icon: 'pi pi-home',
              routerLink:'home'
          },
          {
            label: 'Resturants',
            icon: 'pi pi-home',
            routerLink:'restaurants'
          },
          {
            label: 'Flights',
            icon: 'pi pi-home',
            routerLink:'flights/flights-search'
          }


      ];
      this.subItems = [
        {
            separator: true
        },
        {
            label: 'Profile',
            items: [
                {
                    label: 'Settings',
                    icon: 'pi pi-cog',
                    shortcut: '⌘+O'
                },
                {
                    label: 'Messages',
                    icon: 'pi pi-inbox',
                    badge: '2'
                },
                {
                    label: 'Logout',
                    icon: 'pi pi-sign-out',
                    shortcut: '⌘+Q',
                    command: () => {
                      this.logoutUser();
                  }
                }
            ]
        },
        {
            separator: true
        }
    ];
  }

  logoutUser():void
  {
    window.location.href=`${window.location.origin}/logout`
  }

  changeTheme(theme: string) {
    if (theme == 'light') {
      this.darkMode.set(false);
    } else {
      this.darkMode.set(true);
    }
    document.body.style.setProperty('color-scheme', theme);
  }

}
