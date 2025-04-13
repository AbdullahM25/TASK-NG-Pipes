import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recentLogin',
  standalone: true,
})
export class RecentLoginPipe implements PipeTransform {
  transform(value: Date): unknown {
    const daysAgo =
      (Date.now() - new Date(value).getTime()) / (1000 * 60 * 60 * 24);

    let recentLoginstring = '';
    if (daysAgo <= 7) recentLoginstring = '🔥';
    if (daysAgo < 30 && daysAgo > 7) recentLoginstring = '🛌';
    if (daysAgo <= 90 && daysAgo > 30) recentLoginstring = '🦥';
    if (daysAgo > 90) recentLoginstring = '☠️';
    return recentLoginstring;
  }
}
