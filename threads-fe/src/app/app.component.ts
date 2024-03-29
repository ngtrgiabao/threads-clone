import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Threads Clone';
  userService = inject(UserService);

  constructor() {
    const user = this.userService.getUserFromStorage();
    if (!user) {
      const uuid = crypto.randomUUID().split("-")[0] + Date.now();
      this.userService.createUser(`user_${uuid}`).subscribe(user => {
        console.log('user created', user)
        this.userService.saveUserToStorage(user);
      });
    }
  }
}
