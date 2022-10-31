<template>
  <div class="m-auto box-border">
    <div class="flex">
      <div class="border border-gray-300 h-auto w-1/2 flex flex-col">
        <label
          class="
            not-italic
            font-bold
            text-xl text-black
            mt-20
            text-center
            mr-96
            mb-20
          "
          >Teman Makan<span class="font-bold text-[#FFA242]">.</span></label
        >
        <div class="text-center mr-60 mb-5">
          <label class="mr-4 not-italic font-bold text-4xl text-[#FD8B17]"
            >Masuk</label
          >
          <p
            class="
              not-italic
              font-bold
              text-sm
              leading-3
              ml-40
              text-justify text-black
            "
          >
            Masukan data yang telah terdaftar
          </p>
        </div>
        <div class="flex flex-col mx-auto">
          <div class="mb-2">
            <label
              class="
                block
                mb-2
                text-lg
                mr-56
                not-italic
                font-bold
                text-[#FFA242]
              "
              >Email</label
            >
            <input
              type="text"
              class="
                not-italic
                border-[1px] border-solid border-[rgba(0,
                0, 0,
                0.5)]
                box-border
                text-sm
                rounded-lg
                text-[rgba(0,
                0, 0,
                0.5)]
                block
                w-[345px]
                h-11
                p-2.5
              "
              placeholder="Masukan alamat email"
              required
            />
          </div>

          <div class="mb-2">
            <label
              class="
                block
                mb-2
                mr-56
                not-italic
                font-bold
                text-lg text-[#FFA242]
              "
              >Masuk Sebagai</label
            >
            <select
              class="
                logBtn
                not-italic
                box-border
                text-sm
                rounded-lg
                block
                w-[345px]
                h-11
                p-2
              "
            >
              <option class="text-sm">Masuk sebagai</option>
              <option class="text-sm">Giver</option>
              <option class="text-sm">Receiver</option>
            </select>
          </div>

          <div>
            <label
              class="
                not-italic
                text-[#FFA242]
                mr-56
                block
                mb-2
                text-lg
                font-bold
              "
              >Password</label
            >
            <input
              type="text"
              class="
                not-italic
                border-[1px] border-solid border-[rgba(0,
                0, 0,
                0.5)]
                box-border
                text-sm
                rounded-lg
                text-[rgba(0,
                0, 0,
                0.5)]
                block
                w-[345px]
                h-11
                p-2.5
              "
              placeholder="Masukan password"
            />
          </div>
          <div class="block text-justify text-sm mb-10">
            <div class="mt-2">
              <label
                class="inline-flex text-black not-italic font-bold items-center"
              >
                <input
                  type="checkbox"
                  class="w-4 h-4 rounded text-[rgba(0, 0, 0, 0.5)]"
                />
                <span class="ml-2 text-sm tracking-wider">Ingatkan saya</span>
              </label>
              <span
                class="
                  mr-2
                  float-right
                  not-italic
                  font-bold
                  text-black text-sm
                  tracking-wider
                "
                ><a href="/">Lupa Password ?</a></span
              >
            </div>
          </div>

          <button
            type="submit"
            class="
              not-italic
              w-[345px]
              text-white
              bg-[#FD8B17]
              hover:bg-orange-500
              border border-gray-300
              font-bold
              rounded-lg
              text-lg
              mb-2
              p-2
              text-center
            "
          >
            Masuk
          </button>

          <button
            type="submit"
            class="
              flex
              not-italic
              w-[345px]
              text-black
              border
              bg-white
              border-2
              hover:bg-orange-500
              font-bold
              rounded-lg
              text-lg
              mb-2
              px-10
              py-1.5
            "
          >
            <svg
              class="mr-4 ml-2"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 48 48"
              style="fill: #000000"
            >
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              ></path>
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              ></path>
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
            </svg>
            Masuk dengan Google
          </button>
          <p
            class="
              not-italic
              text-black text-sm
              font-bold
              leading-3
              tracking-wider
              text-center
            "
          >
            Tidak mempunyai akun?
            <a href="/" class="text-[#FFA242]">Daftar</a>
          </p>
        </div>
      </div>
      <div
        class="
          border border-gray-300
          h-auto
          w-1/2
          relative
          bg-gradient-to-tr
          form-orange-500
          to-white
        "
      >
        <img
          class="h-full w-full"
          src="../assets/image/Register.jpg"
          alt="none"
        />
        <div
          class="
            not-italic
            font-bold
            absolute
            bottom-14
            left-[23px]
            text-[60px] text-left text-white
            leading-none
            tracking-widest
          "
        >
          Berbagi kebahagiaan bersama
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../assets/style/login.css";
export default {
  name: "LoginView",
};
</script>
