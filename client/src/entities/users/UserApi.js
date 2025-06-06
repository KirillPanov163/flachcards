import axios from "axios";

const { VITE_TARGET, VITE_API } = import.meta.env;

class UserApi {
  static async getLastUser() {
    const response = await axios.get(`${VITE_TARGET}${VITE_API}/users/last`);
    return response.data;
  }

  static async getUserById(id) {
    const response = await axios.get(`${VITE_TARGET}${VITE_API}/users/${id}`);
    return response.data;
  }
}

export default UserApi;
