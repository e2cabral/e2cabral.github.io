<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

//example components
import NavbarDefault from '../components/navbar/NavbarDefault.vue'
import DefaultFooter from '../components/footer/FooterDefault.vue'
import Header from '../components/Header.vue'
import FilledInfoCard from '../components/cards/infoCards/FilledInfoCard.vue'

//Vue Material Kit 2 components
import MaterialSocialButton from '@/components/MaterialSocialButton.vue'

import backgroundImg from '@/assets/img/cabral-tech-background-img.jpg'
import instagram from '@/assets/img/icons8-instagram.svg'
import github from '@/assets/img/icons8-github.svg'
import linkedin from '@/assets/img/icons8-linkedin.svg'

//hooks
const body = document.getElementsByTagName('body')[0]
onMounted(() => {
  body.classList.add('presentation-page')
  body.classList.add('bg-gray-200')
})
onUnmounted(() => {
  body.classList.remove('presentation-page')
  body.classList.remove('bg-gray-200')
})
</script>

<template>
  <div class="container position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
        <NavbarDefault :sticky="true" />
      </div>
    </div>
  </div>
  <Header>
    <div
      class="page-header min-vh-75"
      :style="`background-image: url(${backgroundImg})`"
      loading="lazy"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-7 text-center mx-auto position-relative">
            <h1 class="text-white pt-3 mt-n5 me-2" :style="{ display: 'inline-block ' }">
              Cabral Tech Consulting
            </h1>
            <p class="lead text-white px-5 mt-3" :style="{ fontWeight: '500' }">
              We use technology as a tool to increase your business and products value
            </p>
          </div>
        </div>
      </div>
    </div>
  </Header>

  <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <FilledInfoCard
            class="p-4"
            :color="{ text: 'white', background: 'bg-gradient-success' }"
            title="About us"
            :descriptions="[
              'We are a technology consulting focused on increase business and products value. Our main services are collaborative creation, maintain and provide maintenance for developed software.',
              'The collaborative creation is the process of create a product which meets the requirements and its needs using the appropriated technologies, infrastructure and architecture. The entire process is conducted in collaboration with the clients and stakeholders.',
              'The maintain service may be applied for software that we have developed, and legacy software developed for third parts. We can make improvements such as new features, infrastructure, architecture, code quality, performance and everything that already exists.'
            ]"
            :action="{
              route: 'home',
              label: { text: 'Discover more', color: 'white' }
            }"
          />
        </div>
        <div class="col-lg-6">
          <FilledInfoCard
            class="p-4"
            title="Our services"
            :color="{ text: 'dark', background: 'bg-gradient-white' }"
            :descriptions="[
              'Collaborative creation: we work in collaboration with your product team to build the best and most appropriated solution to your goals, designing, architecting and developing the solution which will make your company reach its goals.',
              'Maintain: we provide maintenance for all software that we develop, we can make performance improvements, add useful new features according with the market changes and do refactors when necessary.',
              'Maintenance: we may also provide maintenance for legacy software, refactor third part developed software, improve the infrastructure, architecture and the code quality to avoid critical problems existents and migrate your legacy software.'
            ]"
            :action="{
              route: 'home',
              label: { text: 'See more' }
            }"
          />
        </div>
      </div>
    </div>

    <div
      class="container-fluid mt-sm-5 border-radius-xl"
      :style="{
        background: 'linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))'
      }"
    >
      <div
        class="page-header py-6 py-md-5 my-sm-3 mb-3 border-radius-xl"
        :style="{
          backgroundImage: `url(${wavesWhite})`
        }"
        loading="lazy"
      >
        <span class="mask bg-gradient-dark"></span>
        <div class="container">
          <div class="row">
            <div class="d-flex justify-content-center p-5">
              <div class="col-lg-8 ms-lg-5 text-center">
                <h3 class="text-white">Do you want to know more about us?</h3>
                <p class="text-white text-md">
                  You can discover more about us and keep in touch, and our creation process,
                  analysis and how we increase your business value following our GitHub projects and
                  contributions.
                </p>

                <a
                  href="https://github.com/Cabral-Tech-Consultoria"
                  class="btn btn-sm mb-0 bg-gradient-success px-5 py-3 mt-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="d-flex flex-column w-100 text-center p-5 mb-8">
          <h3>Follow us on our social networks</h3>
          <p class="text-md">
            Follow us on our social media and gather useful tips about software development,
            <br />best practices, methodologies, concepts and much more.
          </p>
          <div class="d-flex justify-content-center mt-3 flex-wrap">
            <a
              href="https://www.instagram.com/cabraltech.consultoria/"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              target="_blank"
              rel="noopener noreferrer"
              title="Cabral Tech Consulting on instagram"
            >
              <img :src="instagram" alt="title" loading="lazy" :style="{ height: '40px' }" />
            </a>
            <a
              class="opacity-5 ms-3"
              href="https://github.com/Cabral-Tech-Consultoria"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              target="_blank"
              rel="noopener noreferrer"
              title="Cabral Tech Consulting on GitHub"
            >
              <img :src="github" alt="title" loading="lazy" :style="{ height: '40px' }" />
            </a>
            <a
              href="https://www.linkedin.com/company/cabral-tech-consultoria/"
              class="mx-3"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              target="_blank"
              rel="noopener noreferrer"
              title="Cabral Tech Consulting on LinkedIn"
            >
              <img :src="linkedin" alt="title" loading="lazy" :style="{ height: '40px' }" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <DefaultFooter />
</template>
