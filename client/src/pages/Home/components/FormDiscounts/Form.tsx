import { t } from "i18next";
import Button from "../../../../components/Button";

function Form() {
    return (
        <section className="bg-[#FF385C] flex items-center w-full h-[200px] pl-10">
            <span className="text-[3rem] text-white max-w-lg text-center">{t('home.discoverUs')}</span>
            <div>
                <input placeholder="First Name" type="text" className="text-[1.5rem] text-white focus:outline-none bg-transparent border-b ml-[50px]"></input>
                <input placeholder="Last Name" type="text" className="text-[1.5rem] text-white  focus:outline-none bg-transparent border-b ml-20"></input>
                <input placeholder="email" type="text" className="text-[1.5rem] text-white focus:outline-none bg-transparent border-b ml-20"></input>
            </div>
            <Button name='Join'/>
        </section>
    )
}

export default Form;