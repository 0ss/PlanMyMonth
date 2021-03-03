<template>
  <div>
    <span 
      :class="
      [$style.arrow, 
      clicked? $style['arrow-bottom'] : $style['arrow-right']]" 
      >
    </span>
   
  </div>
    

</template>

<script>
export default {
  props: {
    clicked :{
      type:Boolean, 
      required : true
    }
  },
}
</script>

<style lang="scss" module>
.arrow-category{
  &:hover{
    color:rgba(0, 0, 0, 0.781);
    transition: 0.3s;
  }
}
.arrow-wrapper{
  display: flex;
}
.name-icon-wrapper{
  display: flex;
  flex-direction: row;
  width:100%;
  justify-content: space-between !important;
}
.arrow {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-top: 2px solid rgb(185, 185, 185);
  border-right: 2px solid rgb(185, 185, 185);
  margin-top: 8px;
}
.arrow-right {
  transform: rotate(45deg);
  margin-right: 10px;
}
.arrow-bottom {
  transform: rotate(135deg);
  margin-right: 10px;

}

</style>