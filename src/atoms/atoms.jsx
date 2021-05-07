import { atom } from 'recoil';

// export const movieTitleState = atom({
//   key: 'movieTitleState',
//   default: '',
// });

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
