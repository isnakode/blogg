<script>
</script>

<div class="container grid grid-cols-4 gap-4 p-4">
   {#each { length: 7 } as _, i}
      <img src="./images/asset_{i + 1}.png" alt="" />
   {/each}
</div>
