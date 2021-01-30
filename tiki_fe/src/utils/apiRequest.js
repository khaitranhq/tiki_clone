import axios from 'axios';
import { API } from '../../config';

export const request = (method, url, data = {}) =>
  axios({ method, url: `${API}${url}`, data });

export const MASTER_GET_ENTRY_POINT = '/master';

export const POST = 'post';
export const GET = 'get';
