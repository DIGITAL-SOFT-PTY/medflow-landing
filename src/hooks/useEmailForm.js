import { useState } from 'react';
import emailjs from '@emailjs/browser';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Generic hook for EmailJS form submission.
 * @param {string} templateId  - env var name (e.g. 'VITE_EMAILJS_TEMPLATE_ID')
 * @param {Function} buildPayload - (fields) => object sent to EmailJS
 * @param {Function} [onSuccess]  - called after successful send
 */
export function useEmailForm(templateId, buildPayload, onSuccess) {
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | null
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (email) => EMAIL_REGEX.test(email);

  const send = async (e, fields) => {
    e.preventDefault();
    setErrorMessage('');

    // Client-side email validation
    const emailField = fields.email ?? fields.from_email ?? fields.demoEmail;
    if (emailField !== undefined && !validateEmail(emailField)) {
      setErrorMessage('Por favor ingresa un email válido.');
      return;
    }

    setIsLoading(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env[templateId],
        buildPayload(fields),
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setSubmitStatus('success');
      if (onSuccess) onSuccess();
    } catch {
      setErrorMessage('Hubo un error al enviar. Intenta de nuevo.');
    } finally {
      setIsLoading(false);
    }
  };

  const reset = () => {
    setSubmitStatus(null);
    setErrorMessage('');
  };

  return { isLoading, submitStatus, errorMessage, send, reset, validateEmail };
}
