<template>
  <div class="modal" v-if="isOpen">
    <div class="modal-content">
      <!-- 모달 내용 -->
      <div class="ticket">
        <div class="order-number">코난 영화관</div>
        
        <div class="info">
          <strong>{{ m_name }}</strong>
        </div>
        
        <div class="infoList">
          {{ m_r_date }}
        </div>

        <div class="infoList">
          <!-- 상영관 정보를 받아와야 함 -->
          <!-- <span>상영관 : {{ theater }}</span><br><br> -->
          <span>좌석번호 : {{ m_s_no }} (1명)</span>
        </div>
       
        <div class="info">
          [결제 내역]
        </div>
        <div class="infoList">
          <span>영화가격 : {{ m_price }}원</span>
        </div>
        <div class="point">
          <span>{{ user_name }} 님!</span><br>

          <!-- 사용 가능 포인트 정보를 받아와야 함 -->
        <span>사용 가능 포인트: {{ user_point }}점</span>
        </div>

        <!-- 바코드 이미지 추가 -->
        <!-- 바코드 이미지 정보를 받아와야 함 -->
        <img src="../assets/qrimages.png" alt="바코드" class="barcode">
      </div>
      
      <!-- 닫기 버튼 -->
      <span class="close" @click="closeModal">&times;</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      required: true
    },
    m_r_no: Number,
    m_name: String,
    s_date: String,
    m_r_date: String,
    m_s_no: String,
    m_price: Number,
    user_name: String,
    barcodeImage: Image,
    user_point: Number // 'int'를 'Number'로 수정
  },
  methods: {
    closeModal() {
      // 모달을 닫는 메서드
      this.$emit('close-modal');
    }
  }
};
</script>

<style scoped>
/* 필요한 CSS 스타일을 추가하세요 */
</style>
