"use client";

import React from "react";

import { FaWhatsapp } from "react-icons/fa6";

function WhatsApp() {
  const handleClick = async () => {
    // Check if WhatApp installed, if yes open whatsapp else open whatsapp web
    if (navigator.userAgent.includes("WhatsApp")) {
      // WhatsApp is installed
      window.open(
        `https://api.whatsapp.com/send?phone=2347064699173&text=Link%3A%0Ahttps%3A%2F%2Ffb.me%2F6ra5Pnwh9%0A%0AHello!%20Can%20I%20get%20more%20info%20on%20this%3F&source_url=https%3A%2F%2Ffb.me%2F6ra5Pnwh9&icebreaker=Hello!%20Can%20I%20get%20more%20info%20on%20this%3F&app=facebook&entry_point=ctwa_ad&jid=260970083929%40s.whatsapp.net&have_wm=1&have_ib=1&show_ad_attribution=1&source=FB_Ads&data=ARCbI1K1oDZ9WJ9kj1uVQYcbUrxmyq2lJ9C3YG512_s_bJTQneM_GlVWqCbiRk6RsJ7oj2c9EU9a_25v6X82zk96GC_kcXHFOZPgUv1iqwNTuby-wsWGOpHlqRDX4tBiCXPzbYy_N21cCdXVbTjo7-1r9n2xK3DQyLBS-C0_4z7q8Gaic3myzxqmDhIqSP6NiKhSpY9ONdAqGeEbgWc8bCUBCiD6CMbHU5TPVk9By9AFQjOqum4p_vEK80ToPw5sxX9HJWVYlsczbeQLlE2QKf6-EY0eGXJvrPuBDzJL1vWX_2L7LxXdiRq_YB5Dk65fhVXLp3PSAxtl&token=eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjEyNSJ9.eyJleHAiOjE3MTk4OTc3NTEsInBob25lIjoiMjYwOTcwMDgzOTI5IiwidGV4dCI6Ikxpbms6XG5odHRwczpcL1wvZmIubWVcLzZyYTVQbndoOVxuXG5IZWxsbyEgQ2FuIEkgZ2V0IG1vcmUgaW5mbyBvbiB0aGlzPyIsInNvdXJjZV91cmwiOiJodHRwczpcL1wvZmIubWVcLzZyYTVQbndoOSIsImljZWJyZWFrZXIiOiJIZWxsbyEgQ2FuIEkgZ2V0IG1vcmUgaW5mbyBvbiB0aGlzPyIsImFwcCI6ImZhY2Vib29rIiwiZW50cnlfcG9pbnQiOiJjdHdhX2FkIiwiamlkIjoiMjYwOTcwMDgzOTI5XHUwMDQwcy53aGF0c2FwcC5uZXQiLCJoYXZlX3dtIjoxLCJoYXZlX2liIjoxLCJzaG93X2FkX2F0dHJpYnV0aW9uIjoxLCJiYW5uZXIiOnsidGl0bGUiOiJiaXpfY3JlYXRpb25fZGF0ZSIsImJpel9jcmVhdGlvbl9kYXRlIjoxNjc0MTIwNTk4MDAwfSwic291cmNlIjoiRkJfQWRzIn0.hkvCeseZo8Ao3kTpLn0voovKGZz9dlM7e6D45_qdGjlK8xRS4oZXZMj0Lz_SOHpV3xKdSzHx4JO1QOBqn5e7Ng&fbclid=IwZXh0bgNhZW0CMTAAAR3hROKiMZ1PyHVTIjTM0otCbof4c61jq0KxcGYp1TeTBQNufN4-O7wtcSY_aem_8OTRlInrE9m4O8mB54paMQ`
      );
    } else {
      // WhatsApp is not installed, open WhatsApp Web
      // WhatsApp is installed
      window.open(
        `https://api.whatsapp.com/send?phone=2347064699173&text=Link%3A%0Ahttps%3A%2F%2Ffb.me%2F6ra5Pnwh9%0A%0AHello!%20Can%20I%20get%20more%20info%20on%20this%3F&source_url=https%3A%2F%2Ffb.me%2F6ra5Pnwh9&icebreaker=Hello!%20Can%20I%20get%20more%20info%20on%20this%3F&app=facebook&entry_point=ctwa_ad&jid=260970083929%40s.whatsapp.net&have_wm=1&have_ib=1&show_ad_attribution=1&source=FB_Ads&data=ARCbI1K1oDZ9WJ9kj1uVQYcbUrxmyq2lJ9C3YG512_s_bJTQneM_GlVWqCbiRk6RsJ7oj2c9EU9a_25v6X82zk96GC_kcXHFOZPgUv1iqwNTuby-wsWGOpHlqRDX4tBiCXPzbYy_N21cCdXVbTjo7-1r9n2xK3DQyLBS-C0_4z7q8Gaic3myzxqmDhIqSP6NiKhSpY9ONdAqGeEbgWc8bCUBCiD6CMbHU5TPVk9By9AFQjOqum4p_vEK80ToPw5sxX9HJWVYlsczbeQLlE2QKf6-EY0eGXJvrPuBDzJL1vWX_2L7LxXdiRq_YB5Dk65fhVXLp3PSAxtl&token=eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjEyNSJ9.eyJleHAiOjE3MTk4OTc3NTEsInBob25lIjoiMjYwOTcwMDgzOTI5IiwidGV4dCI6Ikxpbms6XG5odHRwczpcL1wvZmIubWVcLzZyYTVQbndoOVxuXG5IZWxsbyEgQ2FuIEkgZ2V0IG1vcmUgaW5mbyBvbiB0aGlzPyIsInNvdXJjZV91cmwiOiJodHRwczpcL1wvZmIubWVcLzZyYTVQbndoOSIsImljZWJyZWFrZXIiOiJIZWxsbyEgQ2FuIEkgZ2V0IG1vcmUgaW5mbyBvbiB0aGlzPyIsImFwcCI6ImZhY2Vib29rIiwiZW50cnlfcG9pbnQiOiJjdHdhX2FkIiwiamlkIjoiMjYwOTcwMDgzOTI5XHUwMDQwcy53aGF0c2FwcC5uZXQiLCJoYXZlX3dtIjoxLCJoYXZlX2liIjoxLCJzaG93X2FkX2F0dHJpYnV0aW9uIjoxLCJiYW5uZXIiOnsidGl0bGUiOiJiaXpfY3JlYXRpb25fZGF0ZSIsImJpel9jcmVhdGlvbl9kYXRlIjoxNjc0MTIwNTk4MDAwfSwic291cmNlIjoiRkJfQWRzIn0.hkvCeseZo8Ao3kTpLn0voovKGZz9dlM7e6D45_qdGjlK8xRS4oZXZMj0Lz_SOHpV3xKdSzHx4JO1QOBqn5e7Ng&fbclid=IwZXh0bgNhZW0CMTAAAR3hROKiMZ1PyHVTIjTM0otCbof4c61jq0KxcGYp1TeTBQNufN4-O7wtcSY_aem_8OTRlInrE9m4O8mB54paMQ`
      );
    }
  };
  return (
    <>
      <div
        className="bg-green-600 w-min animate-bounce p-2 rounded-full fixed 
        bottom-10 right-4 cursor-pointer md:right-8
         hover:bg-[#A700AF] shadow-lg hover:text-white shadow-green-600 transform transition-all duration-1000 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce
        "
        onClick={handleClick}
      >
        <FaWhatsapp color="white" className="w-7 h-7 md:w-10 md:h-10" />
      </div>
    </>
  );
}

export default WhatsApp;
