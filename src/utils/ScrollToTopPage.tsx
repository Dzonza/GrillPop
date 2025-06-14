import { useEffect, type FC } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTopPage: FC = () => {
  const history = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [history]);
  return null;
};

export default ScrollToTopPage;
