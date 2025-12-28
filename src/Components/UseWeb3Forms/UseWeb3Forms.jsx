import { useState } from 'react';
import axios from 'axios';

export const useWeb3Forms = (accessKey) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const submitForm = async (formData) => {
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const dataToSend = {
                access_key: accessKey,
                ...formData,
                from_name: formData.name,
                reply_to: formData.email,
            };

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(dataToSend),
            });

            const result = await response.json();

            if (result.success) {
                setSubmitStatus({
                    type: 'success',
                    message: 'Thank you! We will get back to you within 24 hours.'
                });
                return { success: true };
            } else {
                throw new Error('Submission failed');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setSubmitStatus({
                type: 'error',
                message: 'Something went wrong. Please try again or contact us directly.'
            });
            return { success: false, error };
        } finally {
            setIsSubmitting(false);
        }
    };

    return { submitForm, isSubmitting, submitStatus, setSubmitStatus };
};