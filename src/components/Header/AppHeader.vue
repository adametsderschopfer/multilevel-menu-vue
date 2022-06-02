<template>
  <div class="header">
    <button class="header__menu-button" @click="toggleMenu">
      <HeaderBurgerIcon/>
    </button>

    <span class="header-text">Click on burger</span>

    <HeaderMenu :isVisible="isVisible" :toggleMenu="toggleMenu"/>
  </div>
</template>

<script>
import HeaderMenu from "@/components/Header/HeaderMenu/HeaderMenu";
import HeaderBurgerIcon from "@/components/Icons/HeaderBurgerIcon";

export default {
  components: {HeaderBurgerIcon, HeaderMenu},

  data()
  {
    return {
      isVisible: false,
    }
  },

  methods: {
    toggleMenu()
    {
      this.isVisible = !this.isVisible;
    }
  }
}
</script>

<style scoped lang="scss">
.header {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  height: 60px;
  padding: 5px 20px;
  margin-bottom: 30px;
  width: 100%;
  top: 0;

  background-color: #41b883;
  color: #ffffff;

  &__menu {
    &-button {
      background-color: transparent;
      padding: 0;
      height: 40px;

      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      border: none;
      cursor: pointer;

      svg {
        width: 100%;
        height: 100%;
      }
    }
  }

  &-text {
    margin-left: 5px;
  }
}
</style>