<template>
    <h1>{{ title }}</h1>
    <h2>{{ subTitle }}</h2>

    <p>당신은 미성년자 입니다.</p>

    <p>당신은 성인 입니다.</p>
</template>
<script>

export default {
    name: "Ex09View",
    components: {},
    data() {
        return {
            title: "vue공부",
            subTitle:"if 문",
            age:25
        };
    },
    methods: {},
};
</script>
<style></style>