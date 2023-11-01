import { t } from "i18next";
import { Button } from "../../../../components";

function Form() {
  return (
    <section className="bg-[#FF385C] flex items-center w-full h-[200px] pl-10 mb-14">
      <span className="text-[3rem] text-white max-w-lg text-center">{t('home.discoverUs')}</span>
      <div>
        <input placeholder="First Name" type="text" className="text-[1.5rem] text-white focus:outline-none bg-transparent border-b ml-[50px]"></input>
        <input placeholder="Last Name" type="text" className="text-[1.5rem] text-white  focus:outline-none bg-transparent border-b ml-20"></input>
        <input placeholder="email" type="text" className="text-[1.5rem] text-white focus:outline-none bg-transparent border-b ml-20"></input>
      </div>
      <Button className="w-40 bg-white rounded-full p-2 font-bold text-[1.5rem] ml-10 mt-4 tracking-widest">
        Join
      </Button>
    </section>
  )
}
export default Form;