import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { textVariant } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_581xbls",
        "template_4t8p5bo",
        {
          from_name: form.name,
          to_name: "Ana",
          from_email: form.email,
          to_email: "apramong@uwaterloo.ca",
          message: form.message,
        },
        "4xNlzy49vMEG1DkiC"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong");
        }
      );
  };

  return (
    <div
      className="xl:mt-12 xl:flex-row 
    flex-col-reverse flex gap-10 overflow-hidden"
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] p-8
        rounded-2xl"
      >
        <motion.div variants={textVariant()}>
          <h2 className={`${styles.sectionHeadText} text-center`}>Contact</h2>
        </motion.div>
        <div className="w-full md:w-3/4 max-w-[1100px] mx-auto mt-8">
          {/* stack container */}
          <div className="relative">
            {/* back sheet */}
            <div className="absolute inset-0 translate-x-1 translate-y-1 bg-black border-2 border-black z-0" />

            {/* front sheet */}
            <div className="relative z-10 border-2 border-black bg-bg-light overflow-hidden">
              {/* form body */}
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="p-6 flex flex-col gap-6"
              >
                <label className="flex flex-col">
                  <span className="text-black font-semibold mb-2">
                    Your Name
                  </span>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What's your name?"
                    className="bg-white text-black placeholder-gray-500
                       border-2 border-black rounded-none
                       px-4 py-3 outline-none focus:outline-none focus:ring-0"
                  />
                </label>

                <label className="flex flex-col">
                  <span className="text-black font-semibold mb-2">
                    Your Email
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What's your email?"
                    className="bg-white text-black placeholder-gray-500
                       border-2 border-black rounded-none
                       px-4 py-3 outline-none focus:outline-none focus:ring-0"
                  />
                </label>

                <label className="flex flex-col">
                  <span className="text-black font-semibold mb-2">
                    Your Message
                  </span>
                  <textarea
                    rows="7"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="What do you want to say?"
                    className="bg-white text-black placeholder-gray-500
                       border-2 border-black rounded-none
                       px-4 py-3 min-h-32 resize-y
                       outline-none focus:outline-none focus:ring-0"
                  />
                </label>

                <button
                  type="submit"
                  className="self-start bg-gray-200 border-4 border-black
                     px-6 py-3 text-black font-semibold
                     hover:-translate-y-0.5 hover:-translate-x-0.5
                     transition-transform"
                >
                  {loading ? "Sending..." : "Send"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px]
          h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
