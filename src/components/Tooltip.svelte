<script lang="ts">
  import clsx from "clsx";

  interface Props {
    title: string;
    description: string;
  }
  // export const { title = "", description = "" }: Props = Props as Props;

  const { tooltip }: { tooltip: Props } = $props();

  let showDescription = $state(false);
</script>

<article
  class="relative inline-block"
  on:mouseover={() => {
    console.log("Mouse over tooltip");
    showDescription = true;
  }}
  on:mouseleave={() => {
    showDescription = false;
  }}
>
  <span class="cursor-pointer">{tooltip.title}</span>
  <div
    style:display={showDescription ? "block" : "none"}
    class="absolute z-10 left-full p-2 b-1 rounded border-gray-300 bg-gray-100"
  >
    {tooltip.description}
  </div>
</article>
