import React from "react";
import { Button, Grid, makeStyles } from '@material-ui/core';
import computer from "../../images/main/computer.png";
import phone from "../../images/main/phone.png";
import './Main.css';

const useStyles = makeStyles(() => ({
  button: {
    height: 50,
    fontWeight: 500,
    fontSize: 20,
    lineHeight: 24,
    borderRadius: 5,
    backgroundColor: '#03CDBE',
    fontFamily: "'Inter', sans-serif",
    fontStyle: 'normal',
    letterSpacing: '-0.035em',
    color: '#fff',
    textTransform: 'none',
    overflow: 'hidden',
    '&:hover': {
      backgroundColor: '#00E8D6',
    }
  },
}));

function Main({ openPopup }) {
  const classes = useStyles();

  return (
    <Grid
      container
      component="main"
      justify="space-between"
      alignItems="center"
      className="content"
      style={{ background: `url(${phone}) 1135px 230px no-repeat, url(${computer}) 870px 50px no-repeat` }}
    >
      <div>
        <h1 className="title">
          Управление&nbsp;
          <span className="title text_turquoise">базой объектов&nbsp;</span>
          для агентств недвижимости
        </h1>
        <ul className="lists">
          <li className="lists__item">Управляйте одним из главных активов компании</li>
          <li className="lists__item">Добавляйте проекты, объекты, застройщиков, созадвайте подборки для клиентов</li>
          <li className="lists__item">Удобная интеграция с CRM</li>
        </ul>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={openPopup}
        >
          Попробовать 14 дней бесплатно
        </Button>
      </div>
    </Grid>
  );
}

export default Main;
