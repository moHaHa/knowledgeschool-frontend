
<template>
  <div>
    <main-page>
      <template v-slot:leftSide> </template>
      <template v-slot:main>
        <div class="tw-px-3 tw-py-3">
          <h1>To add your module in modules list</h1>
            <p>
                add this object in ERPModulesList array 
                <pre class="once-code-block"> 
{
name: 'Your Module name',
path: '/your-module-path',
baseUrl: 'https://back-end-base-url-of-your-module/api/'
},
                </pre>
                 in ERPModulesList array in  erp-module-list/index.js with other modules objects
                <pre class="once-code-block"> 
export const ERPModulesList = [
    {
    name: 'Accounting',
    path: '/Accounting',
    baseUrl: 'http://accv3.acc.gmtcc.io/api/'
    },

]

                </pre>


            </p>

          <div>
            
          </div>
          <div v-if="true" class="">
            <pre class="once-code-block">
    . src
    .
    |-- layout
        |
        |    
        |   
        `-- data
            |
            `-- modules-list
                |
                `-- index.js
 
            </pre>
          </div>
        </div>
      </template>

      <template v-slot:rightSide> </template>
    </main-page>
  </div>
</template>


<script>
export default {}
</script>
<style >
.once-code-block {
  border-radius: 10px;
  padding: 1rem;
  background: var(--v-code-block-base);
}
</style>
