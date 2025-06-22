<script lang="ts">
  import Tooltip from "./Tooltip.svelte";

  interface TooltipProps {
    tooltips: [string, string][];
  }

  const { tooltips = [] }: TooltipProps = $props();
</script>

<div class="flex flex-col">
  {#each tooltips as tooltip}
    <Tooltip tooltip={{title: tooltip[0], description: tooltip[1]}}  />
  {/each}
</div>
