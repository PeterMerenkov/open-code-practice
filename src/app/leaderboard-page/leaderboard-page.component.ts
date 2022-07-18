import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionaireService } from '../_services/questionaire.service';

@Component({
  selector: 'app-leaderboard-page',
  templateUrl: './leaderboard-page.component.html',
  styleUrls: ['./leaderboard-page.component.scss']
})
export class LeaderboardPageComponent implements OnInit {

  leaderboard: any;

  constructor(
    private service: QuestionaireService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getLeaderboard()
  }

  getLeaderboard() {
    let id: number;
    this.route.paramMap.subscribe(p => {
      id = Number(p.get('id'))
      this.service.getLeaderboard(id).subscribe(
        l => {
          console.log(l)
          this.leaderboard = l
        }
      );
    })
  }

}
