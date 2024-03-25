<template>
    <h1>{{ title }}</h1>
    <h2>{{ subTitle }}</h2>

    <form v-on:submit.prevent="getPersonVo" action="" method="get">
        <label for="uName">이름</label>
        <input id="uName" type="text" name="name" v-model="getPersonVo.name">
        <br>
        <label>전화번호</label>
        <input type="text" name="hp" v-model="getPersonVo.hp">
        <br>
        <textarea name="content" v-model="getPersonVo.content"></textarea>
        <br><br>
        <button v-on:click="setPersonVo" type="button">값쓰기</button>
        <button type="submit">값 수정</button>
    </form>
</template>
<script>

export default {
    name: "Ex05View",
    components: {},
    data() {
        return {
          title: "vue공부",
          subTitle: "폼-txt 양방향바인딩",
          name: "",
          hp: "",
          content: ""
        };
    },
    methods: {
      setPersonVo(){
        console.log("서버로 데이터를 받는중 ..............");

        this.name="이예슬";
        this.hp="010-2222-2222";
        this.content="개그우먼 이예슬";
      },
      getPersonVo(){
        console.log("데이터수집");
        console.log("서버로전송...........");

        console.log(this.name);
        console.log(this.hp);
        console.log(this.content);
      }
    },
};
</script>
<style>

</style>