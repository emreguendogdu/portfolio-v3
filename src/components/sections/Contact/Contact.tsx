"use client"

import { GithubLogo } from "@/components/icons/Github"
import { LinkedinLogo } from "@/components/icons/Linkedin"
import "./Contact.scss"
import { useRef } from "react"
import emailjs from "@emailjs/browser"
import toast, { Toaster } from "react-hot-toast"
import { Input } from "@/components/Input/Form"
import Form from "@/components/Input/Form"
import Image from "@/components/Image/Image"
import { m } from "framer-motion"
import { manrope } from "@/utils/fonts"

const sendSuccessMessage = () => {
  return toast.success(
    "You have sent your message successfully! I'll reply back as soon as possible.",
    {
      duration: 3000,
      style: {
        border: "1px solid green",
        padding: "16px",
        fontSize: "1.5rem",
      },
      iconTheme: {
        primary: "green",
        secondary: "#FFFAEE",
      },
    }
  )
}

const sendErrorMessage = () => {
  return toast.error("Failed to send your message. Please try again later.", {
    duration: 3000,
    style: {
      padding: "16px",
      fontSize: "1.5rem",
    },
    iconTheme: {
      primary: "red",
      secondary: "#FFFAEE",
    },
  })
}

const contactVariants = {
  initial: { y: 100, opacity: 0 },
  whileInView: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeInOut", staggerChildren: 0.3236 },
  },
}

const ContactForm = () => {
  const form = useRef()
  const sendEmail = (e: any) => {
    e.preventDefault()

    const currentForm = form?.current as HTMLFormElement | undefined

    if (currentForm) {
      emailjs
        .sendForm("service_ezyym3u", "template_nveerrx", currentForm, {
          publicKey: "YwULCmPz0-uMpW_yr",
        })
        .then(
          () => {
            e.target.reset()
            sendSuccessMessage()
          },
          () => {
            sendErrorMessage()
          }
        )
    }
  }

  return (
    <>
      <Form formRef={form} onSubmit={sendEmail} buttonValue="Submit">
        <Input name="user_name" label="Full name" />
        <Input name="user_email" label="Email" type="email" />
        <Input
          element="textarea"
          name="message"
          label="Hi Osman, I have an idea..."
        />
      </Form>
    </>
  )
}

export default function Contact() {
  return (
    <m.section
      id="contact"
      className={manrope.variable}
      variants={contactVariants}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true, amount: 0.5 }}
    >
      <div id="contact__info">
        <m.h1 variants={contactVariants}>Let&apos;s connect!</m.h1>
        <m.div id="links" variants={contactVariants}>
          <a
            href="https://github.com/osmangund/"
            target="_blank"
            rel="noreferrer"
            aria-label="Go to GitHub"
          >
            <m.div variants={contactVariants} aria-hidden>
              <GithubLogo />
            </m.div>
          </a>
          <a
            href="https://linkedin.com/in/osmangund/"
            target="_blank"
            rel="noreferrer"
            aria-label="Go to Linkedin"
          >
            <m.div variants={contactVariants} aria-hidden>
              <LinkedinLogo />
            </m.div>
          </a>
        </m.div>
        <m.div variants={contactVariants}>
          <ContactForm />
        </m.div>
        <m.p id="brand" variants={contactVariants}>
          <span className="highlight">osmangund</span>® 2024. All rights
          reserved.
        </m.p>
      </div>
      <div id="contact__image">
        <Image
          alt="Chair, laptop, table and images on the wall. Two people work meeting atmosphere."
          src="/images/contact.jpg"
        />
      </div>
      <Toaster position="top-right" />
    </m.section>
  )
}
