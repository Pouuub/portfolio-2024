import React from "react";
import Modal from "./Modal";
import { PrimaryButton } from "./Button";

const ContactModal = () => {
  return (
    <Modal label="En savoir plus..." dialog_title="Contact" btn_class="underline hover:text-green transition-all">
      <span className="flex flex-col items-center space-y-4">
        <span className="text-lg font-light">
          <a className="hover:text-green transition-all" href="mailto:a.tourolle.pro@gmail.com">
            a.tourolle.pro@gmail.com
          </a>
        </span>
        <span className="text-lg font-light">
          <a className="hover:text-green transition-all" href="tel:+33681143654">
            +33681143654
          </a>
        </span>

        <span className="flex space-x-4">
          <PrimaryButton label="CV" target="/file/cv-atourolle.pdf" blank={true} />
          <PrimaryButton
            label="LinkedIn"
            target="https://www.linkedin.com/in/anthony-tourolle-b7136126a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            blank={true}
          ></PrimaryButton>
          <PrimaryButton label="Code Source" target="https://github.com/Pouuub/portfolio-2024" blank={true} />
        </span>
      </span>
    </Modal>
  );
};

export default ContactModal;
