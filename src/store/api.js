import axios from 'axios';
import {objectMap} from 'features/validation';

const instance = axios.create({
  baseURL: '/api',
  timeout: 10000,
});

const helper = {
  async get(url, params) {
    try {
      const {data} = await instance.get(url, {params});
      return data;
    } catch (error) {
      throw error;
    }
  },
  async post(url, payload) {
    try {
      const {data} = await instance.post(url, payload);
      return data;
    } catch (error) {
      return formatErrorResult(error);
    }
  },
  async put(url, ...rest) {
    try {
      const {data} = await instance.put(url, ...rest);
      return data;
    } catch (error) {
      return formatErrorResult(error);
    }
  },
  async delete(url, ...rest) {
    try {
      const {data} = await instance.delete(url, ...rest);
      return data;
    } catch (error) {
      return formatErrorResult(error);
    }
  },
};

function formatErrorResult({response}) {
  const {result, hasErrors, errors} = response.data;
  return {
    result,
    hasErrors,
    errors: objectMap(errors),
  };
}

export default helper;
export {instance};
