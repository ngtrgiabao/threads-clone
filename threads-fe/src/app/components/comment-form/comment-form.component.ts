import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-comment-form',
  standalone: true,
  imports: [],
  templateUrl: './comment-form.component.html',
  styleUrl: './comment-form.component.scss'
})
export class CommentFormComponent {
  @Input() placeholder = 'Write something...';
  @Input() buttonText = 'Create';
  @Output() formSubmitted = new EventEmitter<{
    text: string;
  }>();

  onSubmit($event: SubmitEvent) {
    $event.preventDefault();
    const form = $event.target as HTMLFormElement;
    const textAreaElem = form.elements.namedItem('commentText') as HTMLTextAreaElement;
    const commentText = textAreaElem.value;
    form.reset();
    this.formSubmitted.emit({ text: commentText });
  }
}
