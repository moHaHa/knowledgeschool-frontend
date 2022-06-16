<template>
  <div
    class="card m-3"
    style="
     
      position: relative;
      background-size: cover;
      border: none;
      border-radius: 20px !important;
    "
    :style="{backgroundImage: `url(${item.image})`}"
  >
    <a  :href="item.url" target="_blank">
      <i
        class="bi bi-caret-right-square-fill mx-5 hvr-grow"
        style="font-size: 80px; color: red; margin-top: 80px"
      ></i
    ></a>
    <div class="card-body" style="margin-top: -90px">
      <h1 class="card-title text-center text-dark fw-bold">{{item.title}}</h1>
      <p class="card-text fs-3 text-center" style="color: gray">46 حلقة</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object
    }
  }
}
</script>

<style></style>
