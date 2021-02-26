import {Component, OnDestroy, OnInit} from '@angular/core';
import {Notes} from "./notes.model";
import {NotesService} from "./notes.service";
import {Subscription} from "rxjs";
import {SharedService} from "../../../../shared/shared.service";
import {DataStorageService} from "../../../../shared/data-storage.service";

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit, OnDestroy {
  notes: Notes[];
  creatingMode: boolean = false;
  isLoading: boolean = false;
  errorMsg: string = '';

  private fetchingNotesSub: Subscription;
  private onCloseModalSub: Subscription;
  private fetchNotesTimeout;

  constructor(private notesService: NotesService) { }

  ngOnInit(): void {
    this.onFetchNotes();
    this.onCloseModalSub = this.notesService.creatingMode
      .subscribe((status: boolean) => this.creatingMode = status);
  }

  ngOnDestroy(): void {
    this.fetchingNotesSub.unsubscribe();
    clearTimeout(this.fetchNotesTimeout);
  }

  onFetchNotes() {
    this.isLoading = true;
    this.fetchingNotesSub = this.notesService.onFetchNotes().subscribe((resData: Notes[] | string) => {
      if (typeof resData === "string") {
        this.errorMsg = resData;
      } else {
        this.notes = resData;
      }
      this.isLoading = false;
    })
  }

  onAdd() {
    this.creatingMode = true;
  }

  onDelete(noteID) {
    this.notes = this.notesService.onDeleteNote(noteID, this.notes);
  }

  onAddNote(): void {
    this.isLoading = true;
    this.fetchNotesTimeout = setTimeout(() => {
      this.onFetchNotes();
    }, 1000)
  }
}
