import { createApp } from "vue";
import { defineAsyncComponent } from "vue";

const app = createApp({
    components: {
        UsersList: defineAsyncComponent(() =>
            import("./components/UsersList.vue")
        ),
        UsersListItem: defineAsyncComponent(() =>
            import("./components/UsersListItem.vue")
        ),
    },
});

app.mount("#app");
