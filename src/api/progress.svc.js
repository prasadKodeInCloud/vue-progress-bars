import { PROGRESS_API } from "../common/config.js";
import axios from "axios";

export default {
  bars() {
    return axios.get(`${PROGRESS_API}/bars`);
  },
};
