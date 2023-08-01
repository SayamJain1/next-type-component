import Button from "@/theme/Button";
import NextIcon from "@/icons/NextIcon";
import BackIcon from "@/icons/BackIcon";
import Input from "@/theme/input/Index";
import { useState } from "react";
import Modal from "@/theme/modal/Index";
import Search from "@/icons/Search";

export default function Home() {
  const handleClick = () => {
    console.log("clicked!");
  };

  const handleChange = () => {
    console.log("change");
  };

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div className="">
      {/* <Button
        text="Next"
        className="py-2"
        disable={true}
        rightIcon={<NextIcon />}
        leftIcon={<BackIcon />}
        type="button"
        onClick={handleClick}
        variant="primary"
        size="lg"
      /> */}
      <Button
        text="Primary"
        className="py-2"
        disable={false}
        leftIcon={<BackIcon />}
        type="button"
        onClick={handleClick}
        variant="primary-btn"
        gap="gap-3"
        size="sm"
      />
      <Button
        text="secondary"
        className="py-2"
        rightIcon={<NextIcon />}
        type="submit"
        onClick={handleClick}
        variant="secondary-btn"
        size="md"
        gap="gap-3"
      />
      <Button
        text="text-blue"
        className="py-2"
        type="button"
        onClick={handleClick}
        variant="text-blue-btn"
        size="lg"
        gap="gap-3"
      />
      <Button
        text="disabled"
        className="py-2"
        type="button"
        disable={true}
        onClick={handleClick}
        variant="primary-btn"
        size="sm"
        gap="gap-3"
      />

      {/* input  */}
      <Input
        value=""
        onChange={handleChange}
        label="Name"
        placeholder="Write here..."
        disabled={false}
        className="p-0"
        classNameContianer="mt-5"
      />
      {/* Modal  */}
      <Button
        text="Open"
        onClick={openModal}
        className="py-2"
        variant="primary-btn"
        size="sm"
      />
      <Modal
        title="Example Modal"
        isOpen={modalOpen}
        onClose={closeModal}
        icon={<Search />}
      >
        <p>This is the content of the modal.</p>
      </Modal>
    </div>
  );
}
