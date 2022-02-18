<template>
    <div>
        <div v-for="user in users" :key="user.id">
            <div>{{ user.name }}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["users"],
};
</script>
