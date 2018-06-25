<template>
	<div class="progessbar">
		<progress :percent="percent" activeColor="#ea5a49" />
		<p>{{year}}年已过去{{days}}天， {{percent}}%</p>
	</div>
</template>
<script>
	export default {
		methods: {
			isLeapYear(){
				const year = new Date().getFullYear()
				if (year%400 === 0) {
					return true
				}
				else if(year%4 === 0 && year%100 !==0) {
					return true
				}
				else {
					return false
				}
			},
			getDatOfYear() {
				return this.isLeapYear()? 366:365
			}
		},
		computed: {
			year() {
				return new Date().getFullYear()
			},
			days() {
				let start = new Date()
				start.setMonth(0)
				start.setDate(1)
				let offset = new Date().getTime() - start.getTime()
				return parseInt(offset/1000/60/60/24)+1
			},
			percent() {
				return ((this.days/this.getDatOfYear())*100).toFixed(1)
			}
		},

	}
</script>
<style>
	.progessbar {
		margin: 30px 0;
	}
	.progessbar p {
		text-align: center;
	}
</style>