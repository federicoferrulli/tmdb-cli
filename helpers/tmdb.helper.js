import axios from "axios";
import dotenv from 'dotenv';

dotenv.config({
  path:  `${import.meta.dirname}/../.env`
})

const TmdbHelper = axios.create({
  baseURL: process.env.URITMDB 
});

TmdbHelper.defaults.headers.common['Authorization'] = `Bearer ${process.env.TOKEN}`;

export default TmdbHelper;