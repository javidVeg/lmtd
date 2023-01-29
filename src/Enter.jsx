import React, { useState, useEffect, useRef } from 'react'
import { db } from '../firebase.config.cjs'
import { collection, doc, getDocs, query, where } from "firebase/firestore";
import { async } from '@firebase/util';

const Enter = () => {
    const [clock, setClock] = useState();
    const [date, setDate] = useState();
    const [button, setButton] = useState(true)
    const [data, setData] = useState(null)
    const [querys, setQuery] = useState(null)

    const collectionRef = collection(db, "lmtd-1")

    const btn = useRef(null)
    const wrn = useRef(null)


    // useEffect(() => {
    //     //setInterval changes the state values every second
    //     setInterval(() => {
    //         const dateTime = new Date();
    //         setClock(dateTime.toLocaleTimeString());
    //         setDate(dateTime.toLocaleDateString());
    //     }, 1000);


    //     // if (button === false) {
    //     //     console.log("button is false")
    //     // } else {
    //     //     console.log("button is true")
    //     // }

    //     if (clock === "6:23:30 AM") {
    //         btn.current.style.visibility = 'visible';
    //         btn.current.style.display = "grid"
    //         wrn.current.style.visibility = 'hidden'

    //     } else {
    //         console.log("something")
    //     }
    //     // console.log(clock)


    // }, [button, btn, clock]);

    const getItem = async () => {
        const datas = await getDocs(collectionRef);
        setData(datas.docs.map((doc) => ({ ...doc.data() })))

    }


    const getQ = async () => {
        const q = query(collectionRef, where("taken", "==", false));
        const querySnapshot = await getDocs(q);
        setQuery(querySnapshot)

        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
          });
    }

    const handleButton = () => {

        // getItem();
        
        getQ()



        console.log(querys)
        console.log(data)



    };



    return (
        <div className="App">
            <div className=' grid place-content-center'>
                <p>{clock}</p>
                <p>{date}</p>
            </div>
            <div className='mt-10 flex flex-col justify-center items-center'>
                {/* vvv__set this to "hidden" in order to hid at page load__vvv */}
                <button ref={btn} className='pr-0 rounded-[10%] bg-emerald-500 hover:border-none scale-[3] text-[.5rem] w-10 h-5  place-content-center'
                    onClick={handleButton}>
                    Enter
                </button>
                {/* <div ref={wrn} className=' visible bg-slate-300 rounded-md'>
                    <h2 className=' font-bold text-red-600 p-5 text-lg'>STORE NOT OPEN</h2>
                </div> */}
            </div>
        </div>
    )
}

export default Enter