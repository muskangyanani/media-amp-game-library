import { createSlice } from '@reduxjs/toolkit';

// Load from localStorage
const loadFromLocalStorage = () => {
  try {
    const stored = localStorage.getItem('favorites');
    return stored ? JSON.parse(stored) : [];
  } catch (err) {
    return [];
  }
};

const saveToLocalStorage = (state) => {
  try {
    localStorage.setItem('favorites', JSON.stringify(state.items));
  } catch {}
};

const initialState = {
  items: loadFromLocalStorage(),
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      if (!state.items.find((game) => game.id === action.payload.id)) {
        state.items.push(action.payload);
        saveToLocalStorage(state);
      }
    },
    removeFavorite: (state, action) => {
      state.items = state.items.filter((game) => game.id !== action.payload);
      saveToLocalStorage(state);
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
