<template>
    <div class="bg-[#fd8b17] mx-auto max-w-screen-2xl">
        <div class="container text-white p-20 px-[150px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" fill="currentColor"
                class="bi bi-arrow-90deg-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4z" />
            </svg>
            <p class="text-[60px]">Bantuan</p>
            <p class="pb-[100px]">Hubungi kami dengan mengisi formulir di bawah ini dan salah satu pakar kami akan
                segera menghubungi Anda.
            </p>
            <form class="w-8/12">
                <div class="grid md:grid-cols-2 md:gap-12">
                    <div class="relative z-0 mb-10 w-full group flex items-center border-b-2 border-white py-3">
                        <input
                            class="appearance-none bg-transparent border-none w-full mr-3 p-10 py-1 px-2 leading-tight focus:outline-none"
                            type="text">
                        <label class="absolute duration-300 transform -translate-y-6 top-3 -z-10 origin-[0]">Nama<span
                                class="text-[#FF0000]">*</span></label>
                    </div>
                    <div class="relative z-0 mb-10 w-full group flex items-center border-b-2 border-white py-3">
                        <input
                            class="appearance-none bg-transparent border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none"
                            type="text">
                        <label class="absolute duration-300 transform -translate-y-6 top-3 -z-10 origin-[0]">Email<span
                                class="text-[#FF0000]">*</span></label>
                    </div>
                </div>
                <div class="grid md:grid-cols-2 md:gap-12">
                    <div class="relative z-0 mb-10 w-full group flex items-center border-b-2 border-white py-3">
                        <input
                            class="appearance-none bg-transparent border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none"
                            type="text">
                        <label class="absolute duration-300 transform -translate-y-6 top-3 -z-10 origin-[0]">Nomor
                            Telepon<span class="text-[#FF0000]">*</span></label>
                    </div>
                </div>
                <div class="relative z-0 mb-10 w-full group flex items-center border-b-2 border-white py-3">
                    <textarea
                        class="appearance-none bg-transparent border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none"
                        type="textarea"></textarea>
                    <label class="absolute duration-300 transform -translate-y-6 top-3 -z-10 origin-[0]">Pesan<span
                            class="text-[#FF0000]">*</span></label>
                </div>
                <div class="pt-10">
                    <button
                        class="button-form-transparent w-[160px] h-[50px] text-base rounded-[16px] border-white">Kirim</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import "../assets/style/form-button.css"
export default {
    name: "FormBantuan"
}
</script>