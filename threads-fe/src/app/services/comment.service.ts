import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment';
import { Comment } from '../interfaces/comment.interface';

type CreateCommentDto = {
  parentId?: string;
  text: string;
  userId: string;
}

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  getComments(parentId: string = ''): Observable<Comment[]> {
    let url = `${environment.apiBaseUrl}/comments`;

    if (parentId) {
      url += `?parentId=${parentId}`;
    }

    return this.http.get<Comment[]>(url);
  }

  createComment(comment: CreateCommentDto) {
    return this.http.post<Comment>(`${environment.apiBaseUrl}/comments`, comment);
  }
}
