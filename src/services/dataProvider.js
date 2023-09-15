import { fetchUtils } from 'react-admin';
// import { stringify } from 'query-string';

const apiUrl = 'http://localhost:3000/api';

const httpClient = fetchUtils.fetchJson;

const dataProvider = {
//   getList: async (resource, params) => {
//     const url = `${apiUrl}/${resource}?${stringify(params.filter)}`;
//     const { json } = await httpClient(url);
//     return {
//       data: json,
//       total: parseInt(json.length, 10),
//     };
//   },
  getOne: async (resource, params) => {
    const url = `${apiUrl}/${resource}/${params.id}`;
    const { json } = await httpClient(url);
    return {
      data: json,
    };
  },
  create: async (resource, params) => {
    const url = `${apiUrl}/${resource}`;
    const { json } = await httpClient(url, {
      method: 'POST',
      body: JSON.stringify(params.data),
    });
    return {
      data: json,
    };
  },
  update: async (resource, params) => {
    const url = `${apiUrl}/${resource}/${params.id}`;
    const { json } = await httpClient(url, {
      method: 'PUT',
      body: JSON.stringify(params.data),
    });
    return {
      data: json,
    };
  },
  delete: async (resource, params) => {
    const url = `${apiUrl}/${resource}/${params.id}`;
    await httpClient(url, {
      method: 'DELETE',
    });
    return {
      data: params.previousData,
    };
  },
};

export default dataProvider;