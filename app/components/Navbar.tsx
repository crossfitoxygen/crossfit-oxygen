import { Dumbbell, Menu, MessageCircle } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md border-b border-yellow-500/20 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <Dumbbell className="w-8 h-8 text-yellow-400" />
          <h2 className="text-2xl font-bold text-yellow-400">OXYGEN</h2>
        </div>

        <nav className="hidden md:flex gap-8">
          <a href="#">الرئيسية</a>
          <a href="#services">الخدمات</a>
          <a href="#hours">المواعيد</a>
          <a href="#contact">تواصل</a>
        </nav>

        <a
          href="https://wa.me/2010009001170"
          className="hidden md:flex items-center gap-2 bg-green-500 px-5 py-3 rounded-full"
        >
          <MessageCircle size={18} />
          واتساب
        </a>

        <button className="md:hidden">
          <Menu />
        </button>
      </div>
    </header>
  );
}