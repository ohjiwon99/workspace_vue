<template>
    <div>
        <div id="wrap">
            <AppHeader />
            <div id="app">
                <div class="content" v-if="isModalViewed">
                    <!-- 예매 내역 조회 창 -->
                    <form action="" method="" enctype="multipart/form-data">

                        <div class="m-body">
                            <div id="result">
                                <table id="result-table">
                                    <thead>
                                        <tr>
                                            <th>예약번호</th>
                                            <th>영화 제목</th>
                                            <th>상영일자</th>
                                            <th>상영시간</th>
                                            <th>상영관</th>
                                            <th>좌석번호</th>
                                            <th>영화가격</th>
                                            <th>구매자이름</th>
                                            <th>포인트</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-bind:key="i" v-for="(userVo, i) in reservationList">
                                            <td>{{ userVo.m_r_no }}</td>
                                            <td>{{ userVo.m_name }}</td>
                                            <td>{{ userVo.m_r_date }}</td>
                                            <td>{{ userVo.s_date }}</td>
                                            <td>1관</td>
                                            <td>{{ userVo.m_s_no }}</td>
                                            <td>{{ userVo.m_price }}</td>
                                            <td>{{ userVo.user_name }}</td>
                                            <td>{{ userVo.user_point }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </form>
                </div>

                
                <div id="input-container">
                    <input type="text" v-model="phoneNumber" placeholder="010-0000-0000">
                    <button id="search-button" @click="goToFind">핸드폰번호조회</button>
                </div>



                <div class="dial-container">
                    <div class="dial-button" @click="appendNumber(1)">1</div>
                    <div class="dial-button" @click="appendNumber(2)">2</div>
                    <div class="dial-button" @click="appendNumber(3)">3</div>
                    <br>
                    <div class="dial-button" @click="appendNumber(4)">4</div>
                    <div class="dial-button" @click="appendNumber(5)">5</div>
                    <div class="dial-button" @click="appendNumber(6)">6</div>
                    <br>
                    <div class="dial-button" @click="appendNumber(7)">7</div>
                    <div class="dial-button" @click="appendNumber(8)">8</div>
                    <div class="dial-button" @click="appendNumber(9)">9</div>
                    <br>
                    <div class="dial-button" @click="appendNumber(0)">0</div>
                    <div class="dial-button" @click="deleteLastDigit">지움</div>
                    <div class="dial-button" @click="clearPhoneNumberMethod">전체삭제</div>
                </div>

                <div>
                    <router-link to="/" id="return-button">돌아가기</router-link>
                </div>





            </div>
            <AppFooter />
        </div>
    </div>
</template>

<script>
import "@/assets/css/FindView.css";
import AppHeader from "@/components/AppHeader.vue"
import AppFooter from "@/components/AppFooter.vue"
import axios from 'axios';
/* import ModalView from "@/components/ModalView.vue";
import FindContentView from "@/components/FindContentView.vue";*/


export default {
    name: "FindView",
    components: {
        AppHeader,
        AppFooter,
        /*ModalView,
        FindContentView*/
    },
    data() {
        return {
            isModalViewed: false,
            phoneNumber: '',
            dateInput: '',
            reservationList: [] // 예약 내역을 저장할 배열
        };
    },
    methods: {
        getList() {
            axios.get('http://localhost:9000/api/movie', {
                params: {
                    phoneNumber: this.phoneNumber
                }
            })
                .then(response => {
                    console.log(response.data);
                    this.reservationList = response.data.apiData;
                })
                .catch(error => {
                    console.log(error);
                });
        },
        appendNumber(num) {
            if (this.phoneNumber.length < 11) {
                this.phoneNumber += num;
            } else if (this.dateInput.length < 8) {
                this.dateInput += num;
            }
        },
        deleteLastDigit() {
            if (this.dateInput.length > 0) {
                this.dateInput = this.dateInput.slice(0, -1);
            } else if (this.phoneNumber.length > 0) {
                this.phoneNumber = this.phoneNumber.slice(0, -1);
            }
        },
        clearPhoneNumberMethod() {
            this.phoneNumber = ''; // 휴대폰 번호를 초기화합니다.
        },
        goToFind() {
            this.isModalViewed = true;
            this.$router.push({
                name: 'FindContentView',
                query: { phoneNumber: this.phoneNumber }
            })

        }
    },
    created() {
        // 컴포넌트가 생성될 때 데이터를 가져오도록 설정

    }
};

</script>