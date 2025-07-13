<script>
   import { page } from "$app/state";
   import ArticleIcon from "$lib/icons/ArticleIcon.svelte";
   import DashboardIcon from "$lib/icons/DashboardIcon.svelte";
   import MediaIcon from "$lib/icons/MediaIcon.svelte";

   const { children } = $props();

   const menus = [
      {
         icon: DashboardIcon,
         label: "Dashboard",
         url: "/dashboard",
      },
      {
         icon: ArticleIcon,
         label: "Artikel",
         url: "/article",
      },
      {
         icon: MediaIcon,
         label: "Media",
         url: "/media",
      },
      // {
      //    icon: SettingIcon,
      //    label: "Pengaturan",
      //    url: "/setting",
      // },
   ];
</script>

<div class="drawer lg:drawer-open">
   <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
   <div class="drawer-content flex flex-col">
      {@render children()}
      <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">
         Open drawer
      </label>
   </div>
   <div class="drawer-side">
      <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"
      ></label>
      <ul
         class={`menu bg-base-200 gap-1 text-base-content min-h-full w-60 p-4
          [&_a:not(.active):hover]:bg-gray-200
           [&_a.active]:bg-blue-400 [&_a.active]:text-white`}
      >
         <h1 class="font-bold text-lg mb-4">Aroftu's Blog</h1>
         {#each menus as menu}
            <li>
               <a class:active={page.url.pathname == menu.url} href={menu.url}>
                  <menu.icon />
                  {menu.label}
               </a>
            </li>
         {/each}
      </ul>
   </div>
</div>
