import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { ZenAvatar } from '../../ui/avatar';
import { ZenButton } from '../../ui/button';
import { ZenIcon } from '../../ui/icon';
import { Sidebar } from '../../ui/sidebar/sidebar.component';

@Component({
  selector: 'app-nav',
  imports: [Sidebar, ZenAvatar, ZenIcon, ZenButton, ZenButton],
  templateUrl: './nav.html',
  styleUrl: './nav.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Nav {
  readonly opened = signal(false);

  toggle(): void {
    this.opened.update((v) => !v);
  }
}
