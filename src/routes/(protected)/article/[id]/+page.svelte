<script lang="ts">
   import BoldIcon from "$lib/icons/BoldIcon.svelte";
   import CodeIcon from "$lib/icons/CodeIcon.svelte";
   import ItalicIcon from "$lib/icons/ItalicIcon.svelte";
   import OlIcon from "$lib/icons/OlIcon.svelte";
   import RedoIcon from "$lib/icons/RedoIcon.svelte";
   import UlIcon from "$lib/icons/UlIcon.svelte";
   import UnderlineIcon from "$lib/icons/UnderlineIcon.svelte";
   import UndoIcon from "$lib/icons/UndoIcon.svelte";
   import { Editor } from "@tiptap/core";
   import StarterKit from "@tiptap/starter-kit";
   import { onDestroy, onMount } from "svelte";

   let element: HTMLDivElement;
   let editor: Editor;

   onMount(() => {
      editor = new Editor({
         element: element,
         extensions: [StarterKit],
         content: "<p>Hello World! 🌍️ </p>",
         editorProps: {
            attributes: {
               class: "prose prose-sm sm:prose-base lg:prose-lg m-5 focus:outline-none",
            },
         },
         onTransaction: () => {
            // force re-render so `editor.isActive` works as expected
            editor = editor;
         },
      });
   });

   onDestroy(() => {
      if (editor) {
         editor.destroy();
      }
   });
</script>

{#if editor}
   <div class="flex gap-1">
      <button
         class="btn btn-sm"
         on:click={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()}
         class:active={editor.isActive("heading", { level: 1 })}
      >
         H1
      </button>
      <button
         class="btn btn-sm"
         on:click={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()}
         class:active={editor.isActive("heading", { level: 2 })}
      >
         H2
      </button>
      <button
         class="btn btn-sm"
         on:click={() => editor.chain().focus().setParagraph().run()}
         class:active={editor.isActive("paragraph")}
      >
         P
      </button>
      <button
         class="btn btn-sm"
         on:click={() => editor.chain().focus().toggleBulletList().run()}
         class:active={editor.isActive("bulletList")}
      >
         <UlIcon />
      </button>
      <button
         class="btn btn-sm"
         on:click={() => editor.chain().focus().toggleOrderedList().run()}
         class:active={editor.isActive("orderedList")}
      >
         <OlIcon />
      </button>
      <button
         class="btn btn-sm"
         on:click={() => editor.chain().focus().toggleBold().run()}
         class:active={editor.isActive("bold")}
      >
         <BoldIcon />
      </button>
      <button
         class="btn btn-sm"
         on:click={() => editor.chain().focus().toggleItalic().run()}
         class:active={editor.isActive("italic")}
      >
         <ItalicIcon />
      </button>
      <button
         class="btn btn-sm"
         on:click={() => editor.chain().focus().toggleUnderline().run()}
         class:active={editor.isActive("underline")}
      >
         <UnderlineIcon />
      </button>
      <button
         class="btn btn-sm"
         on:click={() => editor.chain().focus().toggleCodeBlock().run()}
         class:active={editor.isActive("codeBlock")}
      >
         <CodeIcon />
      </button>
      <button
         class="btn btn-sm"
         on:click={() => editor.chain().focus().undo().run()}
      >
         <UndoIcon />
      </button>
      <button
         class="btn btn-sm"
         on:click={() => editor.chain().focus().redo().run()}
      >
         <RedoIcon />
      </button>
   </div>
{/if}

<div bind:this={element}></div>

<style>
   button.active {
      background: black;
      color: white;
   }
</style>
