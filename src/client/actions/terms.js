import uuidv4 from 'uuid/v4';

import { initialTerm, initialLine } from '../constants/term';


export const ADD_NEW_TERM = "term:addnew";

export const ADD_NEW_LINE = "term:add:line";

export const CHANGE_LOCATION = "term:location:change";

export const CLEAR_TERM = "term:command:clear";

export const DELETE_TERM = "term:delete";

export const ADD_REPOSITORY = "term:mkdir";

export const ADD_FILE = "term:touch";

export const REMOVE_FILE = "term:rm";

export const ADD_TO_COMMAND_HISTORY = "term:history:command:add";

export const addNewTerm = () => ({ type: ADD_NEW_TERM, newTerm: {...initialTerm, id: uuidv4()} });

export const addNewLine = (termId, location, line, ret) => ({ type: ADD_NEW_LINE, termId, location, line, ret });

export const changeLocation = (dest, termId) => ({ type: CHANGE_LOCATION, dest, termId });

export const clearTerm = (termId) => ({ type: CLEAR_TERM, termId });

export const deleteTerm = termId => ({ type: DELETE_TERM, termId });

export const addRepository = (termId, name) => ({ type: ADD_REPOSITORY, termId, name });

export const addFile = (termId, name) => ({ type: ADD_FILE, termId, name });

export const removeFile = (termId, name) => ({ type: REMOVE_FILE, termId, name });

export const addToCommandsHistory = (termId, command) => ({ type: ADD_TO_COMMAND_HISTORY, termId, command })