<template>
    <div>
        <NavBar />
        <div class="max-w-[1668px] overflow-hidden w-full mx-auto">
            <div class="pt-[42px] mx-4">
                <h1 class="text-[32px] font-libre-caslon">Oil on canvas</h1>
            </div>
            <div id="img-container" class="w-full mt-[70px] h-full md:max-w-[1668px] max-w-[450px] sm:mx-4 mx-auto">
              <Flicking :options="{ circular: true,align: 'prev' }">
                <div
                      v-for="(image, index) in images"
                      :key="index"
                      :style="{ width: image.width + '%' }"
                      @mouseover="expandImage(index)"
                      @mouseout="resetImages"
                      class="img-block"
                  >
                      <img :src="image.src"  @click="openPopup(index)" alt="Image" class="img-expand" />
                      <div class="pt-[12px] popup-content">
                          <h3 class="font-libre-caslon text-[14px] text-[#000]">{{ image.title }}</h3>
                          <h3 class="font-libre-caslon text-[14px] text-[#9C9C9C]">{{ image.description }}</h3>
                          <h3 class="font-libre-caslon text-[14px] text-[#9C9C9C]">{{ image.size }}</h3>
                      </div>
                  </div>
              </Flicking>
            </div>
        </div>
        <div v-if="isPopupOpen" class="popup-overlay" @click="closePopup">
            <div class="popup">
                <img :src="selectedImage.src" alt="Popup Image" class="popup-image">
            </div>
        </div>
    </div>
</template>
  
