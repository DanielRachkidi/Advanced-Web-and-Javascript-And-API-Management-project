import axios from 'axios';
import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {



const initialValues = {  username: "", email: "", password: ""}
const [formValues, setFormValues] = useState(initialValues);
const [formErrors, setFormError] = useState({});
// const [isSubmit, setIsSubmit] = useState(false);
const navigate = useNavigate();


const handleSubmit = async (e) => {
e.preventDefault()
setFormError(validate(formValues));
// setIsSubmit(true);

// try {

// await Signup(formValues); 
//   navigate('/login')
// }catch (error) {
// console.log(error)
// }



var config = {
  method: 'post',
  url: 'http://localhost:8989/api/public/signup',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : formValues
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});


// try {
//   Signup(formValues);
//   navigate('/')
// } catch (error) {
//   console.log(error);
// }

navigate("/login", { replace: true });


}

// useEffect(() => {
//   console.log(formErrors);
//   if (Object.keys(formErrors).length === 0 && isSubmit) {
//     console.log(formValues);
//   }
// }, [formErrors]);

const validate = (values) => {
  const errors = {};

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if (!values.username) {
    errors.username = "Username is required!";
  }
  if (!values.email) {
    errors.email = "Email is required!";
  } else if (!regex.test(values.email)) {
    errors.email = "This is not a valid email format!";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "Password must be more than 6 characters";
  } else if (values.password.length > 10) {
    errors.password = "Password cannot exceed more than 10 characters";
  }
  return errors;
};

const handleChange = async (e) =>{
 
  const {name, value} = e.target 
  setFormValues({ ...formValues, [name]: value });
}

  return (
    <>
    <div className='w-full h-screen'>
      <img
        className='hidden sm:block absolute w-full h-full object-cover'
        src='https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
        alt='/'
      />
      <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
      <div className='fixed w-full px-4 py-24 z-50'>
        <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
          <div className='max-w-[320px] mx-auto py-16'>
          {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div >Signed in successfully</div>
      ) : (
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      )} */}


            <h1 className='text-3xl font-bold'>Sign Up</h1>
            <form 
            onSubmit={handleSubmit}
              className='w-full flex flex-col py-4'
            >
              
               <input
               onChange={handleChange}
                className='p-3 my-2 bg-gray-700 rouded'
                type="username"
                name="username"
                placeholder="username"
                value={formValues.username}
              />
             <p>{formErrors.username}</p>
              <input
              onChange={handleChange}
                className='p-3 my-2 bg-gray-700 rouded'
                type="email"
                name="email"
                placeholder="email"
                value={formValues.email}
              />
               <p>{formErrors.email}</p>
              <input
              onChange={handleChange}
                className='p-3 my-2 bg-gray-700 rouded'
                type="password"
                name="password"
                placeholder="password"
                value={formValues.password}
              />
                    <p>{formErrors.password}</p>
              <button    className='bg-red-600 py-3 my-6 rounded font-bold'>
                Sign Up
              </button>
              <div className='flex justify-between items-center text-sm text-gray-600'>
                <p>
                  <input className='mr-2' type='checkbox' />
                  Remember me
                </p>
                <p>Need Help?</p>
              </div>
              <p className='py-8'>
                <span className='text-gray-600'>
                Already subscribed to Netflix?
                </span>{' '}
                <Link to='/login'>Sign In</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </>
);

};

export default Signup