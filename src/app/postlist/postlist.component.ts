import { Post } from './../services/post';
import { Component, OnInit } from '@angular/core';
import { AppService } from './../services/app.service';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit {

  posts: Post[];

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.fetchAll().subscribe( posts => this.posts = posts);
  }

}
