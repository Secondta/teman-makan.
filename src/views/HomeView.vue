<template>
  <div class="home mx-auto max-w-screen-2xl">
    <!-- AWAL HEADER HOME -->
    <div class="grid grid-cols-1 md:grid-cols-2 md:gap-28">
      <div class="mx-auto my-auto text-center md:text-right w-full">
        <div class="text-[65px] font-[500] poppins">Ayo</div>
        <div class="text-[#FF7400] text-[65px] -mt-5 font-[700] poppins">Lindungi</div>
        <div class="text-[#FF7400] text-[65px] -mt-5 font-[700] poppins">Makanan</div>
        <div class="font-[400] urbanist">Indonesia penghasil makanan sisa terbanyak nomor</div>
        <div class="font-[400] urbanist">dua di Dunia setelah Brazil yang menduduki</div>
        <div class="font-[400] urbanist">diperingkat pertama</div>
        <div class="float-right mt-3"><button
            class="hidden xl:block button-utama-transparent w-40 py-3 text-lg rounded-[16px] focus:border-4 border-yellow-300 poppins">Mari
            Berbagi</button></div>
      </div>
      <div class="mx-auto"><img src="../assets/image/home-image.jpg" alt="picture"></div>
    </div>
    <!-- AKHIR HEADER HOME -->

    <!-- AWAL TUTORIAL -->
    <div class="tutorial text-center mt-[163px]">
      <div class="text-[45px] font-[500] poppins">4 Langkah Sederhana</div>
      <div class="text-[#FF7400] text-[45px] -mt-5 font-[700] poppins">Menyelamatkan Makanan</div>
      <div class="caro px-5 md:px-24 pb-32 mt-[40px]">
        <div class="w-full">
          <div v-if="pageTutuorial === 0" class="grid grid-cols-1 md:grid-cols-2">
            <div>
              <img src="../assets/image/macbook.png" class="macbook" />
            </div>
            <div class="text-center md:text-left">
              <div class="text-[#FF7400] text-[32px] font-[700] poppins">Klik tombol “Mari Berbagi” untuk mulai Berdonasi</div>
              <div class="text-[18px] font-[400] leading-[34px] tracking-[0.1em] urbanist">Pastikan sebelum memulai, anda sudah memiliki akun.</div>
            </div>
          </div>
          <div v-if="pageTutuorial === 1" class="grid grid-cols-1 md:grid-cols-2">
            <div>
              <img src="../assets/image/dashboard-image.jpg" class="image dashboard" />
            </div>
            <div class="text-center md:text-left">
              <div class="text-[#FF7400] text-[32px]">Lorem, ipsum dolor.2</div>
              <div class="text-[18px]">Lorem ipsum dolor sit amet consectetur.</div>
              <div class="text-[18px]">Lorem ipsum dolor sit, amet consectetur adipisicing.</div>
              <div class="text-[18px]">Lorem ipsum dolor sit</div>
            </div>
          </div>
          <div v-if="pageTutuorial === 2" class="grid grid-cols-1 md:grid-cols-2">
            <div>
              <img src="../assets/image/dashboard-image.jpg" class="image dashboard" />
            </div>
            <div class="text-center md:text-left">
              <div class="text-[#FF7400] text-[32px]">Lorem, ipsum dolor.3</div>
              <div class="text-[18px]">Lorem ipsum dolor sit amet consectetur.</div>
              <div class="text-[18px]">Lorem ipsum dolor sit, amet consectetur adipisicing.</div>
              <div class="text-[18px]">Lorem ipsum dolor sit</div>
            </div>
          </div>
          <div v-if="pageTutuorial === 3" class="grid grid-cols-1 md:grid-cols-2">
            <div>
              <img src="../assets/image/dashboard-image.jpg" class="image dashboard" />
            </div>
            <div class="text-center md:text-left">
              <div class="text-[#FF7400] text-[32px]">Lorem, ipsum dolor.4</div>
              <div class="text-[18px]">Lorem ipsum dolor sit amet consectetur.</div>
              <div class="text-[18px]">Lorem ipsum dolor sit, amet consectetur adipisicing.</div>
              <div class="text-[18px]">Lorem ipsum dolor sit</div>
            </div>
          </div>
        </div>
        <div class="flex justify-center">
        <div class="flex justify-center w-full py-2 gap-2">
          <p @click="pageTutuorial = 0" class="rounded-full w-[12px] h-[12px] cursor-pointer"
            :class="(pageTutuorial === 0 ? ' rounded-full bg-[#FF7400]' : 'rounded-full bg-[#FFC367]')"></p>
          <p @click="pageTutuorial = 1" class="rounded-full w-[12px] h-[12px] cursor-pointer"
            :class="(pageTutuorial === 1 ? ' rounded-full bg-[#FF7400]' : 'rounded-full bg-[#FFC367]')"></p>
          <p @click="pageTutuorial = 2" class="rounded-full w-[12px] h-[12px] cursor-pointer"
            :class="(pageTutuorial === 2 ? ' rounded-full bg-[#FF7400]' : 'rounded-full bg-[#FFC367]')"></p>
          <p @click="pageTutuorial = 3" class="rounded-full w-[12px] h-[12px] cursor-pointer"
            :class="(pageTutuorial === 3 ? ' rounded-full bg-[#FF7400]' : 'rounded-full bg-[#FFC367]')"></p>
        </div>
        </div>
      </div>
    </div>
    <!-- AKHIR TUTORIAL -->

    <!-- AWAL CARD ARTICLE -->
    <div class="article w-full">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div class="1 mx-auto md:mx-auto lg:mx-auto xl:mx-0 ">
          <div class="card-article card-article-bg1 shadow-lg md:float-right">
            <div class="grid grid-cols-3 gap-3">
              <div class="article-kanan col-span-2">
                <div class="angka-article text-[64px] poppins">
                  01
                </div>
                <div class="text-[13px] text-[#FF7400] urbanist">
                  Article
                </div>
                <div class="judul-article text-[18px] font-bold mb-[500] poppins">
                  Masakan Estetik Tradisonal
                </div>
                <div class="isi-article urbanist">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, possimus officia voluptatibus velit
                  est
                  magni tenetur, maiores ea aperiam exercitationem sapiente dignissimos asperiores
                </div>
              </div>
              <div class="article-kiri flex items-end">
                <img src="../assets/image/article-1.png" alt="article 1">
              </div>
            </div>
          </div>
        </div>
        <div class="2 mx-auto md:mx-auto lg:mx-auto xl:mx-0 ">
          <div class="card-article card-article-bg2 shadow-lg">
            <div class="grid grid-cols-3 gap-3">
              <div class="article-kanan col-span-2">
                <div class="angka-article text-[64px] poppins">
                  02
                </div>
                <div class="text-[13px] text-[#FF7400] urbanist">
                  Article
                </div>
                <div class="judul-article text-[18px] font-bold mb-[500] poppins">
                  Daftar Sayuran Kaya Gizi
                </div>
                <div class="isi-article urbanist">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, possimus officia voluptatibus velit
                  est
                  magni tenetur, maiores ea aperiam exercitationem sapiente dignissimos asperiores
                </div>
              </div>
              <div class="article-kiri flex items-end">
                <img src="../assets/image/article-2.png" alt="article 1">
              </div>
            </div>
          </div>
        </div>
        <div class="3 mx-auto md:mx-auto lg:mx-auto xl:mx-0 ">
          <div class="card-article card-article-bg3 shadow-lg md:float-right">
            <div class="grid grid-cols-3 gap-3">
              <div class="article-kanan col-span-2">
                <div class="angka-article text-[64px] poppins">
                  03
                </div>
                <div class="text-[13px] text-[#FF7400] urbanist">
                  Article
                </div>
                <div class="judul-article text-[18px] font-bold mb-[500] poppins">
                  Manfaat Berbagi bagi Kehidupan
                </div>
                <div class="isi-article urbanist">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, possimus officia voluptatibus velit
                  est
                  magni tenetur, maiores ea aperiam exercitationem sapiente dignissimos asperiores
                </div>
              </div>
              <div class="article-kiri flex items-end">
                <img src="../assets/image/article-3.png" alt="article 1">
              </div>
            </div>
          </div>
        </div>
        <div class="4 mx-auto md:mx-auto lg:mx-auto xl:mx-0 ">
          <div class="card-article card-article-bg4 shadow-lg">
            <div class="grid grid-cols-3 gap-3">
              <div class="article-kanan col-span-2">
                <div class="angka-article text-[64px] poppins">
                  04
                </div>
                <div class="text-[13px] text-[#FF7400] urbanist">
                  Article
                </div>
                <div class="judul-article text-[18px] font-bold mb-[500] poppins">
                  Akibat Buang Sisa Makanan
                </div>
                <div class="isi-article urbanist">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, possimus officia voluptatibus velit
                  est
                  magni tenetur, maiores ea aperiam exercitationem sapiente dignissimos asperiores
                </div>
              </div>
              <div class="article-kiri flex items-end">
                <img src="../assets/image/article-4.png" alt="article 1">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- AKHIR CARD ARTICLE -->

    <!-- AWAL KOMUNITAS -->
    <div class="komunitas p-10">
      <div class="table text-center w-full">
        <div class="header-2 text-white text-[60px] table-cell align-middle hidden md:table-cell lg:table-cell xl:table-cell">
          <div class="poppins">Marilah kita memulai untuk</div>
          <div class="poppins">menjaga Bumi bersama</div>
          <div class="poppins">Komunitas</div>
          <div class="flex justify-center"><button
              class="hidden xl:block button-utama bg-[#FF7400] h-[50px] py-3 text-[16px] rounded-[16px] focus:border-4 border-yellow-300 w-[306px] poppins">Bergabung
              dengan Komunitas</button></div>
        </div>
      </div>
      <div class="komunitas-image w-full flex justify-center -mt-0 md:-mt-10 relative">
        <div class="grid grid-cols-7 w-full md:w-[1072px] bg-white shadow-xl px-5 py-5 md:px-[68px] md:py-[30px]">
          <img src="../assets/image/komunitas.png" alt="image komunitas" class="w-full h-full md:w-[73px] md:h-[73px]">
          <img src="../assets/image/komunitas-2.png" alt="image komunitas" class="w-full h-full md:w-[73px] md:h-[73px]">
          <img src="../assets/image/komunitas-3.png" alt="image komunitas" class="w-full h-full md:w-[73px] md:h-[73px]">
          <img src="../assets/image/komunitas-4.png" alt="image komunitas" class="w-full h-full md:w-[73px] md:h-[73px]">
          <img src="../assets/image/komunitas-5.png" alt="image komunitas" class="w-full h-full md:w-[73px] md:h-[73px]">
          <img src="../assets/image/komunitas-6.png" alt="image komunitas" class="w-full h-full md:w-[73px] md:h-[73px]">
          <img src="../assets/image/komunitas-7.png" alt="image komunitas" class="w-full h-full md:w-[73px] md:h-[73px]">
        </div>
      </div>
    </div>
    <!-- AKHIR KOMUNITAS -->

    <!-- AWAL DOKUMENTASI -->
    <div class="dokumentasi w-full p-10 grid">
      <div class="m-auto hidden md:block">
        <div class="text-[65px] text-[#FF7400] poppins font-[700]">Dokumentasi</div>
        <div class="text-[65px] poppins font-[700]">Teman Makan<span class="text-[#FF7400] text-[70px]">.</span></div>
      </div>
      <div>
        <div class="flex w-full gap-2 p-4">
          <a href="#item-dokumentasi-1" class="rounded-full bg-[#FF7400] w-[12px] h-[12px]"></a>
          <a href="#item-dokumentasi-2" class="rounded-full bg-[#FF7400] w-[12px] h-[12px]"></a>
          <a href="#item-dokumentasi-3" class="rounded-full bg-[#FF7400] w-[12px] h-[12px]"></a>
          <a href="#item-dokumentasi-4" class="rounded-full bg-[#FF7400] w-[12px] h-[12px]"></a>
          <a href="#item-dokumentasi-5" class="rounded-full bg-[#FF7400] w-[12px] h-[12px]"></a>
          <a href="#item-dokumentasi-6" class="rounded-full bg-[#FF7400] w-[12px] h-[12px]"></a>
          <a href="#item-dokumentasi-7" class="rounded-full bg-[#FF7400] w-[12px] h-[12px]"></a>
          <a href="#item-dokumentasi-8" class="rounded-full bg-[#FF7400] w-[12px] h-[12px]"></a>
        </div>
        <div class="carousel carousel-center p-4 space-x-4 bg-neutral rounded-box w-full">
          <div id="item-dokumentasi-1" class="carousel-item">
            <img src="../assets/image/dokumentasi-image-1.jpg" class="rounded-box w-[308px] h-[308px]" />
          </div>
          <div id="item-dokumentasi-2" class="carousel-item">
            <img src="../assets/image/dokumentasi-image-2.jpg" class="rounded-box w-[308px] h-[308px]" />
          </div>
          <div id="item-dokumentasi-3" class="carousel-item">
            <img src="../assets/image/dokumentasi-image-1.jpg" class="rounded-box w-[308px] h-[308px]" />
          </div>
          <div id="item-dokumentasi-4" class="carousel-item">
            <img src="../assets/image/dokumentasi-image-2.jpg" class="rounded-box w-[308px] h-[308px]" />
          </div>
          <div id="item-dokumentasi-5" class="carousel-item">
            <img src="../assets/image/dokumentasi-image-1.jpg" class="rounded-box w-[308px] h-[308px]" />
          </div>
          <div id="item-dokumentasi-6" class="carousel-item">
            <img src="../assets/image/dokumentasi-image-2.jpg" class="rounded-box w-[308px] h-[308px]" />
          </div>
          <div id="item-dokumentasi-7" class="carousel-item">
            <img src="../assets/image/dokumentasi-image-1.jpg" class="rounded-box w-[308px] h-[308px]" />
          </div>
          <div id="item-dokumentasi-8" class="carousel-item">
            <img src="../assets/image/dokumentasi-image-2.jpg" class="rounded-box w-[308px] h-[308px]" />
          </div>
        </div>
      </div>
    </div>
    <!-- AKHIR DOKUMENTASI -->
  </div>
</template>

<script>
import '../assets/style/home.css'
export default {
  name: 'HomeView',
  data() {
    return {
      pageTutuorial: 0,
    };
  },
}
</script>
