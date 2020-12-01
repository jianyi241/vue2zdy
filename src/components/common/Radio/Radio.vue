<template>
    <div class="radio">
        <div class="radio-svg">
            <svg t="1605930651090" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3830" width="32" height="32"><path d="M512 128c211.2 0 384 172.8 384 384S723.2 896 512 896 128 723.2 128 512s172.8-384 384-384m0-64C262.4 64 64 262.4 64 512s198.4 448 448 448 448-198.4 448-448S761.6 64 512 64z" p-id="3831" fill="#e6e6e6"></path></svg>
            <svg t="1605929754308" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1428" width="32" height="32"><path d="M512 64C262.4 64 64 262.4 64 512s198.4 448 448 448 448-198.4 448-448S755.2 64 512 64z m0 608c-89.6 0-160-70.4-160-160s70.4-160 160-160 160 70.4 160 160-70.4 160-160 160z" p-id="1429" :fill="color"></path></svg>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Radio",
        props: {
            name: {
                default: 'radio'
            },
            color: {
                default: '#e6e6e6'  // #1296db
            },
            label: {
                default: '单选按钮'
            },
            value: {
                default: 0
            }
        },
        data (){
            return {

            }
        },
        methods: {}
    }
</script>

<style scoped>

</style>
