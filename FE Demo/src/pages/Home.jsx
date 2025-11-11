import React from "react";
import Navbar from "../components/Navbar.jsx";
import Slider from "../components/Slider.jsx";
import NotificationList from "../components/NotificationList.jsx";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Trái: Slider lớn */}
        <section className="lg:col-span-2">
          <Slider />
        </section>
        {/* Phải: danh sách thông báo */}
        <aside className="lg:col-span-1">
          <NotificationList />
        </aside>
      </main>
    </div>
  );
}
