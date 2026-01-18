import React, { useState, useEffect } from 'react';

const SafeImage = React.forwardRef(({ 
  src, 
  alt = '', 
  fallback = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzMzMzMzMyIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+Tm8gSW1hZ2U8L3RleHQ+PC9zdmc+',
  className = '',
  style = {},
  onError: customOnError,
  ...props 
}, ref) => {
  const [imgSrc, setImgSrc] = useState(src || fallback);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (src && src !== imgSrc) {
      setImgSrc(src);
      setHasError(false);
    }
  }, [src, imgSrc]);

  const handleError = (e) => {
    if (!hasError) {
      setHasError(true);
      setImgSrc(fallback);
      if (customOnError) {
        customOnError(e);
      }
    } else {
      // Prevent infinite loop - hide image if fallback also fails
      e.target.style.display = 'none';
    }
  };

  return (
    <img
      ref={ref}
      src={imgSrc}
      alt={alt}
      className={className}
      style={style}
      onError={handleError}
      loading="lazy"
      {...props}
    />
  );
});

SafeImage.displayName = 'SafeImage';

export default SafeImage;
