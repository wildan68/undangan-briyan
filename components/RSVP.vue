<template>
  <div class="flex flex-col gap-4 w-full rounded-2xl border p-3 border-[#FFD8BA]">
    <div class="text-2xl lg:text-4xl">
      Daftar Hadir
    </div>
    <div class="flex lg:flex-row flex-col gap-6">
      <div class="form-control flex flex-col gap-4 flex-1">
        <label class="input-group w-full">
          <span>Nama</span>
          <input
            v-model="name"
            type="text"
            placeholder="Masukkan Nama"
            class="input input-bordered w-full"
          >
        </label>
        <span>Ucapan & Do'a</span>
        <textarea
          v-model="msg"
          class="textarea min-h-[200px]"
          placeholder="Masukkan Ucapan & Do'a"
        />
        <div class="flex gap-2 items-center">
          <input
            v-model="present"
            type="checkbox"
            class="toggle"
          >
          <span>{{ present ? 'Hadir' : 'Tidak Hadir' }}</span>
        </div>
        <button
          class="btn mt-8"
          @click.prevent="postMsg"
        >
          <IconSend />
          <span class="text-xl lg:text-2xl">
            Kirim
          </span>
        </button>
      </div>
      <div class="flex flex-col flex-1 gap-4">
        <span class="text-2xl">Ucapan & Do'a</span>
        <div class="flex flex-col gap-2 h-[350px] overflow-y-scroll">
          <div
            v-for="(d, i) in msgList"
            :key="i"
            class="flex flex-col border rounded-lg p-3"
          >
            <div class="flex justify-between items-center">
              <div class="flex flex-col">
                <span class="text-xl">{{ d.name }}</span>
                <span class="text-xs">Dikirim pada hari {{ dateFormat(d.time) }}</span>
              </div>
              <div class="rounded-lg px-4 py-2 bg-[#6A2E00]">
                <span class="text-xs text-center text-white">{{ d.present ? 'Hadir' : 'Tidak Hadir' }}</span>
              </div>
            </div>
            <span class="text-lg mt-5">{{ d.message }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios'
import dayjs from 'dayjs'

import 'dayjs/locale/id'
import utc from 'dayjs/plugin/utc'
//dayjs utc+7
dayjs.extend(utc)
dayjs.locale('id')

const name = ref('')
const present = ref(true)
const msg = ref('')
const msgList = ref(null)

onMounted(() => fetchMsg())

const fetchMsg = async () => {
  try {
    const { data } = await axios.get('/api/message')

    msgList.value = data?.data
  }
  catch (err) {
    throw new Error(err)
  }
}

const postMsg = async () => {
  try {
    if (!name.value) return alert('Nama tidak boleh kosong')
    if (!msg.value) return alert('Pesan tidak boleh kosong')
    const payload = {
      name: name.value,
      present: present.value ? 1 : 0,
      message: msg.value
    }
    const { data } = await axios.post('/api/message', payload)

    if (data?.status === 200) {
      fetchMsg()
      name.value = ''
      msg.value = ''
    }
  }
  catch (err) {
    throw new Error(err)
  }
}

const dateFormat = (date) => dayjs(date).utcOffset(7).format('dddd, DD MMMM YYYY HH:mm')
</script>