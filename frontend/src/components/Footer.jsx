export default function Footer() {
  return (
    <footer id="footer" className="bg-[#F375C2]/10 px-6 md:px-20 py-16 text-gray-600">
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

        {/* LEFT */}
        <div>
          <h2 className="text-2xl font-bold text-[#4D2FB2] mb-4">
            Khadyo
          </h2>

          <p className="text-sm mb-8">
            Continue Khadyo 2026 all rights reserved
          </p>

          <h3 className="text-xl font-semibold text-[#4D2FB2] mb-4">
            Follow Us On
          </h3>

          <div className="flex gap-4 text-xl">
            <span>📌</span>
            <span>📷</span>
            <span>🐦</span>
            <span>📘</span>
          </div>
        </div>

        {/* MENU */}
        <div>
          <h3 className="text-xl font-semibold text-[#4D2FB2] mb-4">
            Menu
          </h3>

          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>Offers</li>
            <li>Service</li>
            <li>About Us</li>
          </ul>
        </div>

        {/* INFORMATION */}
        <div>
          <h3 className="text-xl font-semibold text-[#4D2FB2] mb-4">
            Information
          </h3>

          <ul className="space-y-2 text-sm">
            <li>Menu</li>
            <li>Quality</li>
            <li>Make a Choice</li>
            <li>Fast Delivery</li>
            <li>Subscribe</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-xl font-semibold text-[#4D2FB2] mb-4">
            Contact
          </h3>

          <ul className="space-y-2 text-sm">
            <li>+91 9876543210</li>
            <li>Explore</li>
            <li>info@khadyo.com</li>
            <li>India</li>
          </ul>
        </div>

      </div>

    </footer>
  );
}