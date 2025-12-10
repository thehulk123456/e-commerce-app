const footerItemTitleClasses = "text-xl mb-6";
const footerItemTextClasses = "mb-4 font-normal capitalize";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-text-2">
      <div className="text-text-1 pt-20 pb-14 flex justify-between max-w-[1200px] mx-auto">
        <div>
          <div className="font-bold text-2xl mb-6">Exlusive</div>
          <div className="text-xl mb-6">Subscribe</div>
          <div className={footerItemTextClasses}>
            Get 10% off your first order
          </div>

          <input
            placeholder="Enter your email"
            className="px-4 py-3 text-base rounded-sm w-full mb-1 border-[1.5px] border-text-1"
          />
        </div>

        <div className="w-[180px]">
          <div className={footerItemTitleClasses}>Support</div>
          <div className={footerItemTextClasses}>
            111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
          </div>
          <div className={footerItemTextClasses}>exclusive@gmail.com</div>
          <div className={footerItemTextClasses}>+88015-88888-9999</div>
        </div>

        <div>
          <div className={footerItemTitleClasses}>Account</div>
          <div className={footerItemTextClasses}>My Account</div>
          <div className={footerItemTextClasses}>Cart</div>
          <div className={footerItemTextClasses}>Wishlist</div>
          <div className={footerItemTextClasses}>Shop</div>
        </div>

        <div>
          <div className={footerItemTitleClasses}>Quick Link</div>
          <div className={footerItemTextClasses}>Privacy policy</div>
          <div className={footerItemTextClasses}>Terms of use</div>
          <div className={footerItemTextClasses}>FAQ</div>
          <div className={footerItemTextClasses}>Contact</div>
        </div>
      </div>
      <div className="text-center text-text-1 border-t border-t-[rgba(255,255,255,0.5)] pt-4 pb-6">
        © Copyright Ivan {currentYear}. All rights reserved
      </div>
    </footer>
  );
}
