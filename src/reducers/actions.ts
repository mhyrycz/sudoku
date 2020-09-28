import { Action, AnyAction } from 'redux';

import * as types from './types';

import { BLOCK_COORDS } from 'typings';

export const createGrid = (): Action => ({ type: types.CREATE_GRID });

export const selectBlock = (coords: BLOCK_COORDS): AnyAction => ({ coords, type: types.SELECT_BLOCK });
