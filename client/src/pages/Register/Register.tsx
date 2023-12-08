import { t } from 'i18next';
import { ContentRegistration } from '../../components';

function Register() {
  return (
    <ContentRegistration button={t('register.signIn')} googleButtonName={t('register.signInWithGoogle')}/>
    // <>
    //   <section className='flex justify-center mt-[160px]'>
    //     <div className='w-[70%] h-[600px] border-2 border-[#FF385C] rounded-3xl flex items-center justify-center  md:w-[50%] lg:w-[550px] xl:w-[70%]'>
    //       <form className='xl:ml-[100px]' onSubmit={handleClick}>

    //       </form>
    //     </div>
    //   </section>
    // </>
  )
}

export default Register