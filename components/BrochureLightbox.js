"use client";

import { useState } from 'react';

// A small SVG component for the 'X' close icon
const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default function BrochureLightbox({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // 'idle', 'loading', 'success', 'error'

  // Handles changes to any form input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handles the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' }); // Clear form on success
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  // If the lightbox isn't triggered, render nothing.
  if (!isOpen) return null;

  // Stops clicks inside the modal from closing it
  const handlePanelClick = (e) => e.stopPropagation();

  return (
    // The semi-transparent overlay
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
    >
      {/* The main modal panel */}
      <div
        onClick={handlePanelClick}
        className="relative w-full max-w-md bg-[#5C0527] p-8 md:p-10 rounded-2xl shadow-lg"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/70 transition-colors hover:text-white"
        >
          <CloseIcon />
        </button>

        <h5 className="mb-8 text-center md:text-xl font-montserrat text-white">
          Download Brochure
        </h5>

        {/* Conditionally render success message or the form */}
        {status === 'success' ? (
          <div className="text-center text-white">
            <h3 className="text-xl font-semibold">Thank You!</h3>
            <p className="mt-2">Your request has been submitted successfully.</p>
            <button
              onClick={onClose}
              className="mx-auto mt-6 block rounded-full bg-white py-2 px-8 font-bold text-[#5C0527] transition-colors hover:bg-gray-200"
            >
              CLOSE
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Name*"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-lg border border-white/30 bg-transparent p-3 text-white placeholder:text-white/60 focus:border-white focus:ring-0"
            />
            <input
              type="email"
              name="email"
              placeholder="Email*"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-lg border border-white/30 bg-transparent p-3 text-white placeholder:text-white/60 focus:border-white focus:ring-0"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone*"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full rounded-lg border border-white/30 bg-transparent p-3 text-white placeholder:text-white/60 focus:border-white focus:ring-0"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              className="w-full rounded-lg border border-white/30 bg-transparent p-3 text-white placeholder:text-white/60 focus:border-white focus:ring-0"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="mx-auto mt-6 block rounded-full bg-white py-3 px-10 font-bold tracking-wider text-[#5C0527] transition-colors hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {status === 'loading' ? 'SENDING...' : 'SUBMIT'}
            </button>
            {status === 'error' && <p className="text-center text-red-400">Something went wrong. Please try again.</p>}
          </form>
        )}
      </div>
    </div>
  );
}