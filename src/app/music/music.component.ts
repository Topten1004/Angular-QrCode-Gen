import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css'],
})
export class MusicComponent implements OnInit {
  ngOnInit(): void {
    document.addEventListener('keydown', (key: any) => {
      if (key.code == 'Space' && !this.play) {
        this.Play();
      } else if (key.code == 'Space' && this.play) {
        this.Pause();
      }
    });

    const elemento_padre = document.querySelector(
      '.progress-bar'
    ) as HTMLElement;
    const progress_bar = document.querySelector(
      '.progress-bar-value'
    ) as HTMLElement;

    elemento_padre.addEventListener('click', (place: any) => {
      console.log(place.clientX);
      progress_bar.style.width = `${place.clientX}px`;
      progress_bar.style.transition = `0s`;
    });
  }

  play = false;
  Play() {
    const progress_bar = document.querySelector(
      '.progress-bar-value'
    ) as HTMLElement;

    this.play = !this.play;

    progress_bar.style.width = '100%';
    progress_bar.style.transition = '5s linear';

    console.log(progress_bar.clientWidth);
  }

  Pause() {
    const progress_bar = document.querySelector(
      '.progress-bar-value'
    ) as HTMLElement;
    const elemento_padre = document.querySelector(
      '.progress-bar-music'
    ) as HTMLElement;

    this.play = !this.play;
    let progress_bar_width = progress_bar.clientWidth;

    const anchoEnPorcentaje =
      (progress_bar_width / elemento_padre.clientWidth) * 100;

    progress_bar.style.width = `${anchoEnPorcentaje}%`;
  }

  Temporizador() {}
}
