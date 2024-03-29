<template>
    <div id="app">
        <div id="input-container">
            <input type="text" v-model="phoneNumber" placeholder="010-0000-0000">
            <input type="text" v-model="dateInput" placeholder="YYYYMMDD">
            <button id="search-button" @click="searchReservation">전화번호 + 생년월일 조회하기</button>
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
            <div class="dial-button" @click="deleteLastDigit">지움</div>
            <div class="dial-button" @click="appendNumber(0)">0</div>
            <div class="dial-button" @click="searchReservation">OK</div>
        </div>

        <div id="result">
            <table v-if="showResult" id="result-table">
                <thead>
                    <tr>
                        <th>예약번호</th>
                        <th>영화 제목</th>
                        <th>상영일시</th>
                        <th>상영관</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{{ reservationNumber }}</td>
                        <td>어벤져스: 엔드게임</td>
                        <td>2024년 1월 1일 18:00</td>
                        <td>1관</td>
                    </tr>
                    <!-- 기타 조회 결과 항목들 -->
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import "@/assets/css/inquiryform.css"

export default {
    data() {
        return {
            phoneNumber: '',
            dateInput: '',
            reservationNumber: '',
            showResult: false
        };
    },
    methods: {
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
        searchReservation() {
            // 여기서는 생년월일과 전화번호를 서버로 보내고 예약번호를 받아와서 표시합니다.
            // 서버에서 받아온 데이터를 reservationNumber에 할당하고 showResult를 true로 설정합니다.
            // 아래는 예시로 reservationNumber와 showResult를 임시로 설정한 것입니다.
            this.reservationNumber = '예약번호';
            this.showResult = true;
        }
    }
};
</script>

<style >

</style>