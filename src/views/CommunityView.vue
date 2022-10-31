<template>
  <div class="community mx-auto max-w-screen-2xl">
    <div class="mx-20 my-10">
      <!-- AWAL HEADER KOMUNITAS -->
      <div class="doc-header mb-12">
        <div class="text-5xl text-[#FF7400] font-[700] mb-3 poppins">Komunitas</div>
        <div class="text-sm text-black font-[300] tracking-[0.1em] urbanist">
          Dokumentasi para komunitas penyelamat makanan
        </div>
      </div>
      <!-- AKHIR HEADER KOMUNITAS -->

      <!-- AWAL CONTENT KOMUNITAS -->
      <div class="grid grid-cols-3 gap-3">
        <div class="col-span-2">
          <div class="grid grid-rows-3 gap-3">
            <div class="card1 rounded-xl row-span-2">
              <div class="card1-content rounded-xl">
                <div class="document1 mt-[376px] mx-10 pb-5 pt-10">
                  <div class="text-3xl text-white font-[500]">
                    Komunitas Apple Sosiality Berbagi
                  </div>
                  <div class="text-md text-white font-[300] urbanist">
                    KAS berbagi makanan pada orang yang sedang parkir
                  </div>
                  <div class="grid grid-cols-2 gap-48 pt-10">
                    <div class="text-sm text-[#ffffffb3] urbanist">3 Jam yang lalu</div>
                    <div class="text-sm text-[#ffffffb3] urbanist">
                      Baca Selengkapnya
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-3">
              <div class="card2 rounded-xl">
                <div class="card2-content rounded-xl">
                  <div class="document2 mt-[160px] ml-10 pb-3 pt-10">
                    <div class="text-sm text-white font-[500] poppins">
                      Jabar Bergerak on The Street 2022
                    </div>
                    <div class="grid grid-cols-2 gap-7 pt-5">
                      <div class="text-[12px] text-[#ffffff80] roboto">
                        8 Jam yang lalu
                      </div>
                      <div class="text-[12px] text-[#ffffffb3] urbanist">
                        Baca Selengkapnya
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card3 rounded-xl">
                <div class="card3-content rounded-xl">
                  <div class="document3 mt-[146px] ml-10 pb-3 pt-10">
                    <div class="text-sm text-white font-[500] poppins">
                      Puji, membagikan makanan
                    </div>
                    <div class="text-xs text-white font-[300] urbanist">
                      Transaksi antara giver dan receiver
                    </div>
                    <div class="grid grid-cols-2 gap-7 pt-5">
                      <div class="text-[12px] text-[#ffffff80] roboto">
                        3 Jam yang lalu
                      </div>
                      <div class="text-[12px] text-[#ffffffb3] urbanist">
                        Baca Selengkapnya
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="grid grid-rows-3 gap-3">
          <div class="card4 rounded-xl">
            <div class="card4-content rounded-xl w-[416px]">
              <div class="document4 mt-[200px] mx-10 pb-3 pt-10">
                <div class="text-sm text-white font-[500] poppins">Soleh sipelapor 412 Rescue</div>
                <div class="grid grid-cols-2 gap-5 pt-5">
                  <div class="text-[12px] text-[#ffffff80] roboto">
                    3 Jam yang lalu
                  </div>
                  <div class="text-[12px] text-[#ffffffb3] urbanist">
                    Baca Selengkapnya
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card5 rounded-xl row-span-2">
            <div class="card5-content px-10 py-7">
              <div class="text-[31px] text-[#FF7400] text-center font-[500] poppins ">
                Daftarkan Komunitas
              </div>
              <div class="text-xs font-[400] urbanist">
                Daftarkan komunitasmu untuk menjadi agen perubahan
              </div>
              <div class="form mt-[30px]">
                <form action="">
                  <div class="mb-2">
                    <label class="text-lg font-[500] poppins">
                      Nama Komunitas
                      <input
                        type="text"
                        placeholder="Masukan nama komunitas"
                        class="border border-slate-500 rounded-lg py-2 px-5 w-full text-sm"
                      />
                    </label>
                  </div>
                  <div class="mb-2">
                    <label class="text-lg font-[500] poppins">
                      Email Komunitas
                      <input
                        type="text"
                        placeholder="Masukan alamat email komunitas"
                        class="border border-slate-500 rounded-lg py-2 px-5 w-full text-sm"
                      />
                    </label>
                  </div>
                  <div class="mb-2">
                    <label class="text-lg font-[500] poppins">
                      Password
                      <input
                        type="password"
                        placeholder="Masukan password komunitas"
                        class="border border-slate-500 rounded-lg py-2 px-5 w-full text-sm"
                      />
                    </label>
                  </div>
                  <div class="tombol mt-[30px]">
                    <button
                      type="button"
                      class="bg-[#FF7400] text-white font-[500] rounded-lg  w-full py-2 roboto"
                    >
                      Daftar
                    </button>
                    <button
                      type="button"
                      class="login-google w-full py-2 mt-3 text-black rounded-lg"
                    >
                      <span class="flex justify-center items-center gap-3"
                        ><img
                          src="../assets/image/logo-google.png"
                          alt="logo-google"
                          class="w-5 h-5 mt-1"
                        />
                        <div class="font-[500] roboto">Masuk bersama Google</div>
                      </span>
                    </button>
                    <div class="text-xs text-center mt-2 font-[400] roboto">
                      Sudah punya akun komunitas?
                      <a href="/" class="text-[#FF7400] text-decoration-none"
                        >Masuk</a
                      >
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- AKHIR CONTENT KOMUNITAS -->

      <!-- AWAL HEADER SHARING -->
      <div class="sharing-header text-[60px] text-[#FF7400] font-[700] mb-12 poppins">
        Sharing yuk...
      </div>
      <!-- AKHIR HEADER SHARING -->

      <!-- AWAL CONTENT SHARING -->
      <div class="grid grid-cols-3 gap-x-10 gap-y-7">
        <div class="sharing-card border rounded-lg">
          <img
            src="../assets/image/sharing-1.jpeg"
            alt="sharing-1"
            class="rounded-t-lg"
          />
          <div class="p-7">
            <div class="article-sharing h-52">
              <div class="text-xl text-[#FF7400] mb-4 font-[600] poppins">
                Menu Baru Semla
              </div>
              <div class="text-md font-[400] tracking-[0.1em] urbanist">
                Hai Teman Makan, disini saya akan mengadakan sebuah menu baru
                nih yang rencananya saya akan bagikan ke orang-orang.........
              </div>
            </div>
            <div class="flex justify-between mt-5">
              <div class="flex">
                <div class="viewer">
                  <img
                    src="../assets/image/viewer-1.jpeg"
                    alt=""
                    class="w-8 h-8 rounded-full"
                  />
                </div>
                <div class="viewer">
                  <img
                    src="../assets/image/viewer-2.jpeg"
                    alt=""
                    class="w-8 h-8 relative rounded-full left-[-10px]"
                  />
                </div>
                <div class="viewer">
                  <img
                    src="../assets/image/viewer-3.jpeg"
                    alt=""
                    class="w-8 h-8 relative rounded-full left-[-20px]"
                  />
                </div>
                <div class="viewer">
                  <img
                    src="../assets/image/viewer-4.jpeg"
                    alt=""
                    class="w-8 h-8 relative rounded-full left-[-30px]"
                  />
                </div>
              </div>
              <div class="text-md text-[#00000080] mt-2 font-[500] poppins">View</div>
            </div>
          </div>
        </div>
        <div class="sharing-card border rounded-lg">
          <img
            src="../assets/image/sharing-2.jpeg"
            alt="sharing-1"
            class="rounded-t-lg"
          />
          <div class="p-7">
            <div class="article-sharing h-52">
              <div class="text-xl text-[#FF7400] mb-4 font-[600] poppins">
                Akibat Buang Makanan
              </div>
              <div class="text-md font-[400] tracking-[0.1em] urbanist">
                Fyi Indonesia sebagai penghasil sisa makanan terbanyak ketiga di
                dunia setelah Brazil lho.. Apa sebenernya dampak dari buang sisa
                makanan?
              </div>
            </div>
            <div class="flex justify-between mt-5">
              <div class="flex">
                <div class="viewer">
                  <img
                    src="../assets/image/viewer-1.jpeg"
                    alt=""
                    class="w-8 h-8 rounded-full"
                  />
                </div>
                <div class="viewer">
                  <img
                    src="../assets/image/viewer-2.jpeg"
                    alt=""
                    class="w-8 h-8 relative rounded-full left-[-10px]"
                  />
                </div>
                <div class="viewer">
                  <img
                    src="../assets/image/viewer-3.jpeg"
                    alt=""
                    class="w-8 h-8 relative rounded-full left-[-20px]"
                  />
                </div>
                <div class="viewer">
                  <img
                    src="../assets/image/viewer-4.jpeg"
                    alt=""
                    class="w-8 h-8 relative rounded-full left-[-30px]"
                  />
                </div>
              </div>
              <div class="text-md text-slate-500 mt-2 font-[500] poppins">View</div>
            </div>
          </div>
        </div>
        <div class="sharing-card border rounded-lg">
          <img
            src="../assets/image/sharing-3.jpeg"
            alt="sharing-1"
            class="rounded-t-lg"
          />
          <div class="p-7">
            <div class="article-sharing h-52">
              <div class="text-xl text-[#FF7400] mb-4 font-[600] poppins">
                Berjuta Manfaat dari Sedekah
              </div>
              <div class="text-md font-[400] tracking-[0.1em] urbanist">
                Cicil pahala melalui sedekah, agar hidup indah dan mendapatkan
                tiket surga, Amiin
              </div>
            </div>
            <div class="flex justify-between mt-5">
              <div class="flex">
                <div class="viewer">
                  <img
                    src="../assets/image/viewer-1.jpeg"
                    alt=""
                    class="w-8 h-8 rounded-full"
                  />
                </div>
                <div class="viewer">
                  <img
                    src="../assets/image/viewer-2.jpeg"
                    alt=""
                    class="w-8 h-8 relative rounded-full left-[-10px]"
                  />
                </div>
                <div class="viewer">
                  <img
                    src="../assets/image/viewer-3.jpeg"
                    alt=""
                    class="w-8 h-8 relative rounded-full left-[-20px]"
                  />
                </div>
                <div class="viewer">
                  <img
                    src="../assets/image/viewer-4.jpeg"
                    alt=""
                    class="w-8 h-8 relative rounded-full left-[-30px]"
                  />
                </div>
              </div>
              <div class="text-md text-slate-500 mt-2 font-[500] poppins">View</div>
            </div>
          </div>
        </div>
        <div class="sharing-card border rounded-lg">
          <img
            src="../assets/image/sharing-4.jpeg"
            alt="sharing-1"
            class="rounded-t-lg"
          />
          <div class="p-7">
            <div class="article-sharing h-52">
              <div class="text-xl text-[#FF7400] mb-4 font-[600] poppins">
                Gara-gara Sedekah
              </div>
              <div class="text-md font-[400] tracking-[0.1em] urbanist">
                Gara-gara sedekah Nasi Kotak, ini Keajaiban yang Aku Alami
              </div>
            </div>
            <div class="flex justify-between mt-5">
              <div class="flex">
                <div class="viewer">
                  <img
                    src="../assets/image/viewer-1.jpeg"
                    alt=""
                    class="w-8 h-8 rounded-full"
                  />
                </div>
                <div class="viewer">
                  <img
                    src="../assets/image/viewer-2.jpeg"
                    alt=""
                    class="w-8 h-8 relative rounded-full left-[-10px]"
                  />
                </div>
                <div class="viewer">
                  <img
                    src="../assets/image/viewer-3.jpeg"
                    alt=""
                    class="w-8 h-8 relative rounded-full left-[-20px]"
                  />
                </div>
                <div class="viewer">
                  <img
                    src="../assets/image/viewer-4.jpeg"
                    alt=""
                    class="w-8 h-8 relative rounded-full left-[-30px]"
                  />
                </div>
              </div>
              <div class="text-md text-slate-500 mt-2 font-[500] poppins">View</div>
            </div>
          </div>
        </div>
        <div class="sharing-card border rounded-lg">
          <img
            src="../assets/image/sharing-5.jpeg"
            alt="sharing-1"
            class="rounded-t-lg"
          />
          <div class="p-7">
            <div class="article-sharing h-52">
              <div class="text-xl text-[#FF7400] mb-4 font-[600] poppins">
                Jual Makanan Berlebihanmu disini!
              </div>
              <div class="text-md font-[400] tracking-[0.1em] urbanist">
                Untuk temen-temen yang punya sisa makanan, bisa dijual disini
                atau mau disedakahin.
              </div>
            </div>
            <div class="flex justify-between mt-5">
              <div class="flex">
                <div class="viewer">
                  <img
                    src="../assets/image/viewer-1.jpeg"
                    alt=""
                    class="w-8 h-8 rounded-full"
                  />
                </div>
                <div class="viewer">
                  <img
                    src="../assets/image/viewer-2.jpeg"
                    alt=""
                    class="w-8 h-8 relative rounded-full left-[-10px]"
                  />
                </div>
                <div class="viewer">
                  <img
                    src="../assets/image/viewer-3.jpeg"
                    alt=""
                    class="w-8 h-8 relative rounded-full left-[-20px]"
                  />
                </div>
                <div class="viewer">
                  <img
                    src="../assets/image/viewer-4.jpeg"
                    alt=""
                    class="w-8 h-8 relative rounded-full left-[-30px]"
                  />
                </div>
              </div>
              <div class="text-md text-slate-500 mt-2 font-[500] poppins">View</div>
            </div>
          </div>
        </div>
        <div class="sharing-card border rounded-lg">
          <img
            src="../assets/image/sharing-6.jpeg"
            alt="sharing-1"
            class="rounded-t-lg"
          />
          <div class="p-7">
            <div class="article-sharing h-52">
              <div class="text-xl text-[#FF7400] mb-4 font-[600] poppins">
                Resep Tempe Goreng Tepung Renyah dan Tahan Lama
              </div>
              <div class="text-md font-[400] tracking-[0.1em] urbanist">
                Siapa sih yang ga pingin banyak-banyak bikin Tempe Goreng Tepung
                Renyah tapi gabisa tahan..
              </div>
            </div>
            <div class="flex justify-between mt-5">
              <div class="flex">
                <div class="viewer">
                  <img
                    src="../assets/image/viewer-1.jpeg"
                    alt=""
                    class="w-8 h-8 rounded-full"
                  />
                </div>
                <div class="viewer">
                  <img
                    src="../assets/image/viewer-2.jpeg"
                    alt=""
                    class="w-8 h-8 relative rounded-full left-[-10px]"
                  />
                </div>
                <div class="viewer">
                  <img
                    src="../assets/image/viewer-3.jpeg"
                    alt=""
                    class="w-8 h-8 relative rounded-full left-[-20px]"
                  />
                </div>
                <div class="viewer">
                  <img
                    src="../assets/image/viewer-4.jpeg"
                    alt=""
                    class="w-8 h-8 relative rounded-full left-[-30px]"
                  />
                </div>
              </div>
              <div class="text-md text-slate-500 mt-2 font-[500] poppins">View</div>
            </div>
          </div>
        </div>
      </div>
      <!-- AKHIR CONTENT SHARING -->
    </div>
  </div>
</template>

<script>
import "../assets/style/community.css";
export default {
  name: "CommunityView",
};
</script>
