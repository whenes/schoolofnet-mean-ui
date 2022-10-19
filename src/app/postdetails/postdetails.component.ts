import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../services/post';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-postdetails',
  templateUrl: './postdetails.component.html',
  styleUrls: ['./postdetails.component.css']
})
export class PostdetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute,
            private appService: AppService) { }

  post: Post;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.appService.fetch(params.slug).subscribe(result => this.post = result);
    })
  }

}
