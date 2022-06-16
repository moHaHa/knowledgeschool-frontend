<template>
  <div
    class="card m-3"
    style="
      position: relative;
      border: none;
      border-radius: 20px !important;
      align-items: center;
    "
  >
    <img
      :src="item.image"
      class="card-img-top hvr-float-shadow hvr-glow w-50"
      alt="..."
    />
    <div class="card-body">
      <h5 class="card-title text-center fw-bold fs-1">{{item.title}}</h5>

      <a
        :href="item.url"
        style="display: flex; justify-content: center"
        target="_blank"
        ><p class="btn mt-4 p1 hvr-grow float-end" type="button">للاستماع</p></a
      >
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

