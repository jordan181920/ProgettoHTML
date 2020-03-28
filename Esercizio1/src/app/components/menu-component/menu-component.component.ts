import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/model/menu-item.interface';

@Component({
  selector: 'app-menu-component',
  templateUrl: './menu-component.component.html',
  styleUrls: ['./menu-component.component.scss']
})
export class MenuComponentComponent implements OnInit {

  menuItems: MenuItem[] = [
  {

    id: 1, description: 'Home', selected: true
  },
  {
    id: 2, description: 'Lista Videogiochi', selected: true
  },
  {
    id: 3, description: 'Modifica', selected: true
  }
  

  ]

    
  

  constructor() { }

  ngOnInit(): void {
  }

  selectMenuItems(id: number){
    console.log('id: '+id);

  }

}
