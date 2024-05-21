<template>
  <TheHeader title="Översikt och skicka" class="header-style" />
  <div class="outer">
    <div class="inner">
      <n-form ref="formRef" class="form-layout">
        <BugDetailsView v-if="isBugDetailsPage" />
        <OverViewAndSubmitView v-else />

        <div class="buttons-container">
          <n-button
            type="primary"
            size="small"
            @click="goBack"
            :disabled="isBugDetailsPage"
          >
            Tillbaka
          </n-button>
          <n-button type="primary" size="small" @click="goNext">
            {{ isBugDetailsPage ? "Nästa" : "Skicka" }}
          </n-button>
        </div>
      </n-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import BugDetailsView from "@/views/BugDetailsView.vue";
import OverViewAndSubmitView from "@/views/OverViewAndSubmitView.vue";
import { RouteNames } from "@/router/routeNames";
import { useRoute, useRouter } from "vue-router";
import { computed } from "vue";
import { NButton, NForm } from "naive-ui";
import TheHeader from "@/components/layout/TheHeader.vue";

const route = useRoute();
const router = useRouter();

const isBugDetailsPage = computed(
  () => route.name === RouteNames.BugDetailsView
);
const isOverViewAndSubmt = computed(
  () => route.name === RouteNames.OverViewAndSubmit
);

function goBack() {
  router.push({ name: RouteNames.BugDetailsView });
}

function goNext() {
  router.push({ name: RouteNames.OverViewAndSubmit });
}
</script>
<style lang="scss" scoped>
.form-layout {
  background-color: rgb(235, 235, 245);
}
.outer {
  min-height: calc(100vh - 50px);
  background-color: rgb(235, 235, 245);
}
.header-style {
  position: sticky;
  top: 0;
  background-color: rgb(244, 244, 249);
  z-index: 1000;
}
.buttons-container {
  display: flex;
  justify-content: space-between;
  width: 90%;
  box-sizing: border-box;
  margin: auto;
  margin-top: 35px;
}
.modal-buttons {
  display: flex;
  justify-content: space-between;
}

.left-button,
.right-button {
  &:hover:not(:disabled) {
    box-shadow: rgb(57, 72, 158) 0px 20px 30px -10px;
  }

  transition: all 0.5s;
  margin-bottom: 15px;
  margin-top: 10px;
  width: 40%;
  font-size: 1.5rem;
  height: 50px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
}

.n-modal-style {
  width: 600px;
}
.confetti-icon {
  width: 100px;
  height: 100px;
}
.confirmed-modal-btn-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 25px;
  height: 100%;
}
.confirmed-modal-btn {
  width: 100px;
}
@media (min-width: 768px) {
  .buttons-container {
    max-width: 768px;
  }
  .outer {
    background-color: rgb(208, 208, 218);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .inner {
    border-radius: 10px;
    margin-top: 15px;
    margin-bottom: 15px;
    width: 800px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
  .form-layout {
    min-height: auto;
    border-radius: 10px;
  }
}
</style>
