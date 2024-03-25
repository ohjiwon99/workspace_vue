<template>
    <h1>{{ title }}</h1>
    <h2>{{ subTitle }}</h2>

    <p>{{ counter }}</p>
    <button v-on:click="minus" type="button">뺴기(-)</button>
    <button v-on:click="plus" type="button">더하기(+)</button>

    <p>{{ Message }}</p>
    <button v-on:click="setMessage" type="button">메세지</button>

</template>
<script>

export default {
    name: "Ex03View",
    components: {},
    data() {
        return {
            title: "vue공부",
            subTitle:"클릭이벤트+메소드",
            counter:0,
            Message:""
        };
    },
    methods: {
        plus(){
            this.counter++;

        },
        minus(){
            this.counter--;
        },
        setMessage(){
            this.Message="늦으면 연락하겠...아니 안하겠습니다"

        }
    },
};
</script>
<style></style>