<template>
  <div class="mx-auto max-w-screen-xl my-10">
    <div class="shadow-outer p-4 flex items-center mb-6">
      <h1 class="text-3xl font-bold">Jabar on The Street 2022</h1>
      <div class="relative bg-gray-100 px-2 rounded-full ml-10">
        <div class="title-status">
          <span class="ml-3 text-xs text-gray-400">Selesai</span>
        </div>
      </div>
    </div>

    <div
      class="shadow-outer flex mb-6 bg-gray-100 text-sm text-center cursor-pointer"
    >
      <div
        :class="
          'w-2/3 py-3 border-b-4 border-gray-100 transition-all' +
          (page === 0 ? ' border-orange-500' : '')
        "
        @click="page = 0"
      >
        Overview
      </div>
      <div
        :class="
          'w-2/3 py-3 border-b-4 border-gray-100 transition-all' +
          (page === 1 ? ' border-orange-500' : '')
        "
        @click="page = 1"
      >
        Hasil Galang Dana
      </div>
      <div
        :class="
          'w-2/3 py-3 border-b-4 border-gray-100 transition-all' +
          (page === 2 ? ' border-orange-500' : '')
        "
        @click="page = 2"
      >
        Receiver
      </div>
    </div>

    <div v-if="page === 0" class="shadow-outer py-6 px-10 text-sm font-normal">
      <div class="my-2">
        <div class="text-gray-400">Judul</div>
        <div>Jabar on The Street 2022</div>
      </div>
      <div class="my-2">
        <div class="text-gray-400">Jenis Donasi</div>
        <div>Makanan siap saji</div>
      </div>
      <div class="my-2">
        <div class="text-gray-400">Waktu terbit</div>
        <div>Okt 20, 2022</div>
      </div>
      <div class="my-2">
        <div class="text-gray-400">Deskripsi</div>
        <div>
          Jabar Bergerak Kabupaten Subang pada tanggal 22 April 2022 telah
          menerima bantuan paket sembako dan nasi box Rantang Cinta dari Jabar
          Bergerak Provinsi Jawa Barat kegiatan Berbagi Bersama On The Street
          (BUBOS 6) dengan tema Berbagi dalam Keragaman Budaya (BERGAYA) .
          Sasaran penyaluran bantuan program tersebut yaitu masyarakat yang
          kurang mampu di Wilayah Kabupaten Subang. Adapun pendistribusiannya
          bekerja sama dengan Jabar Bergerak Ranting Kecamatan Se Kabupaten
          Subang. Jumlah yang disalurkannya sebanyak 370 paket sembako, khusus
          bantuan 1000 paket nasi box rantang cinta tersebut diterima dan
          disalurkan langsung di puncak acara BUBOS 6 pada tanggal 23 April
          2022, supaya bisa langsung di salurkan menjelang magrib dan bisa
          dinikmati oleh masyarakat penerima. Bantuan tersebut akan disalurkan
          langsung ke 20 kecamatan paket penerima sembako, yang masing masing
          kecamatan menerima bantuan 30 paket sembako, dan 10 kecamatan penerima
          nasi box rantang cinta yang masing masing kecamatan mendapatkan 100
          paket nasi box rantang cinta. Informasi : 0897-2387-3323 : Jaka
        </div>
      </div>
    </div>

    <div v-else-if="page === 1" class="shadow-outer lg:p-10 md:p-5">
      <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        <div class="w-full lg:p-6 p-3">
          <img
            src="../assets/image/sharing-2.jpeg"
            alt="image"
            class="rounded-t-lg aspect-video object-cover"
          />
          <div class="mt-3 mx-2">
            <div>Cemilan Ringan</div>
            <div>
              <font-awesome-icon
                icon="fa-solid fa-chart-line"
                class="mr-2"
                color="#00000080"
              />
              <span>30 .</span>
              <span class="ml-2 text-gray-500 text-sm">Snack</span>
            </div>
          </div>
        </div>
        <div class="w-full lg:p-6 p-3">
          <img
            src="../assets/image/sharing-2.jpeg"
            alt="image"
            class="rounded-t-lg aspect-video object-cover"
          />
          <div class="mt-3 mx-2">
            <div>Cemilan Ringan</div>
            <div>
              <font-awesome-icon
                icon="fa-solid fa-chart-line"
                class="mr-2"
                color="#00000080"
              />
              <span>30 .</span>
              <span class="ml-2 text-gray-500 text-sm">Snack</span>
            </div>
          </div>
        </div>
        <div class="w-full lg:p-6 p-3">
          <img
            src="../assets/image/sharing-2.jpeg"
            alt="image"
            class="rounded-t-lg aspect-video object-cover"
          />
          <div class="mt-3 mx-2">
            <div>Cemilan Ringan</div>
            <div>
              <font-awesome-icon
                icon="fa-solid fa-chart-line"
                class="mr-2"
                color="#00000080"
              />
              <span>30 .</span>
              <span class="ml-2 text-gray-500 text-sm">Snack</span>
            </div>
          </div>
        </div>
        <div class="w-full lg:p-6 p-3">
          <img
            src="../assets/image/sharing-2.jpeg"
            alt="image"
            class="rounded-t-lg aspect-video object-cover"
          />
          <div class="mt-3 mx-2">
            <div>Cemilan Ringan</div>
            <div>
              <font-awesome-icon
                icon="fa-solid fa-chart-line"
                class="mr-2"
                color="#00000080"
              />
              <span>30 .</span>
              <span class="ml-2 text-gray-500 text-sm">Snack</span>
            </div>
          </div>
        </div>
        <div class="w-full lg:p-6 p-3">
          <img
            src="../assets/image/sharing-2.jpeg"
            alt="image"
            class="rounded-t-lg aspect-video object-cover"
          />
          <div class="mt-3 mx-2">
            <div>Cemilan Ringan</div>
            <div>
              <font-awesome-icon
                icon="fa-solid fa-chart-line"
                class="mr-2"
                color="#00000080"
              />
              <span>30 .</span>
              <span class="ml-2 text-gray-500 text-sm">Snack</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-else-if="page === 2" class="shadow-outer py-6 px-10">
      <div
        class="flex p-3 border shadow-outer rounded-md items-center my-3 text-center"
        style="height: 90px"
      >
        <img
          src="../assets/image/sharing-2.jpeg"
          class="h-full rounded-md aspect-square mr-[2%] object-cover"
          alt="image"
        />
        <div class="flex-3 text-left">Snacks</div>
        <div class="mx-[2%]">15 qty</div>
        <div class="flex justify-center flex-1 p-2 h-full">
          <div class="flex h-full items-center">
            <img
              src="../assets/image/sharing-2.jpeg"
              class="h-full aspect-square object-cover rounded-full mr-[4%]"
              alt="image"
            />
            <div class="text-ellipsis overflow-hidden text-left">
              Panti Asuhan Puwodadi
            </div>
          </div>
        </div>
        <div class="flex-1 flex justify-center">
          <button
            class="bg-green-300 text-green-600 py-2 px-3 rounded-lg transition-all hover:bg-emerald-300 active:bg-emerald-400"
          >
            serahkan
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../assets/style/donateDetailGiver.css";
export default {
  data() {
    return {
      page: 0,
    };
  },
};
</script>
