import Layout from "../components/Layout";
import lyonuniversity from "../public/img/lyonuniversity.jpg";
import Image from "next/image";
import { useRef } from "react";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import { init } from "@emailjs/browser";
init("user_fiq8u5W728Z06uP64FZbk");

export default function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yvs60d7",
        "template_j169p89",
        e.target,
        "user_fiq8u5W728Z06uP64FZbk"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <Layout>
      <form ref={form} onSubmit={sendEmail} className="flex w-full space-x-3">
        <div className="items-center w-full max-w-2xl px-5 py-10 m-auto mt-6 bg-white border-solid border-2 rounded-lg shadow dark:bg-gray-800 mb-20">
          <Image
            className="bg-cover rounded-md"
            src={lyonuniversity}
            layout="responsive"
            alt="image university"
          />
          <div className="mb-6 mt-6 text-3xl font-light text-center text-gray-800 dark:text-white">
            Contactez moi !!
          </div>
          <div className="grid max-w-xl grid-cols-2 gap-4 m-auto">
            <div className="col-span-2 lg:col-span-1">
              <div className=" relative ">
                <input
                  type="text"
                  name="lastname"
                  id="name"
                  className="rounded-lg border-transparent flex-1 appearance-none border border-gray-400 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
                  placeholder="Nom"
                />
              </div>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <div className=" relative ">
                <input
                  type="text"
                  name="firstname"
                  id="name"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-400 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
                  placeholder="Prénom"
                />
              </div>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <div className=" relative ">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-400 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <div className=" relative ">
                <input
                  type="text"
                  name="object"
                  id="name"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-400 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
                  placeholder="Sujet"
                />
              </div>
            </div>

            <div className="col-span-2">
              <label className="text-gray-700">
                <textarea
                  className="flex-1 appearance-none border border-gray-400 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
                  id="comment"
                  placeholder="Votre message"
                  name="comment"
                  rows="5"
                  cols="40"
                ></textarea>
              </label>
            </div>
            <div className="col-span-2 text-right">
              <button
                type="submit"
                className="py-2 px-4  bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                
              >
                Envoyez
              </button>
            </div>
          </div>
        </div>
      </form>
    </Layout>
  );
}
