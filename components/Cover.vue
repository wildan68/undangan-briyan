<template>
  <div class="flex justify-center items-center h-screen">
    <div class="fixed w-[514px] h-[514px] lg:w-[914px] lg:h-[914px] top-[-40%] left-[-45%] lg:top-[-60%] lg:left-[-30%] bg-[#FFD8BA] rounded-full z-0" />
    <div class="fixed w-[472px] h-[472px] lg:w-[872px] lg:h-[872px] bottom-[-40%] right-[-20%] bg-[#FDC79D] rounded-full z-0" />
    <div class="z-10 flex flex-col gap-6 items-center">
      <div class="border-[#F4A970] border-[6px] w-[230px] h-[300px] rounded-3xl overflow-hidden">
        <img
          src="/cover.jpg"
          class="w-full h-full object-cover"
        >
      </div>
      <span class="text-3xl lg:text-5xl font-2">
        Undangan Khitanan
      </span>
      <div class="py-4 px-6 rounded-3xl bg-[#FFE0D3] w-fit">
        <span class="font-2 text-2xl lg:text-4xl">
          Alfonsus Briyan Rajendra Hartono
        </span>
      </div>
      <div class="mt-6 flex flex-col gap-4 items-center">
        <span class="font-2 text-xl lg:text-2xl">
          Kepada Bpk/Ibu/Saudara/i
        </span>
        <span class="text-2xl lg:text-3xl text-center mx-auto">
          {{ invitation ? capitalizeAfterSpace(invitation) : 'Semua Orang' }}
        </span>
        <span class="font-2 text-xl lg:text-2xl">
          Mohon maaf jika ada kesalahan nama & gelar
        </span>
        <button
          class="btn"
          @click="store.openInvitation = true"
        >
          <IconMail class="lg:w-8 lg:h-8 w-7 h-7" /> 
          <span class="text-xl lg:text-2xl">Buka Undangan</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const store = useStore();
  
const route = useRoute()
const invitation = computed(() => route.query.to) 

const capitalizeAfterSpace = (str) => {
  return str.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  })
}
</script>