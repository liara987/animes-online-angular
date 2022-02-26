import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { detailsType } from '../details/details.component';
import animes from '../animes.json';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss'],
})
export class PlayComponent implements OnInit {
  videoUrl!: string;
  detail!: detailsType;
  id!: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'))
    this.setVideo()
  }

  setVideo() {
    const anime = this.getAnimeById(this.id)
    this.videoUrl = anime.episodes[0].url;

    this.detail = {
      image: anime.cover,
      sinopse: anime.details.sinopse,
      category: anime.details.category,
      title: anime.title,
    };
  }

  newEpisode(url: string) {
    this.videoUrl = url;
  }

  getAnimeById(id: number) {
    return animes
      .filter((anime) => anime.id === id)
      .reduce((obj: any, item: any) => Object.assign(obj, {
        ...item
      }), {})
  }
}

