import http from "./http-common";

const getAll = () => {
  return http.get("/pacientes");
};

const get = id => {
  return http.get(`/pacientes/${id}`);
};

const create = data => {
  return http.post("/pacientes", data);
};

const update = (id, data) => {
  return http.put(`/pacientes/${id}`, data);
};

const remove = id => {
  return http.delete(`/pacientes/${id}`);
};

const removeAll = () => {
  return http.delete(`/pacientes`);
};


const pacientesService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll
};

export default pacientesService;