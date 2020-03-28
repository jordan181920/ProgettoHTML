import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MenuItem } from 'src/app/model/menu-item.interface';

@Component({
  selector: 'app-menu-component',
  templateUrl: './menu-component.component.html',
  styleUrls: ['./menu-component.component.scss']
})
export class MenuComponentComponent implements OnInit {
  @Output()
  selectMenuId: EventEmitter<number> = new EventEmitter()

  menuItems: MenuItem[] = [
  {

    id: 1, description: 'Home', selected: true
  },
  {
    id: 2, description: 'Lista Videogiochi', selected: false
  },
  {
    id: 3, description: 'Modifica', selected: false
  }
  

  ]

    
  
  
  constructor() { }

  ngOnInit(): void {
  }

  selectMenuItems(id: number){
    this.selectMenuId.emit(id);
  }

}
