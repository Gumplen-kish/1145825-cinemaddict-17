import TaskProfileView from '../view/task-profile.js';
import TaskFilterView from '../view/task-filter.js';
import TaskMainNavView from '../view/task-navigation.js';
import TaskShowMoreView from '../view/task-show-more.js';
import {render} from '../render.js';


export default class FilmPresenter {

  init = (filmContainer) => {
    this.filmContainer = filmContainer;
    render(this.filmComponent, this.filmContainer);
    render(new TaskProfileView(), this.filmComponent.getElement());
    render(new TaskMainNavView(), this.filmComponent.getElement());
    render(new TaskFilterView(), this.filmComponent.getElement());

    render(new TaskShowMoreView(), this.filmComponent.getElement());
  };
}
