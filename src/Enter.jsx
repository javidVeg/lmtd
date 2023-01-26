import React, { useState, useEffect, useRef } from 'react'

const Enter = () => {
    const [clock, setClock] = useState();
    const [date, setDate] = useState();
    const [button, setButton] = useState(true)

    const btn = useRef(null)
    const wrn = useRef(null)


    useEffect(() => {
        //setInterval changes the state values every second
        setInterval(() => {
            const dateTime = new Date();
            setClock(dateTime.toLocaleTimeString());
            setDate(dateTime.toLocaleDateString());
        }, 1000);


        if(button === false){
            console.log("button is false")
        } else{
            console.log("button is true")
        }

        if(clock === "6:48:00 PM"){
            btn.current.style.visibility = 'visible';
            btn.current.style.display = "grid"
            wrn.current.style.visibility = 'hidden'

        }else{
            console.log("something")
        }
        console.log(clock)

       
    }, [button, btn, clock]);

    const handleButton = () => {
        console.log("enter")
    };



    return (
        <div className="App">
            <div className=' grid place-content-center'>
                <p>{clock}</p>
                <p>{date}</p>
            </div>
            <div className='mt-10 flex flex-col justify-center items-center'>
                <button ref={btn} className=' hidden pr-0 rounded-[10%] bg-emerald-500 hover:border-none scale-[3] text-[.5rem] w-10 h-5  place-content-center'
                    onClick={handleButton}
                    disabled>
                    Enter
                </button>
                <div ref={wrn} className=' visible bg-slate-300 rounded-md'>
                    <h2 className=' font-bold text-red-600 p-5 text-lg'>STORE NOT OPEN</h2>
                </div>
            </div>
        </div>
    )
}

export default Enter