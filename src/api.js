import axios from "axios";

export default {
  messages: {
    getMessages: () => 
      axios.get("api/bot").then(res => res.data.messages),
  },

  }