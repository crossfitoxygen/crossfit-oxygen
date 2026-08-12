"use client";

import { X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
};

const branches = [
  {
    name: "فرع العبور",
    phones: [
      {
        number: "201107802016",
        label: "واتساب العبور",
      },
    ],
    message:
      "السلام عليكم، أريد الاستفسار عن الاشتراك في فرع العبور.",
  },
  {
    name: "فرع الزقازيق",
    phones: [
      {
        number: "201155404011",
        label: "الرقم الأول",
      },
      {
        number: "201155404099",
        label: "الرقم الثاني",
      },
    ],
    message:
      "السلام عليكم، أريد الاستفسار عن الاشتراك في فرع الزقازيق.",
  },
  {
    name: "فرع الرحاب",
    phones: [
      {
        number: "201106385482",
        label: "واتساب الرحاب",
      },
    ],
    message:
      "السلام عليكم، أريد الاستفسار عن الاشتراك في فرع الرحاب.",
  },
];

export default function BranchModal({
  open,
  onClose,
}: Props) {
  const [expandedBranch, setExpandedBranch] = useState<string | null>(null);

  const handleClose = () => {
    setExpandedBranch(null);
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 px-6 backdrop-blur-sm"
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
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute left-5 top-5 text-gray-400 transition hover:text-yellow-400"
              aria-label="إغلاق"
            >
              <X size={24} />
            </button>

            {/* Title */}
            <h2 className="mb-2 text-center text-3xl font-black text-yellow-400">
              اختر الفرع
            </h2>

            <p className="mb-8 text-center text-gray-400">
              اختر الفرع للتواصل عبر واتساب
            </p>

            {/* Branches */}
            <div className="space-y-4">
              {branches.map((branch) => {
                const isExpanded = expandedBranch === branch.name;

                return (
                  <div key={branch.name}>
                    {/* Branch Button */}
                    <button
                      type="button"
                      onClick={() =>
                        setExpandedBranch(
                          isExpanded ? null : branch.name
                        )
                      }
                      className={`flex w-full items-center justify-between rounded-2xl border px-6 py-5 text-right font-bold transition-all duration-300 ${
                        isExpanded
                          ? "border-yellow-400 bg-yellow-400 text-black"
                          : "border-yellow-500/20 bg-black text-white hover:border-yellow-400 hover:bg-yellow-400 hover:text-black"
                      }`}
                    >
                      <span>{branch.name}</span>

                      <ChevronDown
                        size={22}
                        className={`transition-transform duration-300 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* WhatsApp Numbers */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{
                            height: 0,
                            opacity: 0,
                          }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                          }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="space-y-2 px-2 pt-3">
                            {branch.phones.map((phone) => (
                              <a
                                key={phone.number}
                                href={`https://wa.me/${
                                  phone.number
                                }?text=${encodeURIComponent(
                                  branch.message
                                )}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between rounded-xl border border-green-500/20 bg-green-600/10 px-5 py-4 text-sm font-bold text-white transition hover:border-green-400 hover:bg-green-500 hover:text-black"
                              >
                                <span>{phone.label}</span>

                                <span dir="ltr">
                                  +{phone.number}
                                </span>
                              </a>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}