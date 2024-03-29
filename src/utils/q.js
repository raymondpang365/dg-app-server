
import  p from './agents';
import logger from "./logger";

const knexLib = require('knex');
const knexnest = require('knexnest');

const knex = knexLib({
  client: 'postgres',
  connection: process.env.DATABASE_URL
});


const qNonEmpty = async (sql, params, loglevel = 'info', errMetaData) => {

  return await p.query(sql, params, loglevel)
    .then(res => {
      console.log(res)
      if (res.rows.length === 0) {
        throw new Error('No rows found');
      }
      return res;
    })
    .catch(err => {
      logger.error(err, '%o')
      throw err;
    })
};

const q = async (sql, params, loglevel = 'info') => {

  return await p.query(sql, params, loglevel)
    .then(res => {
      return res;
    })
    .catch(err => {
      logger.error(err, '%o')
      throw err;
    })
};




const handleCustomActionError = (
  {
    action = UTTER_INTERNAL_SERVER_ERROR,
    message = ''
  }
  ) => {
    logger.error(message);
    return {
      reply: {
        action
      }
    };
  };


module.exports = {
  knex,
  knexnest,
  q,
  qNonEmpty,
  handleCustomActionError
}
