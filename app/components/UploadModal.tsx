"use client";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import Input from "./Input";
import useUploadModal from "@/hooks/useUploadModal";
import Modal from "./Modal";
import Button from "./Button";
const UploadModal = () => {
  const UploadModal = useUploadModal();
  const [isLoading, setIsLoading] = useState();
  const { register, handleSubmit, reset } = useForm<FieldValues>({
    defaultValues: {
      author: "",
      title: "",
      song: null,
      image: null,
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    //Upload to supabase
  };

  const onChange = (open: boolean) => {
    if (!open) {
      //Reset The Form
      UploadModal.onClose();
    }
  };

  return (
    <Modal
      title="Upload modal title"
      description="upload modal"
      isOpen={UploadModal.isOpen}
      onChange={onChange}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-3">
        <Input
          id="title"
          className="hover:cursor-pointer"
          disabled={isLoading}
          {...register("title", { required: true })}
          placeholder="song title"
        />
        <Input
          id="author"
          disabled={isLoading}
          {...register("author", { required: true })}
          placeholder="song author"
        />
        <div>
          <div className="pb-1"> Select a song file</div>
        </div>
        <Input
          id="song"
          className="hover:cursor-pointer"
          type="file"
          disabled={isLoading}
          accept=".mp3"
          {...register("author", { required: true })}
        />
        <div>
          <div className="pb-1"> Select an Image</div>
        </div>
        <Input
          className="hover:cursor-pointer"
          id="image"
          type="file"
          disabled={isLoading}
          accept="image/*"
          {...register("image", { required: true })}
        />
        <Button
          disabled={isLoading}
          type="submit"
          className="bg-green-500 rounded-2xl text-md text-black p-2.5"
        >
          Create
        </Button>
      </form>
    </Modal>
  );
};

export default UploadModal;
