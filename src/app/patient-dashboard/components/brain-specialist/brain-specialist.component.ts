import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { interval } from 'rxjs';
import { DatashareService } from 'src/app/shared/datashare.service';

@Component({
  selector: 'app-brain-specialist',
  templateUrl: './brain-specialist.component.html',
  styleUrls: ['./brain-specialist.component.scss']
})
export class BrainSpecialistComponent  {
  data:any;
constructor(private dataService:DatashareService , private Actroute:ActivatedRoute){
  this.dataService.dataInSubject.next(true)
    
    
  
  
}
ngOnInit(){
  
    
  
 
 
}
    

}
