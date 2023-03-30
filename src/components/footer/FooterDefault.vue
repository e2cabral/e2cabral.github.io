<script setup>
import logo from '@/assets/img/logo-cabral-tech-sem-fundo-preto.png'
import ceo from '@/assets/img/ceo-photo.jpg'
import MaterialAvatar from '@/components/MaterialAvatar.vue'
</script>
<template>
  <footer class="footer pt-5 mt-5">
    <div class="container">
      <div class="row">
        <div class="col-md-3 mb-4 ms-auto">
          <div>
            <a :href="brand.route">
              <img :src="logo" class="mb-3 footer-logo-md" alt="Cabral Tech Consulting" />
            </a>
          </div>
          <div>
            <div class="container p-0 m-0">
              <div class="row">
                <div class="col-2 me-2 align-content-start">
                  <material-avatar alt="CEO - Edson Cabral Junior" :image="ceo" size="md" />
                </div>
                <div class="col-8">
                  <h6 class="mb-0">Edson Cabral Junior</h6>
                  <p class="text-sm mb-0">CEO and Founder</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <ul class="d-flex flex-row ms-n3 nav">
              <li class="nav-item" v-for="{ icon, link } of socials" :key="link">
                <a class="nav-link pe-1" :href="link" target="_blank" v-html="icon"> </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-2 col-sm-6 col-6 mb-4" v-for="{ name, items } of menus" :key="name">
          <!--          <h6 class="text-sm">{{ name }}</h6>-->
          <!--          <ul class="flex-column ms-n3 nav">-->
          <!--            <li class="nav-item" v-for="item of items" :key="item.name">-->
          <!--              <a class="nav-link" :href="item.href" target="_blank">-->
          <!--                {{ item.name }}-->
          <!--              </a>-->
          <!--            </li>-->
          <!--          </ul>-->
        </div>

        <div class="col-12">
          <div class="text-center">
            <p class="text-dark my-4 text-sm font-weight-normal">
              All rights reserved. Copyright ©
              {{ new Date().getFullYear() }}
              Cabral Tech Consultoria by
              <a href="https://github.com/e2cabral" target="_blank">Edson Cabral</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
