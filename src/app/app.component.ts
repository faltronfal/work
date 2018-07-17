import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<tree-root [focused]="true" [nodes]="nodes"></tree-root>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 

  nodes = [
    {
      id: 1,
      name: "Friends",
      type: "Group",
      children: [
        {id: 2, name: "Udi", type: "Contact"},
        {id: 3, name: "Tommy", type: "Contact"},
        {
          id: 6,
          name: "Old Friends",
          type: "Group",
          children: [
            {id: 7, name: "Itay", type: "Contact"},
          ]
        },
      ]
    },
    {
      id: 4,
      name: "Family",
      type: "Group",
      children: [
        {id: 5, name: "Roni", type: "Contact"},
      ]

    },
    {id: 8, name: "Ori", type: "Contact"},

  ];

}
