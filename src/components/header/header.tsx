import React from 'react';
import {Link} from 'react-router-dom';
import {AuthorizationStatus} from '../../reducer/user/user';

interface HeaderProps {
  authStatus: string;
}

const Header: React.FC<HeaderProps> = ({authStatus}) => {
  const isAuthorized = authStatus === AuthorizationStatus.AUTH;
  return (
    <header className="page-header movie-card__head">
      <div className="logo">
        <Link to="/" className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>

      <div className="user-block">
        {
          isAuthorized ? (
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          ) :
            (
              <Link to="/sign-in" className="user-block__link">
                Sign in
              </Link>
            )
        }
      </div>
    </header>
  );
};

export default Header;
