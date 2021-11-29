import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { AuthService, User } from './../../../core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ActionDialogComponent } from 'src/app/shared/components/action-dialog/action-dialog.component';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.scss']
})
export class ProfileSettingsComponent implements OnInit {
  userData$: Observable<User>;
  constructor(public authService: AuthService, private dialog: MatDialog) { }
  ngOnInit(): void {
  }
  signOut(): void {
    const dialogRef = this.dialog.open(ActionDialogComponent, {
        data: { title: 'Системээс гарах', content: 'Та системээс гарахдаа итгэлтэй байна уу?' }
    });
    dialogRef.afterClosed().subscribe(result => {
        if (result) {
            this.authService.signOut()
                .then(() => console.log('Signed out'));
        }
    });
}
}
