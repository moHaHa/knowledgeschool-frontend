<template>
 <div>
  
    <v-img  :src="val"  />
 <input id="example" type="file" @change="uploadFile" />
    <v-file-input
      @change="createImageData"
      clearable
      prepend-icon="mdi-camera"
       show-size
    >
    </v-file-input>
 </div>
</template>

<script src="https://js.upload.io/upload-js/v1"></script>
<script>
var upload = new Upload({apiKey: "free"})
   var uploadFile = upload.createFileInputHandler({
     onUploaded: ({ fileUrl, fileId }) => {
       alert(`File uploaded! ${fileUrl}`);
     }
   });
   
export default {
  name: 'd-img',
  props: {
    value: {
      type: String
    },
   
  },
  data () {
    return {
      img: '',
      componentKey:0
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
    uploadFile,
    createImageData (file) {
      if (!file) {
        this.$emit('input', '')
        return;
      }
      const store = new FileReader()
      store.readAsDataURL(file)
      store.onloadend = () => {
        this.$emit('input', store.result)
      }
    }
  },
  

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
