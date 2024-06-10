<template>
    <div>
        <NavBar />
        <div class="max-w-[1668px] overflow-hidden w-full mx-auto">
            <div class="pt-[42px] mx-4">
                <h1 class="text-[32px] font-libre-caslon">Water Colors</h1>
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
                          <h3 class="font-libre-caslon text-[14px] text-[#000]"><NuxtLink to="/contact">{{ image.title }}</NuxtLink></h3>
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
          src: '/water-colors/Composition 1, 36 x 48, watercolor on papper, 2024.webp', 
          width: 15,
          title: 'Composition 1, 2024',
          description: 'Watercolor on papper',
          size: '36 x 48 cm'
        },
        {
          src: '/water-colors/Composition 2, 36 x 48, watercolor on papper, 2024.webp',
          width: 15,
          title:'Composition 2, 2024',
          description: 'Watercolor on papper',
          size: '36 x 48 cm'
        },
        {
          src: '/water-colors/Composition 3, 36 x 48, watercolor on papper, 2024.webp', 
          width: 15,
          title:'Composition 3, 2024',
          description: 'Watercolor on papper',
          size: '36 x 48 cm'
        },
        {
          src: '/water-colors/Composition 4, 36 x 48, watercolor on papper, 2024.webp',
          width: 15,
          title:'Composition 4, 2024',
          description: 'Watercolor on papper',
          size: '36 x 48 cm'
        },
        {
          src: '/water-colors/Composition 5, 36 x 48, watercolor on papper, 2024.webp',
          width: 37,
          title:'Composition 5, 2024',
          description: 'Watercolor on papper',
          size: '36 x 48 cm'
        },
        {
          src: '/water-colors/Composition 6, 36 x 48, watercolor on papper, 2024.webp',
          width: 37,
          title:'Composition 6, 2024',
          description: 'Watercolor on papper',
          size: '36 x 48 cm'
        },
        {
          src: '/water-colors/Composition 7, 36 x 48, watercolor on papper, 2024.webp',
          width: 15,
          title:'Composition 7, 2024',
          description: 'Watercolor on papper',
          size: '36 x 48 cm'
        },
        {
          src: '/water-colors/Composition 8, 36 x 48, watercolor on papper, 2024.webp',
          width: 15,
          title:'Composition 8, 2024',
          description: 'Watercolor on papper',
          size: '36 x 48 cm'
        },
        {
          src: '/water-colors/Composition 9, 36 x 48, watercolor on papper, 2024.webp',
          width: 15,
          title:'Composition 9, 2024',
          description: 'Watercolor on papper',
          size: '36 x 48 cm'
        },
        {
          src: '/water-colors/Composition 10, 36 x 48, watercolor on papper, 2024.webp',
          width: 15,
          title:'Composition 10, 2024',
          description: 'Watercolor on papper',
          size: '36 x 48 cm'
        },
        {
          src: '/water-colors/Composition 11, 36 x 48, watercolor on papper, 2024.webp',
          width: 15,
          title:'Composition 11, 2024',
          description: 'Watercolor on papper',
          size: '36 x 48 cm'
        },
        {
          src: '/water-colors/Composition 12, 36 x 48, watercolor on papper, 2024.webp',
          width: 15,
          title:'Composition 12, 2024',
          description: 'Watercolor on papper',
          size: '36 x 48 cm'
        },
        {
          src: '/water-colors/Composition 13, 36 x 48, watercolor on papper, 2024.webp',
          width: 15,
          title:'Composition 13, 2024',
          description: 'Watercolor on papper',
          size: '36 x 48 cm'
        },
        {
          src: '/water-colors/Composition 14, 36 x 48, watercolor on papper, 2024.webp',
          width: 15,
          title:'Composition 14, 2024',
          description: 'Watercolor on papper',
          size: '36 x 48 cm'
        },
        {
          src: '/water-colors/Composition 15, 36 x 48, watercolor on papper, 2024.webp',
          width: 15,
          title:'Composition 15, 2024',
          description: 'Watercolor on papper',
          size: '36 x 48 cm'
        },
        {
          src: '/water-colors/Composition 16, 36 x 48, watercolor on papper, 2024.webp',
          width: 15,
          title:'Composition 16, 2024',
          description: 'Watercolor on papper',
          size: '36 x 48 cm'
        },
        {
          src: '/water-colors/Composition 17, 36 x 48, watercolor on papper, 2024.webp',
          width: 15,
          title:'Composition 17, 2024',
          description: 'Watercolor on papper',
          size: '36 x 48 cm'
        },
        {
          src: '/water-colors/Composition 18, 36 x 48, watercolor on papper, 2024.webp',
          width: 15,
          title:'Composition 18, 2024',
          description: 'Watercolor on papper',
          size: '36 x 48 cm'
        },
        {
          src: '/water-colors/Composition 19, 36 x 48, watercolor on papper, 2024.webp',
          width: 15,
          title:'Composition 19, 2024',
          description: 'Watercolor on papper',
          size: '36 x 48 cm'
        },
        {
          src: '/water-colors/Composition 20, 36 x 48, watercolor on papper, 2024.webp',
          width: 15,
          title:'Composition 20, 2024',
          description: 'Watercolor on papper',
          size: '36 x 48 cm'
        },
        {
          src: '/water-colors/Composition 21, 36 x 48, watercolor on papper, 2024.webp',
          width: 15,
          title:'Composition 21, 2024',
          description: 'Watercolor on papper',
          size: '36 x 48 cm'
        },
        {
          src: '/water-colors/Composition 22, 36 x 48, watercolor on papper, 2024.webp',
          width: 15,
          title:'Composition 22, 2024',
          description: 'Watercolor on papper',
          size: '36 x 48 cm'
        },
        {
          src: '/water-colors/Composition 23, 36 x 48, watercolor on papper, 2024.webp',
          width: 15,
          title:'Composition 23, 2024',
          description: 'Watercolor on papper',
          size: '36 x 48 cm'
        },
        {
          src: '/water-colors/Composition 24, 36 x 48, watercolor on papper, 2024.webp',
          width: 15,
          title:'Composition 24, 2024',
          description: 'Watercolor on papper',
          size: '36 x 48 cm'
        },
        {
          src: '/water-colors/Composition 25, 36 x 48, watercolor on papper, 2024.webp',
          width: 15,
          title:'Composition 25, 2024',
          description: 'Watercolor on papper',
          size: '36 x 48 cm'
        },
        {
          src: '/water-colors/Composition 26, 36 x 48, watercolor on papper, 2024.webp',
          width: 15,
          title:'Composition 26, 2024',
          description: 'Watercolor on papper',
          size: '36 x 48 cm'
        },
        {
          src: '/water-colors/Composition 27, 36 x 48, watercolor on papper, 2024.webp',
          width: 15,
          title:'Composition 27, 2024',
          description: 'Watercolor on papper',
          size: '36 x 48 cm'
        },
        {
          src: '/water-colors/Composition 28, 36 x 48, watercolor on papper, 2024.webp',
          width: 15,
          title:'Composition 28, 2024',
          description: 'Watercolor on papper',
          size: '36 x 48 cm'
        },
        {
          src: '/water-colors/Composition 29, 36 x 48, watercolor on papper, 2024.webp',
          width: 15,
          title:'Composition 29, 2024',
          description: 'Watercolor on papper',
          size: '36 x 48 cm'
        },
        {
          src: '/water-colors/Composition 30, 36 x 48, watercolor on papper, 2024.webp',
          width: 15,
          title:'Composition 30, 2024',
          description: 'Watercolor on papper',
          size: '36 x 48 cm'
        },
        {
          src: '/water-colors/Composition 31, 36 x 48, watercolor on papper, 2024.webp',
          width: 15,
          title:'Composition 31, 2024',
          description: 'Watercolor on papper',
          size: '36 x 48 cm'
        },
        {
          src: '/water-colors/Composition 32, 36 x 48, watercolor on papper, 2024.webp',
          width: 15,
          title:'Composition 32, 2024',
          description: 'Watercolor on papper',
          size: '36 x 48 cm'
        },
        {
          src: '/water-colors/Composition 33, 36 x 48, watercolor on papper, 2024.webp',
          width: 15,
          title:'Composition 33, 2024',
          description: 'Watercolor on papper',
          size: '36 x 48 cm'
        },
        {
          src: '/water-colors/Composition 34, 36 x 48, watercolor on papper, 2024.webp',
          width: 15,
          title:'Composition 34, 2024',
          description: 'Watercolor on papper',
          size: '36 x 48 cm'
        },
        {
          src: '/water-colors/Composition 35, 36 x 48, watercolor on papper, 2024.webp',
          width: 15,
          title:'Composition 35, 2024',
          description: 'Watercolor on papper',
          size: '36 x 48 cm'
        },
        {
          src: '/water-colors/Composition 36, 36 x 48, watercolor on papper, 2024.webp',
          width: 15,
          title:'Composition 36, 2024',
          description: 'Watercolor on papper',
          size: '36 x 48 cm'
        },
        {
          src: '/water-colors/Composition 37, 36 x 48, watercolor on papper, 2024.webp',
          width: 15,
          title:'Composition 37, 2024',
          description: 'Watercolor on papper',
          size: '36 x 48 cm'
        },
        {
          src: '/water-colors/Composition 38, 36 x 48, watercolor on papper, 2024.webp',
          width: 15,
          title:'Composition 38, 2024',
          description: 'Watercolor on papper',
          size: '36 x 48 cm'
        },
        {
          src: '/water-colors/Composition 39, 36 x 48, watercolor on papper, 2024.webp',
          width: 15,
          title:'Composition 39, 2024',
          description: 'Watercolor on papper',
          size: '36 x 48 cm'
        }
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
    transition: all 0.2s linear;
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
