<template>
  <div class="main-menu relative-parent">
    <div class="hidden-sm-up relative-parent">
      <svg class="logo icon icon--outline icon--stroke-2 icon--lg"><use href="#icon-dots-to-close" xlink:href="#icon-dots-to-close"/></svg>
      <h4 class="text-center mrg0 pdg-">M-FIoT</h4>
    </div>
    <div class="hidden-xs-down v-aligner full-screen-height">
      <div class="v-aligner-item">
        <svg class="mrgt- icon icon--outline icon--stroke-2"><use href="#icon-speaker-05" xlink:href="#icon-speaker-05"/></svg>
      </div>
      <div class="v-aligner-item">
        <ul class="list-stacked list-stacked--large">
          <li><router-link :to="{ name: 'home' }"><svg class="icon icon--link icon--outline icon--stroke-2"><use href="#icon-web-design" xlink:href="#icon-web-design"/></svg></router-link></li>
          <li><router-link :to="{ name: 'home' }"><svg class="icon icon--link icon--outline"><use href="#icon-wifi-router" xlink:href="#icon-wifi-router"/></svg></router-link></li>
          <li><router-link :to="{ name: 'home' }"><svg class="icon icon--link"><use href="#icon-sound-wave" xlink:href="#icon-sound-wave"/></svg></router-link></li>
        </ul>
      </div>
      <div class="v-aligner-item">
        <svg class="icon mrgb-"><use href="#icon-c-info-2" xlink:href="#icon-c-info-2"/></svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainMenu'
}
</script>

<style lang="scss">
.icon {
  color: #9DCEFE!important;
  transition: all .075s ease-in-out;

  &--link {
    &:hover {
      color: rgb(255, 217, 47)!important;
      transform: scale(1.165);
    }
  }
}
.logo {
  position: absolute;
  top: 15px;
  left: 20px;
}
</style>
