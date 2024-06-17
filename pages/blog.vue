<template>
    <div>
      <NavBar />
      <div class="w-full">
        <div class="max-w-[1668px] w-full mx-auto py-[40px] md:pl-[16px] pl-0">
            <h1 class="text-[33px] font-libre-caslon">Blog</h1>
        </div>
            <section class="max-w-[1668px] w-full mx-auto md:pl-[16px] pl-0">
                <div>
                    <div>
                    <article class="article">
                        <div>
                            <div v-if="!loading" data-aos="fade-up" data-aos-duration="800">
                            <div class="max-w-[552px] w-full">
                                <div class="image">
                                  <img :src="lastPost.image" :alt="lastPost.alt" />
                                </div>
                                <div class="content-post">
                                <h5 class="py-[34px] text-[12px] font-libre-caslon tracking-[1.8px]">
                                    <NuxtLink :to="`/blog/${lastPost.slug}`">{{ lastPost.title === '(Untitled)' ? '' :  lastPost.title}}</NuxtLink>
                                </h5>
                                <p class="m-b17">{{ lastPost.description }}</p>
                                </div>
                            </div>
                            <div class="grid max-w-[1320px] w-full md:grid-cols-3 grid-cols-1">
                                <div v-for="(item, index) in content" :key="index" data-aos="fade-up" data-aos-duration="800">
                                    <div class="max-w-[363px] w-full">
                                        <img :src="item.feature_image" :alt="item.feature_image_alt" />
                                    </div>
                                    <div class="max-w-[363px] w-full">
                                        <div class="py-[34px] text-[12px] font-libre-caslon tracking-[1.8px]">
                                            <NuxtLink :to="`/blog/${item.slug}`">{{item.title === '(Untitled)' ? '' :  item.title}}</NuxtLink>
                                        </div>
                                        <p>{{ item.excerpt }}</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div data-aos="fade-in" data-aos-duration="800">
                                <ul class="flex gap-2 mb-4">
                                    <li @click="() => getAllPosts(i + 1)" :class="{ active: i + 1 === currentPage }" class="px-4 py-2 border cursor-pointer" v-for="(page, i) in pagination" :key="i">
                                        <a href="#" class="page-link">{{ i + 1 }}</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        </article>
                        <div class="body-bg" v-if="loading">
                        <svg class="spinner" viewBox="0 0 50 50">
                            <circle class="path" cx="25" cy="25" r="20" fill="none" :stroke-width="loading ? '5' : '0'"></circle>
                        </svg>
                        </div>
                    </div>
                </div>
            </section>
      </div>
    </div>
</template>

<script>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';

export default {
  components: {
    NavBar: () => import('~/components/NavBar.vue'),
  },
  setup() {
    const config = useRuntimeConfig();
    const route = useRoute();

    const content = ref([]);
    const lastPost = ref({
      id: '',
      slug: '',
      description: '',
      title: '',
      image: '',
      alt: '',
      created_time: '',
    });
    const loading = ref(true);
    const pagination = ref();
    const currentPage = ref(1);

    // Define your getAllPosts function here
    async function getAllPosts(index) {
      try {
        const url = `${config.public.NUXT_GHOST_URL}/content/posts?key=${config.public.NUXT_GHOST_KEY}&limit=4&page=${index}`;
        console.log('Fetching data from:', url);
        const response = await fetch(url, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Ghost ${'0d5b28aea711d972d24a2bf52d'}`,
          },
        });
        const data = await response.json();
        lastPost.value = {
          id: data.posts[0]?.id,
          slug: data.posts[0]?.slug,
          description: data.posts[0]?.excerpt,
          title: data.posts[0]?.title,
          image: data.posts[0]?.feature_image,
          alt: data.posts[0]?.feature_image_alt,
          created_time: new Date(data.posts[0]?.created_at),
        };
        pagination.value = Array.from({ length: Math.ceil(data.meta.pagination.total / 3) }, (_, i) => i + 1);
        data.posts.shift();
        content.value = data.posts;
        loading.value = false;
      } catch (error) {
        console.error('Error fetching Ghost content:', error);
      }
    }
    watch(currentPage, () => {
      getAllPosts(currentPage.value);
    });

    onMounted(() => {
      getAllPosts(currentPage.value);
    });

    return {
      content,
      lastPost,
      loading,
      pagination,
      currentPage,
      getAllPosts,
    };
  },
};

</script>

<style scoped>
/* Add your scoped styles here */
</style>

