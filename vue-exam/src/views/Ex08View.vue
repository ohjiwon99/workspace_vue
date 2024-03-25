<template>
    <h1>{{ title }}</h1>
    <h2>{{ subtitle }}</h2>

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
            <tr v-bind:key="personVo.no" v-for="(personVo) in pList" >
                <td>{{ i+1 }}</td>
                <td>{{ personVo.no }}</td>
                <td>{{ personVo.name }}</td>
                <td>{{ personVo.hp }}</td>
                <td>{{ personVo.company }}</td>
            </tr>
        </tbody>
    </table>
    <br>
    <button v-on:click="getList" type="button">데이터 불러오기</button>

    <br>
    <span v-bind:key="i" v-for="(ageInFo) in redioAges">
        <label>{{ ageInFo.text }}</label><input type="radio" name="age" value="ageInFo.code" v-model="aPicked">


    </span>

</template>

<script>

    export default{
        name: "Ex08View",
        components : {},
        data(){
            return{
                title: "vue공부",
                subtitle: "반복문",
                pList: [],
                aPicked:"30",
                redioAges:[{text:"10대", code:"10"},
                           {text:"20대", code:"20"},
                           {text:"30대", code:"30"},
                           {text:"기타", code:"etc"},
            
            ]
            };
        },
        methods: {
            getList(){
                console.log("데이터 불러오기");

                let personList = [
                    { no: 1, name: "김소리", hp: "010-1111", company: "02-111" },
                    { no: 2, name: "신짱구", hp: "010-2222", company: "02-222" },
                    { no: 3, name: "이준기", hp: "010-3333", company: "02-333" }
                ];
                this.pList = personList
            }
        }
    }
</script>

<style></style>