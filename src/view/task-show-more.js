import {createElement} from '../render.js';

const TaskShowMoreTemplate = () =>
  '<button class="films-list__show-more">Show more</button>';

export default class TaskShowMoreView {
  getTemplate() {
    return TaskShowMoreTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
