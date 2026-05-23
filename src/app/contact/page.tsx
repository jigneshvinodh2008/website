"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-4xl font-bold tracking-widest text-white uppercase text-center">
        Contact
      </h1>

      <div className="bg-neutral-900/50 p-6 sm:p-8 border border-neutral-800">
        {isSubmitted ? (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-white mb-2">Message Sent!</h2>
            <p className="text-neutral-400">Thank you for reaching out. I&apos;ll get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">
                Name
              </label>
              <input
                {...register("name")}
                id="name"
                className="w-full bg-black border border-neutral-700 p-3 text-white focus:border-white focus:outline-none focus:ring-1 focus:ring-white transition-colors"
                placeholder="Your name"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
                Email
              </label>
              <input
                {...register("email")}
                id="email"
                type="email"
                className="w-full bg-black border border-neutral-700 p-3 text-white focus:border-white focus:outline-none focus:ring-1 focus:ring-white transition-colors"
                placeholder="your@email.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-2">
                Message
              </label>
              <textarea
                {...register("message")}
                id="message"
                rows={5}
                className="w-full bg-black border border-neutral-700 p-3 text-white focus:border-white focus:outline-none focus:ring-1 focus:ring-white transition-colors resize-none"
                placeholder="How can I help you?"
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-white text-black py-4 font-bold tracking-widest uppercase hover:bg-neutral-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