<script>
import Flicking from "@egjs/vue3-flicking";
import NavBar from '~/components/NavBar.vue';
export default {
  components: {
    NavBar,
    Flicking
  },
  data() {
    return {
      images: [
        {
          src: '/oli-on-canvas/Crossability130x110, Oil on Canvas 2015.webp', 
          width: 15,
          title: 'Crossability',
          description: 'Oil on canvas',
          size: '100 x 90 137'
        },
        {
          src: '/oli-on-canvas/Composition1, 120 x120 Oil on Canvas 2023.webp',
          width: 15,
          title:'Shushi St.Ghazanchetsots Cathedral, 2016',
          description: 'Oil on canvas',
          size: '120 x 120 cm'
        },
        {
          src: '/oli-on-canvas/Composition 100 x 137 Oil on Canvas 2023 2.webp',
          width: 15,
          title:'Composition',
          description: 'Oil on canvas',
          size: '130 x 110 cm'
        },
        {
          src: '/oli-on-canvas/Dream 2, 100 x 80 oil on Canvas 2012.webp',
          width: 15,
          title:'Dream 2',
          description: 'Oil on canvas',
          size: '100 x 80 cm'
        },
        {
          src: '/oli-on-canvas/Ghazanchecoc 60x80 Oil on canvas 2017.webp',
          width: 37,
          title:'Ghazanchecoc',
          description: 'Oil on canvas',
          size: '60 x 80 cm'
        },
        {
          src: '/oli-on-canvas/Horses 90 x 137 Oil on canvas 2022 2.webp',
          width: 37,
          title:'Horses',
          description: 'Oil on canvas',
          size: '90 x 137 cm'
        },
        {
          src: '/oli-on-canvas/Hoses 80x100 Oil on Canvas 2011.webp',
          width: 15,
          title:'Hoses',
          description: 'Oil on canvas',
          size: '80 x 100 cm'
        },
        {
          src: '/oli-on-canvas/Invasion 2 120 x 130 Oil on Canvas 2014.webp',
          width: 15,
          title:'Invasion 2',
          description: 'Oil on canvas',
          size: '120 x 130 cm'
        },
        {
          src: '/oli-on-canvas/Memory 2, 80x80 Oil on Canvas 2014.webp',
          width: 15,
          title:'Memory 2',
          description: 'Oil on canvas',
          size: '80 x 80 cm'
        },
        {
          src: '/oli-on-canvas/Memory 3, 80x80 Oil on Canvas 2014.webp',
          width: 15,
          title:'Memory 3',
          description: 'Oil on canvas',
          size: '80 x 80 cm'
        },
        {
          src: '/oli-on-canvas/OIL for 1 Page 2023.webp',
          width: 15,
          title:'OIL for 1 Page',
          description: 'Oil on canvas',
          size: '80 x 80 cm'
        },
        {
          src: '/oli-on-canvas/Parajanov  90x115 Oil on Canvas 2015 3.webp',
          width: 15,
          title:'Parajanov',
          description: 'Oil on canvas',
          size: '90 x 115 cm'
        },
        {
          src: '/oli-on-canvas/Portrait of Marina 60 x 70 Oil on Canvas 2015.webp',
          width: 15,
          title:'Portrait of Marina',
          description: 'Oil on canvas',
          size: '60 x 70 cm'
        },
        {
          src: '/oli-on-canvas/Portrait of Rima 60x70, Oil on Canvas 2012.webp',
          width: 15,
          title:'Portrait of Rima',
          description: 'Oil on canvas',
          size: '60 x 70 cm'
        },
        {
          src: '/oli-on-canvas/Salome 120 x 130 Oil on Canvas 2014.webp',
          width: 15,
          title:'Salome',
          description: 'Oil on canvas',
          size: '120 x 130 cm'
        },
        {
          src: '/oli-on-canvas/Three  Gracies 1, 110 x 130 Oil on Canvas 2013.webp',
          width: 15,
          title:'Three  Gracies 1',
          description: 'Oil on canvas',
          size: '110 x 130 cm'
        },
        {
          src: '/oli-on-canvas/Memory 80x80 Oil on Canvas 2014.webp',
          width: 15,
          title:'Memory',
          description: 'Oil on canvas',
          size: '80 x 80 cm'
        },
        {
          src: '/oli-on-canvas/I and She, 60x70 Oil on Canvas 2012.webp',
          width: 15,
          title:'I and She',
          description: 'Oil on canvas',
          size: '60 x 70 cm'
        },
        {
          src: '/oli-on-canvas/Agnes 60x90 Oil on Canvas 2015 2.webp',
          width: 15,
          title:'Agnes',
          description: 'Oil on canvas',
          size: '60 x 90 cm'
        },
        {
          src: '/oli-on-canvas/Blue Composition,80 x 210, oil on canvas, 2024.webp',
          width: 15,
          title:'Blue Composition',
          description: 'Oil on canvas',
          size: '80 x 210 cm'
        },
        {
          src: '/oli-on-canvas/Dalar 70x80 Oil on Canvas 2017.webp',
          width: 15,
          title:'Dalar',
          description: 'Oil on canvas',
          size: '70 x 80 cm'
        },
        {
          src: '/oli-on-canvas/Dream 100 X 125 Oil on Canvas 2012.webp',
          width: 15,
          title:'Dream',
          description: 'Oil on canvas',
          size: '100 X 125 cm'
        },
        {
          src: '/oli-on-canvas/Family 40x120 Oil on canvas 2013.webp',
          width: 15,
          title:'Family',
          description: 'Oil on canvas',
          size: '40 x 120 cm'
        },
        {
          src: '/oli-on-canvas/Girl 90 x 137 oil on canvas 2020.webp',
          width: 15,
          title:'Girl',
          description: 'Oil on canvas',
          size: '90 x 137 cm'
        },
        {
          src: '/oli-on-canvas/Invasion 1, 120x130 Oil on Canvas 2014.webp',
          width: 15,
          title:'Invasion 1',
          description: 'Oil on canvas',
          size: '120 x 130 cm'
        },
        {
          src: '/oli-on-canvas/73x102_sevak.webp',
          width: 15,
          title:'Sevak',
          description: 'Oil on canvas',
          size: '73 x 102 cm'
        },
        {
          src: '/oli-on-canvas/Steps 2,  100x70 Oil on Canvas 2013.webp',
          width: 15,
          title:'Steps 2',
          description: 'Oil on canvas',
          size: '100 x 70 cm'
        },
        {
          src: '/oli-on-canvas/Three  Gracies 2, 110 x 130 Oil on Canvas 2013.webp',
          width: 15,
          title:'Three  Gracies 2',
          description: 'Oil on canvas',
          size: '110 x 130 cm'
        },
        {
          src: '/oli-on-canvas/Steps 1, 100-70 Oil on Canvas 2013.webp',
          width: 15,
          title:'Steps 1',
          description: 'Oil on canvas',
          size: '100 x 70 cm'
        },
      ],
      originalWidth: 15,
      expandedWidth: 30,
      isPopupOpen: false,
      selectedImage: null

    };
  },
  methods: {
    expandImage(index) {
      this.images.forEach((image, i) => {
        if (i === index) {
          image.width = this.expandedWidth;
        } else {
          image.width = this.originalWidth;
        }
      });
    },
    resetImages() {
      this.images.forEach(image => {
        image.width = this.originalWidth;
      });
    },
    openPopup(index) {
      this.selectedImage = this.images[index];
      this.isPopupOpen = true;
    },
    closePopup() {
      this.isPopupOpen = false;
      this.selectedImage = null;
    }
  }
};
</script>
  
<style scoped>
.img-expand {
    transition: width 0.3s ease;
    display: inline-block;
    height: 500px;
    margin-right: 3.5px;
    margin-left: 3.5px;
    padding-right: 0px;
    padding-left: 0px;
    object-fit: cover;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
    width: 100%;
}
.img-block{
    display: inline-block;
    margin-right: 3.5px;
    margin-left: 3.5px;
    background-color: #fff;
    padding: 20px;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 10px;
}
@media (max-width:768px) {
    #img-container{
        display: flex;
        flex-direction: column;
    }
    .img-expand{
        width: 50% !important;
    }
    .img-expand:hover{
        width: 100% !important;
    }
    .img-block{
        width: 100% !important;
    }
}

.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup {
  padding: 20px;
  border-radius: 10px;
}

.popup-image {
  max-width: 100%;
  height: 500px;
  border-radius: 10px;
}

.popup-content h2 {
  font-size: 24px;
}

.popup-content p {
  font-size: 16px;
  margin-bottom: 10px;
}
</style>
  