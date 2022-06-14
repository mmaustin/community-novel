import http from "../http-common";

class DataServiceA {
    getAll() {
        return http.get("/authors");
    }
    create(band) {
        return http.post("/authors", band);
    }
    get(id) {
        return http.get(`/authors/${id}`);
    }
    delete(id) {
        return http.delete(`/authors/${id}`);
    }
    update(id, data) {
        return http.put(`/authors/${id}`, data);
    }
}
export default new DataServiceA();