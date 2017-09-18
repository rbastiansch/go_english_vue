<template>
  <div>
    <div class="bg-primary d-flex align-items-center">
      <p class="nav-item ml-3 mt-3 text-secundary">Dashboard</p>
    </div>
    <ul class="nav flex-column nav-pills">
      <li class="nav-item">
        <a class="nav-link text-dark" href="#">My Texts</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-dark" href="#">My Sentences</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-dark" href="#">New Sentences</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-dark" href="#">New Texts</a>
      </li>
    </ul>
  </div>  
</template>

<script>
export default {
  name: 'side-menu',
  data() {
    return {
    };
  },
};
</script>