import http from "../http-common";

class DataServiceW {
    getAll() {
        return http.get("/works");
    }
    create(work) {
        return http.post("/works", work);
    }
    get(id) {
        return http.get(`/works/${id}`);
    }
    delete(id) {
        return http.delete(`/works/${id}`);
    }
    update(id, data) {
        return http.put(`/works/${id}`, data);
    }
}
export default new DataServiceW();