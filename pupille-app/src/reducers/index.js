import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

import card, * as fromCard from './card';
import theme, * as fromTheme from './theme';
import subject, * as fromSubject from './subject';
import { user } from './user';

const reducer = combineReducers({
    form: reduxFormReducer,
    card,
    theme,
    subject,
    user,
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

export const getCardsInTheme = (state) => fromTheme.getCardsIdsInTheme(state.theme).map(id => fromCard.getCard(state.card, id).question);

