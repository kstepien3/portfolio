import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'zen-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Sidebar {}
