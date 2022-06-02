<script>
import CloseCrossIcon from "@/components/Icons/CloseCrossIcon";
import LeftArrowIcon from "@/components/Icons/LeftArrowIcon";
import {getMenuItems} from "@/components/Header/HeaderMenu/tools";

export default {
  name: 'HeaderMenu',
  components: {LeftArrowIcon, CloseCrossIcon},
  props: {
    isVisible: Boolean,
    toggleMenu: Function,
  },

  data()
  {
    return {
      menu: getMenuItems(),

      levels: [
        {
          menuListId: 0,
        },
      ],
    }
  },

  computed: {
    activeLevel()
    {
      const lastIndex = this.levels.length - 1;
      const {menuListId} = this.levels[lastIndex]

      const activeMenu = this.menu.find(menuItem => menuItem.id.toString() === menuListId.toString());

      return {
        ...activeMenu,
        canGoBack: lastIndex !== 0,
      };
    },
  },

  methods: {
    goBack()
    {
      const lastLevelIndex = this.levels.length - 1;

      this.levels = [
        ...this.levels.filter((_, levelIndex) => levelIndex !== lastLevelIndex),
      ]
    },

    setNextLevel(menuListId)
    {
      this.levels = [
        ...this.levels,
        {
          menuListId
        },
      ];
    },

    menuItemHandler(menuItem)
    {
      if ('action' in menuItem && menuItem.action instanceof Function) {
        menuItem.action();
      }

      if ('nextId' in menuItem) {
        this.setNextLevel(menuItem.nextId);
      }
    }
  }
}
</script>

<template>
  <transition name="fade">
    <div class="menu" v-if="isVisible">
      <nav class="menu-nav">
        <div class="menu-nav__header">
          <button v-if="activeLevel.canGoBack" @click="goBack" class="menu-nav__header-option">
            <LeftArrowIcon/>
          </button>

          <div class="menu-nav__header-title">{{ activeLevel.sectionTitle }}</div>

          <button @click="toggleMenu" class="menu-nav__header-option">
            <CloseCrossIcon/>
          </button>
        </div>

        <div class="menu-nav__body">
          <ul class="menu-nav__body-list">
            <li
                v-for="(menuItem, index) of activeLevel.list"
                :key="`menu-item-${index}`"
                @click="() => menuItemHandler(menuItem)"
                class="menu-nav__body-list__item"
            >
              <div class="menu-nav__body-list__item-title">
                {{ menuItem.title }}
              </div>
            </li>
          </ul>
        </div>

        <div class="menu-nav__footer">
          <button>Some action 1</button>
          &nbsp;
          <button>Some action 2</button>
        </div>
      </nav>
    </div>
  </transition>
</template>

<style scoped lang="scss">
.menu {
  position: fixed;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  background-color: rgba(#1d1d1d, 0.3);
  height: calc(100vh - 60px);

  width: 100%;
  top: 60px;
  left: 0;
  padding: 20px;

  &-nav {
    background-color: #ffffff;

    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    &__header {
      display: flex;
      align-items: center;
      justify-content: flex-start;

      height: 60px;
      width: 100%;
      padding: 10px;

      background-color: #35495e;

      &-title {
        margin: 0 auto;
        font-size: 18px;
        font-weight: bold;

        color: #ffffff;
      }

      &-option {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        svg {
          width: 20px;
          height: 20px;
        }
      }
    }

    &__body {
      margin-top: 20px;
      height: 100%;
      width: 100%;

      overflow: scroll;

      &-list {
        list-style: none;

        margin: 0;
        padding: 0;
        width: 100%;

        &__item {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          cursor: pointer;
          transition: transform 100ms;

          background-color: #41b883;

          width: 100%;
          padding: 10px 20px;

          &:not(:first-of-type) {
            margin-top: 5px;
          }

          &:hover {
            transform: translateX(20px);
          }

          &:active {
            transform: translateX(0);
          }

          &-title {
            color: #ffffff;
            font-size: 18px;
          }
        }
      }
    }

    &__footer {
      display: flex;
      align-items: center;
      justify-content: flex-start;

      min-height: 60px;
      width: 100%;
      margin-top: 20px;
      padding: 10px;

      background-color: #35495e;
    }
  }
}

</style>