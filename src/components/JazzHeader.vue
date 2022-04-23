<template>
  <div>
    <h1>Jazz <span>LPs</span></h1>
    <p>Welcome, [username]</p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
  width: 100%;
  background-color: #112;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  height: 100px;
}
h1 {
  text-align: left;
  font-family: "Abril Fatface", "Gill Sans", "Gill Sans MT", Calibri,
    "Trebuchet MS", sans-serif;
  font-size: 4rem;
  font-weight: 100;
}

span {
  background-color: rgb(40, 118, 171);
  border-radius: 50%;
  color: #112;
}
</style>
