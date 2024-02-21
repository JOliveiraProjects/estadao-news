import {
  isRejected,
  isRejectedWithValue,
  isFulfilled,
  Middleware,
  MiddlewareAPI,
} from '@reduxjs/toolkit';
import { showSnackbar } from './snackbar-slice';

export const rtkQueryMiddleware: Middleware = (api: MiddlewareAPI) => (next) => (action) => {
  const statusDescription =
    action?.payload?.status?.description || action?.payload?.data?.descricaoStatus;
  const hasStatusDescription = !!statusDescription;
  const showFulfilledModal = isFulfilled(action) && hasStatusDescription;
  const showRejectedModal = !!(isRejected(action) || isRejectedWithValue(action));

  if (showFulfilledModal) {
    const message = hasStatusDescription ? statusDescription : 'Operação executada com Successo.';
    api.dispatch(showSnackbar({ message, type: 'success' }));
  }

  if (showRejectedModal) {
    const message = hasStatusDescription
      ? statusDescription
      : 'Desculpe, ocorreu um erro desconhecido.';
    api.dispatch(showSnackbar({ message, type: 'error' }));
  }

  return next(action);
};
