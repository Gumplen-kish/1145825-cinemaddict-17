
import FilmListView from '../view/list-view.js';
import FilmCardView from '../view/card-film-view.js';
import ShowMoreView from '../view/show-more-view.js';
import FilmPopupView from '../view/details-film-popup-view';
import { render } from '../render.js';

const CountFilmsCards = 3;

export default class FilmsPresenter {
  init(siteMainElement, cardFilmModel) {
    this.siteMainElement = siteMainElement;
    const filmListView = new FilmListView();
    this.cardFilmModel = cardFilmModel;
    this.filmCards = [...this.CardFilmModel.getfilmCards()];

    render(filmListView, this.siteMainElement);
    for (let i = 0; i < CountFilmsCards; i++) {
      render(new FilmCardView(), filmListView.getElement().querySelector('.films-list__container'));
    }

    const filmCards = filmListView.querySelectorAll('.film-card__link');
    filmCards.forEach((filmCard, i) => {
      filmCard.addEventListener('click', () => {
        const bodyElement = document.querySelector('body');
        render(new FilmPopupView(this.FilmDatas[i],), bodyElement);
        const closeButton = document.querySelector('.film-details__close-btn');
        closeButton.addEventListener('click', () => {
          const popup = document.querySelector('.film-details');
          popup.remove();
        });
      });
    });

    render(new ShowMoreView(), this.filmListView.getElement());
  }
}

