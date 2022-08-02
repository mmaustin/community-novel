import http from "../http-common";

class DataServiceA {
    getAll() {
        return http.get("/uthors");
    }
    create(author) {
        return http.post("/authors", author);
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