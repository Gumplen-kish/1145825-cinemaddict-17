
import FilmListView from '../view/list-view.js';
import FilmCardView from '../view/card-film-view.js';
import ShowMoreView from '../view/show-more-view.js';
import FiimPopupView from '../view/details-film-popup-view';
import { render } from '../render.js';

const CountFilmsCards = 3;

export default class FilmsPresenter {
  init(siteMainElement) {
    this.siteMainElement = siteMainElement;
    const filmListView = new FilmListView();

    render(filmListView, this.siteMainElement);
    for (let i = 0; i < CountFilmsCards; i++) {
      render(new FilmCardView(), filmListView.getElement().querySelector('.films-list__container'));
    }
    render(new ShowMoreView(), filmListView.getElement());
    render(new FiimPopupView(), this.siteMainElement);
  }
}
