<template>
  <div class="content">
    <!-- 이미지등록 팝업(모달)창 -->
    <form action="" method="" enctype="multipart/form-data">

        <div id="closeBtn" class="closeBtn">×</div>

        <div class="m-header">예매 내역 조회</div>
        
        <div class="m-body">
            <div>
           
          </div>



          <div id="result">
            <table id="result-table">
                <thead>
                    <tr>
                        <th>예약번호</th>
                        <th>영화 제목</th>
                        <th>상영일시</th>
                        <th>상영관</th>
                        <th>좌석</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-bind:key="i" v-for="(userVo,i) in userList" >
                        <td>{{ userVo.mRemarks }}</td>
                        <td>{{ userVo.mName }}</td>
                        <td>{{ userVo.mDate }}</td>
                        <td>{{ userVo.mTheater }}</td>
                        <td>{{ userVo.sNo }}</td>
                    </tr>
                  
                </tbody>
            </table>
        </div>





        </div>

        <div class="m-footer">
          <div class="button-container">
              <router-link to="/" class="btn-home">홈으로 돌아가기</router-link>
          </div>
        </div>
        
    </form>
  </div>
</template>


<script>
import "@/assets/css/PaymentContentView.css";
import axios from 'axios';


export default {
    name: "ContentView",
    components: {},
    data() {
        return {
            reservationList: [] // 예약 내역을 저장할 배열
        
        };
    },
    methods: {
        fetchReservationList(){
            console.log("데이터 가져오기");

            axios({
                method: 'get', // put, post, delete                   
                url: 'http://localhost:9000/api/movie',
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                //params: guestbookVo, //get방식 파라미터로 값이 전달
                //data: guestbookVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달

                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response); //수신데이타
                this.reservationList=response.data.apiData

            }).catch(error => {
                console.log(error);
            });
        },
        

    },
    created() {
        this.fetchReservationList();
    }
};
</script>
