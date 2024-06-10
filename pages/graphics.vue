<template>
    <div>
        <NavBar />
        <div class="max-w-[1668px] overflow-hidden w-full mx-auto">
            <div class="pt-[42px] mx-4">
                <h1 class="text-[32px] font-libre-caslon">Graphics</h1>
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
          src: '/graphics/Composition 1, 40 x 40, acrilic on cardboard, 2024.webp', 
          width: 15,
          title: 'Composition 1',
          description: 'Graphics',
          size: '40 x 40 cm'
        },
        {
          src: '/graphics/Composition 2, 40 x 40, acrilic on cardboard, 2024.webp',
          width: 15,
          title:'Composition 2',
          description: 'Oil on canvas',
          size: '40 x 40 cm'
        },
        {
          src: '/graphics/Composition 3, 40 x40, acrilic on cardboard, 2024.webp', 
          width: 15,
          title:'Composition 3',
          description: 'Oil on canvas',
          size: '40 x 40 cm'
        },
        {
          src: '/graphics/Composition 4, 50 x 50, acrilic on cardboard, 2024.webp',
          width: 15,
          title:'Composition 4',
          description: 'Oil on canvas',
          size: '40 x 40 cm'
        },
        {
          src: '/graphics/Composition, 33 x 33, colage with cardboard, 2020.webp',
          width: 37,
          title:'Composition 5',
          description: 'Oil on canvas',
          size: '33 x 33 cm'
        },
        {
          src: '/graphics/Composition, digital drawing, 2023.webp',
          width: 37,
          title:'Composition 6',
          description: 'Oil on canvas',
          size: '120 x 90 cm'
        },
        {
          src: '/graphics/Flying, 30x60 Cardboard, 2018.webp',
          width: 15,
          title:'Flying',
          description: 'Oil on canvas',
          size: '30 x 60 cm'
        },
        {
          src: '/graphics/Girl with Horse 100 x 70, acrilic on cardboard, 2013.webp',
          width: 15,
          title:'Girl with Horse',
          description: 'Oil on canvas',
          size: '100 x 70 cm'
        },
        {
          src: '/graphics/Girl with Horse, 50 x 70, ink on papper, 2021.webp',
          width: 15,
          title:'Girl with Horse 2',
          description: 'Oil on canvas',
          size: '50 x 70 cm'
        },
        {
          src: '/graphics/Graphic For 1 PAGE.webp',
          width: 15,
          title:'Graphic For 1',
          description: 'Oil on canvas',
          size: '110 x 80 cm'
        },
        {
          src: '/graphics/Hed of Horse 70 x 100, acrilic on cardboard, 2020.webp',
          width: 15,
          title:'Hed of Horse',
          description: 'Oil on canvas',
          size: '70 x 100 cm'
        },
        {
          src: '/graphics/Horse 140 x 200, aacrilic on cardboard, 2020.webp',
          width: 15,
          title:'Horse',
          description: 'Oil on canvas',
          size: '140 x 200 cm'
        },
        {
          src: '/graphics/Portrait of Girl, 24 x 59, pencil on papper, 2020.webp',
          width: 15,
          title:'Portrait of Girl 1',
          description: 'Oil on canvas',
          size: '24 x 59 cm'
        },
        {
          src: '/graphics/Portrait of Girl, 30 x 40, watercolor on Papper, 2020.webp',
          width: 15,
          title:'Portrait of Girl 2',
          description: 'Oil on canvas',
          size: '30 x 40 cm'
        },
        {
          src: '/graphics/Portrait of girl, 35 x 50, pancil on cardboard 2017.webp',
          width: 15,
          title:'Portrait of girl 3',
          description: 'Oil on canvas',
          size: '35 x 50 cm'
        },
        {
          src: '/graphics/Portrait of Girl, 50 x 70, acrilic on papper, 2020.webp',
          width: 15,
          title:'Portrait of girl 4',
          description: 'Oil on canvas',
          size: '50 x 70 cm'
        },
        {
          src: '/graphics/Portrait of Isabel 40 x 60, pencil on cardboard, 2016.webp',
          width: 15,
          title:'Portrait of Isabel',
          description: 'Oil on canvas',
          size: '40 x 60 cm'
        },
        {
          src: '/graphics/Portrait of Komitas, 59 x 24, pancil on papper, 2020.webp',
          width: 15,
          title:'Portrait of Komitas',
          description: 'Oil on canvas',
          size: '59 x 24 cm'
        },
        {
          src: '/graphics/Portrait of poet Yeghishe Charents, 59 x 24, pancil on papper, 2021.webp',
          width: 15,
          title:'Portrait of poet Yeghishe Charents',
          description: 'Oil on canvas',
          size: '59 x 24'
        },
        {
          src: '/graphics/Portrait of Susanna, 24 x 59, pencil on papper, 2020.webp',
          width: 15,
          title:'Portrait of Susanna',
          description: 'Oil on canvas',
          size: '24 x 59 cm'
        },
        {
          src: '/graphics/Portrait of William Saroyan 53x80, pencil on cardboard, 2017.webp',
          width: 15,
          title:'Portrait of William Saroyan',
          description: 'Oil on canvas',
          size: '53 x 80 cm'
        },
        {
          src: '/graphics/Portrait or Anette, 40x60 acrilic on cardboard, 2017.webp',
          width: 15,
          title:'Portrait or Anette',
          description: 'Oil on canvas',
          size: '40 x 60 cm'
        },
        {
          src: '/graphics/Responce to Malevich,1, 33x33 2017.webp',
          width: 15,
          title:'Responce to Malevich 1',
          description: 'Oil on canvas',
          size: '33 x 33 cm'
        },
        {
          src: '/graphics/Responce to Malevich,2, 33x33 2017 33x33.webp',
          width: 15,
          title:'Responce to Malevich 2',
          description: 'Oil on canvas',
          size: '33 x 33 cm'
        },
        {
          src: '/graphics/Responce to Malevich,3, 33x33 2017.webp',
          width: 15,
          title:'Responce to Malevich 3',
          description: 'Oil on canvas',
          size: '33 x 33 cm'
        },
        {
          src: '/graphics/Responce to Malevich,4, 33x33 2017.webp',
          width: 15,
          title:'Responce to Malevich 4',
          description: 'Oil on canvas',
          size: '33 x 33 cm'
        },
        {
          src: '/graphics/Responce to Malevich,5, 33x33 2017.webp',
          width: 15,
          title:'Responce to Malevich 5',
          description: 'Oil on canvas',
          size: '33 x 33 cm'
        },
        {
          src: '/graphics/Teatrical, 30x40, pencil on cardboard, 2017.webp',
          width: 15,
          title:'Responce to Malevich 6',
          description: 'Oil on canvas',
          size: '30 x 40 cm'
        },
        {
          src: '/graphics/The Cat, digital art, 2020 2.webp',
          width: 15,
          title:'The Cat',
          description: 'Oil on canvas',
          size: '120 x 80 cm'
        },
        {
          src: '/graphics/Abstract Composition, digital art, 2023.webp',
          width: 15,
          title:'Abstract Composition',
          description: 'Oil on canvas',
          size: '120 x 80 cm'
        },
        {
          src: '/graphics/Portrait of Gev, 33 x33, pencil on cardboard, 2018.webp',
          width: 15,
          title:'Portrait of Gev',
          description: 'Oil on canvas',
          size: '33 x 33 cm'
        },
        {
          src: '/graphics/Portrait of Girl, 14 x 21, 2020.webp',
          width: 15,
          title:'Portrait of Girl',
          description: 'Oil on canvas',
          size: '14 x 21 cm'
        },
        {
          src: '/graphics/Portrait of Grandfather, 42 x 59, pencil on papper, 2020.webp',
          width: 15,
          title:'Portrait of Grandfather',
          description: 'Oil on canvas',
          size: '42 x 59 cm'
        },
        {
          src: '/graphics/Portrait of Sergey Parajanov, 30 x 40, pencil on cardboard, 2016.webp',
          width: 15,
          title:'Portrait of Sergey Parajanov',
          description: 'Oil on canvas',
          size: '30 x 40 cm'
        },
        {
          src: '/graphics/Portrait or young boy, 30x30, pancel on cardboard, 2017.webp',
          width: 15,
          title:'Portrait or young boy',
          description: 'Oil on canvas',
          size: '30 x 30 cm'
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
    transition: all 0.2s linear;
    margin-right: 3.5px;
    margin-left: 3.5px;
    background-color: #fff;
    padding: 20px;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 10px;
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
@media (max-width:768px) {
  #img-container{
    display: flex;
    flex-direction: column;
  }
  .img-expand{
    width: 50% !important;
  }
  .img-expand:hover{
    //transition: width 0.3s ease;
    width: 100% !important;
  }
  .img-block{
    width: 100% !important;
  }
  .popup-image{
    object-fit: contain;
  }
}

</style>
