import React from 'react';
import {getAllUsersThunkCreator} from "../redux/users-reducer";
import {createSelector} from "reselect";

export const getUsers=(state) => {return state.usersContent.allUsers};

export const getUsersSelectorForCreateTaskForm=createSelector();
      if (!state.usersContent.users){
           getAllUsersThunkCreator();
      }
};

