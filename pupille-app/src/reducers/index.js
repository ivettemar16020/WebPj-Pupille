import { combineReducers } from 'redux';

import theme, * as fromTheme from './theme';
import subject, * as fromSubject from './subject';

const reducer = combineReducers({
  theme,
  subject,
});

export default reducer;

export const getCard = (state,id) =>
    fromCard.getCard(state.card, id);

export const getTheme = (state,id) =>
    fromTheme.getTheme(state.theme, id);

export const getSubject = (state,id) =>
    fromSubject.getSubject(state.subject, id);

export const getThemes = (state,id) =>
    fromTheme.getThemes(state.theme);

export const getSubjects = (state,id) =>
    fromSubject.getSubjects(state.subject);

export const getCardsInTheme = (state) => fromCard.getCardsIdsInTheme(state.card).map(id => fromTheme.getCard(state.theme, id).question);
