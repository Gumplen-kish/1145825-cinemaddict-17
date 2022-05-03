
import FilmListView from '../view/list-view.js';
import FilmCardView from '../view/card-film-view.js';
import ShowMoreView from '../view/show-more-view.js';
import FilmPopupView from '../view/details-film-popup-view';
import { render } from '../render.js';

const COUNT_FILMS_CARD = 5;

export default class FilmsPresenter {
  init(siteMainElement, cardFilmModel) {
    this.siteMainElement = siteMainElement;
    const filmListView = new FilmListView();
    this.cardFilmModel = cardFilmModel;
    this.filmCards = [...this.cardFilmModel.getFilmCards()];

    render(filmListView, this.siteMainElement);
    for (let i = 0; i < COUNT_FILMS_CARD; i++) {
      render(new FilmCardView(this.filmCards[i]), filmListView.getElement().querySelector('.films-list__container'));
    }

    const filmCards = siteMainElement.querySelectorAll('.film-card__link');
    filmCards.forEach((filmCard, i) => {
      filmCard.addEventListener('click', () => {
        const bodyElement = document.querySelector('body');
        render(new FilmPopupView(this.filmCards[i],), bodyElement);
        const closeButton = document.querySelector('.film-details__close-btn');
        closeButton.addEventListener('click', () => {
          const popup = document.querySelector('.film-details');
          popup.remove();
        });
      });
    });

    render(new ShowMoreView(), filmListView.getElement());
  }
}

