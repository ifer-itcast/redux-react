import { ADD, SUB } from './actionType.js';

export const addAction = (num=1) => ({
    type: ADD,
    num
});

export const subAction = (num=1) => ({
    type: SUB,
    num
});