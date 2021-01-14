import axios from 'axios';

export const request = (method, url, data) => axios({ method, url, data });

export const MASTER_GET_ENTRY_POINT = '/master';

export const POST = 'post';
