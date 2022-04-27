import TaskProfileView from '../src/view/task-profile.js';
import TaskFilterView from '../src/view/task-filter.js';
import TaskMainNavView from '../src/view/task-navigation.js';
import TaskListFilmView from '../src/view/task-list.js';
import TaskFilmCardView from '../src/view/task-card-film.js';
import TaskShowMoreView from '../src/view/task-show-more.js';
import {render} from '../src/render.js';


export default class FilmPresenter {
  filmComponent = new TaskFilmCardView();
  taskListComponent = new TaskListFilmView();

  init = (filmContainer) => {
    this.filmContainer = filmContainer;
    render(this.filmComponent, this.filmContainer);
    render(new TaskProfileView(), this.filmComponent.getElement());
    render(this.taskListComponent(), this.filmComponent.getElement());
    render(new TaskMainNavView(), this.filmComponent.getElement());
    render(new TaskFilterView(), this.filmComponent.getElement());

    for(let i=0; i<5; i++) {
      render(new TaskFilmCardView(), this.taskListComponent.getElement());
    }

    render(new TaskShowMoreView(), this.filmComponent.getElement());
  };
}
