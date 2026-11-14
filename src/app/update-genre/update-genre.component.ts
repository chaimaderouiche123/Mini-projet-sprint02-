import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Genre } from '../model/genre.model';

@Component({
  selector: 'app-update-genre',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './update-genre.component.html',
  styles: ``
})
export class UpdateGenreComponent implements OnInit {

  @Input()
  genre!: Genre;

  @Input()
  ajout!: boolean;

  @Output()
  genreUpdated = new EventEmitter<Genre>();

  ngOnInit(): void {}

  saveGenre() {
    this.genreUpdated.emit(this.genre);
  }
}
