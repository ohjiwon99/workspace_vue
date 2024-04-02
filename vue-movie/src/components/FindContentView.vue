<template>
    <div class="modal" v-if="isOpen">
      <div class="modal-content">
        <!-- 모달 내용 -->
        <iframe src="../path/to/movie.html" frameborder="0"></iframe>
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
      }
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
  .modal {
    /* 모달 스타일 */
  }
  
  .modal-content {
    /* 모달 내용 스타일 */
  }
  
  .close {
    /* 닫기 버튼 스타일 */
  }
  </style>