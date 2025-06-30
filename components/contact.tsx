// "use client";

// import React from "react";
// import SectionHeading from "./section-heading";
// import { motion } from "framer-motion";
// import { useSectionInView } from "@/lib/hooks";
// import { sendEmail } from "@/actions/sendEmail";
// import SubmitBtn from "./submit-btn";
// import toast from "react-hot-toast";

// export default function Contact() {
//   const { ref } = useSectionInView("Contact");

//   return (
//     <motion.section
//       id="contact"
//       ref={ref}
//       className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
//       initial={{
//         opacity: 0,
//       }}
//       whileInView={{
//         opacity: 1,
//       }}
//       transition={{
//         duration: 1,
//       }}
//       viewport={{
//         once: true,
//       }}
//     >
//       <SectionHeading>Contact me</SectionHeading>

//       <p className="text-gray-700 -mt-6 dark:text-white/80">
//         Please contact me directly at{" "}
//         <a className="underline" href="mailto:example@gmail.com">
//           benrogers1299@outlook.com
//         </a>{" "}
//         or through this form.
//       </p>

//       <form
//         className="mt-10 flex flex-col dark:text-black"
//         action={async (formData) => {
//           const { data, error } = await sendEmail(formData);

//           if (error) {
//             toast.error(error);
//             return;
//           }

//           toast.success("Email sent successfully!");
//         }}
//       >
//         <input
//           className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
//           name="senderEmail"
//           type="email"
//           required
//           maxLength={500}
//           placeholder="Your email"
//         />
//         <textarea
//           className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
//           name="message"
//           placeholder="Your message"
//           required
//           maxLength={5000}
//         />
//         <SubmitBtn />
//       </form>
//     </motion.section>
//   );
// }




"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import SubmitBtn from "./submit-btn";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        You can reach me directly at{" "}
        <a className="underline" href="mailto:bilalkhalid.dev@outlook.com">
          bilalkhalid.dev@outlook.com
        </a>{" "}
        or use the form below (currently inactive for maintenance).
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Contact form is currently inactive.");
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          maxLength={500}
          placeholder="Your email"
          disabled
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          maxLength={5000}
          disabled
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
