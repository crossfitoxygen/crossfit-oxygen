"use client";

import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  open: boolean;
  onClose: () => void;
};

const branches = [
  {
    name: "فرع العبور",
    phone: "201107802016",
    message:
      "السلام عليكم، أريد الاستفسار عن الاشتراك في فرع العبور.",
  },
  {
    name: "فرع الزقازيق",
    phone: "201111111111",
    message:
      "السلام عليكم، أريد الاستفسار عن الاشتراك في فرع الزقازيق.",
  },
  {
    name: "فرع الرحاب",
    phone: "201106385482",
    message:
      "السلام عليكم، أريد الاستفسار عن الاشتراك في فرع الرحاب.",
  },
];

export default function BranchModal({
  open,
  onClose,
}: Props) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{
              scale: 0.8,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            exit={{
              scale: 0.8,
              opacity: 0,
            }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-md rounded-3xl border border-yellow-500/20 bg-zinc-900 p-8 shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute left-5 top-5 text-gray-400 transition hover:text-yellow-400"
            >
              <X size={24} />
            </button>

            <h2 className="mb-2 text-center text-3xl font-black text-yellow-400">
              اختر الفرع
            </h2>

            <p className="mb-8 text-center text-gray-400">
              سيتم تحويلك إلى واتساب الفرع المختار
            </p>

            <div className="space-y-4">
              {branches.map((branch) => (
                <a
                  key={branch.phone}
                  href={`https://wa.me/${branch.phone}?text=${encodeURIComponent(
                    branch.message
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-2xl border border-yellow-500/20 bg-black px-6 py-5 text-center font-bold text-white transition-all duration-300 hover:border-yellow-400 hover:bg-yellow-400 hover:text-black"
                >
                  {branch.name}
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}