/**
 * This file includes all the reducers under reducers directory,
 * Import all and add to combineReducers to use any among whole app
 *
 * ** */
 import { combineReducers } from 'redux';

 import app from './app';
 import { RootState } from './types/rootState.types';
 
 export default combineReducers<RootState>({
   app,
 });
 