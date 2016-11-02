import React from 'react';
import noImageAvailable from '../../img/no_image_available.svg';

export default (props) => {

  const url = 'http://image.tmdb.org/t/p/w',
        {
          image,
          imageClassName,
          wrapperClassName,
          resolution,
          title
        } = props;

  return (
    <div className={ wrapperClassName }>
      {
        image ? <img
              className={ imageClassName }
              src={ `${ url }${ resolution }${ image }` }
              alt={ title } />
          : <img
              className={ imageClassName }
              src={ noImageAvailable }
              alt={ title } />
      }
    </div>
  );
};
