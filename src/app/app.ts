import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { Nav } from './core/components/nav/nav';

@Component({
  selector: 'app-root',
  imports: [Nav],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected readonly title = signal('portfolio');
}
