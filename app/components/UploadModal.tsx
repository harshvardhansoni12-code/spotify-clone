"use client";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import uniqid from "uniqid";
import Input from "./Input";
import useUploadModal from "@/hooks/useUploadModal";
import Modal from "./Modal";
import Button from "./Button";
import toast from "react-hot-toast";
import { useUser } from "@/hooks/useUser";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
const UploadModal = () => {
  const UploadModal = useUploadModal();
  const [isLoading, setIsLoading] = useState(false);
  const user = useUser();
  const router = useRouter();
  const supabaseClient = useSupabaseClient();
  const { register, handleSubmit, reset } = useForm<FieldValues>({
    defaultValues: {
      author: "",
      title: "",
      song: null,
      image: null,
    },
  });

  const onChange = (open: boolean) => {
    if (!open) {
      //Reset The Form
      UploadModal.onClose();
    }
  };

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    try {
      setIsLoading(true);
      const imageFile = values.image?.[0];
      const songFile = values.song?.[0];

      if (!imageFile || !songFile || !user) {
        toast.error("missing file");
        return;
      }
      const uniqueID = uniqid();
      // unpload song
      const { data: songData, error: songError } = await supabaseClient.storage
        .from("songs")
        .upload(`song-${values.title}-${uniqueID}`, songFile, {
          cacheControl: "3600",
          upsert: false,
        });

      if (songError) {
        setIsLoading(false);
        return toast.error("song file failed to upload");
      }
      //upload images
      const { data: imageData, error: imageError } =
        await supabaseClient.storage
          .from("images")
          .upload(`image-${values.title}-${uniqueID}`, imageFile, {
            cacheControl: "3600",
            upsert: false,
          });

      if (imageError) {
        setIsLoading(false);
        return toast.error("failed image upload");
      }

      const { error: supabaseError } = await supabaseClient
        .from("songs")
        .insert({
          user_id: user.id,
          title: values.title,
          author: values.title,
          image_path: imageData.path,
          song_path: songData.path,
        });
      if (supabaseError) {
        setIsLoading(false);
        return toast.error(supabaseError.message);
      }

      router.refresh();
      setIsLoading(false);
      return toast.success("song created!");
      reset();
    } catch (error) {
      toast.error("something went wrong");
    } finally {
      setIsLoading(false);
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
