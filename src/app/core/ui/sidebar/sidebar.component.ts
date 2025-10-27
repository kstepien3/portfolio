import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'zen-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[attr.data-opened]': 'opened()',
  },
})
export class Sidebar {
  readonly opened = input<boolean>(false);
}
