<template>
  <div class="Hirign-Top-Bar">
    <div>
      <div class="tw-flex list-type-one">
        <div
          v-for="(itemTypeOne, index) in listTypeOne"
          :key="index"
          class="
            typeTwo-list
            tw-border
            tw-border-solid
            tw-border-med-gray
            tw-border
            tw-border-opacity-50
            tw-flex
            tw-flex-col
          "
        >
          <div class="tw-flex">
            <div class="tw-flex tw-p-1">
              <div
                v-for="(itemTypeTwo, i) in itemTypeOne.listTypeTwo"
                :key="i"
                class="typeTwo-item tw-cursor-pointer"
              >
                <div class="tw-p-2 tw-mx-2 tw-flex tw-flex-col tw-align-center">
                  <v-icon
                    class="
                      tw-user-select-none
                      typeTwo-icon
                      tw-p-2 tw-text-primary
                      material-icons-outlined
                    "
                  >
                    {{ itemTypeTwo.nameIcon }}
                  </v-icon>

                  <div
                    class="
                      tw-words-nowrap tw-text-dark-blue
                      typeTwo-title
                      tw-font-semibold tw-user-select-none tw-text-sm
                    "
                  >
                    {{ itemTypeTwo.title }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="typeTwo-footer tw-mt-auto tw-py-1 tw-text-center">
            {{ itemTypeOne.name }}
            <div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      new: 'str',
      maxLenghtItem: 3,
      listTypeOne: [
        {
          name: 'cards',
          listTypeTwo: [
            { title: 'OP.Po', nameIcon: 'mdi-delete' },
            { title: 'Skills', nameIcon: 'mdi-delete' },
            { title: 'Ss.Types', nameIcon: 'mdi-delete' },
            { title: 'Aca.Cer', nameIcon: 'mdi-delete' }
          ]
        },
        {
          name: 'Operation',
          listTypeTwo: [
            { title: 'View OP.Po', nameIcon: 'mdi-delete' },
            { title: 'View Archive', nameIcon: 'mdi-delete' },
            { title: 'View Stages', nameIcon: 'mdi-delete' },
            { title: 'Send Invet.', nameIcon: 'mdi-delete' },
            { title: 'Send Reject', nameIcon: 'mdi-delete' },
            { title: 'Give Score', nameIcon: 'mdi-delete' },
            { title: 'Give Offer', nameIcon: 'mdi-delete' }
          ]
        },
        {
          name: 'Charts',
          listTypeTwo: [
            { title: '', nameIcon: 'mdi-delete' },
            { title: '', nameIcon: 'mdi-delete' },
            { title: '', nameIcon: 'mdi-delete' },
            { title: '', nameIcon: 'mdi-delete' },
            { title: '', nameIcon: 'mdi-delete' },
            { title: '', nameIcon: 'mdi-delete' },
            { title: '', nameIcon: 'mdi-delete' }
          ]
        },
        {
          name: 'Reports',
          listTypeTwo: [
            { title: 'cards', nameIcon: 'mdi-delete' },
            { title: 'cards', nameIcon: 'mdi-delete' },
            { title: 'cards', nameIcon: 'mdi-delete' },
            { title: 'cards', nameIcon: 'mdi-delete' }
          ]
        },
        {
          name: 'Managment',
          listTypeTwo: [
            { title: 'cards', nameIcon: 'mdi-delete' },
            { title: 'cards', nameIcon: 'mdi-delete' },
            { title: 'cards', nameIcon: 'mdi-delete' },
            { title: 'cards', nameIcon: 'mdi-delete' }
          ]
        },
        {
          name: 'Maintenance',
          listTypeTwo: [
            { title: 'cards', nameIcon: 'mdi-delete' },
            { title: 'cards', nameIcon: 'mdi-delete' },
            { title: 'cards', nameIcon: 'mdi-delete' },
            { title: 'cards', nameIcon: 'mdi-delete' }
          ]
        }
      ]
    }
  }
}
</script>

<style>
.typeTwo-list {
  background-color: white;
  border-radius: 10px;
  margin-inline-end: 4px;
}
.typeTwo-item {
  background-color: white;
}
.typeTwo-footer {
  background-color: #f6f6f6;
  /* border-end-start-radius: 10px;
  border-end-end-radius: 10px; */
  border-radius: 10px;
}
.typeTwo-icon {
  font-size: 30px;
}
.typeTwo-icon-small {
  font-size: 20px;
}
.align-center {
  align-items: center;
}
.user-select-none {
  user-select: none;
}
.typeTwo-item {
  border-radius: 5px;
}
.typeTwo-item:active .typeTwo-icon {
  filter: drop-shadow(2px 2px 6px #25bbed49);
}
.typeTwo-item:active .typeTwo-title {
  filter: drop-shadow(2px 2px 6px #00000049);
}
.words-nowrap {
  white-space: nowrap;
}
.list-type-one {
  overflow-x: scroll;
}
.list-type-one::-webkit-scrollbar {
  display: none;
}
</style>
