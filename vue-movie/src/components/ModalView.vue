<template>
    <div class="modal">
        <div class="overlay" @click="$emit('close-modal')"></div>
        <div class="">
            <slot>  </slot>
        
        </div>
    </div>
</template>

<script>
export default {
    name: "ModalView",
    components: {},
    data() {
        return {};
    },
    methods: {},
};
</script>
