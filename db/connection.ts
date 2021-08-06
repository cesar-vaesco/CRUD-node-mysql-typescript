
import { Sequelize } from 'sequelize';

const db = new Sequelize('node-typescript','root','cesar',{
    host: 'localhost',
    dialect: 'mysql'
});


export default db;
