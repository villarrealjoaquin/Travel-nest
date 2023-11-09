
import { Button } from '../../components';
import { Input } from '../../components/ui/Input';
import google from '/svgs/google.svg'

function Register() {
  return (
    <section className='flex justify-center mt-[160px]'>
      <div className='w-[70%] h-[600px] border-2 border-[#FF385C] rounded-3xl flex items-start'>
        <form className='ml-[100px] mt-[70px]'>
          <div className=' flex flex-col items-center'>
            <h4 className='mb-4 text-[3rem] text-[#FF385C] font-bold '>Welcome</h4>
            <Input placeholder='name & last name' className='text-[#FF385C] border-[#FF385C] w-[350px] mb-10 focus-visible:outline-[#FF385C]' />
            <Input placeholder='password' className='text-[#FF385C] border-[#FF385C] w-[350px] mb-10  focus-visible:outline-[#FF385C]' />
            <Input placeholder='email' className='text-[#FF385C] border-[#FF385C] w-[350px] mb-10 focus-visible:outline-[#FF385C]' />
            <Button className='flex flex-col items-center text-[#FF385C] border border-[#FF385C] p-2 w-[150px] rounded-3xl
          hover:bg-[#FF385C] hover:text-white transition duration-300
          ' >
              Register
            </Button>
          </div>
          <div className='flex items-center gap-10 mt-5'>
            <div className='w-[40%] h-[2px] bg-[#202020]'></div>
            <span>o</span>
            <div className='w-[40%] h-[2px] bg-[#202020]'></div>
          </div>
          <Button className='flex border border-[#FF385C] p-3 w-[100%] items-center gap-10 rounded-lg justify-center mt-4
          hover:bg-[#FF385C] hover:text-white hover:font-medium transition duration-300
          ' >
            <img src={google} alt="" className='w-[20px]'/>
            Registrate con google
          </Button>
        </form>
        <div className='bg-[#FF385C] w-[800px] h-[597px] ml-[200px] rounded-tr-2xl rounded-br-2xl rounded-tl-none rounded-bl-none flex flex-col justify-center items-center space-x-0'>
          <span className='text-[5rem] text-white font-bold uppercase'>tr</span>
          <span className='text-[5rem] text-white font-bold uppercase'>av</span>
          <span className='text-[5rem] text-white font-bold uppercase'>el</span>
          <span className='text-[2rem] text-white font-bold uppercase'>where your dreams come true</span>
        </div>

      </div>

    </section>
  )
}

export default Register