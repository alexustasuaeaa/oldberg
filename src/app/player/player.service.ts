import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  audio: HTMLAudioElement;
  isPlaying: boolean = false;
  musicSource: string = './../../assets/music/Oldberg-summer.mp3';
  volume: number = 0.3;

  constructor(private router: Router) {
    this.audio = new Audio();
    this.audio.src = this.musicSource;
    this.audio.volume = this.volume;
    this.audio.loop = true;
//     this.play();
  }

  play(): void {
    this.audio.play();
    this.isPlaying = true;
  }

  pause(): void {
    this.audio.pause();
    this.isPlaying = false;
  }

  changeVolume(volume: number): void {
    if (this.isPlaying) {
    this.audio.volume = volume;
    this.volume = volume;
    }
  }
}
