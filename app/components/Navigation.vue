<script setup lang="ts">
import {ref, onMounted, onUnmounted} from 'vue';
import {useRoute} from 'vue-router';
import Filters from '~/components/Filters.vue';

const isMenuOpen = ref(false);
const route = useRoute();

function openMenu() {
  isMenuOpen.value = true;
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  isMenuOpen.value = false;
  document.body.style.overflow = '';
}

function handleOverlayClick(e: MouseEvent) {
  if ((e.target as HTMLElement).classList.contains('burger-overlay')) {
    closeMenu();
  }
}

onMounted(() => {
  window.addEventListener('keydown', escListener);
});
onUnmounted(() => {
  window.removeEventListener('keydown', escListener);
});

function escListener(e: KeyboardEvent) {
  if (e.key === 'Escape') closeMenu();
}
</script>

<template>
  <header class="header">
    <div class="header__items">
      <div class="header__logo">Books</div>
      <div class="header__navigation">
        <ul class="header__navigation__list">
          <li class="header__navigation__list-item">
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li class="header__navigation__list-item">
            <NuxtLink to="/explore">Explore</NuxtLink>
          </li>
          <li class="header__navigation__list-item">
            <NuxtLink to="/shop">Shop</NuxtLink>
          </li>
          <li class="header__navigation__list-item">
            <NuxtLink to="/sell">Sell Your Book</NuxtLink>
          </li>
        </ul>
        <img src="/images/header/Img.png" alt="buy" loading="lazy">
      </div>
      <!-- Burger icon -->
      <button class="burger-btn" @click="openMenu" aria-label="Open menu" v-show="!isMenuOpen">
        <span></span><span></span><span></span>
      </button>
    </div>
    <!-- Burger menu overlay -->
    <div v-if="isMenuOpen" class="burger-overlay" @click="handleOverlayClick">
      <nav class="burger-menu">
        <button class="close-btn" @click="closeMenu" aria-label="Close menu">&times;</button>
        <ul class="burger-menu__list">
          <li>
            <NuxtLink to="/" @click.native="closeMenu">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/explore" @click.native="closeMenu">Explore</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/shop" @click.native="closeMenu">Shop</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/sell" @click.native="closeMenu">Sell Your Book</NuxtLink>
          </li>
        </ul>
        <img src="/images/header/Img.png" alt="buy" loading="lazy" class="burger-img">
        <Filters v-if="route.path === '/shop'"/>
      </nav>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  font-family: Segoe UI, sans-serif;
  background-color: #E4E4E7;
  color: #1E1B4B;

  &__items {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 63px;
    flex-wrap: wrap;

    @media (width < 600px) {
      padding: 12px 20px;
    }
  }

  &__logo {
    font-size: 24px;
    font-weight: 700;
    line-height: 36px;
    margin-right: 36px;
  }

  &__navigation {
    display: flex;
    column-gap: 36px;
    flex-wrap: wrap;

    @media (width < 480px) {
      display: none;
    }

    &__list {
      display: flex;
      column-gap: 36px;
      text-transform: uppercase;
      font-size: 12.8px;
      flex-wrap: wrap;
    }
  }
}

.burger-btn {
  display: none;
  background: none;
  border: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  cursor: pointer;
  z-index: 1201;
  @media (width < 460px) {
    display: flex;
  }

  span {
    display: block;
    width: 28px;
    height: 4px;
    margin: 4px 0;
    background: #1E1B4B;
    border-radius: 2px;
    transition: 0.3s;
  }
}

.burger-overlay {
  position: fixed;
  z-index: 1200;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: flex-end;
}

.burger-menu {
  background: #fff;
  width: 85vw;
  max-width: 340px;
  height: 100vh;
  padding: 32px 20px 20px 20px;
  box-shadow: -2px 0 16px rgba(0, 0, 0, 0.08);
  position: relative;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media (width >= 460px) {
    display: none;
  }

  &__list {
    list-style: none;
    padding: 0;
    margin: 0 0 16px 0;
    display: flex;
    flex-direction: column;
    gap: 18px;

    a {
      color: #1E1B4B;
      font-size: 1.1rem;
      text-decoration: none;
      font-weight: 600;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .close-btn {
    position: absolute;
    top: 12px;
    right: 16px;
    background: none;
    border: none;
    font-size: 2rem;
    color: #1E1B4B;
    cursor: pointer;
    z-index: 1202;
  }

  .burger-img {
    width: 40px;
  }
}
</style>