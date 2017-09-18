<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
      <router-link to="/" class="navbar-brand">Home</router-link>
      <div class="dropdown mr-5">
        <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          User
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" href="#">Account</a>
          <a class="dropdown-item" href="#">Configuration</a>
          <a class="dropdown-item" href="#">Logout</a>
        </div>
      </div>
    </nav>
  </div>  
</template>

<script>
export default {
  name: 'navbar',
  data() {
    return {
    };
  },
};
</script>

<style>
.dropdown-menu {
  right: 0;
}
</style>
