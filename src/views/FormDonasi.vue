<template>
    <div class="relative block mx-auto max-w-screen-2xl">
        <div>
            <span class="text-4xl mt-5 p-8 text-orange-500">Ayo Berdonasi</span>
        </div>
        <div class="p-8 pb-10 grid grid-cols-3">
            <div>
                <div class="p-6 flex gap-2 cursor-pointer" @click="page = 0">
                    <div class="w-10 text-xl h-10 text-center p-1 rounded-full bg-gray-200" :class="
                        ' border-b-4 border-gray-100 transition-all' +
                        (page === 0 ? ' bg-gray-500' : '')
                    ">1.</div>
                    <div class="p-1 text-lg">Jenis yang akan didonasikan </div>
                </div>
                <div class="p-6 flex gap-2 cursor-pointer" @click="page = 1">
                    <div class="w-10 text-xl h-10 text-center p-1 rounded-full bg-gray-200" :class="
                        'border-b-4 border-gray-100 transition-all' +
                        (page === 1 ? ' bg-gray-500' : '')
                    ">2.</div>
                    <div class="p-1 text-lg">Masukan nilai yang akan didonasikan <br /> <span
                            class="text-sm text-gray-400">Tentukan biaya yang dibutuhkan</span></div>
                </div>
                <div class="p-6 flex gap-2 cursor-pointer" @click="page = 2">
                    <div class="w-10 text-xl h-10 text-center p-1 rounded-full bg-gray-200" :class="
                        'border-b-4 border-gray-100 transition-all' +
                        (page === 2 ? ' bg-gray-500' : '')
                    ">3.</div>
                    <div class="p-1 text-lg">Deskripsikan yang akan didonasikan <br /> <span
                            class="text-sm text-gray-400">Jelaskan tentang apa yang akan didonasikan</span></div>
                </div>
            </div>
            <div class="col-span-2">
                <div v-if="page === 0">
                    <div class="relative block rounded-xl border border-gray-200 p-8">
                        <div class="p-3">
                            <span class="text-xl">1. Jenis Yang Akan Didonasikan</span>
                            <hr class="h-5  " />
                        </div>
                        <div class="p-5">
                            <div class="relative block border rounded-xl border-dashed	 dashed p-8">
                                <div class="flex gap-5">
                                    <div class="">
                                        <svg width="35" height="34" viewBox="0 0 15 14" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M1.12504 4.85338V4.84382C1.12503 3.89932 1.40476 2.97597 1.92893 2.19028C2.45311 1.40458 3.19824 0.791729 4.07033 0.429049C4.94243 0.0663689 5.9024 -0.0298929 6.82914 0.152408C7.75588 0.334709 8.60787 0.787405 9.27761 1.45338C9.80456 1.1933 10.3932 1.08394 10.9784 1.1374C11.5636 1.19087 12.1226 1.40506 12.5937 1.75633C13.0648 2.10759 13.4296 2.58225 13.6479 3.12787C13.8661 3.67348 13.9293 4.26881 13.8304 4.84807C13.9758 4.86156 14.1169 4.90488 14.2448 4.97531C14.3727 5.04574 14.4847 5.14178 14.5738 5.25743C14.6629 5.37309 14.7273 5.50587 14.7628 5.64749C14.7983 5.78911 14.8043 5.93654 14.7803 6.08057C14.3 8.96951 13.1122 10.7981 11.2188 11.5673V12.2813C11.2188 12.704 11.0509 13.1094 10.752 13.4083C10.4531 13.7072 10.0477 13.8751 9.62504 13.8751H5.37504C4.95236 13.8751 4.54698 13.7072 4.24809 13.4083C3.94921 13.1094 3.78129 12.704 3.78129 12.2813V11.5673C1.88792 10.7981 0.700044 8.96951 0.219794 6.08057C0.196616 5.94037 0.201799 5.79694 0.235035 5.65877C0.268271 5.52061 0.328886 5.39052 0.413291 5.27619C0.497696 5.16187 0.604177 5.06564 0.726432 4.9932C0.848687 4.92076 0.984231 4.87357 1.12504 4.85445V4.85338ZM2.18754 4.84382H3.25004C3.25004 4.13934 3.5299 3.46371 4.02804 2.96557C4.52619 2.46742 5.20181 2.18757 5.90629 2.18757C6.61078 2.18757 7.2864 2.46742 7.78455 2.96557C8.28269 3.46371 8.56254 4.13934 8.56254 4.84382H9.62504C9.62504 3.85755 9.23325 2.91167 8.53585 2.21427C7.83845 1.51687 6.89257 1.12507 5.90629 1.12507C4.92002 1.12507 3.97414 1.51687 3.27674 2.21427C2.57934 2.91167 2.18754 3.85755 2.18754 4.84382ZM4.31254 4.84382H7.50004C7.50004 4.42113 7.33213 4.01575 7.03325 3.71687C6.73436 3.41798 6.32898 3.25007 5.90629 3.25007C5.48361 3.25007 5.07823 3.41798 4.77934 3.71687C4.48046 4.01575 4.31254 4.42113 4.31254 4.84382ZM11.6077 4.84382H12.7456C12.8258 4.52982 12.8333 4.20166 12.7675 3.88433C12.7016 3.567 12.5643 3.26889 12.3658 3.01271C12.1673 2.75652 11.9129 2.54903 11.6221 2.40603C11.3313 2.26304 11.0116 2.18832 10.6875 2.18757C10.4325 2.18757 10.1903 2.2322 9.96504 2.31401C10.1531 2.61576 10.3082 2.94088 10.4272 3.28195C10.6296 3.23175 10.8423 3.24209 11.0388 3.31167C11.2354 3.38125 11.4071 3.50701 11.5329 3.67335C11.6586 3.83969 11.7327 4.03928 11.746 4.24735C11.7593 4.45543 11.7112 4.66283 11.6077 4.84382ZM10.1563 11.7501H4.84379V12.2813C4.84379 12.4222 4.89977 12.5573 4.99939 12.657C5.09902 12.7566 5.23415 12.8126 5.37504 12.8126H9.62504C9.76594 12.8126 9.90107 12.7566 10.0007 12.657C10.1003 12.5573 10.1563 12.4222 10.1563 12.2813V11.7501ZM4.46979 10.6876H10.5303C12.2154 10.1457 13.2822 8.61357 13.7327 5.90632H1.26742C1.71792 8.61357 2.78467 10.1457 4.46979 10.6876Z"
                                                fill="black" fill-opacity="0.5" />
                                        </svg>
                                    </div>
                                    <div>
                                        <span>Pilih jenis yang akan didonasikan</span>
                                    </div>
                                </div>
                                <div class="pt-5">
                                    <select class="w-full bg-gray-100 rounded p-3">
                                        <option>Pilih Jenis Donasi</option>
                                        <option>No</option>
                                        <option>Maybe</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="pt-5 flex justify-end">
                        <div class="cursor-pointer inline-block justify-end rounded-xl border border-orange-300 px-12 py-3 text-sm font-medium text-orange-400 hover:bg-orange-500 hover:text-white focus:outline-none focus:ring active:bg-orange-400"
                            @click="page = 1">
                            Selanjutnya
                        </div>
                    </div>
                </div>
                <div v-else-if="page === 1">
                    <div class="relative block rounded-xl border border-gray-200 p-8">
                        <div class="p-3">
                            <span class="text-xl">2. Masukan nilai yang akan didonasikan</span>
                            <hr class="h-5  " />
                        </div>
                        <div class="p-5">
                            <div class="relative block border rounded-xl border-dashed	 dashed p-8">
                                <div class="flex gap-5">
                                    <div class="">
                                        <svg width="27" height="26" viewBox="0 0 17 16" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M12.2188 3.98047L16.9917 6.37109V12.8623L12.2188 15.2529L7.4375 12.8789V10.2144L4.78125 11.5342L0 9.16016L0.00830078 2.65234L4.78125 0.261719L9.5542 2.65234L9.5625 5.31689L12.2188 3.98047ZM15.2734 6.69482L12.2188 5.17578L9.16406 6.69482L12.2188 8.22217L15.2734 6.69482ZM7.83594 2.97607L4.78125 1.45703L1.72656 2.97607L4.78125 4.50342L7.83594 2.97607ZM1.0708 3.83936L1.0625 8.49609L4.25 10.0815V5.4248L1.0708 3.83936ZM5.3125 10.0815L7.4458 9.02734V6.37109L8.5 5.84814L8.4917 3.83936L5.3125 5.4248V10.0815ZM8.5083 7.55811L8.5 12.2148L11.6875 13.8003V9.14355L8.5083 7.55811ZM12.75 13.8003L15.9292 12.2065V7.55811L12.75 9.14355V13.8003Z"
                                                fill="black" fill-opacity="0.5" />
                                        </svg>

                                    </div>
                                    <div>
                                        <span>Masukan Nilai Yang Akan Di Didonasikan</span>
                                    </div>
                                </div>
                                <div class="pt-5">
                                    <input class="w-full bg-gray-100 rounded p-3" placeholder="Contoh 30 Bungkus" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="pt-5 flex justify-end gap-3">
                        <div class="cursor-pointer inline-block justify-end rounded-xl border border-orange-300 px-12 py-3 text-sm font-medium text-orange-400 hover:bg-orange-500 hover:text-white focus:outline-none focus:ring active:bg-orange-400"
                            @click="page = 0">
                            Kembali
                        </div>
                        <div class="cursor-pointer inline-block justify-end rounded-xl border border-orange-300 px-12 py-3 text-sm font-medium text-orange-400 hover:bg-orange-500 hover:text-white focus:outline-none focus:ring active:bg-orange-400"
                            @click="page = 2">
                            Selanjutnya
                        </div>
                    </div>
                </div>
                <div v-else-if="page === 2">
                    <div class="relative block rounded-xl border border-gray-200 shadow-lg p-8">
                        <div class="p-3">
                            <span class="text-xl">3. Deskripsikan yang akan didonasikan</span>
                            <hr class="h-5  " />
                        </div>
                        <div class="p-5">
                            <div class="border border-dashed rounded-xl">

                                <div class="relative block p-8">
                                    <div class="flex gap-5">
                                        <div class="">
                                            <svg width="35" height="34" viewBox="0 0 17 14" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M15.3994 13.3334C15.3994 13.3334 16.389 13.3334 16.389 12.2779C16.389 11.2223 15.3994 8.05564 11.4411 8.05564C7.48275 8.05564 6.49316 11.2223 6.49316 12.2779C6.49316 13.3334 7.48275 13.3334 7.48275 13.3334H15.3994ZM7.50452 12.2779C7.49721 12.2768 7.48994 12.2754 7.48275 12.2736C7.48374 11.995 7.64801 11.1864 8.23483 10.4581C8.78108 9.77514 9.74098 9.11119 11.4411 9.11119C13.1402 9.11119 14.1001 9.77619 14.6473 10.4581C15.2342 11.1864 15.3974 11.996 15.3994 12.2736L15.3915 12.2757C15.3869 12.2766 15.3823 12.2773 15.3776 12.2779H7.50452ZM11.4411 5.94453C11.966 5.94453 12.4694 5.72211 12.8406 5.3262C13.2117 4.93029 13.4202 4.39332 13.4202 3.83341C13.4202 3.27351 13.2117 2.73654 12.8406 2.34063C12.4694 1.94472 11.966 1.7223 11.4411 1.7223C10.9162 1.7223 10.4128 1.94472 10.0416 2.34063C9.67043 2.73654 9.46191 3.27351 9.46191 3.83341C9.46191 4.39332 9.67043 4.93029 10.0416 5.3262C10.4128 5.72211 10.9162 5.94453 11.4411 5.94453ZM14.4098 3.83341C14.4098 4.24927 14.333 4.66105 14.1838 5.04525C14.0347 5.42944 13.816 5.77853 13.5403 6.07259C13.2646 6.36664 12.9374 6.59989 12.5772 6.75903C12.217 6.91817 11.8309 7.00008 11.4411 7.00008C11.0512 7.00008 10.6652 6.91817 10.305 6.75903C9.9448 6.59989 9.61753 6.36664 9.34186 6.07259C9.06618 5.77853 8.84751 5.42944 8.69831 5.04525C8.54912 4.66105 8.47233 4.24927 8.47233 3.83341C8.47233 2.99356 8.78511 2.18811 9.34186 1.59424C9.89861 1.00038 10.6537 0.666748 11.4411 0.666748C12.2284 0.666748 12.9836 1.00038 13.5403 1.59424C14.0971 2.18811 14.4098 2.99356 14.4098 3.83341ZM7.41941 8.35119C7.02356 8.21823 6.61551 8.13083 6.20223 8.09047C5.97 8.06692 5.73685 8.05529 5.50358 8.05564C1.54525 8.05564 0.555664 11.2223 0.555664 12.2779C0.555664 12.9819 0.885195 13.3334 1.54525 13.3334H5.71733C5.57063 13.0039 5.49747 12.6426 5.50358 12.2779C5.50358 11.2117 5.87665 10.1224 6.58223 9.21252C6.8227 8.90219 7.10275 8.61191 7.41941 8.35119ZM5.42441 9.11119C4.83873 10.0499 4.52235 11.1503 4.514 12.2779H1.54525C1.54525 12.0034 1.70754 11.1906 2.29733 10.4581C2.83665 9.78675 3.77379 9.1323 5.42441 9.11225V9.11119ZM2.04004 4.36119C2.04004 3.52134 2.35282 2.71589 2.90957 2.12202C3.46631 1.52816 4.22143 1.19453 5.00879 1.19453C5.79615 1.19453 6.55126 1.52816 7.10801 2.12202C7.66476 2.71589 7.97754 3.52134 7.97754 4.36119C7.97754 5.20104 7.66476 6.0065 7.10801 6.60036C6.55126 7.19423 5.79615 7.52786 5.00879 7.52786C4.22143 7.52786 3.46631 7.19423 2.90957 6.60036C2.35282 6.0065 2.04004 5.20104 2.04004 4.36119ZM5.00879 2.25008C4.48388 2.25008 3.98047 2.4725 3.60931 2.86841C3.23814 3.26432 3.02962 3.80129 3.02962 4.36119C3.02962 4.92109 3.23814 5.45806 3.60931 5.85397C3.98047 6.24988 4.48388 6.4723 5.00879 6.4723C5.5337 6.4723 6.03711 6.24988 6.40827 5.85397C6.77944 5.45806 6.98796 4.92109 6.98796 4.36119C6.98796 3.80129 6.77944 3.26432 6.40827 2.86841C6.03711 2.4725 5.5337 2.25008 5.00879 2.25008Z"
                                                    fill="black" fill-opacity="0.5" />
                                            </svg>
                                        </div>
                                        <div>
                                            <span>Hubungan antar penerima </span>
                                        </div>
                                    </div>
                                    <div class="pt-5">
                                        <input class="w-full bg-gray-100 rounded p-3"
                                            placeholder="Ceritakan dengan jelas dan mudah dimengerti" />
                                    </div>
                                </div>
                                <div class="relative block bg-[#FF7400] opacity-60 p-8 gap-5">
                                    <div class="flex gap-5 text-bold">
                                        <div class="drop-shadow-lg">
                                            <svg width="35" height="34" viewBox="0 0 17 14" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M12.0417 3.28125C12.0417 4.77422 9.8842 7.43477 8.9368 8.53125C8.70955 8.79375 8.2875 8.79375 8.06319 8.53125C7.1158 7.43477 4.95833 4.77422 4.95833 3.28125C4.95833 1.46836 6.54323 0 8.5 0C10.4568 0 12.0417 1.46836 12.0417 3.28125ZM12.2778 5.47969C12.3811 5.29102 12.4755 5.10234 12.5611 4.91641C12.5759 4.88359 12.5906 4.84805 12.6054 4.81523L16.029 3.54648C16.4953 3.37422 17 3.69141 17 4.15625V11.5609C17 11.8289 16.8229 12.0695 16.5543 12.1707L12.2778 13.7539V5.47969ZM4.06111 3.78164C4.13194 4.16719 4.27361 4.55547 4.43889 4.91641C4.52448 5.10234 4.61892 5.29102 4.72222 5.47969V12.3539L0.971007 13.7457C0.504688 13.918 0 13.6008 0 13.1359V5.73125C0 5.46328 0.177083 5.22266 0.44566 5.12148L4.06406 3.78164H4.06111ZM9.67465 9.07812C10.0849 8.60234 10.7283 7.82852 11.3333 6.97266V13.7895L5.66667 12.2883V6.97266C6.2717 7.82852 6.9151 8.60234 7.32535 9.07812C7.93038 9.77812 9.06962 9.77812 9.67465 9.07812ZM8.5 4.15625C9.15226 4.15625 9.68056 3.6668 9.68056 3.0625C9.68056 2.4582 9.15226 1.96875 8.5 1.96875C7.84774 1.96875 7.31944 2.4582 7.31944 3.0625C7.31944 3.6668 7.84774 4.15625 8.5 4.15625Z"
                                                    fill="black" fill-opacity="0.5" />
                                            </svg>

                                        </div>
                                        <div>
                                            <span class="text-bold">Jelaskan Latar Penerima<br /><span
                                                    class="text-sm text-gray-200">Ceritakan latar
                                                    penerimaan</span></span>
                                        </div>
                                    </div>
                                    <div class="pt-5 grid grid-cols-2 gap-5">
                                        <div>
                                            <input class="w-full h-9 p-3 border rounded-lg" type="text"
                                                placeholder="Nama Penerima Pertama" />
                                        </div>
                                        <div>
                                            <input class="w-full h-9 p-3 border rounded-lg" type="text"
                                                placeholder="Nama Penerima Kedua" />
                                        </div>
                                    </div>
                                    <div class="pt-5">
                                        <input class="w-full h-9 p-3 border rounded-lg" type="text"
                                            placeholder="Alamat Penerima" />
                                    </div>
                                </div>
                                <div class="relative block p-8">
                                    <div class="flex gap-5">
                                        <div class="">
                                            <svg width="35" height="34" viewBox="0 0 17 14" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M3.75 12.5H8.25C8.4625 12.5 8.64075 12.428 8.78475 12.284C8.92825 12.1405 9 11.9625 9 11.75C9 11.5375 8.92825 11.3595 8.78475 11.216C8.64075 11.072 8.4625 11 8.25 11H3.75C3.5375 11 3.3595 11.072 3.216 11.216C3.072 11.3595 3 11.5375 3 11.75C3 11.9625 3.072 12.1405 3.216 12.284C3.3595 12.428 3.5375 12.5 3.75 12.5ZM3.75 9.5H8.25C8.4625 9.5 8.64075 9.428 8.78475 9.284C8.92825 9.1405 9 8.9625 9 8.75C9 8.5375 8.92825 8.35925 8.78475 8.21525C8.64075 8.07175 8.4625 8 8.25 8H3.75C3.5375 8 3.3595 8.07175 3.216 8.21525C3.072 8.35925 3 8.5375 3 8.75C3 8.9625 3.072 9.1405 3.216 9.284C3.3595 9.428 3.5375 9.5 3.75 9.5ZM1.5 15.5C1.0875 15.5 0.7345 15.3532 0.441 15.0597C0.147 14.7657 0 14.4125 0 14V2C0 1.5875 0.147 1.23425 0.441 0.94025C0.7345 0.64675 1.0875 0.5 1.5 0.5H6.88125C7.08125 0.5 7.272 0.5375 7.4535 0.6125C7.6345 0.6875 7.79375 0.79375 7.93125 0.93125L11.5687 4.56875C11.7062 4.70625 11.8125 4.8655 11.8875 5.0465C11.9625 5.228 12 5.41875 12 5.61875V14C12 14.4125 11.8533 14.7657 11.5597 15.0597C11.2657 15.3532 10.9125 15.5 10.5 15.5H1.5ZM6.75 5V2H1.5V14H10.5V5.75H7.5C7.2875 5.75 7.1095 5.678 6.966 5.534C6.822 5.3905 6.75 5.2125 6.75 5ZM1.5 2V5.75V2V14V2Z"
                                                    fill="black" fill-opacity="0.5" />
                                            </svg>
                                        </div>
                                        <div>
                                            <span>Hubungan antar penerima<br /><span class="text-sm text-gray-400">Ceritakan latar penerimaan</span></span>
                                        </div>
                                    </div>
                                    <div class="pt-5">
                                        <textarea class="w-full rounded-lg bg-gray-200 p-5 text-sm"
                                            placeholder="Ceritakan dengan jelas dan mudah dimengerti" rows="8" id="message" bg></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="p-2 text-lg"> <input type="checkbox" class="border border-dashed" name="" id=""/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur maiores provident dolorem non inventore deleniti voluptas dolore quas ipsam.</div>
                    <div class="pt-5 flex justify-end gap-3">
                        <div class="w-[150px] text-center    cursor-pointer inline-block justify-end rounded-xl border border-orange-300 px-12 py-3 text-sm font-medium text-orange-400 hover:bg-orange-500 hover:text-white focus:outline-none focus:ring active:bg-orange-400"
                            @click="page = 1">
                            Kembali
                        </div>
                        <div
                            class="w-[150px] text-center cursor-pointer inline-block justify-end rounded-xl border border-orange-300 px-12 py-3 text-sm font-medium text-orange-400 hover:bg-orange-500 hover:text-white focus:outline-none focus:ring active:bg-orange-400">
                            Buat
                        </div>
                        <div class="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
  <p class="font-bold">Be Warned</p>
  <p>Something not ideal might be happening.</p>
</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    data() {
        return {
            page: 2,
        };
    },
};


</script>