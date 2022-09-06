import {useFormik} from 'formik'

const initialValues =  {
    name: "",
    email: "",
    channel: "",
  }

const onSubmit = value => {
    console.log(value)
}

const validate = values => {
    let errors = {}

    if(!values.name){
        errors.name = 'Requird'
    }

    if(!values.email){
        errors.email = 'Requird'
    }else if (! /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{2,3}/){
        errors.email = "Envalid email format"
    }

    if(!values.channel){
        errors.channel = 'Requird'
    }
}

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

      <button type='submit'>Submit</button>
    </form>
  );
}

export default YouTubeForm;

//npm i formik
//import the hook useFormik
//pass the insitalvalue for the form
