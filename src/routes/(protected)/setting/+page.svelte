<script>
   import { articles } from "$lib/data";
</script>

<div class="container grid grid-cols-4 gap-4 p-4">
   {#each articles as article}
      <div class="rounded-lg p-2 border-2 border-gray-200 flex flex-col gap-2">
         <p class="font-bold line-clamp-2">{article.judul}</p>
         <p class="grow text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus,
            cumque?
         </p>
         <div class="flex gap-2">
            <button class="btn btn-sm btn-info text-white">Edit</button>
            <button class="btn btn-sm btn-outline btn-error hover:text-white"
               >Hapus</button
            >
         </div>
      </div>
   {/each}
</div>
