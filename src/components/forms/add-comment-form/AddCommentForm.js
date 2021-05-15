import { useContext } from "react";
import { useForm } from "react-hook-form";
import { CommentsContext } from "../../../contexts/comments-provider/CommentsProvider";

function AddCommentForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm();

  const { addComment } = useContext(CommentsContext);

  const onSubmit = (formData) => {
    addComment({...formData, id: Math.random().toString()});
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input
          type="name"
          className="form-control"
          id="name"
          {...register("name", {
            required: true,
          })}
        />
        {(touchedFields.name || errors.name) && (
          <span className="text-danger form-text">
            {!errors.name ??
              (errors.name.type === "required" && "name is required")}
            {touchedFields.name && "name is required"}
          </span>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          {...register("email", {
            required: true,
          })}
        />
        {(touchedFields.email || errors.email) && (
          <span className="text-danger form-text">
            {!errors.email ??
              (errors.email.type === "required" && "Email is required")}
            {touchedFields.email && "Email is required"}
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

export default AddCommentForm;
