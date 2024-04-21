import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../Task';

@Pipe({
  name: 'searchFilter',
  standalone: true
})
export class SearchFilterPipe implements PipeTransform {

  transform(task: Task[] | null, searchText: string): Task[] | null {
    if (!task || !searchText) {
      return task; // Return the original array if no task or searchText is provided
    }

    searchText = searchText.toLowerCase().trim();

    return task.filter(task =>
      task.text.toString().toLowerCase().includes(searchText)
  
    );
  }
}
