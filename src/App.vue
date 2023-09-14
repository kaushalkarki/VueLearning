<script >
import HelloKaushal from './components/HelloKaushal.vue';

export default {
  name: "App",
  methods: {
    addData() {
      let newData = {
        name: this.name,
        age: this.age,
        city: this.city,
      };
      this.students.push(newData);
      this.name="";
      this.age="";
      this.city="";

    },
    DeleteItem(index) {
      this.students.splice(index, 1);
    },
  },
  data() {
    return {
      name: "",
      age: "",
      city: "",
      students: [
        {
          name: "Kaushal Karki",
          age: 23,
          city: "Haldwani",
        },
        {
          name: "Shafin",
          age: 23,
          city: "Lucknow",
        },
        {
          name: "Dheeraj",
          age: 22,
          city: "Fatehpur",
        },
      ],
    };
  },
};
</script>

<template>
  <div id="container">
    <div>
      {{HelloKaushal}}
    </div>
    <div id="inner-div">
      <h1>Registration Form</h1>  
      <form v-on:submit.prevent>
        <span><label>Name</label><input type="text" v-model="name" /></span>
        <span><label>City</label><input type="text" v-model="city" /></span>
        <span>
          <label>Age</label><input type="number" v-model.number="age"
        /></span>
        <!-- <span><label>Phone</label><input type="number" /></span>
      <div ><span><input type="radio" name="gender" value="Male" >Male</span>
      <span><input type="radio" name="gender" value="Female" > Female</span></div> -->

        <button v-on:click="addData">Submit</button>
      </form>
      <div v-for="(elements, index) in students" :key="index">
        <div id="items">
          <ul v-for="(elements, props, ind) in elements" :key="ind">
            <li>{{ props }} :{{ elements }}</li>
          </ul>
          <button v-on:click="DeleteItem(index)">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* @import "./assets/base.css"; */
* {
  box-sizing: border-box;
}
#container {
  width: 100%;
  height: 100%;
  text-align: center;
  /* align-content: center; */
}
#inner-div {
  left: 40%;
  /* text-align: center; */
  /* align-content: center; */
  /* align-items: center; */
}
h1 {
  color: black;
}
#items {
  margin: 5% 0 0 0;
}
form {
  display: grid;
  position: relative;
  left: 30%;
  width: 30%;
  height: 60%;
  /* border: 1px solid black; */
}
input,
label {
  margin: 2% 1% 0 0;
  width: 70%;
  justify-content: right;
  color: black;
}
button {
  width: 30%;
  position: relative;
  left: 30%;
}
</style>
