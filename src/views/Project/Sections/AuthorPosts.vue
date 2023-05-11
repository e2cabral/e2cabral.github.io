<script setup lang="ts">
import astronaut from '@/assets/img/astronauta.jpg'
import BackgroundBlogCard from '@/components/cards/blogCards/BackgroundBlogCard.vue'
import { getImageByRoleOrDefault } from '@/helpers/image.helper'

defineProps({
  roles: {
    type: Array,
    role: String,
    description: String
  }
})
</script>
<template>
  <section class="py-3">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <h3 class="mb-5">Main roles exercised in this project</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-3 col-md-12 col-12" v-for="(role, index) in roles" :key="index">
          <BackgroundBlogCard
            :image="getImageByRoleOrDefault(role.role)"
            :title="role.role"
            :description="role.description"
          />
        </div>
      </div>
    </div>
  </section>
</template>
