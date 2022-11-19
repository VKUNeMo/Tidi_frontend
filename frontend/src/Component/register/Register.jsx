import {useState} from 'react'
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {registerUser} from "../../Redux/APIRequest/apiAuthRequest";
import "./register.css";

function Register() {
    const [lastname, setLastname] = useState('');
    const [firstname, setFirstname] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePass, setRePass] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();


    function handleSubmit(e) {
        e.preventDefault();
        const newUser = {
            "firstName": firstname,
            "lastName": lastname,
            "username": userName,
            "email": email,
            "gender": 1,
            "password": password
        };
        registerUser(newUser, dispatch, navigate);
    }

    return (
        <>
            <div className='h-auto bg-white bg-opacity-30 shadow-2xl rounded-lg flex'>

                <div className='h-full w-2/5 flex flex-col justify-around items-center min-w-max' id='register-form'>
                    <div className='py-4 text-center w-full h-1/5'>
                        <p className=' text-4xl font-bold tracking-wider mb-1 w-full'>Sign Up For Free</p>
                        <p className='font-normal text-gray-800'> Wish you have a nice time</p>
                    </div>
                    <form className='flex flex-col w-4/5' id='form-register' onSubmit={handleSubmit}>
                        <div className='my-0.5 flex'>
                            <div className='mr-2'>
                                <label className='text-lg font-semibold '>First Name</label> <br/>
                                <input type="text" value={firstname} onChange={e => setFirstname(e.target.value)}
                                       className=' w-full py-2 border pr-3 pl-3 my-1 rounded-md focus:outline-0'
                                       placeholder='First name here...'/>
                                <p className='er italic text-sm'></p>
                            </div>
                            <div>
                                <label className='text-lg font-semibold '>Last Name</label> <br/>
                                <input type="text" value={lastname} onChange={e => setLastname(e.target.value)}
                                       className=' w-full py-2 border pr-3 pl-3 my-1 rounded-md focus:outline-0'
                                       placeholder='Last name here...'/>
                                <p className='er italic text-sm'></p>
                            </div>
                        </div>
                        <div className='my-0.5'>
                            <label className='text-lg font-semibold '>Username</label> <br/>
                            <input type="text" value={userName} onChange={e => setUserName(e.target.value)}
                                   className=' w-full py-2 border pr-3 pl-3 my-1 rounded-md focus:outline-0'
                                   placeholder='Username here...'/>
                            <p className='er italic text-sm'></p>
                        </div>
                        <div className='my-0.5'>
                            <label className='text-lg font-semibold '>Email</label> <br/>
                            <input type="text" value={email} onChange={e => setEmail(e.target.value)}
                                   className=' w-full py-2 border pr-16 pl-3 my-1 rounded-md focus:outline-0'
                                   placeholder='Email here...'/>
                            <p className='er'></p>
                        </div>
                        <div className='my-0.5'>
                            <label className='text-lg font-semibold '>Password</label> <br/>
                            <input value={password} type="password" onChange={e => setPassword(e.target.value)}
                                   className='w-full py-2 border pr-16 pl-3 my-1 rounded-md focus:outline-0'
                                   placeholder='Password here...'/>
                            <p className='er'></p>
                        </div>
                        <div className='my-0.5'>
                            <label className='text-lg font-semibold '>Re-Password</label> <br/>
                            <input value={rePass} type="password" onChange={e => setRePass(e.target.value)}
                                   className='w-full py-2 border pr-16 pl-3 my-1 rounded-md focus:outline-0'
                                   placeholder='Password here...'/>
                            <p className='er'></p>
                        </div>
                        <button
                            className=' mt-2 w-full bg-emerald-900 bg-opacity-85 text-yellow-50  rounded-md py-3 shadow-lg hover:shadow '>
                            Register Now
                        </button>
                    </form>
                    <div className='my-3 h-auto w-full text-center'>
                        <p className='inline-block mr-1'>Already have an account? </p>
                        <Link to='/' className='italic underline '>Sign In</Link>
                    </div>
                </div>
                {/*<div className='h-full right-0 w-3/5 min-w-max'>*/}
                {/*    <img className='rounded-l-lg h-full w-full object-cover min-h-0' alt='imageLogin'*/}
                {/*         src="https://cdn.dribbble.com/users/6228692/screenshots/18531198/media/216f9f699749626e87eed99cdf3bdb59.png?compress=1&resize=768x576&vertical=top">*/}
                {/*    </img>*/}
                {/*</div>*/}
            </div>
        </>
    )
}

export default Register;
