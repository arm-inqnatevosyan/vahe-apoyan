<template>
    <div>
        <NavBar />
        <div class="max-w-[585px] mx-auto w-full ">
            <h1 class="font-libre-caslon text-[33px] pt-[135px] text-center tracking-[1.98px]">Contact the studio</h1>
            <div>
                <div class="flex max-w-[585px] pt-[148px] w-full gap-x-[41px] justify-between">
                    <div class="flex flex-col max-w-[275px] w-full">
                        <label class="font-semibold	text-[12px] font-montserrat">First name</label>
                        <UInput v-model="name" variant="small" placeholder="" />
                        <p v-if="validation.name" class="text-red-600 flex justify-end">
                            {{ validation.name[0] }}
                        </p>
                    </div>
                    <div class="flex flex-col max-w-[275px] w-full">
                        <label class="font-semibold	text-[12px] font-montserrat">Last name</label>
                        <UInput v-model="lastname" variant="small" placeholder="" />
                        <p v-if="validation.lastname" class="text-red-600 flex justify-end">
                            {{ validation.lastname[0] }}
                        </p>
                    </div>
                </div>
                <div>
                    <div class="mt-[29px]">
                        <label class="font-semibold	text-[12px] font-montserrat">Email</label>
                        <UInput v-model="email" variant="big" placeholder="" />
                        <p v-if="validation.email" class="text-red-600 flex justify-end">
                            {{ validation.email[0] }}
                        </p>
                    </div>
                    <div class="mt-[29px]">
                        <label class="font-semibold	text-[12px] font-montserrat">Phone number</label>
                        <UInput v-model="phone" variant="big" placeholder="" />
                        <p v-if="validation.phone" class="text-red-600 flex justify-end">
                            {{ validation.phone[0] }}
                        </p>
                    </div>
                    <div class="mt-[29px]">
                        <label class="font-semibold	text-[12px] font-montserrat">Message</label>
                        <UTextarea v-model="message" variant="contact" placeholder="Hi" />
                        <p v-if="validation.message" class="text-red-600 flex justify-end">
                            {{ validation.message[0] }}
                        </p>
                        <p v-if="success" class="text-green-600">
                            Success Your Message
                        </p>
                    </div>
                    <UButton variant="lets-talk" @click="subscribe">Lets talk</UButton>
                    <div class="flex justify-center gap-[20px] my-[50px]">
                        <a href="https://www.facebook.com/profile.php?id=100061274604137" target="_blank"><img src="/socials/FB.svg" alt="facebook" /></a>
                        <a href="https://www.instagram.com/apoyan_official/?hl=ru" target="_blank"><img src="/socials/INSTA.svg" alt="instagram" /></a>
                        <a href="https://twitter.com/Vahe19117450" target="_blank"><img src="/socials/X.svg" alt="twitter" /></a>
                        <a href="https://www.linkedin.com/in/vahe-apoyan-5b4490234/" target="_blank"><img src="/socials/LINKEDIN.svg" alt="linkedIn" /></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import NavBar from '~/components/NavBar.vue';

import { ref } from 'vue';

const name = ref('');
const email = ref('');
const lastname = ref('');
const phone = ref('');
const message = ref('');
const validation = ref({});
const success = ref('');
const config = useRuntimeConfig();

const subscribe = async () => {
  validation.value = {}
  const {data, error} = await useFetch(`${config.public.NUXT_BASE_URL}/send-message`, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ 
      name: name.value,
      lastname: lastname.value,
      email: email.value,
      phone: phone.value,
      message: message.value
    }),
  })
  success.value = ""
  console.log(error.value)
  console.log(data.value)

  if (error.value) {
    validation.value = error.value.data.errors
    return validation.value
  }else{
    success.value = "Success Your Message"
  }
};

</script>
