<template>
  <div class="min-h-screen p-6 lg:p-28 relative flex flex-col gap-6 lg:gap-12 overflow-x-hidden items-center">
    <div class="fixed top-6 lg:top-24 right-6 lg:right-24 z-50">
      <!-- Pause -->
      <div
        v-if="!musicPlay"
        class="group cursor-pointer hover:bg-white transition-all p-2 rounded-2xl"
        @click="playMusic"
      >
        <IconPause class="w-12 h-12" />
        <div class="group-hover:flex group-hover:focus hidden flex-col items-center mt-4">
          <span class="font-2 text-2xl">P</span>
          <span class="font-2 text-2xl">A</span>
          <span class="font-2 text-2xl">U</span>
          <span class="font-2 text-2xl">S</span>
          <span class="font-2 text-2xl">E</span>
        </div>
      </div>
      <!-- Play -->
      <div
        v-else
        class="group cursor-pointer hover:bg-white transition-all p-2 rounded-2xl"
        @click="playMusic"
      >
        <IconPlay class="w-12 h-12" />
        <div class="group-hover:flex group-hover:focus hidden flex-col items-center mt-4">
          <span class="font-2 text-2xl">P</span>
          <span class="font-2 text-2xl">L</span>
          <span class="font-2 text-2xl">A</span>
          <span class="font-2 text-2xl">Y</span>
        </div>
      </div>
    </div>
    <div class="absolute lg:top-[-20%] top-[-4%] left-0 right-0 flex justify-center">
      <div class="lg:w-[1400px] lg:h-[1400px] w-[500px] h-[500px] bg-[#FFD8BA] rounded-full" />
    </div>
    <div
      class="z-20 flex flex-col items-center w-full lg:mt-24 gap-6 lg:gap-12"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="500"
    >
      <span class="lg:text-8xl text-3xl font-2">Undangan Khitanan</span>
      <div class="lg:px-14 px-4 py-3 lg:py-7 bg-[#FFE0D3] lg:rounded-3xl rounded-2xl">
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#C35200] to-[#FFAB6A] font-2 lg:text-6xl text-2xl">
          Alfonsus Briyan Rajendra Hartono
        </span>
      </div>
    </div>
    <!--  -->
    <div class="relative w-full flex flex-col items-center">
      <div
        class="w-[356px] h-[466px] rounded-3xl bg-gray-300 z-20 border-[#F4A970] border-[10px] overflow-hidden"
        data-aos="zoom-in"
      >
        <img
          src="/foto2.jpg"
          class="w-full h-full object-cover"
        >
      </div>
      <div class="w-1/2 absolute left-0 bottom-0 mx-[-112px] flex flex-col gap-8">
        <div class="bg-[#F4A970]  rounded-tr-3xl rounded-br-3xl h-[75px] w-full" />
        <div class="bg-[#F4A970]  rounded-tr-3xl rounded-br-3xl h-[75px] w-full" />
      </div>
    </div>
    <!--  -->
    <div
      class="z-20 flex flex-col items-center w-full mt-12 lg:mt-24 gap-4 lg:gap-12"
      data-aos="fade-down"
    >
      <div class="px-6 lg:px-14 py-7 text-center rounded-3xl flex flex-col gap-4 lg:gap-8">
        <div class="text-2xl lg:text-4xl leading-10 lg:leading-[60px] text-[#774e2e]">
          Puji Syukur atas limpahan dan berkat-nya 
          di Khitan 
          <br>
          <span class="text-3xl lg:text-5xl text-[#6A2E00]">Alfonsus Briyan Rajendra Hartono</span>
          <br>
          Putra dari
        </div>
        <span class="text-3xl lg:text-5xl text-[#6A2E00]">Bpk Mateus Priyo Indra Hartono, SE</span>
        <span class="text-3xl lg:text-5xl text-[#6A2E00]">&</span>
        <span class="text-3xl lg:text-5xl text-[#6A2E00]">Ibu Agata Asri Wijayaningsih, SE. MM</span>
        <div class="text-2xl lg:text-4xl mt-4 leading-10 lg:leading-[60px] text-[#774e2e]">
          Mohon do’a agar putra kami menjadi anak yang baik
          pintar, berbakti kepada orang tua & berguna bagi
          Nusa Bangsa, Masyarakat dan Agama.
        </div>
      </div>
    </div>
    <!--  -->
    <div class="relative w-full flex flex-col items-center mt-48">
      <div class="w-1/2 absolute right-0 bottom-0 lg:mx-[-112px] mx-[-50px] flex flex-col gap-8 items-end">
        <div class="bg-[#F4A970]  rounded-tl-3xl rounded-bl-3xl h-[75px] w-full" />
        <div class="bg-[#F4A970]  rounded-tl-3xl rounded-bl-3xl h-[75px] w-[80%]" />
      </div>
    </div>
    <!--  -->
    <div
      class="mx-auto flex flex-col gap-4 lg:gap-8 items-center"
      data-aos="zoom-out"
    >
      <div class="text-2xl lg:text-4xl text-center leading-10 lg:leading-[60px] text-[#774e2e]">
        Sebagai rasa puji syukur atas berkat & kemurahan kasih-nya
        Kami mengundang bapak/ibu/saudara/i untuk menghadiri
        Resepsi Syukuran Khitan Putra Kami
        yang akan di selenggarakan pada:
      </div>
    </div>
    <!--  -->
    <div
      class="w-full min-h-[435px] bg-[#FFD8BA] mt-32 lg:mt-40 p-3 lg:p-20 rounded-2xl lg:rounded-[48px] flex justify-between relative lg:flex-row flex-col-reverse"
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
      <div class="flex absolute top-[-10%] lg:top-[-20%] right-0 left-0 lg:justify-end">
        <img
          src="/resepsi.png"
          class=""
        >
      </div>
      <div class="flex-1 flex items-center justify-center">
        <img src="/save-the-date.png">
      </div>
      <div class="flex-1 flex flex-col items-center gap-6 lg:gap-12 justify-center lg:mt-0 mt-20">
        <span class="text-2xl lg:text-5xl">Sabtu, 14 Januari 2023</span>
        <span class="text-2xl lg:text-5xl">Gedung Aula SD Pius</span>
        <span class="text-2xl lg:text-5xl text-center leading-[60px]">
          Jl. Kapten Ismail No. 120
          Kota Tegal
        </span>
      </div>
    </div>
    <!--  -->
    <div class="w-full flex flex-col items-center">
      <div class="mx-auto px-7 py-5 rounded-tl-3xl rounded-tr-3xl text-2xl bg-[#FFD8BA]">
        Lokasi Resepsi
      </div>
      <div
        class="lg:w-[975px] lg:h-[591px] w-full h-[350px] bg-gray-200 rounded-3xl overflow-hidden border-[#FFD8BA] border-[10px]"
        data-aos="fade-down"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1505.3577479497485!2d109.12971046636814!3d-6.865871590680735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6fb77d2c10052f%3A0xed9e77e00f4c7be1!2sJl.%20Kapten%20Ismail%20No.120%2C%20Kraton%2C%20Kec.%20Tegal%20Bar.%2C%20Kota%20Tegal%2C%20Jawa%20Tengah%2052112!5e0!3m2!1sid!2sid!4v1673154833986!5m2!1sid!2sid"
          width="100%"
          height="100%"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
      </div>
      <button
        class="btn mt-8"
        @click="openMaps"
      >
        <IconMap />
        <span class="text-xl lg:text-2xl">
          Buka Maps</span>
      </button>
    </div>
    <!--  -->
    <RSVP />
    <!--  -->
    <div
      class="mx-auto flex flex-col items-center gap-8 z-20"
      data-aos="zoom-out-left"
    >
      <div
        class="text-2xl lg:text-4xl leading-10 lg:leading-[60px] text-center text-[#774e2e]"
      >
        Kesan yang mendalam akan terukir dihati kami
        apabila Bapak/Ibu/Saudara/i berkenan hadir
        untuk memberikan do’a restu kepada Putra Kami
      </div>
    </div>
    <!--  -->
    <!--  -->
    <div
      class="mx-auto flex flex-col items-center gap-4 lg:gap-8 mt-24 z-20"
    >
      <span class="text-2xl lg:text-4xl">Kami Yang Berbahagia</span>
      <span class="text-4xl lg:text-6xl text-center">Kel. Bpk Mateus Priyo Indra Hartono, SE</span>
      <span class="text-3xl lg:text-4xl text-center">Citraland Blok B5 No. 26 Kota Tegal</span>
    </div>
    <!--  -->
    <div class="relative w-full z-0">
      <div class="absolute lg:bottom-[-50px] bottom-[-50px] lg:h-[500px] h-[250px] lg:mb-[-3.5%] overflow-hidden left-0 right-0 flex justify-center">
        <div class="lg:w-[1400px] lg:h-[1400px] w-[500px] h-[500px] bg-[#FFD8BA] rounded-full" />
      </div>
    </div>
  </div>
</template>

<script setup>
const music = new Audio('/msc.mp3')
const musicPlay = ref(false)

const playMusic = () => {
  if (musicPlay.value) {
    music.play()
  } else {
    music.pause()
  }
  musicPlay.value = !musicPlay.value
}

music.addEventListener('ended', () => {
  music.currentTime = 0
  music.play()
})

onMounted(() => {
  musicPlay.value = true
  playMusic()
})

const openMaps = () => {
  const link = `https://www.google.com/maps/place/Jl.+Kapten+Ismail+No.120,+Kraton,+Kec.+Tegal+Bar.,+Kota+Tegal,+Jawa+Tengah+52112/@-6.8658716,109.1297105,18.4z/data=!4m5!3m4!1s0x2e6fb77d2c10052f:0xed9e77e00f4c7be1!8m2!3d-6.8658733!4d109.1288723`
  window.open(link, '_blank');
}
</script>