import TaskProfileView from '../src/view/task-profile.js';
import TaskFilterView from '../src/view/task-filter.js';
import TaskMainNavView from '../src/view/task-navigation.js';
import TaskShowMoreView from '../src/view/task-show-more.js';
import {render} from '../src/render.js';

const siteHeaderElement = document.querySelector('.header');
const siteMainElement = document.querySelector('.main');

render(new TaskProfileView(), siteHeaderElement);
render(new TaskMainNavView(), siteMainElement);
render(new TaskFilterView(), siteMainElement);
render(new TaskShowMoreView(), siteMainElement);

