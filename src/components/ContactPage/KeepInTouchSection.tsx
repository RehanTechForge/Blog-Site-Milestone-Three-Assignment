import React from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

const KeepInTouchSection = () => {
  return (
    <section className="grid grid-cols-12 px-4 lg:mt-0">
      <div className="col-span-12 lg:col-span-5 h-[200px]"></div>
      <div className="col-span-12 lg:col-span-7 pl-12 pr-4">
        <h2 className="uppercase font-semibold text-primary text-2xl mb-5 mt-24 sm:mt-5 text-center sm:text-left">
          Keep in touch
        </h2>
        <p>
          We would love to hear from you and answer any questions you may have.
          You can contact us by filling out the form below, sending us an email,
          or calling us on our phone number. We will get back to you as soon as
          possible. You can also follow us on our social media platforms and
          subscribe to our newsletter to stay updated on our latest news and
          offers. Thank you for your interest and support.
        </p>
        <Input className="my-4" type="text" placeholder="Name" />
        <Input className="my-4" type="email" placeholder="Email" />
        <Input className="my-4" type="text" placeholder="Subject" />
        <Textarea className="my-4" placeholder="Enter Your Message" />
        <Button className="my-6">Submit</Button>
      </div>
    </section>
  );
};

export default KeepInTouchSection;
