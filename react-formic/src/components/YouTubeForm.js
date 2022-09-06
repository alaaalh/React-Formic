import { useFormik } from "formik";

function YouTubeForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      channel: "",
    },
    onSubmit: value => {
        console.log(value)
    }
  });

  return (
    <form onSubmit={formik.onSubmit}>
      <lable htmlFor="name">Name</lable>
      <input
        type="text"
        id="name"
        name="name"
        onChange={formik.handleChange}
        value={formik.values.name}
      />

      <lable htmlFor="email">E-mail</lable>
      <input
        type="text"
        id="email"
        name="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />

      <lable htmlFor="channel">channel</lable>
      <input
        type="text"
        id="channel"
        name="channel"
        onChange={formik.handleChange}
        value={formik.values.channel}
      />

      <button>Submit</button>
    </form>
  );
}

export default YouTubeForm;

//npm i formik
//import the hook useFormik
//pass the insitalvalue for the form
