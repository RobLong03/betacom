import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone:false,
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'project-angular';

  isDarkMode = false;

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    document.documentElement.setAttribute(
      'color-scheme',
      this.isDarkMode ? 'dark' : 'light'
    );
  }


  persone=[{}]

   personeIniziale = [
    { name: 'Luca', cognome: 'Plutoa', isOnline: true, color: 'red' },
    { name: 'Paolo', cognome: 'Stumeno', isOnline: false, color: 'green' },
    { name: 'Anna', cognome: 'Verilo', isOnline: true, color: 'pink' },
    { name: 'Marcello', cognome: 'Zuca', isOnline: false, color: 'yellow' },
    { name: 'Francesco', cognome: 'Armesi', isOnline: true, color: 'purple' },
  ];

   personeUpdate = [
    { name: 'Donald', cognome: 'Duck', isOnline: true, color: 'red' },
    { name: 'Michel', cognome: 'Bulete', isOnline: false, color: 'green' },
    { name: 'Anna', cognome: 'Verilo', isOnline: true, color: 'pink' },
    { name: 'Marcello', cognome: 'Zuca', isOnline: false, color: 'yellow' },
    { name: 'Francesco', cognome: 'Armesi', isOnline: true, color: 'purple' },
  ];

  onClick(){
    this.persone=this.personeUpdate;
  }
  onRestore(){
      this.persone=this.personeIniziale;
  }
}
