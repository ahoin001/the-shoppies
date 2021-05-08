import { atom } from 'recoil';

export const movieSearchTitleState = atom({
  key: 'movieSearchTitleState',
  default: '',
});

export const movieListState = atom({
  key: 'movieListState',
  default: [],
});

export const nominationListState = atom({
  key: 'nominationListState',
  default: [],
});

export const isLoadingState = atom({
  key: 'isLoading',
  default: true,
});
