<template>
    <h1>{{ title }}</h1>
    <h2>{{ subTitle }}</h2>

    <div class="box " v-bind:class="{'box-red':isred,'box-blue':isblue, 'f-bold':isbold,'f-big':isSize}">{{ boxText }}</div>

    <button  v-on:click="redbox" type="button">빨간박스</button>
    <button  v-on:click="bluebox" type="button">파란박스</button>
    <button v-on:click="boldOnOff" type="button">볼드on/off</button>
    <button v-on:click="sizeOnOff" type="button">크기</button>
    <br><br><br><br><br>

    <p style="color: #ff0000;">인라인스타일로 태그에 스타일 직접 추가</p>

    <p v-bind:style="type">인라인스타일로 태그에 스타일 직접 추가</p>
    <button v-on:click="changType" type="button">인라인스타일변경</button>

  
</template>
<script>

export default {
    name: "Ex04View",
    components: {},
    data() {
        return {
            title: "vue공부",
            subTitle:"class속성제어",
            boxText:"vue공부 재밌슴둥",
            isred:false,
            isblue:false,
            isbold:false,
            type:""

          
        };
    },
    methods: {
        redbox(){
            this.isred=true;
            this.isblue=false;
        },
        bluebox(){
            this.isblue=true;
            this.isred=false;
        },
        boldOnOff(){
            console.log("볼드클릭");
            if(this.isbold == true){
               this.isbold = false;
            }else{
               this.isbold =true;
        }
        },
        sizeOnOff(){
            this.isSize = !this.isSize;
        },
        changType(){
            console.log("클릭");
            this.type="color:#ff0000";
        } 
    },
};

</script>
<style>
.box{
    width: 150px;
    border: 1px solid #000000;
}
.box-red{
    background-color: #ff0000;
}
.box-blue{
    background-color: #0000ff;
}
.f-bold{font-weight: bold;}

.f-big{font-size: 20px;}

.f-ita{font-style: italic;}

</style>