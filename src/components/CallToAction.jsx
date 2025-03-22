import React, { useState } from "react";
import { Button } from "./ui/button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 

const CallToAction = () => {
    const Successnotify = () =>
        toast.success("Message sent successfully!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
        });

    const failNotify = () =>
        toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
        });

    const [isSuccess, setIsSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        const formData = new FormData(event.target);

        formData.append("access_key", "21ce952d-655b-435b-99bc-93ab3ea43224");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: json,
            });

            const res = await response.json();

            if (res.success) {
                console.log("Success", res);
                setIsSuccess(true);
                Successnotify();
                event.target.reset();
            } else {
                failNotify();
            }
        } catch (error) {
            console.error("Error:", error);
            failNotify();
        } finally {
            setLoading(false);
            setTimeout(() => setIsSuccess(false), 3000);
        }
    };

    return (
        <form
            onSubmit={onSubmit}
            className="flex flex-col items-center rounded-lg bg-transparent dark:bg-transparent border p-10 m-20 text-center md:rounded-xl lg:p-16 max-w-3xl mx-auto"
        >
            <h3 className="mb-3 text-2xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
                Contact Us
            </h3>
            <p className="mb-8 text-muted-foreground lg:text-lg">
                Fill in the form below to get in touch with us.
            </p>
            <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="mb-4 w-full rounded-lg border p-3 dark:bg-transparent dark:border-gray-500"
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="mb-4 w-full rounded-lg border p-3 dark:bg-transparent dark:border-gray-500"
                required
            />
            <textarea
                name="message"
                placeholder="Your Message"
                className="mb-8 w-full rounded-lg border p-4 dark:bg-transparent dark:border-gray-500"
                required
            ></textarea>
            <Button type="submit" disabled={loading}>
                {loading ? "Submitting..." : isSuccess ? "Sent ✔️" : "Submit"}
            </Button>
            <ToastContainer />
        </form>
    );
};

export default CallToAction;