import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface SnackbarState {
  visible: boolean;
  message: string | undefined;
  type: 'success' | 'error' | 'info';
}

const initialState = {
  visible: false,
} as SnackbarState;

const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState,
  reducers: {
    hideSnackbar(state) {
      state.visible = false;
    },
    showSnackbar(state, { payload }: PayloadAction<Omit<SnackbarState, 'visible'>>) {
      state.visible = true;
      state.message = payload.message;
      state.type = payload.type;
    },
  },
});

export const { reducer } = snackbarSlice;
export const { hideSnackbar, showSnackbar } = snackbarSlice.actions;
