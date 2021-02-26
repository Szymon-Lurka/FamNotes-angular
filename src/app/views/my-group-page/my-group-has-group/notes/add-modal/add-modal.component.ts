import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {NotesService} from "../notes.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.scss']
})
export class AddModalComponent implements OnInit {
  @Output() addNote = new EventEmitter<any>();
  constructor(private notesService: NotesService) { }

  ngOnInit(): void {
  }
  onClose(): void {
    this.notesService.onCloseModal();
  }

  onSubmit(form: NgForm) {
    this.notesService.onAddNote(form.form.value.title, form.form.value.content);
    this.addNote.emit();
  }
}
