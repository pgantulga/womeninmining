import { SnackComponent } from './../../../shared/components/snack/snack.component';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { FormControl, Validators } from '@angular/forms';
import { AuthService, User } from './../../../core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ActionDialogComponent } from 'src/app/shared/components/action-dialog/action-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.scss'],
})
export class ProfileSettingsComponent implements OnInit {
  userData$: Observable<User>;
  user: User;

  displayName = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);

  constructor(
    public authService: AuthService,
    private dialog: MatDialog,
    public snackbar: MatSnackBar,

  ) {}
  ngOnInit(): void {
    this.authService.getUser().then((user) => {
      this.user = user;
      this.displayName.setValue(user.displayName);
      console.log(this.displayName)
    });
  }
  signOut(): void {
    const dialogRef = this.dialog.open(ActionDialogComponent, {
      data: {
        title: 'Системээс гарах',
        content: 'Та системээс гарахдаа итгэлтэй байна уу?',
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.authService.signOut().then(() => console.log('Signed out'));
      }
    });
  }
  onSubmit(): void {
    const data = {
      displayName: this.displayName.value,
      updatedAt: new Date(),
    };
    this.authService.updateUser(data, this.user.uid).then((res) => {
      return this.openSnack('Таны мэдээлэл санагдлаа');
    });
  }

  private openSnack(data: string) {
    return this.snackbar.openFromComponent(SnackComponent, {
      data, panelClass: ['default-snack']
    })
  }
}
