<template>
  <v-card class="tw-shadow-lg">
    <v-data-table
      :headers="headers"
      :items="usreList"
      item-key="full_name"
      class="table-rounded"
      hide-default-footer
      disable-sort
    >
      <!-- name -->
      <template #[`item.full_name`]="{ item }">
        <div class="tw-flex tw-flex-col">
          <span
            class="
              tw-block tw-text-black tw-opacity-80 tw-font-semibold
              text--primary text-truncate
            "
            >{{ item.full_name }}</span
          >
          <small class="tw-text-label-gray">{{ item.post }}</small>
        </div>
      </template>
      <template #[`item.salary`]="{ item }">
        {{ `$${item.salary}` }}
      </template>
      <!-- status -->
      <template #[`item.status`]="{ item }">
        <v-chip
          small
          :color="statusColor[status[item.status]]"
          class="tw-font-medium"
        >
          {{ status[item.status] }}
        </v-chip>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import data from './datatable-data'

export default {
  setup () {
    const statusColor = {
      /* eslint-disable key-spacing */
      Current: 'primary',
      Professional: 'success',
      Rejected: 'error',
      Resigned: 'warning',
      Applied: 'info'
      /* eslint-enable key-spacing */
    }

    return {
      headers: [
        { text: 'NAME', value: 'full_name' },
        { text: 'EMAIL', value: 'email' },
        { text: 'DATE', value: 'start_date' },
        { text: 'SALARY', value: 'salary' },
        { text: 'AGE', value: 'age' },
        { text: 'STATUS', value: 'status' }
      ],
      usreList: data,
      status: {
        1: 'Current',
        2: 'Professional',
        3: 'Rejected',
        4: 'Resigned',
        5: 'Applied'
      },
      statusColor

      // icons
    }
  }
}
</script>
<style lang="scss" scoped >
::v-deep {
  .v-data-table__wrapper {
    border-radius: 10px;
  }
  .table-rounded {
    border-radius: 10px !important;

    .v-data-table-header {
      background-color: var(--v-white-base) !important;
    }
    .text-start {
      opacity: 0.7;
    }
    &.v-data-table {
      thead {
        tr {
          th {
            border-top: 0;
          }
          th {
            &:first-child {
              border-top-left-radius: 6px;
            }
            &:last-child {
              border-top-right-radius: 6px;
            }
          }
        }
      }
    }
  }
}
</style>
