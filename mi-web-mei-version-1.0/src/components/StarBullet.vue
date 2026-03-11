<script setup lang="ts">
import { Star } from "lucide-vue-next"
</script>

<template>
  <div class="flex items-start gap-2 text-[#413311]">
    <Star :size="14" :stroke-width="3" class="mt-[3px] flex-shrink-0"/>
    <span>
      <slot />
    </span>
  </div>
</template>