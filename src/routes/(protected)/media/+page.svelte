<script lang="ts">
   let dialog: HTMLDialogElement;
</script>

<div class="container grid grid-cols-4 gap-4 p-4">
   {#each { length: 3 } as _, i}
      <button
         onclick={() => dialog.showModal()}
         class=" rounded-lg hover:brightness-75 transition-all cursor-pointer"
      >
         <img
            src="./images/thumbnails/asset_{i + 1}-large.webp"
            alt=""
            class=" object-cover aspect-video"
         />
      </button>
   {/each}
</div>

<dialog bind:this={dialog} class="modal">
   <div class="modal-box p-0 max-w-full w-2/3">
      <img
         src="./images/asset_2.png"
         alt=""
         class="aspect-video object-cover"
      />
   </div>
   <form method="dialog" class="modal-backdrop">
      <button>close</button>
   </form>
</dialog>
