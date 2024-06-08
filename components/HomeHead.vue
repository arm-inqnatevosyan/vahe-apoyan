<template>
    <div class="max-w-[1668px] w-full flex flex-col justify-between mx-auto ">
      <h1 class="mx-4 text-[33px] font-libre-caslon py-[42px]">Paintings</h1>
        <Flicking class="flex mx-4" :options="{ circular: true }" :plugins="plugins" id="flicking">
            <div class="flex max-w-[1668px] w-full md:flex-row flex-col md:h-[530px] h-auto">
                <div class="max-w-[796px] w-full flex md:h-[530px] h-auto">
                    <img src="/slider/slider_first.png" class="w-full h-full md:object-fill object-contain" alt="graphic img" />
                </div>
                <div class="max-w-[872px] w-full mx-auto flex justify-center items-center">
                  <a href="/oil-on-canvas">
                    <h2 class="text-[32px] font-libre-caslon">Oil on canvas</h2>
                  </a>
                </div>
           </div>
           <div class="flex max-w-[1668px] w-full md:flex-row flex-col md:h-[632px] h-auto">
                <div class="max-w-[842px] w-full flex md:h-[632px] h-auto">
                    <img src="/slider/graphics.png" class="w-full h-full md:object-fill object-contain" alt="graphic img" />
                </div>
                <div class="max-w-[846px] w-full mx-auto flex justify-center items-center">
                  <a href="/graphics">
                    <h2 class="text-[32px] font-libre-caslon">Graphics</h2>
                  </a>
                </div>
           </div>
           <div class="flex max-w-[1668px] w-full md:flex-row flex-col md:h-[631px] h-auto">
                <div class="max-w-[554px] w-full flex md:h-[631px] h-auto">
                    <img src="/slider/slider_three.png" class="w-full h-full md:object-fill object-contain" alt="graphic img" />
                </div>
                <div class="max-w-[846px] w-full mx-auto flex justify-center items-center">
                  <a href="/water-colors">
                    <h2 class="text-[32px] font-libre-caslon">Watercolor Art</h2>
                    </a>
                </div>
           </div>
          <template #viewport>
            <div class="flicking-pagination"></div>
          </template>
        </Flicking>
    </div>
</template>

<script>
import Flicking from "@egjs/vue3-flicking";
import {AutoPlay,Pagination} from "@egjs/flicking-plugins";

export default {
  components: {
    Flicking
  },
  data(){
    return{
      plugins: [new Pagination({ type: 'scroll' }),new AutoPlay({ duration: 4000, direction: "NEXT", stopOnHover: false })]
    }
  }
}
</script>
