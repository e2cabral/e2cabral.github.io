<script setup>
import MaterialAvatar from '@/components/MaterialAvatar.vue'

import profile from '@/assets/img/logo-cabral-tech.png'
import MaterialBadge from '@/components/MaterialBadge.vue'
defineProps({
  project: {
    type: Object,
    projectName: String,
    description: Array,
    stats: [{ increase: String, description: String }],
    technologies: Array,
    required: true
  }
})
</script>
<template>
  <section class="py-sm-7 py-5 position-relative">
    <div class="container">
      <div class="row">
        <div class="col-12 mx-auto">
          <div class="mt-n8 mt-md-n9 text-center">
            <div class="blur-shadow-avatar">
              <MaterialAvatar
                size="xxl"
                class="shadow-xl position-relative z-index-2"
                :image="profile"
                alt="Avatar"
              />
            </div>
          </div>
          <div class="row py-8">
            <div class="col-lg-7 col-md-7 z-index-2 position-relative px-md-2 px-sm-5 mx-auto">
              <div class="d-flex justify-content-between align-items-center mb-2">
                <h3 class="mb-0">{{ project.projectName }}</h3>
              </div>
              <div class="row mb-4">
                <div class="col-auto" v-for="(stat, index) in project.stats" :key="index">
                  <span class="h6 me-1">{{ stat.increase }}</span>
                  <span>{{ stat.description }}</span>
                </div>
              </div>
              <p
                class="text-lg mb-0"
                v-for="(description, index) in project.description"
                :key="index"
              >
                {{ description }}
              </p>
            </div>
            <div class="container">
              <div class="row d-flex justify-space-between text-center py-2">
                <div class="col-12 px-11 mt-4">
                  <MaterialBadge
                    color="dark"
                    variant="gradient"
                    rounded
                    v-for="(tech, index) in project.technologies"
                    :key="index"
                    class="my-1"
                    :class="{ 'mx-1': index > 0 }"
                    >{{ tech }}</MaterialBadge
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
