import React from 'react';
import { Link } from 'react-router-dom';
import { RoutesString } from '../../Modules/routesString';

const PageErr:React.FC = () => {
  return (
    <div className="error">
            <div className="error-container">
                <h1>404</h1>
                <p>Sorry, the page you visited does not exist.</p>
                <Link to={RoutesString.Home}>Go Home</Link>
            </div>
        </div>
  );
};

export default PageErr;
