import {createElement} from '../render.js';

const ShowMoreTemplate = () =>
  '<button class="films-list__show-more">Show more</button>';

export default class ShowMoreView {
  get template() {
    return ShowMoreTemplate();
  }

  #element = null;

  getElement() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  removeElement() {
    this.#element = null;
  }
}
