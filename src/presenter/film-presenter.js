
import FilmListView from '../view/list-view.js';
import FilmCardView from '../view/card-film-view.js';
import ShowMoreView from '../view/show-more-view.js';
import FilmPopupView from '../view/details-film-popup-view';
import { render } from '../render.js';

const COUNT_FILMS_CARD = 5;

export default class FilmsPresenter {
  #showMoreView = new ShowMoreView();

  init(siteMainElement, cardFilmModel) {
    this.siteMainElement = siteMainElement;
    const filmListView = new FilmListView();
    this.cardFilmModel = cardFilmModel;
    this.cardFilms = [...this.cardFilmModel.cardFilm];
    this.#showMoreView = new ShowMoreView();
    render(filmListView, this.siteMainElement);
    for (let i = 0; i < COUNT_FILMS_CARD; i++) {
      render(new FilmCardView(this.cardFilms[i]), filmListView.element.querySelector('.films-list__container'));
    }

    const cardFilmLinks = siteMainElement.querySelectorAll('.film-card__link');
    const bodyElement = document.querySelector('body');


    cardFilmLinks.forEach((cardFilmLink, i) => {
      cardFilmLink.addEventListener('click', () => {
        const filmPopupView = new FilmPopupView(this.cardFilms[i]);
        render(filmPopupView, bodyElement);
        const closeButton = filmPopupView.element.querySelector('.film-details__close-btn');

        const escKeyDown = (evt) => {
          if (evt.key === 'Escape' || evt.key === 'Esc') {
            evt.preventDefault();
            filmPopupView.element.remove();
            document.removeEventListener('keydown', escKeyDown);
          }
        };

        closeButton.addEventListener('click', (evt) => {
          evt.preventDefault();
          filmPopupView.element.remove();
          document.removeEventListener('keydown', escKeyDown);
        });
        document.addEventListener('keydown', escKeyDown);
      });
    });


    if(this.cardFilms.length > COUNT_FILMS_CARD) {
      render(this.#showMoreView, filmListView.element.querySelector('.films-list__container'));

      this.#showMoreView.element.addEventListener('click',this.#showMoreView.handleShowMoreButtonClick);
    }
  }
}

