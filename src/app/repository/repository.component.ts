import { Component, OnInit } from '@angular/core';
import { Repository } from '../repository';
import { RepositoryService } from '../repository.service';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  repo: Repository[];
  constructor(public repoService: RepositoryService) { }
  repoSearch(searchName){
    this.repoService.findRepoes(searchName).subscribe(data=>{
      this.repo=data;
      return (this.repo)
    }
    );
  }
  ngOnInit() {
    this.repoSearch('carol-wambui');
  }
}
