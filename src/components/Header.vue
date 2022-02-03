<template>
  <div id = "Header">
      <div class="container">
          <button class = "btn btn-header" @click = "$router.push('/')">{{ main }}</button>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            main: "Main"
        }
    },
}
</script>

<style scoped>
.btn {
    width:130px;
    height: 50px;
    font-size: 24px;
    color:white;
    background-color:black;
    border:1px solid black;
    border-radius:10px;

    margin-right:30px;
    margin-top:20px;

    cursor:pointer;
}

.btn:hover {
    color:black;
    background-color:white;
    transition-duration: .5s;
    border:white;
}

.container {
    display:flex;
    justify-content: right;
}
</style>
