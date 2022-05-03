import ProfileView from './view/profile-view.js';
import MainNavView from './view/navigation-view.js';
import SortView from './view/sort-view.js';
import CardFilmModel from './model/model-film-card.js';
import FilmsPresenter from './presenter/film-presenter.js';
import {render} from './render.js';


const siteHeaderElement = document.querySelector('.header');
const siteMainElement = document.querySelector('.main');
const cardFilmModel = new CardFilmModel();


render(new ProfileView(), siteHeaderElement);
render(new MainNavView(), siteMainElement);
render(new SortView(), siteMainElement);

const filmsPresenter = new FilmsPresenter();
filmsPresenter.init(siteMainElement, cardFilmModel);
