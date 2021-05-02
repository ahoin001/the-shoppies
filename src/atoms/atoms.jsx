import { atom } from 'recoil';

export const movieListState = atom({
  key: 'movieListState',
  default: [],
});

export const nominationListState = atom({
  key: 'nominationListState',
  default: [],
});
