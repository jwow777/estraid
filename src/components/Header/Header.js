import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Avatar,
  Button,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  MenuItem,
  MenuList,
  Popover,
  SwipeableDrawer,
} from '@material-ui/core';
import { ChevronRight, Menu } from '@material-ui/icons';
import clsx from 'clsx';
import logo from '../../images/header/logo.svg';
import ru from '../../images/flags/ru.png';
import us from '../../images/flags/us.png';
import './Header.css';

const useStyles = makeStyles((theme) => ({
  button: {
    minHeight: 40,
    minWidth: 90,
    borderRadius: 5,
    backgroundColor: '#03CDBE',
    fontFamily: '"Inter", sans-serif',
    fontWeight: 400,
    fontSize: 18,
    lineHeight: 1.2,
    color: '#fff',
    textTransform: 'none',
    borderRadius: 2,
    '&:hover': {
      backgroundColor: '#00E8D6',
    },
    [theme.breakpoints.down('xs')]: {
      minHeight: 32,
      minWidth: 76,
      fontSize: 16,
    },
  },
  langBox: {
    '& .MuiPopover-paper': {
      marginTop: 10,
    },
  },
  list: {
    width: '210px',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  drawerHeader: {
    height: 48,
    display: 'flex',
    padding: '6px 4px',
  },
  listItem: {
    marginTop: 9,
    marginBottom: 9,
    '& .MuiTypography-body1': {
      fontFamily: '"Inter", sans-serif',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: 22,
      lineHeight: '27px',
      color: '#000',
    },
  },
  bottomBox: {
    width: '100%',
    background: '#f1f1f1',
    display: 'grid',
    alignItems: 'center',
    gridGap: 20,
    marginTop: 'auto',
    boxSizing: 'border-box',
    padding: '40px 16px',
  },
  phone: {
    fontFamily: '"Inter", sans-serif',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 18,
    lineHeight: '22px',
    textDecoration: 'none',
    color: '#1c1c1c',
  },
  buttonFeedBack: {
    minHeight: 30,
    borderRadius: 5,
    backgroundColor: '#fff',
    fontFamily: '"Inter", sans-serif',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 1.2,
    color: '#000',
    textTransform: 'none',
    borderRadius: 9,
    '&:hover': {
      backgroundColor: '#00E8D6',
      color: '#fff',
    },
  },
}));

function Header({ openPopup }) {
  const classes = useStyles();
  // Выбор языка
  const [language, setLanguage] = useState(ru);
  const [anchorElLang, setAnchorElLang] = useState(null);
  const openLang = Boolean(anchorElLang);
  const handleMenuLang = (e) => setAnchorElLang(e.currentTarget);
  const handleCloseLang = (e) => {
    setLanguage(e.target.lang || language);
    setAnchorElLang(null);
  };
  // Боковое меню
  const [state, setState] = useState(false);
  const toggleDrawer = (open) => (event) => {
    if (
      event
      && event.type === 'keydown'
      && (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setState(open);
  };
  const list = () => (
    <div
      className={clsx(classes.list)}
      role="presentation"
      onKeyDown={toggleDrawer(false)}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={toggleDrawer(false)}>
          <ChevronRight fontSize="large"/>
        </IconButton>
      </div>
      <Divider />
      <List>
        {['Услуги', 'Почитать', 'Кейсы', 'Контакты'].map((text) => (
          <ListItem button key={text} onClick={toggleDrawer(false)}>
            <ListItemText primary={text} className={classes.listItem} />
          </ListItem>
        ))}
      </List>
      <div className={classes.bottomBox}>
        <a href="tel:+74954899696" className={classes.phone}>
          +7 (495) 489-96-96
        </a>
        <Button
          variant="contained"
          className={classes.buttonFeedBack}
          onClick={openPopup}
        >
          Оставить заявку
        </Button>
        <div className='header__lang-swipe-box' onClick={handleMenuLang}>
          <img src={language} alt='language' className='header__lang-current-swipe-box'/>
          <p className='header__lang-text'>{language == ru ? 'Русский' : 'English'}</p>
        </div>
      </div>
    </div>
  );
  const [isAuth, setIsAuth] = useState(false);
  return (
    <header>
      <div className='header__container'>
        <div className='header__logo-box'>
          <Link to='/'>
            <img src={logo} alt='Estraid' className='header__logo'/>
          </Link>
          <p className='header__title'>Estraid Broker</p>
        </div>
        <div className='header__button-box'>
          <a href='tel:+74954899696' className='link header__phone'>
            +7 (495) 489-96-96
          </a>
          <img src={language} alt='language' className='header__lang-current' onClick={handleMenuLang}/>
          <Popover
            anchorEl={anchorElLang}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            open={openLang}
            onClose={handleCloseLang}
            className='header__lang-box'
          >
            <MenuList>
              <MenuItem onClick={handleCloseLang} lang={ru}>
                <img src={ru} alt='Русский' className='header__lang-image' lang={ru}/>
                Русский
              </MenuItem>
              <MenuItem onClick={handleCloseLang} lang={us}>
                <img src={us} alt='English' className='header__lang-image' lang={us}/>
                English
              </MenuItem>
            </MenuList>
          </Popover>
          { isAuth 
            ? (<a href='/login'>
                <Avatar src='https://get.wallhere.com/photo/1600x1200-px-action-adventure-alien-aliens-Avatar-fantasy-fi-fighting-futuristic-sci-warrior-1635355.jpg' />
              </a>)
            : <Button className={classes.button} href='/login'>Вход</Button>
          }
          <IconButton
            className="header__menu-button-mobile"
            onClick={toggleDrawer(true)}
          >
            <Menu />
          </IconButton>
          <SwipeableDrawer
            anchor="right"
            open={state}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
          >
            {list()}
          </SwipeableDrawer>
        </div>        
      </div>
    </header>
  );
}

export default Header;
