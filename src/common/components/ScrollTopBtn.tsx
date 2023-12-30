import { Button, IconButton } from '@mui/material';
import Iconify from './iconify/Iconify';
import { useEffect, useState } from 'react';

const ScrollTopBtn = () => {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <>
      {showButton && (
        <Button
          onClick={scrollToTop}
          variant="contained"
          sx={{ minWidth: '50px', minHeight: '50px', borderRadius: '50%', position: 'fixed', bottom: 50, right: 20 }}
        >
          <Iconify icon={'mingcute:up-fill'} />
        </Button>
      )}
    </>
  );
};

export default ScrollTopBtn;
