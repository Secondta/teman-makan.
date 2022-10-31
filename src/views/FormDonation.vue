<template>
    <div class="mx-auto max-w-screen-xl my-10">
        <div>
            <span class="text-4xl">Lorem ipsum sit almet</span>
            <br />
            <span class="text-sm font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        </div>
        <div class="ff gap-6 mt-10">
            <div class="w-[400px]">
                <img src="../assets/image/form.png" class="" />
            </div>
            <div class="w-[855px]">
                <form>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="nama">
                            Nama
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username" type="text" placeholder="Enter your full name">
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="nama">
                            Jenis Donasi
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username" type="text" placeholder="Enter your jenis donasi">
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="nama">
                            Jenis Yang Didonasikan
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username" type="text" placeholder="Enter your jenis donasi">
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="nama">
                            Upload Gambar
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username" type="file" placeholder="Enter your jenis donasi">
                    </div>
                    <div class="mb-4">
                        <label for="message" class="block mb-2 text-sm font-medium text-gray-900">Catatan</label>
                        <textarea id="message" rows="4"
                            class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Your message..."></textarea>
                    </div>
                    <button type="submit"
                        class="focus:outline-none w-[160px] text-white bg-[#FF7400] float-right hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg px-5 py-2.5 mr-2 mb-2">Send</button>
                </form>
            </div>
        </div>
    </div>
</template>


<script>
import "../assets/style/form-don.css"

export default {
    name: "FormDonation"
}
</script>