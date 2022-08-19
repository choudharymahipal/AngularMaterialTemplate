import { NestedTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { Router } from '@angular/router';
import { AuthService } from './shared/services/auth.service';

interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Fruit',
    children: [{ name: 'Apple' }, { name: 'Banana' }, { name: 'Fruit loops' }],
  },
  {
    name: 'Vegetables',
    children: [
      {
        name: 'Green',
        children: [{ name: 'Broccoli' }, { name: 'Brussels sprouts' }],
      },
      {
        name: 'Orange',
        children: [{ name: 'Pumpkins' }, { name: 'Carrots' }],
      },
    ],
  },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularMaterialTemplate';
  IsDrawer: boolean = true;
  isAuthenticated: boolean = false;
  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();

  constructor(public _authService: AuthService,private _router: Router) {
    this.dataSource.data = TREE_DATA;
    this.isAuthenticated = this._authService.isAuthenticated;
  }
  
  ngOnInit(): void {
    this.isAuthenticated = this._authService.isAuthenticated;
  }

  onLogout(){
    this._authService.isAuthenticated=false;
    this._router.navigateByUrl('/');
  }

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;

}
