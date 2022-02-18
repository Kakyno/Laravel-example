import { createApp } from "vue";

import UsersList from "./components/UsersList.vue";
import UsersListItem from "./components/UsersListItem.vue";

const app = createApp({});

app.component("users-list", UsersList);
app.component("users-list-item", UsersListItem);

app.mount("#app");
