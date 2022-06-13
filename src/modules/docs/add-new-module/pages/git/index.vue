<template>
  <div>
    <main-page>
      <template v-slot:leftSide> </template>
      <template v-slot:main>
        <div class="tw-px-3 tw-py-3">
          <pre class="once-code-block"> 
<code>$ git clone "https://gitlab.com/HBO30/minaret-erp" </code>
<code>$ git checkout library </code>
<code>$ git checkout -b yourModuleName </code>
                </pre>
          <br />
          <pre class="once-code-block"> 
<code>$ git push origin  yourModuleName </code>
                </pre>
          <br />
          <pre class="once-code-block"> 
<code>$ npm i </code>
<code>$ npm run serve </code>
                </pre>
        </div>
      </template>
      <template v-slot:rightSide> </template>
    </main-page>
  </div>
</template>

<script>
export default {
  components: {}
}
</script>
<style>
.once-code-block {
  border-radius: 10px;
  padding: 1rem;
  background: var(--v-code-block-base);
}
</style>
