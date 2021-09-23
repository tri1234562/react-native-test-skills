import {
  INCREASE_DATA_REQUEST,
  DECREASE_DATA_REQUEST,
  RESET_DATA_REQUEST,
  DECREASE_DATA_SUCCESS,
  INCREASE_DATA_SUCCESS,
  RESET_DATA_SUCCESS
} from '../actionsType';
import { makeActionCreator } from '../ultis';

export const increaseAction = makeActionCreator(INCREASE_DATA_REQUEST);
export const increaseCompleteAction = makeActionCreator(INCREASE_DATA_SUCCESS);

export const decreaseAction = makeActionCreator(DECREASE_DATA_REQUEST);
export const decreaseCompleteAction = makeActionCreator(DECREASE_DATA_SUCCESS);

export const resetCountAction = makeActionCreator(RESET_DATA_REQUEST);
export const resetCountCompleteAction = makeActionCreator(RESET_DATA_SUCCESS);
