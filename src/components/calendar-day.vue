<template>
    <li class="calendar-day" data-date="this.date" v-on:click="clickFn">
        {{ this.name }}
    </li>
</template>
<script>
    export default {
        data () {
            return {
                selected: false
            }
        },
        props: {
            name: String,
            date: String
        },
        methods: {
            clickFn () {
                this.$emit('clickday')
            }
        }
    }
</script>
<style>
    .calendar-day{
        float: left;
        width: 14%;
        list-style-type: none;
        height: 50px;
        line-height: 50px;
    }
</style>
