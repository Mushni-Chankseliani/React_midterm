import { useContext } from "react";
import { useForm } from "react-hook-form";
import { PostsContext } from "../../../contexts/posts-provider/PostsProvider";

function AddPostForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm();

  const { addPost } = useContext(PostsContext);

  const onSubmit = (formData) => {
    addPost({...formData, id: Math.random().toString()});
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          title
        </label>
        <input
          type="title"
          className="form-control"
          id="title"
          {...register("title", {
            required: true,
          })}
        />
        {(touchedFields.title || errors.title) && (
          <span className="text-danger form-text">
            {!errors.title ??
              (errors.title.type === "required" && "title is required")}
            {touchedFields.title && "title is required"}
          </span>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          body
        </label>
        <input
          type="body"
          className="form-control"
          id="body"
          {...register("body", {
            required: true,
          })}
        />
        {(touchedFields.body || errors.body) && (
          <span className="text-danger form-text">
            {!errors.body ??
              (errors.body.type === "required" && "body is required")}
            {touchedFields.body && "body is required"}
          </span>
        )}
      </div>
      <div className="mr-3">
        <button className="btn btn-primary" type="submit">
          Add new
        </button>
        <button className="btn btn-light" type="reset">
          reset
        </button>
      </div>
    </form>
  );
}

export default AddPostForm;
