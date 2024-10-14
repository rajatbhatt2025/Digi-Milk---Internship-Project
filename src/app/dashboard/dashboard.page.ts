import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage {
  isDarkMode: boolean = false; // Track the current theme state

  constructor(private menu: MenuController) {}

  toggleMenu() {
    this.menu.toggle();
  }

  addMilkCollection() {
    console.log('Add Milk Collection Clicked');
    // Logic to open a modal, navigate, or show a form
  }

  requestOrder() {
    console.log('Request Order Clicked');
    // Logic for order request here
  }

  viewCollectionData() {
    console.log('View Collection Data Clicked');
    // Logic to show collection data
  }

  viewPaymentData() {
    console.log('View Payment Data Clicked');
    // Logic to show payment data
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode; // Toggle the state
    document.body.classList.toggle('dark', this.isDarkMode);
    
    // Optional: Change the icon or any other visual feedback
    const icon = this.isDarkMode ? 'switch-on.png' : 'switch-off.png'; // Replace with your icon paths
    const avatarImg = document.querySelector('ion-avatar img') as HTMLImageElement;
    if (avatarImg) {
      avatarImg.src = `assets/images/${icon}`;
    }
  }
}
