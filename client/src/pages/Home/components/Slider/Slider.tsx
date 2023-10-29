import styles from './slider.module.css'

const SliderHome = ({
    title,
    containerClassNames,
}: {
    title: string
    containerClassNames?: string
}) => {
    return (
        <div
            className={`${styles['logo-container']} 
            border-b-solid border-2 border-b-red-500  
            border-t-solid border-t-red-500
            py-2 lg:py-4 ${containerClassNames} `}
        >
            <div className={`${styles['logo-slide']} ${styles['logo-content']} mx-4 items-center gap-44`}>
                {[...Array(20)].map((_, index) => (
                    <div key={index} className='flex items-center w-[500px] gap-24'>
                        <div>
                            <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.8336 36.176L9.25418 28.7328L1.75156 27.0738L3.28462 24.1348L10.1543 23.7595C10.507 23.3011 11.2943 22.2941 11.7859 21.8025L18.0452 15.5432L4.99581 9.14494L8.29943 5.84132L24.8437 8.74357L30.7016 2.88563C31.3963 2.19094 32.4781 1.82401 33.8295 1.82401C34.751 1.82401 35.4861 1.99382 35.5169 2.00094L35.8732 2.08407L35.9789 2.43438C36.5358 4.27501 36.2009 6.35075 35.1832 7.36844L29.298 13.2537L32.1884 29.7303L28.8847 33.0339L22.5114 20.0367L16.6654 25.8839C16.0502 26.4979 14.7381 27.7079 14.2512 28.1544L13.7394 34.5966L10.8312 36.1748L10.8336 36.176ZM3.63968 26.1951L10.3253 27.6723L11.7218 34.2558L12.5352 33.8141L13.0316 27.5583L13.2157 27.3897C13.2347 27.3731 15.0468 25.7165 15.7724 24.9909L22.8712 17.8909L29.2446 30.8881L30.8287 29.3028L27.9383 12.825L34.2902 6.47426C34.8412 5.92326 35.1749 4.57663 34.865 3.16944C34.6085 3.13144 34.2404 3.09107 33.8319 3.09107C33.1277 3.09107 32.1706 3.21101 31.5982 3.78219L25.2747 10.1056L8.72931 7.20338L7.14399 8.78751L20.1934 15.1858L12.6813 22.6979C12.1077 23.2703 10.9974 24.7428 10.9856 24.757L10.8086 24.9921L4.07312 25.3603L3.63849 26.1939L3.63968 26.1951Z" fill="#FF385C" />
                            </svg>
                        </div>

                        <p className="min-w-fit text-2xl tracking-widest text-[#FF385C]">{title?.toUpperCase()}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SliderHome
