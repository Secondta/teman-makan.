<!-- eslint-disable vue/no-parsing-error -->
<template>
  <div class="all">
    <div>
      <p class="riwayatHistory">Riwayat History</p>
    </div>
    <div>
      <p class="sedangBerjalan">Sedang Berjalan</p>
    </div>
    <div class="flex dropdown1">
      <div>
        <div class="dropdown relative">
          <button
            class="dropdown-toggle px-6 py-2.5 bg-orange-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg active:text-white transition duration-150 ease-in-out flex items-center whitespace-nowrap"
            type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            Semua
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" class="w-2 ml-2"
              role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path fill="currentColor"
                d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z">
              </path>
            </svg>
          </button>
          <ul
            class="dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none"
            aria-labelledby="dropdownMenuButton1">
            <P class="text1 p-3">Tampilkan Berdasarkan: </P>
            <li class="text3">
              <a class="dropdown-item ml-4" href="#">
                Semua
              </a>
            </li>
            <li class="text3">
              <a class="dropdown-item ml-4" href="#">
                Draf
              </a>
            </li>
            <li class="text3">
              <a class="dropdown-item ml-4" href="#">Sedang
                Berjalan</a>
            </li>
            <li class="text3">
              <a class="dropdown-item ml-4" href="#">Telah Selesai</a>
            </li>

            <P class="text1 mt-2">Urutkan Berdasarkan: </P>
            <li class="text3">
              <a class="dropdown-item ml-4" href="#">Nama
              </a>
            </li>
            <li class="text3">
              <a class="dropdown-item ml-4" href="#">Tanggal
              </a>
            </li>
            <li class="text3">
              <a class="dropdown-item ml-4" href="#">Jumlah Donasi
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="flex dropdown2">
      <div>
        <div class="dropdown relative">
          <button
            class="dropdown-toggle px-6 py-2.5 bg-orange-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg active:text-white transition duration-150 ease-in-out flex items-center whitespace-nowrap"
            type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            Oktober
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" class="w-2 ml-2"
              role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path fill="currentColor"
                d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z">
              </path>
            </svg>
          </button>
          <ul
            class="dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none p-3"
            aria-labelledby="dropdownMenuButton1">
            <li class="p-1 mt-2 flex">
              <div>
                <p class="mb-3 text2">Dari</p>
                <a class="dropdown-item text-sm  py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent hover:bg-gray-100 dari flex items-center"
                  href="#">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"
                    class="mr-2 ">
                    <path
                      d="M3.28125 0C3.40557 0 3.5248 0.049386 3.61271 0.137294C3.70061 0.225201 3.75 0.34443 3.75 0.46875V0.9375H11.25V0.46875C11.25 0.34443 11.2994 0.225201 11.3873 0.137294C11.4752 0.049386 11.5944 0 11.7188 0C11.8431 0 11.9623 0.049386 12.0502 0.137294C12.1381 0.225201 12.1875 0.34443 12.1875 0.46875V0.9375H13.125C13.6223 0.9375 14.0992 1.13504 14.4508 1.48667C14.8025 1.83831 15 2.31522 15 2.8125V13.125C15 13.6223 14.8025 14.0992 14.4508 14.4508C14.0992 14.8025 13.6223 15 13.125 15H1.875C1.37772 15 0.900806 14.8025 0.549175 14.4508C0.197544 14.0992 0 13.6223 0 13.125V2.8125C0 2.31522 0.197544 1.83831 0.549175 1.48667C0.900806 1.13504 1.37772 0.9375 1.875 0.9375H2.8125V0.46875C2.8125 0.34443 2.86189 0.225201 2.94979 0.137294C3.0377 0.049386 3.15693 0 3.28125 0V0ZM0.9375 3.75V13.125C0.9375 13.3736 1.03627 13.6121 1.21209 13.7879C1.3879 13.9637 1.62636 14.0625 1.875 14.0625H13.125C13.3736 14.0625 13.6121 13.9637 13.7879 13.7879C13.9637 13.6121 14.0625 13.3736 14.0625 13.125V3.75H0.9375Z"
                      fill="#FF7400" fill-opacity="0.5" />
                  </svg>
                  6/10/2022
                </a>
              </div>
              <p class="mt-6 p-2">-</p>
              <div>
                <p class="mb-3 text2">Ke</p>
                <a class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent hover:bg-gray-100 dari flex items-center"
                  href="#">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"
                    class="mr-2 ">
                    <path
                      d="M3.28125 0C3.40557 0 3.5248 0.049386 3.61271 0.137294C3.70061 0.225201 3.75 0.34443 3.75 0.46875V0.9375H11.25V0.46875C11.25 0.34443 11.2994 0.225201 11.3873 0.137294C11.4752 0.049386 11.5944 0 11.7188 0C11.8431 0 11.9623 0.049386 12.0502 0.137294C12.1381 0.225201 12.1875 0.34443 12.1875 0.46875V0.9375H13.125C13.6223 0.9375 14.0992 1.13504 14.4508 1.48667C14.8025 1.83831 15 2.31522 15 2.8125V13.125C15 13.6223 14.8025 14.0992 14.4508 14.4508C14.0992 14.8025 13.6223 15 13.125 15H1.875C1.37772 15 0.900806 14.8025 0.549175 14.4508C0.197544 14.0992 0 13.6223 0 13.125V2.8125C0 2.31522 0.197544 1.83831 0.549175 1.48667C0.900806 1.13504 1.37772 0.9375 1.875 0.9375H2.8125V0.46875C2.8125 0.34443 2.86189 0.225201 2.94979 0.137294C3.0377 0.049386 3.15693 0 3.28125 0V0ZM0.9375 3.75V13.125C0.9375 13.3736 1.03627 13.6121 1.21209 13.7879C1.3879 13.9637 1.62636 14.0625 1.875 14.0625H13.125C13.3736 14.0625 13.6121 13.9637 13.7879 13.7879C13.9637 13.6121 14.0625 13.3736 14.0625 13.125V3.75H0.9375Z"
                      fill="#FF7400" fill-opacity="0.5" />
                  </svg>
                  6/10/2022
                </a>
              </div>
            </li>
            <li class="p-1 mt-2">
              <a class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent hover:bg-gray-100 dari"
                href="#">
                Hari Ini
              </a>
            </li>
            <li class="p-1 mt-2">
              <a class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent hover:bg-gray-100 dari"
                href="#">
                Kemarin
              </a>
            </li>
            <li class="p-1 mt-2">
              <a class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent hover:bg-gray-100 dari"
                href="#">Bulan Ini</a>
            </li>
            <li class="p-1 mt-2">
              <a class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent hover:bg-gray-100 dari"
                href="#">Bulan Lalu</a>
            </li>
            <li class="p-1 mt-2">
              <a class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent hover:bg-gray-100 dari"
                href="#">3 Bulan Lalu</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="searchInput">
      <form>
        <label for="default-search" class="
                  text-sm
                  font-medium
                  text-gray-900
                  sr-only
                ">Search</label>
        <div class="relative">
          <div class="
                    flex
                    absolute
                    inset-y-0
                    left-0
                    items-center
                    pl-3
                    pointer-events-none
                  ">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
          <input type="search" id="default-search" class="
                    block
                    p-2
                    pl-10
                    w-full
                    text-sm text-gray-900
                    bg-gray-50
                    rounded-lg
                    border border-gray-300
                   
                  " placeholder="" required />
        </div>
      </form>
    </div>
    <div class="col-span-6 cad1">
      <div class="flex gap-4 justify-center items-center">
        <div class="flex gap-4 justify-center items-center">
          <input type="checkbox" class="cekbox" />
          <p class="isicad1">Selamatkan Makanan untuk Pan</p>
          <div class="flex w-80 gap-2 items-center">
            <div>50%</div>
            <div class="w-full bg-[#FFC367] rounded-full h-2.5">
              <div class="bg-[#FF7400] h-2.5 rounded-full" style="width: 50%"></div>
            </div>
            <div class="ser">100%</div>
          </div>
          <p class="tgl">Okt 6, 2022 - Okt 30, 2022</p>
          <div class="flex gap-3">
            <button class="kotakTutup">Tutup</button>
            <button class="kotakDetail">Detail</button>
          </div>
        </div>
      </div>
    </div>

    <div>
      <p class="draf">Draf</p>
      <div class="col-span-4 cad5">
        <div class="flex gap-4 justify-center items-center">
          <div class="flex gap-4 justify-center items-center">
            <input type="checkbox" class="cekbox" />
            <p class="isicad1">Satu Juta Makanan untuk Dunia</p>
            <div class="flex w-80 gap-2 items-center">
              <div>0%</div>
              <div class="w-full rounded-full h-2.5">
                <div class="bg-[#FFC367] h-2.5 rounded-full" style="width: 100%"></div>
              </div>
              <div class="ser">100%</div>
            </div>
            <p class="tgl">Okt 6, 2022 - Okt 30, 2022</p>
            <div class="flex gap-3">
              <button class="kotakPost">Post</button>
              <button class="kotakDetail">Detail</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <p class="telahselesaireceiver">Telah Selesai</p>
      <div class="col-span-6 cad6">
        <div class="flex gap-4 justify-center items-center">
          <div class="flex gap-4 justify-center items-center">
            <input type="checkbox" class="cekbox" />

            <p class="isicad1">Jabar on The Street</p>
            <div class="flex w-80 gap-2 items-center">
              <div>100%</div>
              <div class="w-full rounded-full h-2.5 ">
                <div class="bg-[#FF7400] h-2.5 rounded-full" style="width: 100%"></div>
              </div>
              <div class="ser">100%</div>
            </div>
            <p class="tgl">Okt 6, 2022 - Okt 30, 2022</p>
            <div class="flex gap-3">
              <button class="kotakTutup">Hapus</button>
              <button class="kotakDetail">Detail</button>
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>
<script>
import "../assets/style/DonationHistory.css";
export default {
  name: "HistoryDonationReceiver",
};
</script>
