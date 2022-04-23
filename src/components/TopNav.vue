<template>
  <nav>
    <router-link
      to="/"
      :class="showList === true ? 'underline' : 'no-underline'"
      ><p @click="toggleList">Album List</p></router-link
    >
    <router-link
      to="/add"
      :class="showAdd === true ? 'underline' : 'no-underline'"
    >
      <p @click="toggleAdd">Add LP</p>
    </router-link>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      showList: true,
      showAdd: false,
    };
  },
  methods: {
    toggleList() {
      this.showList = true;
      this.showAdd = false;
      console.log(`list ${this.showList}`);
      console.log(`add ${this.showAdd}`);
    },
    toggleAdd() {
      this.showList = false;
      this.showAdd = true;
      console.log(`list ${this.showList}`);
      console.log(`add ${this.showAdd}`);
    },
  },
};
</script>

<style scoped>
nav {
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  /* border: 1px yellow solid; */
  background-color: #112;
  margin: 10px 10px 10px 10px;
}
nav a {
  color: #fffde6;
  text-decoration: none;
  margin-right: 40px;
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 300;
  /* border: 1px solid red; */
  margin-bottom: 0px;
  padding: 0px;
}

nav a:hover {
  color: rgb(119, 179, 219);
}

router-link {
  margin: 0px;
}

.underline {
  border-bottom: 2px solid #fffde6;
}
.no-underline {
  border-bottom: 0px solid #fffde6;
}
</style>
