import TaskProfileView from '../src/view/task-profile.js';
import TaskFilterView from '../src/view/task-filter.js';
import TaskMainNavView from '../src/view/task-navigation.js';
import TaskListFilmView from '../src/view/task-list.js';
import TaskFilmCardView from '../src/view/task-card-film.js';
import TaskShowMoreView from '../src/view/task-show-more.js';
import TaskFilmPopupView from '../src/view/task-details-film-popup.js';
import {render} from '../src/render.js';
import FilmPresenter from '../src/presenter/film-presenter.js';

const siteHeaderElement = document.querySelector('.header');
const siteMainElement = document.querySelector('.main');
const filmPresenter = new FilmPresenter();

render(new TaskProfileView(), siteHeaderElement);
render(new TaskMainNavView(), siteMainElement);
render(new TaskFilterView(), siteMainElement);
render(new TaskListFilmView(), siteMainElement);
render(new TaskFilmCardView(), siteMainElement);
render(new TaskShowMoreView(), siteMainElement);
render(new TaskFilmPopupView(), siteMainElement);

filmPresenter.init(siteMainElement);
