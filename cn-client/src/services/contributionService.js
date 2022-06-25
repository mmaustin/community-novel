import http from "../http-common";

class DataServiceC {
    getAll() {
        return http.get("/contributions");
    }
    create(contribution) {
        return http.post("/contributions", contribution);
    }
    get(id) {
        return http.get(`/contributions/${id}`);
    }
    delete(id) {
        return http.delete(`/contributions/${id}`);
    }
    update(id, data) {
        return http.put(`/contributions/${id}`, data);
    }
}
export default new DataServiceC();