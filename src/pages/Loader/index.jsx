import React, { useState } from 'react';
import hero1 from '@/loaderTest/demo1.hero';
console.log(hero1);
export default function Loader() {
    const [message, setMessage] = useState('this is a loader test');
    return <div>{message}</div>
}