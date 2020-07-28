import React from 'react';
import {MOVIES_COUNT} from '../../const';

interface ShowMoreBtnProps {
  onClick: (count: number) => void;
}

const ShowMoreBtn: React.FC<ShowMoreBtnProps> = ({onClick}) => {
  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={() => onClick(MOVIES_COUNT)}
      >
        Show more
      </button>
    </div>
  );
};

export default ShowMoreBtn;
