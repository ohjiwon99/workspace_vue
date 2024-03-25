<template>
    <h1>vue공부</h1>
    <h2>{{ title }}</h2>
    <p>{{ subTitle }}</p>

    <ul>
        <li>{{ menus[0] }}</li>
        <li>{{ menus[1] }}</li>
        <li>{{ menus[2] }}</li>
    </ul>
    <table border="1">
        <thead>
            <tr>
                <th>번호</th>
                <th>이름</th>
                <th>핸드폰</th>
                <th>회사</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{{ personVo.no }}</td>
                <td>{{ personVo.name }}</td>
                <td>{{ personVo.hp }}</td>
                <td>{{ personVo.conpany }}</td>
            </tr>
        </tbody>
    </table>

    <p>{{ content }}</p>
    <p v-html="content"></p>
    <img v-bind:src="imgUrl">
</template>
<script>

export default {
    name: "Ex02View",
    components: {},
    data() {
        return {
            title: "vue공부",
            subTitle:"데이터바인딩",
            menus:["게시판","갤러리","방명록"],
            personVo:{
                no:1,
                name:"이효리",
                hp:"010-2222-2222",
                conpany:"02-1234-1234"

            },
            content: "지금부터<String>열심히</String>공부하겠습니다",
            imgUrl:"https://mml.pstatic.net/www/mobile/edit/20240318_1095/upload_1710771613913KFcqp.gif"
        };
    },
    methods: {},
};
</script>
<style></style>