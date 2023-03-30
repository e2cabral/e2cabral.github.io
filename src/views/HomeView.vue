<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";

//example components
import NavbarDefault from "../components/navbar/NavbarDefault.vue";
import DefaultFooter from "../components/footer/FooterDefault.vue";
import Header from "../components/Header.vue";
import FilledInfoCard from "../components/cards/infoCards/FilledInfoCard.vue";

//Vue Material Kit 2 components
import MaterialSocialButton from "@/components/MaterialSocialButton.vue";

import backgroundImg from '@/assets/img/cabral-tech-background-img.jpg'
import instagram from '@/assets/img/icons8-instagram.svg'
import github from '@/assets/img/icons8-github.svg'
import linkedin from '@/assets/img/icons8-linkedin.svg'

//hooks
const body = document.getElementsByTagName("body")[0];
onMounted(() => {
  body.classList.add("presentation-page");
  body.classList.add("bg-gray-200");
});
onUnmounted(() => {
  body.classList.remove("presentation-page");
  body.classList.remove("bg-gray-200");
});
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
            <h1
                class="text-white pt-3 mt-n5 me-2"
                :style="{ display: 'inline-block ' }"
            >
              Cabral Tech Consulting
            </h1>
            <p class="lead text-white px-5 mt-3" :style="{ fontWeight: '500' }">
              Helping companies to reach their goals
            </p>
          </div>
        </div>
      </div>
    </div>
  </Header>

  <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6">

    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <FilledInfoCard
              class="p-4"
              :color="{ text: 'white', background: 'bg-gradient-success' }"
              title="About us"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum."
              :action="{
              route: 'home',
              label: { text: 'Discover more', color: 'white' }
            }"
          />
        </div>
        <div class="col-lg-4">
          <FilledInfoCard
              class="p-4"
              height="h-100"
              title="Projects"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum."
              :action="{
              route: 'home',
              label: { text: 'Read more' }
            }"
          />
        </div>
        <div class="col-lg-4">
          <FilledInfoCard
              class="p-4"
              title="Utility Classes"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum."
              :action="{
              route:
                'home',
              label: { text: 'Read more' }
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
                <h3 class="text-white">
                  Do you want to know more about us?
                </h3>
                <p class="text-white text-md">
                  You can discover a little more about our code quality, best practices, architecture and development concepts applied by visiting our Github.
                </p>

                <a
                    href="https://github.com/Cabral-Tech-Consultoria"
                    class="btn btn-sm mb-0 bg-gradient-success px-5 py-3 mt-4"
                >Visit us</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="d-flex flex-column w-100 text-center p-5 mb-8">
          <h3>You can find us on</h3>
          <div class="d-flex justify-content-center mt-3 flex-wrap">
            <a
                href="https://www.creative-tim.com/product/material-kit"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Cabral Tech Consulting on instagram"
            >
              <img
                  :src="instagram"
                  alt="title"
                  loading="lazy"
                  :style="{ height: '40px' }"
              />
            </a>
            <a
                class="opacity-5 ms-3"
                href="https://github.com/Cabral-Tech-Consultoria"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Cabral Tech Consulting on GitHub"
            >
              <img
                  :src="github"
                  alt="title"
                  loading="lazy"
                  :style="{ height: '40px' }"
              />
            </a>
            <a
                href="https://www.linkedin.com/company/cabral-tech-consultoria/"
                class="mx-3"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Cabral Tech Consulting on LinkedIn"
            >
              <img
                  :src="linkedin"
                  alt="title"
                  loading="lazy"
                  :style="{ height: '40px' }"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <DefaultFooter />
</template>
