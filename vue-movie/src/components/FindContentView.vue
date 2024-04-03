<template>
  <div class="modal" v-if="isOpen">
    <div class="modal-content">
      <div class="modal-header">
        <span class="close" @click="closeModal">&times;</span>
      </div>
      <div class="modal-body">
        <div class="ticket">
          <div class="order-number">코난 영화관</div>
          <div class="info">
            <strong>{{ selectedMovie.m_name }}</strong>
          </div>
          <div class="infoList">
            {{ selectedMovie.m_r_date }}
          </div>
          <div class="infoList">
            <!-- 상영관 정보를 받아와야 함 -->
            <span>좌석번호 : {{ selectedMovie.m_s_no }} (1명)</span>
          </div>
          <div class="info">
            [결제 내역]
          </div>
          <div class="infoList">
            <span>영화가격 : {{ selectedMovie.m_price }}원</span>
          </div>
          <div class="point">
            <span>{{ selectedMovie.user_name }} 님!</span><br>
            <!-- 사용 가능 포인트 정보를 받아와야 함 -->
            <span>사용 가능 포인트: {{ selectedMovie.user_point }}점</span>
          </div>
          <!-- 바코드 이미지 추가 -->
          <img :src="selectedMovie.barcodeImage" alt="바코드" class="barcode">
        </div>
      </div>
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
    selectedMovie: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    closeModal() {
      this.$emit('close-modal');
    }
  },
  computed: {
    barcodeImage() {
      // 선택된 영화의 바코드 이미지 URL 반환
      return this.selectedMovie.barcodeImage || ''; // 바코드 이미지 URL이 없으면 빈 문자열 반환
    }
  }
};
</script>