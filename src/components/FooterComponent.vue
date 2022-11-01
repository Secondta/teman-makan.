<template>
    <div class="all-footer mx-auto max-w-screen-xl">
        <hr class="my-4 mx-auto h-[1px] bg-black rounded border-0">
        <div class="isi-footer p-10">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <div>
                    <a class="block" href="/">
                        <p class="judul-footer poppins">Teman Makan<span class="text-[#FF7400] text-4xl">.</span></p>
                    </a>
                </div>
                <div>
                    <ul>
                        <li class="font-[500] text-[16px] poppins">Home</li>
                        <li class="mt-[16px] font-[500] text-[16px] poppins">Donate</li>
                        <li class="mt-[16px] font-[500] text-[16px] poppins">Community</li>
                    </ul>
                </div>
                <div>
                    <span class="text-[32px] font-[500] poppins">Ingin banyak informasi?</span>
                    <div class="mt-5 flex justify-between">
                        <span>Masukan alamat email kamu</span>
                        <span>
                            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </span>
                    </div>
                    <hr class="my-4 mx-auto h-[1px] bg-black rounded border-0" />
                    <span class="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                </div>
            </div>
            <div class="w-full flex justify-between mt-[217px] urbanist">
                <div>Copyright<span> Teman Makan<span class="text-[#FF7400] text-4xl poppins">.</span></span> 2022</div>
                <div class="block md:flex items-center text-center gap-3">
                    <div>Follow Us</div>
                    <div class="flex items-center gap-3">
                        <img src="../assets/image/instagram.png" alt="Instagram" class="h-[22px] w-[22px]">
                        <img src="../assets/image/facebook.png" alt="facebook" class="h-[22px] w-[22px]">
                        <img src="../assets/image/tiktok.png" alt="tiktok" class="h-[22px] w-[22px]">
                        <img src="../assets/image/linkedIn.png" alt="linkedIn" class="h-[22px] w-[22px]">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import '../assets/style/Footer.css'
export default {
    name: 'FooterComponent'
}
</script>