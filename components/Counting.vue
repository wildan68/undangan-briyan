<template>
  <div class="flex flex-col gap-4 items-center">
    <span class="text-2xl lg:text-4xl">Counting Days</span>
    <div class="flex justify-center gap-4">
      <div class="p-3 rounded-xl bg-[#FFD8BA] flex flex-col items-center gap-2 min-w-[78px] lg:min-w-[120px]">
        <span class="font-2 text-2xl lg:text-5xl">{{ days }}</span>
        <span class="lg:text-2xl">Days</span>
      </div>
      <div class="p-3 rounded-xl bg-[#FFD8BA] flex flex-col items-center gap-2 min-w-[78px] lg:min-w-[120px]">
        <span class="font-2 text-2xl lg:text-5xl">{{ hours }}</span>
        <span class="lg:text-2xl">Hours</span>
      </div>
      <div class="p-3 rounded-xl bg-[#FFD8BA] flex flex-col items-center gap-2 min-w-[78px] lg:min-w-[120px]">
        <span class="font-2 text-2xl lg:text-5xl">{{ minutes }}</span>
        <span class="lg:text-2xl">Minutes</span>
      </div>
      <div class="p-3 rounded-xl bg-[#FFD8BA] flex flex-col items-center gap-2 min-w-[78px] lg:min-w-[120px]">
        <span class="font-2 text-2xl lg:text-5xl">{{ second }}</span>
        <span class="lg:text-2xl">Second</span>
      </div>
    </div>
    <button
      class="btn"
      @click="saveTheDate"
    >
      <IconDateCount />
      <span class="text-xl lg:text-2xl">
        Tambahkan Pengingat
      </span>
    </button>
  </div>
</template>

<script setup>
import dayjs from 'dayjs'
import 'dayjs/locale/id'

dayjs.locale('id')

const date = '2023-01-14T11:00:00'
const days = ref(0)
const hours = ref(0)
const minutes = ref(0)
const second = ref(0)

const timerDays = () => {
  const now = dayjs()
  const dates = dayjs(date)
  const diff = dates.diff(now, 'day')
  return diff
}

const getDays = () => {
  // set Interval
  setInterval(() => {
    const timer = timerDays()
    days.value = timer < 10 ? `0${timer}` : timer
  }, 1000)
}

const timerHours = () => {
  const now = dayjs()
  const dates = dayjs(date)
  const diff = dates.diff(now, 'hour')
  return diff
}

const getHours = () => {
  // set Interval
  setInterval(() => {
    const timer = timerHours()
    const convert = timer % 24
    hours.value = convert < 10 ? `0${convert}` : convert
  }, 1000)
}

const timerMinutes = () => {
  const now = dayjs()
  const dates = dayjs(date)
  const diff = dates.diff(now, 'minute')
  return diff
}

const getMinutes = () => {
  // set Interval
  setInterval(() => {
    const timer = timerMinutes()
    const convert = timer % 60
    minutes.value = convert < 10 ? `0${convert}` : convert
  }, 1000)
}

const timerSecond = () => {
  const now = dayjs()
  const dates = dayjs(date)
  const diff = dates.diff(now, 'second')
  return diff < 10 ? `0${diff}` : diff
}

const getSecond = () => {
  // set Interval
  setInterval(() => {
    const timer = timerSecond()
    const convert = timer % 60
    second.value = convert < 10 ? `0${convert}` : convert
  }, 1000)
}

onMounted(() => {
  getDays()
  getHours()
  getMinutes()
  getSecond()
})

const saveTheDate = () => {
  const link = `https://calendar.google.com/calendar/u/0/r/eventedit?text=Resepsi+Khitanan+Alfonsus+Briyan+Rajendra+Hartono&dates=20230114T040000Z/20230114T070000Z&pli=1`
  window.open(link, '_blank');
}
</script>