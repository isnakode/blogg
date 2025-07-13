<script>
   import EyeIcon from "$lib/icons/EyeIcon.svelte";

   let isPwdVisible = $state(false);
</script>

<main class="flex min-h-dvh p-4">
   <div class="basis-1/2 flex justify-center items-center">
      <form class="flex flex-col w-3/5" method="post">
         <h1 class="text-xl font-bold">Mulai menulis sekarang</h1>
         <p class="text-sm mb-4">Daftar untuk memulai perjalanan penulisanmu</p>
         <label for="email" class="flex flex-col mb-2">
            <p class="label">Email</p>
            <input
               name="email"
               id="email"
               type="email"
               class="input w-full"
               required
            />
         </label>
         <label for="password" class="flex flex-col mb-4">
            <p class="label">Password</p>
            <div class="flex input w-full">
               <input
                  name="password"
                  id="password"
                  type={isPwdVisible ? "text" : "password"}
                  required
               />
               <button
                  class="cursor-pointer"
                  type="button"
                  onclick={() => (isPwdVisible = !isPwdVisible)}
               >
                  {#if isPwdVisible}
                     <EyeIcon />
                  {:else}
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="size-5"
                     >
                        <path
                           stroke-linecap="round"
                           stroke-linejoin="round"
                           d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                        />
                     </svg>
                  {/if}
               </button>
            </div>
         </label>
         <button class="btn btn-primary mb-4">Daftar</button>
         <p>
            Sudah punya akun? <a href="/login" class="link-hover text-blue-300">
               Masuk
            </a>
         </p>
      </form>
   </div>
   <div
      class="basis-1/2 flex items-center justify-center bg-blue-200 rounded-xl"
   >
      <img src="./images/folder.png" alt="" class="w-2/3" />
   </div>
</main>
