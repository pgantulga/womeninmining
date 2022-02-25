import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';


@Component({
  // tslint:disable-next-line: component-selector
  selector: 'upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent {

  @Input() path: string;
  @Output() fileEmitter = new EventEmitter<string>();
  snapshot: Observable<any>;
  percentage: Observable<any>;
  fileToUpload: File = null;
  task: AngularFireUploadTask;

  constructor(private storage: AngularFireStorage) {

  }

  onFileSelected(files): any {
    this.fileToUpload = files.item(0);
    console.log(this.fileToUpload);
    // this.fileEmitter.emit(files.item(0));
    console.log(this.path + this.fileToUpload.name);
  }
  upload(): any {
    const path = this.path + this.fileToUpload.name;
    const ref = this.storage.ref(path);
    this.task = this.storage.upload(path, this.fileToUpload);
    this.percentage = this.task.percentageChanges();
    this.snapshot = this.task.snapshotChanges().pipe(
      finalize(async () => {
        const file = await ref.getDownloadURL().toPromise();
        this.fileEmitter.emit(file);
      })
    );
  }

}
