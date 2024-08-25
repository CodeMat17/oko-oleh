import React from "react";
import Image from "next/image";

interface ModalProps {
  imageSrc: string | null;
  onClose: () => void;
}

const CondolenceModal: React.FC<ModalProps> = ({ imageSrc, onClose }) => {
  if (!imageSrc) return null;

  return (
    <div
      className='fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50'
      onClick={onClose} // Close modal when overlay is clicked
    >
      <div
        className='relative'
        onClick={(e) => e.stopPropagation()} // Prevent closing when image container is clicked
      >
        <button
          className='absolute top-2 right-2 text-red-500 text-2xl z-10'
          onClick={onClose}>
          &times;
        </button>
        <Image
          src={imageSrc}
          alt='Large View'
          width={800}
          height={600}
          className='rounded-lg w-full max-w-md '
        />
      </div>
    </div>
  );
};

export default CondolenceModal;
