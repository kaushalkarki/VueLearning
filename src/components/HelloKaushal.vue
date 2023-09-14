<script>
// import CompC from './CompC.vue';
// import CompC, {CompC} from "./CompC.vue"
export default {
  name: "HelloKaushal",
  props:['name']
    // mobile:Number
   
  //  components:{CompC} 
   ,
  data() {
    return {
      title: "TO Do List",
      new_item: "",
      max: 8,
      Mname:"",
      list: ["Apple", "Mango"],
    };
  }
  // emits:['getChildData']
  ,
  computed:{
    msg(){
          if(this.list.length==0)
          {
            return 'Add an item'
          }
          else if (this.list.length==1)
          {
            return "1 item"
          }
          else{
            return this.list.length +" Items"
          }
        }
  },

  methods: {
    delete_item(index) {
      this.list.splice(index, 1);
    },
    add_item() {
      this.list.push(this.new_item);
      this.new_item="";
    },
    changeText(){
      alert("hhhh");
      this.$emit("getChild",{
        username:"Kaushal"})
    },
    send(e){
      this.$emit('getChildData',{
      getData:e.target.value})
      // console.log($event.target.value);

    }
  },
};
</script>
<template>
  <div id="main">
    <h1>{{ title }}</h1>
    <!-- <h2>{{mobile}} </h2> -->
    <input type="text" v-model="new_item" :placeholder="msg" />
    <span>{{ max - new_item.length }}/{{ max }}</span>
    <button @click="add_item()" :disabled="new_item.length == 0" id="add">
      Add
    </button>
    <ul v-if="list.length > 0">
      <li class="items" v-for="(elem, index) in list" :key="index">
        {{ elem }}
        <button @click="delete_item(index)" class="btn">Delete</button>
      </li>
    </ul>
    <p v-else>Nothing Left</p>
    <!-- <comp-c> </comp-c> -->
    <!-- <slot></slot>
    <input type="text" :value="name" v-on:input="send($event)" > -->
    <!-- <button @click="changeText()">Check </button> -->
  </div>
</template>
<style>
* {
  box-sizing: border-box;
  overflow: hidden;
}
#main {
  height: auto;
  width: auto;
  /* justify-content: center; */
  margin: 10% 0 0 35%;
  /* border: 2px solid black; */
}
#main h1 {
  font-size: 4rem;
  color: red;
}
.items {
  margin: 2% 0 0 0;
  font-size: 2em;
  width: 10em;
  text-align: right;
  /* border: 1px solid black; */
}
.btn {
  width: 5em;
  font-size: 1em;
  background-color: pink;
  border: 1px solid black;
  border-radius: 5px;
}
.btn:hover {
  background-color: seagreen;
}
#add {
  width: 5em;
  font-size: 2em;
  color: black;
  background-color: cyan;
  border: 1px solid black;
  border-radius: 5px;
}
input,
span {
  width: 24rem;
  height: 3rem;
  font-size: 2em;
}
p {
  font-size: 3rem;
}
</style>