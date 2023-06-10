import React, { useEffect } from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
    const router = useRouter();

    useEffect(() => {
        // setTimeout(() => {
        //     router.push('./about');
        // }, 3000);
    }, []);

    return (
        <div>
            <div className="bg-slate-500 w-full h-100vh">
                <span>hello I cant stop my name</span>
                <p>huuh</p>
                <p>ooo</p>

                <Link href="/about">
                    <span>CLick me!</span>
                </Link>
            </div>
        </div>
    );
};

export default Home;

// export default function Home() {
//     return (
//         <div>
//             <div className="bg-slate-500 w-full h-100vh">
//                 <span>hello I cant stop my name</span>
//             </div>
//         </div>
//     );
// }
