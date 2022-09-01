import {Action as ReduxAction} from '@reduxjs/toolkit';

export type Action = {
  payload?: {
    data: any;
  };
} & ReduxAction;
