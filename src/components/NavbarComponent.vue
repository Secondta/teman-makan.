<template>
    <div>
        <header aria-label="Site Header" class="bg-white drop-shadow-xl top-0 w-full">
            <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                <div class="flex h-16 items-center justify-between">
                    <div class="flex-1 xl:flex xl:items-center xl:gap-12">
                        <a class="block" href="/">
                            <p class="judul-navbar">Teman Makan<span class="text-[#FF7400] text-4xl">.</span></p>
                        </a>
                    </div>
                    <div class="xl:flex xl:items-center xl:gap-12">
                        <nav aria-label="Site Nav" class="hidden xl:block">
                            <ul class="flex items-center gap-6">
                                <li>
                                    <a class="text-black" href="/">
                                        Home
                                    </a>
                                </li>

                                <li v-if="login === true">
                                    <a class="text-black" href="/dashboard">
                                        Dashboard
                                    </a>
                                </li>

                                <li>
                                    <a class="text-black" href="/community">
                                        Komunitas
                                    </a>
                                </li>

                                <li>
                                    <a class="text-black" href="/">
                                        Tentang kami
                                    </a>
                                </li>
                            </ul>
                        </nav>

                        <div class="flex items-center gap-4">
                            <div class="sm:flex sm:gap-5 items-center">
                                <button
                                    class="button-utama w-40 py-3 text-white text-lg rounded-[16px] focus:border-4 border-yellow-300">Mari
                                    Berbagi</button>
                                <button  v-if="login === false"
                                    class="hidden xl:block button-utama-transparent w-40 py-3 text-lg rounded-[16px] focus:border-4 border-yellow-300">Login</button>
                                <button  v-if="login === true"
                                    class="hidden xl:block button-utama-transparent w-40 py-3 text-lg rounded-[16px] focus:border-4 border-yellow-300">Buat
                                    Donasi</button>
                                <div v-if="login === true"><img src="../assets/image/viewer-1.jpeg" alt="Foto Profile" class="w-[38px] h-[38px]"></div>
                            </div>

                            <div class="block xl:hidden">
                                <button class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>

<script>
import '../assets/style/navbar.css'
export default {
    name: 'NavbarComponent',
    data() {
        return {
            login: true,
        };
    },
}
</script>