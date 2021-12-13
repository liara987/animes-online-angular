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
  videoUrl = '';
  detail: detailsType = {
    image: '',
    sinopse: '',
    category: '',
    title: '',
  };

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.setPlayById(Number(this.route.snapshot.paramMap.get('id')))
  }

  setPlayById(id: number) {
    animes.forEach((anime) => {
      if (anime.id === id) {
        this.videoUrl = anime.episodes[0].url;

        this.detail = {
          image: anime.cover,
          sinopse: anime.details.sinopse,
          category: anime.details.category,
          title: anime.title,
        };
      }
    });
  }

  newEpisode(url: string) {
    this.videoUrl = url;
  }
}
