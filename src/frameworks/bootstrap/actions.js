import {Actions} from '../actions';

export class ActionsCustomElement extends Actions {

  activate(model) {
    this.attribute = model.attribute;
    this.model = model.value;
  }

}
