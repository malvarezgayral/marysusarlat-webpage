'use client'

import { useState } from 'react';
import { submitContactForm } from '@/lib/actions';
import { Button } from '@/ui/Button';

export function ContactForm() {
  const [pending, setPending] = useState(false);
  const [showModal, setShowModal] = useState(false);

  async function handleSubmit(formData: FormData) {
    setPending(true);
    try {
      await submitContactForm(formData);
      setShowModal(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setPending(false);
    }
  }

  return (
    <>
      <form action={handleSubmit} className="flex flex-col gap-6 w-full max-w-lg">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="name" className="text-sm uppercase tracking-wider text-stone-500">Nombre</label>
            <input 
              required
              name="name" 
              id="name"
              className="bg-transparent border-b border-stone-400 py-2 focus:outline-none focus:border-accent transition-colors"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="surname" className="text-sm uppercase tracking-wider text-stone-500">Apellido</label>
            <input 
              required
              name="surname" 
              id="surname"
              className="bg-transparent border-b border-stone-400 py-2 focus:outline-none focus:border-accent transition-colors"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm uppercase tracking-wider text-stone-500">Email</label>
          <input 
            required
            type="email"
            name="email" 
            id="email"
            className="bg-transparent border-b border-stone-400 py-2 focus:outline-none focus:border-accent transition-colors"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-sm uppercase tracking-wider text-stone-500">Mensaje</label>
          <textarea 
            required
            name="message" 
            id="message"
            rows={4}
            className="bg-transparent border-b border-stone-400 py-2 focus:outline-none focus:border-accent transition-colors resize-none"
          />
        </div>

        <Button 
          type="submit" 
          disabled={pending}
          className="self-start mt-4"
        >
          {pending ? 'Enviando...' : 'Enviar Mensaje'}
        </Button>
      </form>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-background p-8 max-w-md w-full shadow-xl flex flex-col gap-6 items-center text-center">
            <h3 className="text-3xl font-display text-accent">¡Gracias!</h3>
            <p className="text-stone-600">
              Hemos recibido tu mensaje correctamente. Nos pondremos en contacto contigo pronto.
            </p>
            <Button onClick={() => setShowModal(false)} variant="outline">
              Cerrar
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
