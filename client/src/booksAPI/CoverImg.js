import React from 'react';
import { getBookCoverByOLID } from "./index";

export const CoverImg = ({olid}) => {
    return <img src={getBookCoverByOLID(olid)} width="50px" height="50px" alt='collection-list-img'/>;
  }