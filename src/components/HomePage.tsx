import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* 🔹 ส่วนของพื้นหลังที่มีขนาดแค่ครึ่งหน้า */}
      <div className="relative h-[50vh] bg-[url('https://i.pinimg.com/736x/1b/1e/e3/1b1ee3d86646fe340532617b70a76339.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <nav className="relative z-10 bg-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xl font-semibold text-white">
                WriteWhisper
              </span>
            </div>
            <div className="hidden md:flex space-x-6">
              <a
                href="#"
                className="text-white hover:text-blue-400 transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="text-white hover:text-blue-400 transition-colors"
              >
                Write a Story
              </a>
              <a
                href="#"
                className="text-white hover:text-blue-400 transition-colors"
              >
                Showcase
              </a>
              <a
                href="#"
                className="text-white hover:text-blue-400 transition-colors"
              >
                Blogs
              </a>
              <a
                href="#"
                className="text-white hover:text-blue-400 transition-colors"
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-white hover:text-blue-400 transition-colors"
              >
                About Us
              </a>
            </div>
            <div className="flex gap-4">
              <Link
                to="/register"
                className="px-4 py-2 text-white hover:text-blue-300 transition-colors"
              >
                Try for free
              </Link>
              <Link
                to="/login"
                className="px-4 py-2 text-white hover:text-blue-300 transition-colors"
              >
                Login
              </Link>
            </div>
          </div>
        </nav>

        {/* 🔹 Title และ Button ที่อยู่ในพื้นหลัง */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-6">
            Create your dream novel with the power of intelligent AI.
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Let AI help craft the story, filling in the imagination, while
            generating a vivid narrative voice!
          </p>
          <div className="mt-8">
            <Link
              to="/register"
              className="inline-block px-8 py-3 bg-gradient-to-r from-sky-500 to-blue-700 text-white rounded-full hover:from-red-600 hover:to-orange-600 transition-all text-lg font-semibold shadow-lg"
            >
              Start creating a novel
            </Link>
          </div>
        </div>
      </div>

      {/* 🔹 Section ที่อยู่ระหว่างกลางของพื้นหลังไล่สีและพื้นหลังสีขาว */}
      <div className="relative z-10 mt-[-80px] pb-16 bg-gradient-to-b from-black/40 to-white">
        <h2 className="text-3xl font-semibold text-white text-center">
          Top 10 uses of narrative-style voices
        </h2>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {/* Fantasy */}
          <button className="relative w-48 aspect-[16/9] rounded-lg overflow-hidden">
            {/* รูปภาพเต็มปุ่ม */}
            <img
              src="https://i.pinimg.com/736x/c0/4d/d9/c04dd96f6090328857b71441fb3cdc96.jpg"
              alt="Fantasy"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* ข้อความหมวดหมู่ */}
            <span className="absolute bottom-2 left-2 text-white font-semibold">
              Fantasy
            </span>

            {/* ปุ่ม Play ใช้ไอคอนที่อัปโหลด */}
            <button className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow-md hover:scale-110 transition-transform">
              <img
                src="https://cdn-icons-png.flaticon.com/512/15430/15430907.png" // 🔹 เปลี่ยนเป็นไอคอนของคุณ
                alt="Play Audio"
                className="w-6 h-6"
              />
            </button>
          </button>

          {/* Horror */}
          <button className="relative w-48 aspect-[16/9] rounded-lg overflow-hidden">
            {/* รูปภาพเต็มปุ่ม */}
            <img
              src="https://i.pinimg.com/736x/c0/4d/d9/c04dd96f6090328857b71441fb3cdc96.jpg"
              alt="Horror"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* ข้อความหมวดหมู่ */}
            <span className="absolute bottom-2 left-2 text-white font-semibold">
              Horror
            </span>

            {/* ปุ่ม Play ใช้ไอคอนที่อัปโหลด */}
            <button className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow-md hover:scale-110 transition-transform">
              <img
                src="https://cdn-icons-png.flaticon.com/512/15430/15430907.png" // 🔹 เปลี่ยนเป็นไอคอนของคุณ
                alt="Play Audio"
                className="w-6 h-6"
              />
            </button>
          </button>

          {/* Romantic */}
          <button className="relative w-48 aspect-[16/9] rounded-lg overflow-hidden">
            {/* รูปภาพเต็มปุ่ม */}
            <img
              src="https://i.pinimg.com/736x/c0/4d/d9/c04dd96f6090328857b71441fb3cdc96.jpg"
              alt="Romantic"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* ข้อความหมวดหมู่ */}
            <span className="absolute bottom-2 left-2 text-white font-semibold">
              Romantic
            </span>

            {/* ปุ่ม Play ใช้ไอคอนที่อัปโหลด */}
            <button className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow-md hover:scale-110 transition-transform">
              <img
                src="https://cdn-icons-png.flaticon.com/512/15430/15430907.png" // 🔹 เปลี่ยนเป็นไอคอนของคุณ
                alt="Play Audio"
                className="w-6 h-6"
              />
            </button>
          </button>

          {/* Adventure */}
          <button className="relative w-48 aspect-[16/9] rounded-lg overflow-hidden">
            {/* รูปภาพเต็มปุ่ม */}
            <img
              src="https://i.pinimg.com/736x/c0/4d/d9/c04dd96f6090328857b71441fb3cdc96.jpg"
              alt="Adventure"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* ข้อความหมวดหมู่ */}
            <span className="absolute bottom-2 left-2 text-white font-semibold">
              Adventure
            </span>

            {/* ปุ่ม Play ใช้ไอคอนที่อัปโหลด */}
            <button className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow-md hover:scale-110 transition-transform">
              <img
                src="https://cdn-icons-png.flaticon.com/512/15430/15430907.png" // 🔹 เปลี่ยนเป็นไอคอนของคุณ
                alt="Play Audio"
                className="w-6 h-6"
              />
            </button>
          </button>
        </div>
      </div>

      {/* 🔹 ส่วนเนื้อหาด้านล่าง (พื้นหลังสีขาว) */}
      <div className="bg-white  px-4 sm:px-6 lg:px-8"></div>

      {/* 🔹 Section: AI-Generated Novel Example */}
     
      <div className="bg-white lg:px-8">
        <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">
          Try listening to and reading an AI-generated novel example from us.
        </h3>

        {/* กล่องเนื้อหา */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* การ์ดตัวอย่างที่ 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden flex">
            {/* รูปภาพ (อยู่ด้านซ้าย) */}
            <div className="w-1/3 relative">
              <img
                src="https://i.pinimg.com/736x/c0/4d/d9/c04dd96f6090328857b71441fb3cdc96.jpg"
                alt="Novel 2"
                className="w-full h-full object-cover"
              />

              {/* ปุ่ม Play ไอคอนที่ขยับลงมาด้านล่าง */}
              <button className="absolute left-1/2 bottom-4 transform -translate-x-1/2 transition-all rounded-full p-3 active:translate-y-1">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/15430/15430907.png" // 🔹 เปลี่ยนเป็นไอคอนที่ต้องการ
                  alt="Play Audio"
                  className="w-12 h-12"
                />
              </button>
            </div>

            {/* เนื้อหา (อยู่ด้านขวา) */}
            <div className="w-2/3 p-4 flex flex-col justify-between">
              <div>
                <span className="text-sm text-gray-500">
                  Category: Past, Present, Future
                </span>
                <h4 className="text-lg font-semibold text-gray-900 mt-2">
                  The little country doctor turns her life towards wealth.
                </h4>
                <p className="text-sm text-gray-600">
                  The little country doctor turns her life towards wealth.
                </p>
              </div>
              <button className="inline-block px-8 py-3 bg-gradient-to-r from-sky-500 to-blue-700 text-white rounded-full hover:from-red-600 hover:to-orange-600 transition-all text-lg font-semibold shadow-lg">
                Get Started Free
              </button>
            </div>
          </div>

          {/* การ์ดตัวอย่างที่ 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden flex">
            {/* รูปภาพ (อยู่ด้านซ้าย) */}
            <div className="w-1/3 relative">
              <img
                src="https://i.pinimg.com/736x/c0/4d/d9/c04dd96f6090328857b71441fb3cdc96.jpg"
                alt="Novel 2"
                className="w-full h-full object-cover"
              />

              {/* ปุ่ม Play ไอคอนที่ขยับลงมาด้านล่าง */}
              <button className="absolute left-1/2 bottom-4 transform -translate-x-1/2 transition-all rounded-full p-3 active:translate-y-1">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/15430/15430907.png" // 🔹 เปลี่ยนเป็นไอคอนที่ต้องการ
                  alt="Play Audio"
                  className="w-12 h-12"
                />
              </button>
            </div>

            {/* เนื้อหา (อยู่ด้านขวา) */}
            <div className="w-2/3 p-4 flex flex-col justify-between">
              <div>
                <span className="text-sm text-gray-500">
                  Category: Past, Present, Future
                </span>
                <h4 className="text-lg font-semibold text-gray-900 mt-2">
                  The Glittering Swan, The Phantom Tiger.
                </h4>
                <p className="text-sm text-gray-600">
                  The Glittering Swan, The Phantom Tiger.
                </p>
              </div>
              <button className="inline-block px-8 py-3 bg-gradient-to-r from-sky-500 to-blue-700 text-white rounded-full hover:from-red-600 hover:to-orange-600 transition-all text-lg font-semibold shadow-lg">
                Get Started Free
              </button>
            </div>
          </div>
        </div>
      </div>

    {/*------------------- */}

    <div className="bg-black text-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto mt-10 mb-10">
  <h2 className="text-2xl font-bold mb-4">How to create a novel</h2>
  <ul className="list-disc list-inside space-y-3 text-gray-300">
    <li>Click the "Start" button to begin using the narrative voice.</li>
    <li>Click the "New Project" button in the first menu.</li>
    <li>Choose whether the user wants to create a multi-chapter novel or a short story.</li>
    <li>After making a selection, proceed to the next step.</li>
    <li>
      Fill in the details such as the novel’s title, number of characters, plot summary, additional 
      information, and tone of the story.
    </li>
    <li>Click the "Create Novel" button.</li>
    <li>Wait for the novel creation results to appear.</li>
    <li>
      After the novel creation process is complete, you can change the character voices as desired 
      and adjust other settings as needed.
    </li>
  </ul>
</div>

 {/*------------------- */}

{/*------------------- */}

<div className="bg-white lg:px-8">
        <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">
        Start creating your dream novel now!
        </h3>

        {/* กล่องเนื้อหา */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* การ์ดตัวอย่างที่ 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden flex">
            {/* รูปภาพ (อยู่ด้านซ้าย) */}
            <div className="w-1/3 relative">
              <img
                src="https://i.pinimg.com/736x/c0/4d/d9/c04dd96f6090328857b71441fb3cdc96.jpg"
                alt="Novel 2"
                className="w-full h-full object-cover"
              />

              {/* ปุ่ม Play ไอคอนที่ขยับลงมาด้านล่าง */}
              <button className="absolute left-1/2 bottom-4 transform -translate-x-1/2 transition-all rounded-full p-3 active:translate-y-1">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/15430/15430907.png" // 🔹 เปลี่ยนเป็นไอคอนที่ต้องการ
                  alt="Play Audio"
                  className="w-12 h-12"
                />
              </button>
            </div>

            {/* เนื้อหา (อยู่ด้านขวา) */}
            <div className="w-2/3 p-4 flex flex-col justify-between">
              <div>
                <span className="text-sm text-gray-500">
                  Category: Past, Present, Future
                </span>
                <h4 className="text-lg font-semibold text-gray-900 mt-2">
                Strange rules, welcome to the house of happiness.
                </h4>
                <p className="text-sm text-gray-600">
                Su Qingyu time-traveled into a novel and learned that a terrifying world would arrive in three days.
                 She burned hundreds of millions of ghostly dollars along with numerous offerings in advance for herself,
                 becoming the wealthiest person when the bizarre and horrifying world arrived.
                </p>
              </div>
              <button className="inline-block px-8 py-3 bg-gradient-to-r from-sky-500 to-blue-700 text-white rounded-full hover:from-red-600 hover:to-orange-600 transition-all text-lg font-semibold shadow-lg">
                Get Started Free
              </button>
            </div>
          </div>

          {/* การ์ดตัวอย่างที่ 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden flex">
            {/* รูปภาพ (อยู่ด้านซ้าย) */}
            <div className="w-1/3 relative">
              <img
                src="https://i.pinimg.com/736x/c0/4d/d9/c04dd96f6090328857b71441fb3cdc96.jpg"
                alt="Novel 2"
                className="w-full h-full object-cover"
              />

              {/* ปุ่ม Play ไอคอนที่ขยับลงมาด้านล่าง */}
              <button className="absolute left-1/2 bottom-4 transform -translate-x-1/2 transition-all rounded-full p-3 active:translate-y-1">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/15430/15430907.png" // 🔹 เปลี่ยนเป็นไอคอนที่ต้องการ
                  alt="Play Audio"
                  className="w-12 h-12"
                />
              </button>
            </div>

            {/* เนื้อหา (อยู่ด้านขวา) */}
            <div className="w-2/3 p-4 flex flex-col justify-between">
              <div>
                <span className="text-sm text-gray-500">
                  Category: Past, Present, Future
                </span>
                <h4 className="text-lg font-semibold text-gray-900 mt-2">
                Back to 1970, time-traveling to raise twins.
                </h4>
                <p className="text-sm text-gray-600">
                When the knee surgery was revived in 1977, 
                the young man, who had once promised that in this life he would love and remain faithful to her alone,
                 would be a good husband and a good father to their children,
                 Liu Shishi never once thought about it.
                </p>
              </div>
              <button className="inline-block px-8 py-3 bg-gradient-to-r from-sky-500 to-blue-700 text-white rounded-full hover:from-red-600 hover:to-orange-600 transition-all text-lg font-semibold shadow-lg">
                Get Started Free
              </button>
            </div>
          </div>
        </div>
      </div>

{/*---------------------------------------- */}

<footer className="bg-gray-900 text-white py-10 mt-10">
  <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
    
    {/* 🔹 Section 1: Logo & Description */}
    <div>
      <div className="flex items-center justify-center md:justify-start space-x-2">
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4 4h16v16H4z" />
        </svg>
        <span className="text-xl font-bold">WriteWhisper</span>
      </div>
      <p className="mt-2 text-gray-400">
        Write a novel, check statistics, and respond to reader comments instantly.
      </p>
    </div>

    {/* 🔹 Section 2: How to Use */}
    <div>
      <h3 className="text-lg font-semibold mb-2">How to use</h3>
      <ul className="space-y-1 text-gray-400">
        <li><a href="#" className="hover:text-white">How to write a novel</a></li>
        <li><a href="#" className="hover:text-white">Terms of Use</a></li>
        <li><a href="#" className="hover:text-white">Frequently Asked Questions</a></li>
        <li><a href="#" className="hover:text-white">How to top up Coins</a></li>
        <li><a href="#" className="hover:text-white">How to make payments</a></li>
      </ul>
    </div>

    {/* 🔹 Section 3: Contact Us & More */}
    <div className="grid grid-cols-2 gap-6">
      {/* 🔸 Contact Us */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
        <ul className="space-y-1 text-gray-400">
          <li><a href="#" className="hover:text-white">Line Official</a></li>
          <li><a href="#" className="hover:text-white">Facebook</a></li>
          <li><a href="#" className="hover:text-white">X</a></li>
        </ul>
      </div>
      {/* 🔸 More */}
      <div>
        <h3 className="text-lg font-semibold mb-2">More</h3>
        <ul className="space-y-1 text-gray-400">
          <li><a href="#" className="hover:text-white">News</a></li>
          <li><a href="#" className="hover:text-white">Writer’s Board</a></li>
          <li><a href="#" className="hover:text-white">Read Novels</a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>

    </div>
  );
};

export default HomePage;
