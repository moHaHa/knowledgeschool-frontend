<template>
  <v-avatar
    :color="color"
    rounded
    :size="size"
    class="avatar-img-picker-component"
  >
    <v-img class="img-img-picker-component" :src="val" alt="John" />

    <v-file-input
      @change="createImageData"
      class="input-img-picker-component tw-py-0 tw-px-0 tw-my-0 tw-mx-0"
      hide-input
      clearable
      prepend-icon="mdi-camera"
    >
    </v-file-input>
    <div
      v-if="value"
      class="input-clear-picker-component"
      @click="$emit('input', 0)"
    >
      <v-icon class="" size="15" color="white"> mdi-minus </v-icon>
    </div>
  </v-avatar>
</template>

<script>
export default {
  name: 'erp-img-picker',
  props: {
    value: {
      type: String
    },
    size: {
      type: [String, Number],
      default: 100
    },
    color: {
      type: String,
      default: 'grey'
    }
  },
  data () {
    return {
      img: ''
    }
  },

  watch: {
    value () {
      this.$emit('input', this.value)
    }
  },
  computed: {
    val: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  },
  methods: {
    createImageData (file) {
      const store = new FileReader()
      store.readAsDataURL(file)
      store.onloadend = () => {
        this.$emit('input', store.result)
      }
    }
  }
}
</script>

<style lang="scss">
.avatar-img-picker-component {
  position: relative;
}
.img-img-picker-component {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
}
.input-img-picker-component {
  transition: all 0.3s ease;
  position: absolute;
  top: 25px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
.input-img-picker-component * {
  margin: 0 !important;
  padding: 0;
}
.input-img-picker-component {
  .v-input__prepend-outer,
  .v-icon,
  .v-input__icon {
    font-size: 20px;
    width: 100%;
    color: white;
    background-color: rgba(37, 37, 37, 0.144);
  }
}
.avatar-img-picker-component:hover .input-img-picker-component {
  top: 0;
  transition: all 0.3s ease;
}
.input-clear-picker-component {
  cursor: pointer;
  position: absolute;
  top: -30px;
  right: -30px;
  transition: all 0.5s ease;
  padding-right: 5px;
  width: 30px;
  height: 30px;
  padding-bottom: 1px;
  padding-left: 5px;
  border-bottom-left-radius: 30px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background-color: rgba(37, 37, 37, 0.274);
}
.avatar-img-picker-component:hover .input-clear-picker-component {
  top: -4px;
  right: -4px;
  transition: all 0.5s ease;
}
</style>
