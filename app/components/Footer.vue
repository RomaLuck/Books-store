<script setup lang="ts">

</script>

<template>
  <footer class="footer">
    <div class="footer__navigation">
      <div class="footer__info-block">
        <h3>Books</h3>
        <p>Books Delivered. Imagination Unlimited.</p>
      </div>
      <div class="footer__navigation-block">
        <h3>Quick Links</h3>
        <ul class="block__list">
          <li class="block__list-item">Home</li>
          <li class="block__list-item">About us</li>
          <li class="block__list-item">Contact</li>
        </ul>
      </div>
      <div class="footer__contact-block">
        <h3>Contact</h3>
        <ul class="block__list">
          <li class="block__list-item">Email: mssonukr@gmail.com</li>
          <li class="block__list-item">Phone: +91 7061543815</li>
          <li class="block__list-item">MMEC, Mullana - 133207</li>
        </ul>
      </div>
      <div class="footer__pay-info-block">
        <h3>We Accept</h3>
        <div class="footer__pay-logo-list">
          <div class="footer__pay-logo-item">
            <NuxtImg src="/images/footer/Visa.png" alt="Visa" loading="lazy"/>
          </div>
          <div class="footer__pay-logo-item">
            <NuxtImg src="/images/footer/Mastercard.png" alt="Visa" loading="lazy"/>
          </div>
          <div class="footer__pay-logo-item">
            <NuxtImg src="/images/footer/American%20Express.png" alt="Visa" loading="lazy"/>
          </div>
        </div>
      </div>
    </div>
    <div class="footer__copyright">
      © 2025 Books. All rights reserved. | Made By Roman
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  height: 305px;
  color: #FFFFFF;
  background-color: #000000;
  font-family: arial, sans-serif;
  padding: 16px 63px 0 63px;

  @media (max-width: 450px) {
    padding: 10px;
  }

  &__navigation {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    column-gap: 30px;
    padding: 30px 20px 35px 20px;
    margin-bottom: 20px;

    @media (max-width: 450px) {
      padding: 10px;
    }

    h3 {
      margin-bottom: 20px;
    }

    .block__list {
      display: flex;
      flex-direction: column;
      row-gap: 10px;
    }
  }

  &__copyright {
    display: flex;
    justify-content: center;
    align-items: end;
    height: 57px;
    border-top: 1px dashed #fff;
    margin-bottom: 30px;
    text-align: center;
  }

  &__pay-logo-list {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
  }

  @media (max-width: 900px) {
    &__info-block {
      display: none;
    }
  }

  @media (max-width: 680px) {
    &__pay-info-block {
      display: none;
    }
  }
}
</style>