import { t } from "i18next";
import { Button } from "../../../../components";

function Form() {
  return (
    <section className="
    bg-[#FF385C] flex flex-col h-[500px] items-center w-full mb-32 mt-10 gap-10 
    sm:flex-col sm:h-[550px] sm:gap-10 sm:items-center sm:justify-center
    md:flex-col md:h-[550px] md:gap-10 md:items-center md:justify-center
    lg:flex-col lg:h-[450px] lg:gap-10 lg:items-center lg:justify-center
    xl:flex-row xl:h-[200px]
    ">
      <span className="text-[3rem] text-white max-w-lg text-center lg:max-w-2xl xl:max-w-lg">{t('home.discoverUs')}</span>
        <input placeholder="First Name" type="text" className="text-[1.2rem] text-white focus:outline-none bg-transparent border-b lg:text-[1.5rem]"></input>
        <input placeholder="Last Name" type="text" className="text-[1.2rem] text-white  focus:outline-none bg-transparent border-b lg:text-[1.5rem]"></input>
        <input placeholder="email" type="text" className="text-[1.2rem] text-white focus:outline-none bg-transparent border-b lg:text-[1.5rem]"></input>
        <Button name='Join' />
    </section>
  )
}
export default Form;