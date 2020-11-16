import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Repository } from '../repository';
import { UsersService } from '../users.service';
import { HttpClient } from '@angular/common/http';
import { RepositoryService } from '../repository.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  
  // get(searchName: any) {


  //   throw new Error("Method not implemented.");
  // }
  // getReopos(searchName: any) {
  //   throw new Error("Method not implemented.");
  // }
  // allRepos: any;

  user:User[];
  repo:Repository[];

  constructor(public serviceFind:UsersService, public serviceRepo:RepositoryService) { }
 findUserName(searchName){
   this.serviceFind.findUser(searchName).then(
     (success)=>{
       this.user=this.serviceFind.user
     },
    (error)=>{
      console.log(error);
    }
     
   );
   this.serviceRepo.findRepoes(searchName).subscribe(
     (success)=>{
       this.repo=success
       return(this.repo)
     }
   )
 }

  ngOnInit(): void {
    this.findUserName('carol-wambui');
  }

}
