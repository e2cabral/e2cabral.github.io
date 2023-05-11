<script setup lang="ts">
import Posts from './Sections/AuthorPosts.vue'
import NavbarDefault from '@/components/navbar/NavbarDefault.vue'

import image from '@/assets/img/cabral-tech-software-development.jpg'
import FooterDefault from '@/components/footer/FooterDefault.vue'
import AuthorProfile from '@/views/Project/Sections/AuthorProfile.vue'
import { useRoute } from 'vue-router'
import ProjectData from '@/data/project/project-data'

const route = useRoute()

const getProject = () => ProjectData.findByKeyOrDefault(route.params.project)
</script>
<template>
  <div class="container position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
        <NavbarDefault :sticky="true" transparent />
      </div>
    </div>
  </div>
  <Header>
    <div
      class="page-header min-height-400"
      :style="{ backgroundImage: `url(${image})` }"
      loading="lazy"
    >
      <span class="mask bg-gradient-dark opacity-8"></span>
    </div>
  </Header>
  <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6 mb-4">
    <AuthorProfile :project="getProject()" />
    <Posts :roles="getProject().roles" />
  </div>
  <FooterDefault />
</template>
