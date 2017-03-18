<template>
    <div class="calendar" v-show="show">
        <div class="calendar-title">
            <span class="back-icon" @click="hideCalendar"></span>
            <div class="t1">请选择日期</div>
            <ol class="">
                <li>日</li>
                <li>一</li>
                <li>二</li>
                <li>三</li>
                <li>四</li>
                <li>五</li>
                <li>六</li>
            </ol>
        </div>
        
        <div class="calendar-body">
            <ul>
                <li v-for="day in spaceList" class="calendar-day"></li>
                <li v-for="(day, index) in dayList" :data-date="day.date" :data-name="day.name" class="calendar-day" :class="day.date == selected ? 'selected':''" @click="clickFn(day.date, $event),hideCalendar">{{ day.name }}</li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                spaceList: [],
                dayList: [],
                selected: -1
            }
        },
        props:{
            show:false
        },
        mounted() {
            let today = new Date()
            let td_month = today.getMonth()
            let td_year = today.getFullYear()
            let td_day = today.getDay()
            let td_date = today.getDate()
            let lastMonthDay = new Date(td_year, td_month, 0)
            let thisMonthFirstDay = new Date(td_year, td_month, 1)
            let firstDay = thisMonthFirstDay.getDay()
            let thisMonthLastDay = new Date(td_year, td_month + 1, 0)
            let thisMonthCount = thisMonthLastDay.getDate()
            for (let i = 0; i < firstDay; i ++) {
                this.spaceList.push({
                    date: '',
                    name: ''
                })
            }
            for (let i = 0; i < thisMonthCount; i ++) {
                this.dayList.push({
                    date: td_year + '-' + (td_month + 1) + '-' + (i + 1),
                    name: i + 1 + '',
                    selected: false
                })
            } 
        },
        methods: {
            clickFn(index, e) {
                this.selected = index
                this.$emit('selectedDate', this.selected)
            },
            hideCalendar() {
                this.$emit('selectedDate', this.selected)
                // console.log(this.show)
                // this.show = false
            }
        },
        components:{
        }

    }
</script>
<style>
    *{
        margin: 0;
        padding: 0;
    }
    .calendar{
        position: fixed;
        background-color: #fff;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
    .calendar-title{
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        height: 90px;
        background-color: #17a4bd;
        color: #fff;
    }
    .back-icon{
        position: absolute;
        left: 0;
        height: 40px;
        width: 50px;
    }
    .back-icon:after{
        content: '<';
        line-height: 40px;
    }
    .t1{
        height: 40px;
        text-align: center;
        line-height: 40px;
    }
    .calendar-title li{
        list-style-type: none;
        float: left;
        width: 14%;
        line-height: 50px;
    }
    .calendar-body{
        margin-top: 100px;
    }
    .calendar-day{
        float: left;
        width: 14%;
        list-style-type: none;
        height: 50px;
        line-height: 50px;
        cursor: pointer;
    }
    .calendar-day.selected{
        background-color: #17a4bd;
        color: #fff;
    }
</style>