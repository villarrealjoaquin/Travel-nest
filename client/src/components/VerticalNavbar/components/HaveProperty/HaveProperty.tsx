import { Home, Medal, Building, Building2, } from 'lucide-react';
import { useState } from 'react';

const builds = [
    {
        id: 1,
        icon: <Home className='w-[50px] h-[50px] mb-2 text-[#FF385C]' />,
        name: "Casa"
    },
    {
        id: 2,
        icon: <Building className='w-[50px] h-[50px] mb-2 text-[#FF385C]' />,
        name: "Departamento"
    },
    {
        id: 3,
        icon: <Building2 className='w-[50px] h-[50px] mb-2 text-[#FF385C]' />,
        name: "Hotel"
    },
    {
        id: 4,
        icon: <Medal className='w-[50px] h-[50px] mb-2 text-[#FF385C]' />,
        name: "Penthouse"
    }
]

function HaveProperty() {
    const [activeButtons, setActiveButtons] = useState<any>([])
    console.log(activeButtons)
    return (
        <div className="mt-5 flex flex-col justify-start items-start border-b pb-6">
            <span className='text-[1.4rem] text-[#FF385C] font-semibold '>Tiene propiedad</span>
            <div className='flex gap-[88px] items-center'>
                {
                    builds?.map((build: any) => (
                        <button className={`p-4 border transition duration-300 ease-in-out rounded-lg mt-5 w-[150px] flex flex-col items-center hover:border-[#FF385C]
       active:shadow-inner active:scale-95 ${activeButtons.includes(build.name) ? 'border-[#FF385C] border-2' : ''}`} onClick={() => {
                                if (activeButtons.includes(build.name)) {
                                    setActiveButtons(activeButtons.filter((name: any) => name !== build.name));
                                } else {
                                    setActiveButtons([...activeButtons, build.name]);
                                }
                            }}>
                            {build?.icon}
                            <div className='flex flex-col justify-start items-start ml-1 text-start '>
                                <span className='font-semibold text-[1.1rem] text-[#FF385C]'>{build.name}</span>
                            </div>
                        </button>
                    ))
                }
            </div>
        </div>
    )
}

export default HaveProperty;