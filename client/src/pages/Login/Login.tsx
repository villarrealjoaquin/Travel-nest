import { useTokenRefresh } from "../../Hooks/useTokenRefresh";
import { Button, Input } from "../../components";
import google from '/svgs/google.svg';

function Login() {
  useTokenRefresh();
  return (
    <section className='flex justify-center mt-[160px]'>
      <div className='w-[70%] h-[600px] border-2 border-[#FF385C] rounded-3xl flex items-center justify-center  md:w-[50%] lg:w-[550px] xl:w-[70%]'>
        <form className='xl:ml-[100px]'>
          <div className='flex flex-col items-center'>
            <h4 className='mb-4 text-[3rem] text-[#FF385C] font-bold'>Welcome</h4>
            <Input
              placeholder='email'
              className='text-[#FF385C] border-[#FF385C] w-[80%] mb-10 focus-visible:outline-[#FF385C] sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[340px]'
            />
            <Input
              placeholder='password'
              className='text-[#FF385C] border-[#FF385C] w-[80%] mb-10 focus-visible:outline-[#FF385C] sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[340px]'
            />
            <Button className='flex flex-col items-center text-[#FF385C] border border-[#FF385C] p-2 w-[150px] rounded-3xl hover:bg-[#FF385C] hover:text-white transition duration-300'>
              Login
            </Button>
          </div>
          <div className='flex items-center gap-10 mt-5'>
            <div className='w-[40%] h-[2px] bg-[#202020]'></div>
            <span>o</span>
            <div className='w-[40%] h-[2px] bg-[#202020]'></div>
          </div>
          <Button className='flex border border-[#FF385C] p-3 w-[100%] items-center gap-10 rounded-lg justify-center mt-4hover:bg-[#FF385C] hover:text-white hover:font-medium transition duration-300'>
            <img
              src={google}
              className='w-[20px]'
              alt="google icon"
            />
            Login with google
          </Button>
        </form>
        <div className='bg-[#FF385C] w-[800px] h-[597px] ml-[200px] rounded-tr-2xl rounded-br-2xl rounded-tl-none rounded-bl-none flex flex-col justify-center items-center space-x-0 md:hidden xl:w-[800px] xl:h-[597px] xl:ml-[200px]  xl:flex xl:flex-col xl:justify-center xl:items-center xl:space-x-0'>
          <span className='text-[5rem] text-white font-bold uppercase'>tr</span>
          <span className='text-[5rem] text-white font-bold uppercase'>av</span>
          <span className='text-[5rem] text-white font-bold uppercase'>el</span>
          <span className='text-[2rem] text-white font-bold uppercase lg:text-center md:hidden xl:block'>where your dreams come true</span>
        </div>
      </div>
    </section>
  )
}
export default Login;
