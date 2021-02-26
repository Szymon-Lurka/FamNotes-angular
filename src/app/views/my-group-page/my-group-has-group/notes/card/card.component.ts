import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() title: string;
  @Input() author: string;
  @Input() date: Date;
  @Input() content: string;
  @Input() id: string;
  @Output() deleteNote = new EventEmitter<any>();
  deleteMode: boolean = false;
  deleteModeTimeout = null;
  constructor() { }

  onDelete() {
    if (!this.deleteMode) {
      this.deleteMode = !this.deleteMode
      this.deleteModeTimeout = setTimeout(() => {
        this.deleteMode = false;
      }, 5000)
    } else {
      this.deleteMode = false;
      clearTimeout(this.deleteModeTimeout);
      this.deleteNote.emit();
    }
  }
  ngOnInit(): void {
  }

}
