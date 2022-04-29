import ProfileView from '../src/view/task-profile-view.js';
import SortView from '../src/view/task-sort-view.js';
import MainNavView from '../src/view/task-navigation-view.js';
import FilmListView from '../src/view/task-list-view.js';
import FilmCardView from '../src/view/task-card-film-view.js';
import ShowMoreView from '../src/view/task-show-more-view.js';
import FilmPopupView from '../src/view/task-details-film-popup-view.js';
import {render} from '../src/render.js';
import FilmPresenter from '../src/presenter/film-presenter.js';

const siteHeaderElement = document.querySelector('.header');
const siteMainElement = document.querySelector('.main');
const filmPresenter = new FilmPresenter();
const filmListElement = document.querySelector('.films-list');

render(new ProfileView(), siteHeaderElement);
render(new MainNavView(), siteMainElement);
render(new SortView(), siteMainElement);
render(new FilmListView(), siteMainElement);
render(new FilmCardView(), filmListElement);
render(new ShowMoreView(), siteMainElement);
render(new FilmPopupView(), siteMainElement);

filmPresenter.init(siteMainElement);
