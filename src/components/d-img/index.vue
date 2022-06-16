<template>
  <div>
     <v-file-input
      clearable
      :loading="loading"
      prepend-icon="mdi-camera"
      show-size
      :label="label"
      @change="uploadFile"
    >
    </v-file-input>
    <v-img :src="val" max-width="100%">
     <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
  </div>
</template>

<script>
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
let upload = new Upload({ apiKey: 'free' })

export default {
  name: 'd-img',
  props: {
    value: {
      type: String
    },
    label:{
      type:[String, Number]
    }
  },
  data () {
    return {
      img: '',
      loading: false,
      componentKey: 0
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
    uploadFile(event) {
      if(event === null) return 
      
      let e = {
        target: {
          files: [event],
        },
      }
      this.uploadFile =   upload.createFileInputHandler({
        onBegin:()=>{
          this.loading = true
        },
        onUploaded: ({ fileUrl, fileId }) => {
          this.loading = false
          this.val = fileUrl
        }
      })
      this.uploadFile(e)
    },

    createImageData (file) {
      if (!file) {
        this.$emit('input', '')
        return
      }
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
