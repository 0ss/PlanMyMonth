<template>

    <input 
        type="checkbox" 
		class="mx-8 "
		v-model="favBtn"
        id="switch"
		checked
        />
        <label for="switch" class="mt-1">Toggle</label>
</template>

<script>
    export default {
		name:'SwitchBtn',
		emits:['checked'],
        data(){
			return{
				favBtn:''
			}
		},
		watch:{
			favBtn(){
				this.$emit('checked',this.favBtn)
			}
		},
    }
</script>

<style lang="scss" scoped>
input[type=checkbox]{
	height: 0;
	width: 0;
	
	visibility: hidden;
}

label {
	cursor: pointer;
	text-indent: -9999px;
	width: 48px;
	height: 18px;
	background: grey;
	display: block;
	border-radius: 100px;
	position: relative;
}

label:after {
	content: '';
	position: absolute;
	top: 3px;
	left: 3px;
	width: 12px;
	height: 12px;
	background: #fff;
	border-radius: 90px;
	transition: 0.3s;
}

input:checked + label {
	background: #D65076;
}

input:checked + label:after {
	left: calc(100% - 5px);
	transform: translateX(-80%);
}


</style>