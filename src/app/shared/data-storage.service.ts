import {Injectable, EventEmitter} from "@angular/core";
import {Notes} from "../views/my-group-page/my-group-has-group/notes/notes.model";
import {NotesService} from "../views/my-group-page/my-group-has-group/notes/notes.service";
import {map} from "rxjs/operators";
import {Subject} from "rxjs";

// ----------------->  service for tests purpose only <----------------- //

@Injectable({providedIn: 'root'})
export class DataStorageService {
  // notes: Notes[];
  // notesErrorMessage: string = '';
  // onNotesChange = new EventEmitter<boolean>();

  constructor() {}

  // clearNotes(): void {
  //   this.notes = null;
  //   this.onNotesChange.next();
  //   console.log(this.notes);
  // }

  onDeleteNote() {
  }
}
