import { useFormik } from "formik";

const initialValues = {
  name: "",
  email: "",
  channel: "",
};

const onSubmit = (value) => {
  console.log(value);
};

const validate = (values) => {
  let errors = {};

  if (!values.name) {
    errors.name = "Requird";
  }

  if (!values.email) {
    errors.email = "Requird";
  } else if (
    !/[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{2,3}/i.test(values.email)
  ) {
    errors.email = "Envalid email format";
  }

  if (!values.channel) {
    errors.channel = "Requird";
  }

  return errors;
};
function YouTubeForm() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <form onSubmit={formik.onSubmit}>
      <lable htmlFor="name">Name</lable>
      <input
        type="text"
        id="name"
        name="name"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
      />
      {formik.touched.name && formik.errors.name ? (
        <div>{formik.errors.name}</div>
      ) : null}

      <lable htmlFor="email">E-mail</lable>
      <input
        type="text"
        id="email"
        name="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}

      <lable htmlFor="channel">channel</lable>
      <input
        type="text"
        id="channel"
        name="channel"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.channel}
      />
      {formik.touched.channel && formik.errors.channel ? (
        <div>{formik.errors.channel}</div>
      ) : null}

      <button type="submit">Submit</button>
    </form>
  );
}

export default YouTubeForm;
