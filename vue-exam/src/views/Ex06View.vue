<template>
  <h1>{{ title }}</h1>
  <h2>{{ subTitle }}</h2>

  <select name="telecom" v-model="telecom">
      <option value="">이동 통신사를 선택해 주세요</option>
      <option value="sk">SK텔레콤</option>
      <option value="kt" selected="selected">KT</option>
      <option value="lg">LG U+</option>
  </select>
</template>
<script>

export default {
  name: "Ex06View",
  components: {},
  data() {
      return {
        title: "vue공부",
        subTitle: "폼 selectbox",
        telecom: "sk"
      };
  },
  methods: {
  
  },
};
</script>
<style>

</style>