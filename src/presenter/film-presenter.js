import ProfileView from '../view/task-profile-view.js';
import SortView from '../view/task-sort-view.js';
import MainNavView from '../view/task-navigation-view.js';
import FilmListView from '../view/task-list-view.js';
import ShowMoreView from '../view/task-show-more-view.js';
import {render} from '../render.js';
import FilmCardView from '../view/task-card-film-view.js';


export default class FilmPresenter {
  filmComponent = new FilmCardView();
  filmListComponent = new FilmListView();

  init = (filmContainer) => {
    this.filmContainer = filmContainer;
    render(this.filmComponent, this.filmContainer);
    render(new ProfileView(), this.filmComponent.getElement());
    render(new MainNavView(), this.filmComponent.getElement());
    render(new SortView(), this.filmComponent.getElement());
    render(new FilmListView(),this.filmComponent.getElement());
    for (let i = 0; i<3; i++) {
      render(new FilmCardView(), this.filmListComponent.getElement());
    }
    render(new ShowMoreView(), this.filmComponent.getElement());
  };
}
