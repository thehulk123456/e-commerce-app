export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-text-2">
      <div className="text-text-1 pt-20 pb-14">Content</div>
      <div className="text-center text-text-1 border-t border-t-[rgba(255,255,255,0.5)] pt-4 pb-6">
        © Copyright Ivan {currentYear}. All rights reserved
      </div>
    </footer>
  );
}
