import { useState } from 'react';
import { Button } from '../../components';
import { Input } from '../../components/ui/Input';
import google from '/svgs/google.svg';
import { useLocation } from 'react-router-dom';
import { registerRequest } from '../../services/api/authenticate';
import { User } from '../../models';
import { LocalStorageKeys, saveInLocalStorage } from '../../utils';

interface Props {
  googleButtonName: string;
  button: string;
}

function ContentRegistration({ googleButtonName, button }: Props) {
  const [data, setData] = useState<User>({
    name: '',
    lastname: '',
    email: '',
    password: ''
  });
  const location = useLocation();

  const handleClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await registerRequest(data);
      saveInLocalStorage(LocalStorageKeys.TOKEN, res.data.accessToken);
      saveInLocalStorage(LocalStorageKeys.REFRESH_TOKEN, res.data.refreshToken);
      console.log(res);
    } catch (error) {
      console.log('estoy en el catch');
      console.log(error);
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  }

  return (
    <section className='flex justify-center mt-[160px]'>
      <div className='w-[70%] h-[600px] border-2 border-[#FF385C] rounded-3xl flex items-center justify-center  md:w-[50%] lg:w-[550px] xl:w-[70%]'>
        <form className='xl:ml-[100px]' onSubmit={handleClick}>
          <div className=' flex flex-col items-center'>
            <h4 className='mb-4 text-[3rem] text-[#FF385C] font-bold'>Welcome</h4>
            {location.pathname === '/register' && (
              <>
                <Input
                  name='name'
                  placeholder='name'
                  onChange={handleChange}
                  className='text-[#FF385C] border-[#FF385C] w-[80%] mb-10 focus-visible:outline-[#FF385C] sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[340px]'
                />
                <Input
                  name='lastname'
                  placeholder='lastname'
                  onChange={handleChange}
                  className='text-[#FF385C] border-[#FF385C] w-[80%] mb-10 focus-visible:outline-[#FF385C] sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[340px]'
                />
                <Input
                  name='email'
                  placeholder='email'
                  onChange={handleChange}
                  className='text-[#FF385C] border-[#FF385C] w-[80%] mb-10 focus-visible:outline-[#FF385C] sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[100%]'
                />
                <Input
                  name='password'
                  placeholder='password'
                  onChange={handleChange}
                  className='text-[#FF385C] border-[#FF385C] w-[80%] mb-10 focus-visible:outline-[#FF385C] sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[100%]'
                />
              </>
            )}
            {location.pathname === '/login' && (
              <>
                <Input placeholder='email' className='text-[#FF385C] border-[#FF385C] w-[80%] mb-10 focus-visible:outline-[#FF385C] sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[340px]' />
                <Input placeholder='password' className='text-[#FF385C] border-[#FF385C] w-[80%] mb-10 focus-visible:outline-[#FF385C] sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[340px]' />
              </>
            )}
            <Button className='flex flex-col items-center text-[#FF385C] border border-[#FF385C] p-2 w-[150px] rounded-3xl hover:bg-[#FF385C] hover:text-white transition duration-300'>
              {button}
            </Button>
          </div>
          <div className='flex items-center gap-10 mt-5'>
            <div className='w-[40%] h-[2px] bg-[#202020]'></div>
            <span>o</span>
            <div className='w-[40%] h-[2px] bg-[#202020]'></div>
          </div>
          <Button className='flex border border-[#FF385C] p-3 w-[100%] items-center gap-10 rounded-lg justify-center mt-4hover:bg-[#FF385C] hover:text-white hover:font-medium transition duration-300'>
            <img src={google} alt="" className='w-[20px]' />
            {googleButtonName}
          </Button>
        </form>
        <div className='bg-[#FF385C] hidden w-[800px] h-[597px] ml-[200px] rounded-tr-2xl rounded-br-2xl rounded-tl-none rounded-bl-none flex flex-col justify-center items-center space-x-0 md:hidden 
                xl:w-[800px] xl:h-[597px] xl:ml-[200px]  xl:flex xl:flex-col xl:justify-center xl:items-center xl:space-x-0'>
          <span className='text-[5rem] text-white font-bold uppercase'>tr</span>
          <span className='text-[5rem] text-white font-bold uppercase'>av</span>
          <span className='text-[5rem] text-white font-bold uppercase'>el</span>
          <span className='text-[2rem] text-white font-bold uppercase lg:text-center md:hidden xl:block'>where your dreams come true</span>
        </div>
      </div>
    </section>
  )

}

export default ContentRegistration;