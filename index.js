import session from 'express-session';
import passport from './authenticate';
import './db';
import dotenv from 'dotenv';
import express from 'express';
import moviesRouter from './api/movies';
import genresRouter from './api/genres';
import bodyParser from 'body-parser';
import {loadUsers, loadMovies} from './seedData';
import usersRouter from './api/users';
import swaggerUi from 'swagger-ui-express';
import specs from './swagger.json';



dotenv.config();
const errHandler = (err, req, res, next) => {
  /* if the error in development then send stack trace to display whole error,
  if it's in production then just send error message  */
  if(process.env.NODE_ENV === 'production') {
    return res.status(500).send(`Something went wrong!`);
  }
  res.status(500).send(`Hey!! You caught the error 👍👍, ${err.stack} `);
};
if (process.env.SEED_DB) {
  loadUsers();
  loadMovies();
}
const app = express();

app.use(session({
  secret: 'ilikecake',
  resave: true,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use('/api/movies', passport.authenticate('jwt', {session: false}), moviesRouter);
app.use('/api/genres', genresRouter);
app.use('/api/users', usersRouter);
app.use(
  "/",
  swaggerUi.serve,
  swaggerUi.setup(specs)
);
app.use(errHandler);

export default app;