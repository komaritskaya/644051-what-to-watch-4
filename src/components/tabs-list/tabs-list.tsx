import React from 'react';
import {Link, NavLink, useRouteMatch} from 'react-router-dom';
import nanoid from 'nanoid';
// import Tab from '../tab/tab';

interface TabsListProps {
  tabs: {
    name: string;
    link: string;
  }[];
}

const TabsList: React.FC<TabsListProps> = ({tabs}) => {
  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {tabs.map((tab) => {
          const match = useRouteMatch({
            path: tab.link,
            exact: true
          });
          return (
            <li key={nanoid()} className={match ? `movie-nav__item movie-nav__item--active` : `movie-nav__item`}>
              <NavLink to={tab.link} className="movie-nav__link">
                {tab.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default TabsList;
