import AbstractView from './abstract-view.js';
import { SortType } from '../utils/sort-functions.js';

const CreateSortTemplate = (
  `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
            <div class="trip-sort__item  trip-sort__item--day">
              <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day" checked>
              <label class="trip-sort__btn" for="sort-day">Day</label>
            </div>

            <div class="trip-sort__item  trip-sort__item--event">
              <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>
              <label class="trip-sort__btn" for="sort-event">Event</label>
            </div>

            <div class="trip-sort__item  trip-sort__item--time">
              <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time" data-sort-type="${SortType.TIME.text}">
              <label class="trip-sort__btn" for="sort-time">Time</label>
            </div>

            <div class="trip-sort__item  trip-sort__item--price">
              <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price" data-sort-type="${SortType.PRICE.text}">
              <label class="trip-sort__btn" for="sort-price">Price</label>
            </div>

            <div class="trip-sort__item  trip-sort__item--offer">
              <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>
              <label class="trip-sort__btn" for="sort-offer">Offers</label>
            </div>
          </form>
  `);


export default class SortView extends AbstractView{
  get template() {
    return CreateSortTemplate;
  }

  // setTimeSortClickHandler = (callback) => {
  //   this._callback.timeSortClick = callback;
  //   document.querySelector('.trip-sort__item--time').addEventListener('click', this.#timeSortClickHandler);
  // }

  // #timeSortClickHandler = (evt) => {
  //   evt.preventDefault();
  //   this._callback.timeSortClick();
  // }

  setSortChengeClickHandler = (callback) => {
    this._callback.sortChange = callback;
    document.querySelectorAll('.trip-sort__input').forEach((element) => element.addEventListener('click', this.#SortChangeHandler));
  }

  #SortChangeHandler = (evt) => {
    if (evt.target.checked === true) {
      this._callback.sortChange(evt.target.dataset.sortType);
    }
  }

  // setDaySortClickHandler = (callback) => {
  //   this._callback.daySortClick = callback;
  //   document.querySelector('.trip-sort__item--day').addEventListener('click', this.#daySortClickHandler);
  // }

  // #daySortClickHandler = (evt) => {
  //   evt.preventDefault();
  //   this._callback.daySortClick();
  // }
}
