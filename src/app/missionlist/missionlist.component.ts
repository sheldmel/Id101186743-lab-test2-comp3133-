import { Component, OnInit } from '@angular/core';
import { MissionService } from '../services/mission.service'
import {Mission} from '../interfaces/mission';
import { DataService } from '../services/data.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {
  displayedColumns: string[] = ['mission_name', 'launch_year', 'details', 'mission_patch_small', 'Mission details'];
  missionList: Mission[]
  dataSource: any
  constructor(private router: Router, private dataService: DataService, private missionService: MissionService) { }

  openDetailsWithService(details) {
    this.dataService.setData(42, details);
    this.router.navigateByUrl('/missionDetails/42');
  }

  ngOnInit(): void {
    this.missionService.getMissions()
    .subscribe((resp: Mission[])=>{
      this.missionList = resp;
      console.log(this.missionList)
      this.dataSource = this.missionList
    })
  }
}
