import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {SharedService} from "../../../../shared/shared.service";
import {Observable, of, Subject} from "rxjs";
import {Notes} from "./notes.model";
import {catchError, map} from "rxjs/operators";

const handleError = (type: string) => {
  switch (type) {
    case 'onFetch':
      return of('Nie udało się pobrać notatek!')
    case 'onAdd':
      return of('Nie udało się dodać notatki!')
    case 'onDelete':
      return of('Nie udało się usunąć notatki!')
    default:
      return of('Wystąpił nieoczekiwany błąd!')
  }
}

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  creatingMode = new Subject<boolean>();

  constructor(private http: HttpClient,
              private sharedService: SharedService) { }

  onFetchNotes(): Observable<any> {
    const groupId = this.sharedService.fetchUserData().groupID;
    return this.http.post("http://localhost:9000/note/get", {
      groupId,
    }).pipe(
      catchError(() => {
        return handleError( 'onFetch')
      }),
      map((resData: Notes[] | string) => {
        if (typeof resData === "string") {
          return resData;
        } else {
          const newNotes = resData;
          newNotes.sort((a,b) => {
            if (a.title.toLowerCase() < b.title.toLowerCase()) { return -1; }
            if (a.title.toLowerCase() > b.title.toLowerCase()) { return 1; }
            return 0;
          })
          return newNotes;
        }
      })
    )
  }

  onDeleteNote(noteId, notes: Notes[]): Notes[] {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        noteId
      },
    };
    this.http.delete("http://localhost:9000/note/delete", options)
      .pipe(
        catchError(() => {
          return handleError('onDelete')
        })
      ).subscribe(() => {})
    return notes.filter(note => note.id !== noteId);
  }

  onAddNote(title: string, content: string) {
    const groupId = this.sharedService.fetchUserData().groupID;
    const login = this.sharedService.fetchUserData().login;
    this.http.post("http://localhost:9000/note/add", {
      author: login,
      title,
      content,
      groupId,
    }).pipe(
      catchError(() => {
        return handleError('onAdd')
      })
    ).subscribe(() => {
      this.onCloseModal();
    });
  }

  onCloseModal() {
    this.creatingMode.next(false);
  }
}
