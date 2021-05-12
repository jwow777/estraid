import React, { useState } from 'react';
import {
  Button,
  Grid,
  makeStyles,
  MenuItem,
  MenuList,
  Popover,
} from '@material-ui/core';
import logo from '../../images/header/logo.svg';
import ru from '../../images/flags/ru.png';
import us from '../../images/flags/us.png';
import './Header.css';

const useStyles = makeStyles(() => ({
  button: {
    width: 90,
    height: 40,
    fontWeight: 'normal',
    fontSize: 18,
    lineHeight: 22,
    borderRadius: 2,
    backgroundColor: '#03CDBE',
    fontFamily: '"Inter", sans-serif',
    fontStyle: 'normal',
    letterSpacing: '-0.035em',
    color: '#fff',
    textTransform: 'none',
    overflow: 'hidden',
    '&:hover': {
      backgroundColor: '#00E8D6',
    },
  },
}));

function Header() {
  const classes = useStyles();

  const [language, setLanguage] = useState(ru);
  const [anchorElLang, setAnchorElLang] = useState(null);
  const openLang = Boolean(anchorElLang);
  const handleMenuLang = (e) => setAnchorElLang(e.currentTarget);
  const handleCloseLang = (e) => {
    setLanguage(e.target.lang || language);
    setAnchorElLang(null);
  };
  return (
    <Grid
      container
      component='header'
      justify='space-between'
      alignItems='center'
      className='header'
    >
      <div className='header__logo-box'>
        <img src={logo} alt='Estraid Broker' className='header__logo'/>
        <p className='header__title'>Estraid Broker</p>
      </div>
      <nav>
        <ul className='menu'>
          <li className='menu__item'>Продукт</li>
          <li className='menu__item'>Цены</li>
          <li className='menu__item'>Кейсы</li>
          <li className='menu__item'>Контакты</li>
        </ul>
      </nav>
      <div className='header__button-box'>
        <img src={language} alt='language' className='header__lang-current' onClick={handleMenuLang}/>
        <Popover
          anchorEl={anchorElLang}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={openLang}
          onClose={handleCloseLang}
          className='header__lang-box'
        >
          <MenuList>
            <MenuItem onClick={handleCloseLang} lang={ru}>
              <img src={ru} alt='Русский' className='header__lang-image'/>
              Русский
            </MenuItem>
            <MenuItem onClick={handleCloseLang} lang={us}>
              <img src={us} alt='English' className='header__lang-image'/>
              English
            </MenuItem>
          </MenuList>
        </Popover>
        <Button
          variant='contained'
          color='primary'
          className={classes.button}
        >
          Вход
        </Button>
      </div>
    </Grid>
  );
}

export default Header;
