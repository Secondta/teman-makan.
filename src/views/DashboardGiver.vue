<template>
  <div class="m-8 relative block rounded-xl border border-gray-100 p-8 shadow-lg mx-auto max-w-screen-2xl">
    <!-- item 1 -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 mt-4 sm:pr-8">
      <div class="relative block rounded-xl border border-gray-100 p-8 shadow-lg hover:bg-orange-400 active:bg-orange-500 focus:outline-none focus:ring focus:ring-orange-300">
        <span class="absolute top-4 text-lg pr-2 py-3">Total Berbagi</span>
        <div class="py-8 content-center">
          <h2 className="text-5xl">10.456<span class="text-[14px] my-auto">point</span></h2>
          <p class="mt-2 hidden text-sm sm:block">
            Diperbaharui 1 jam yang lalu
          </p>
        </div>
        <div>
          <h3 class="mt-4 text-xl font-bold text-gray-900">+3.21 dari bulan lalu</h3>
        </div>
      </div>
      <div class="relative block rounded-xl border border-gray-100 p-8 shadow-lg hover:text-gray-900 hover:bg-orange-400 active:bg-orange-500 focus:outline-none focus:ring focus:ring-orange-300">
        <span class="absolute top-4 text-lg pr-2 py-3">Total Berbagi</span>
        <div class="py-8 content-center">
          <h2 className="text-5xl">10.456 <span class="text-[14px] my-auto">point</span></h2>
          <p class="mt-2 hidden text-sm sm:block">
            Diperbaharui 1 jam yang lalu
          </p>
        </div>
        <div>
          <h3 class="mt-4 text-xl font-bold hover:text-gray-900"><span class="text-green-400">+3.21</span> dari bulan lalu</h3>
        </div>
      </div>
      <div class="relative block rounded-xl border border-gray-100 p-8 shadow-lg hover:bg-orange-400 active:bg-orange-500 focus:outline-none focus:ring focus:ring-orange-300">
        <span class="absolute top-4 text-lg pr-2 py-3 ">Total Berbagi</span>
        <div class="py-8 content-center">
          <h2 className="text-5xl">10.456 <span class="text-[14px] my-auto">point</span></h2>
          <p class="mt-2 hidden text-sm sm:block">
            Diperbaharui 1 jam yang lalu
          </p>
        </div>
        <div>
          <h3 class="mt-4 text-xl font-bold text-gray-900"><span class="text-red-500 hover:text-gray-900">-3.21</span> dari bulan lalu</h3>
        </div>
      </div>
    </div>
    <!-- akhir item 1 -->
    <!-- item 2 -->
    <div class="my-5 grid grid-cols-1 md:grid-cols-2 gap-2">
      <div class="block rounded-xl border border-gray-100 p-8 shadow-lg">
        <apexchart type="line" height="350" :options="chartOptions" :series="series"></apexchart>
      </div>
      <div class="relative block rounded-xl border border-gray-100 p-8 shadow-lg">
        <div class="relative pb-7 flex justify-between">
          <div class="text-bold">Galang Dana</div>
          <div class="text-orange-400">Selengkapnya</div>
      </div>
        <div>
          <div class="group grid grid-cols-1 overflow-hidden rounded-lg border border-gray-100 sm:grid-cols-3">
            <div class="relative">
              <img alt="Climber" src="../assets/image/ds-giver-2.jpg" class="absolute inset-1 h-36 w-32" />
            </div>
            <div class="p-1 sm:col-span-2">
              <h3 class="font-bold">Lorem ipsum dolor sit amet.</h3>
              <p class="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
                adipisci!</p>
            </div>
          </div>
          <div>
            <div class="w-full bg-[#F9DE8A] rounded-full h-1.5 mb-4 dark:bg-[#F9DE8A] mt-5">
              <div class="bg-[#FF7400] h-1.5 rounded-full dark:bg-[#FF7400]" style="width: 45%"></div>
              <div class="persen flex justify-between">
                <div>
                  0%
                </div>
                <div>
                  100%
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-8">
          <div class="group grid grid-cols-1 overflow-hidden rounded-lg border border-gray-100 sm:grid-cols-3">
            <div class="relative">
              <img alt="Climber" src="../assets/image/ds-giver-2.jpg" class="absolute inset-1 h-36 w-32" />
            </div>
            <div class="p-1 sm:col-span-2">
              <h3 class="font-bold">Lorem ipsum dolor sit amet.</h3>
              <p class="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
                adipisci!</p>
            </div>
          </div>
          <div>
            <div class="w-full bg-[#F9DE8A] rounded-full h-1.5 mb-4 dark:bg-[#F9DE8A] mt-5">
              <div class="bg-[#FF7400] h-1.5 rounded-full dark:bg-[#FF7400]" style="width: 45%"></div>
              <div class="persen flex justify-between">
                <div>
                  0%
                </div>
                <div>
                  100%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- akhir item 2 -->
    <!-- item 3 -->
    <div class="mt-20">
      <div class="p-5 pb-20 overflow-hidden overflow-x-auto rounded-lg border border-gray-200">
        <div class="p-4 flex justify-between">
          <h3 class="mt-2 text-xl font-bold text-gray-900">Riwayat Donasi</h3>
          <h3 class="mt-2 text-sm font-bold text-orange-500 pr-[75px] ">Lihat Keseluruhan</h3>
        </div>
        <table class="min-w-full text-sm">
          <thead>
            <tr className="">
              <th class="px-6 py-4 text-left w-[35%] text-gray-400">Name</th>
              <th class="px-6 py-4 text-left w-[20%] text-gray-400">Tujuan</th>
              <th class="px-6 py-4 text-left w-[20%] text-gray-400">Tanggal Penerbitan</th>
              <th class="px-6 py-4 text-left w-[20%] text-gray-400">Jumlah Didonasikan </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-300">
            <tr class="">
              <td class="px-6 py-4">Anonymous</td>
              <td class="px-6 py-4">Yang Membutuhkan</td>
              <td class="px-6 py-4 text-gray-700">Okt 20, 2022 - Nov 20, 2022</td>
              <td class="px-6 py-4 text-gray-700">20 bungkus nasi kotak</td>
            </tr>
            <tr>
              <td class="bg-white px-6 py-4">Makanan untuk Panti</td>
              <td class="px-6 py-4 font-medium text-gray-900">Panti Asuhan Cimahi</td>
              <td class="px-6 py-4 text-gray-700">Okt 20, 2022 - Nov 20, 2022</td>
              <td class="px-6 py-4 text-gray-700">20 bungkus nasi kotak</td>
            </tr>
            <tr>
              <td class="bg-white px-6 py-4">Korban Bencana</td>
              <td class="px-6 py-4 font-medium text-gray-900">Korban Bencana</td>
              <td class="px-6 py-4 text-gray-700">Okt 20, 2022 - Nov 20, 2022</td>
              <td class="px-6 py-4 text-gray-700">20 bungkus nasi kotak</td>
            </tr>
            <tr>
              <td class="bg-white px-6 py-4">Selamatkan Makanan</td>
              <td class="px-6 py-4 font-medium text-gray-900">Yang Membutuhkan</td>
              <td class="px-6 py-4 text-gray-700">Okt 20, 2022 - Nov 20, 2022</td>
              <td class="px-6 py-4 text-gray-700">20 bungkus nasi kotak</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- akhir item 3 -->
  </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";
export default {
  components: {
    apexchart: VueApexCharts,
  },

  data() {
    return {
      series: [
        {
          name: 'Berbagi ',
          data: [0, 20, 0, -20, -60, -20, 0]
        },
        {
          name: 'Galang Dana',
          data: [-20, -60, -20, -60, -100, -60, -20]
        },
        {
          name: 'Garis Biru',
          data: [-60, -20, -60, 60, 0, 20, -60]
        },
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          },
        },
        dataLabels: {
          enabled: false
        },

        title: {
          text: 'Page Statistics',
          align: 'left'
        },
        legend: {
          tooltipHoverFormatter: function (val, opts) {
            return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
          }
        },
        markers: {
          size: 0,
          hover: {
            sizeOffset: 6
          }
        },
        xaxis: {
          categories: ['', 'Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', '12 Jan'],
        },
        tooltip: {
          y: [
            {
              title: {
                formatter: function (val) {
                  return val + " (mins)"
                }
              }
            },
            {
              title: {
                formatter: function (val) {
                  return val + " per session"
                }
              }
            },
            {
              title: {
                formatter: function (val) {
                  return val;
                }
              }
            }
          ]
        },
        grid: {
          borderColor: '#f1f1f1',
        }
      },
    }
  },
};
</script>
