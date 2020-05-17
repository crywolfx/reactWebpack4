import { useEffect, useCallback, useRef } from "react";

export default function useDebounce(fn, delay, immediate = false) {
    const ref = useRef({
        fn,
        timer: null
    });

    useEffect(() => {
        // 更新引用
        ref.current.fn = fn;
    }, [fn]);
    return useCallback(function (...args) {
        ref.current.timer && clearTimeout(ref.current.timer);
        if (immediate) {
            !ref.current.timer && ref.current.fn.call(this, ...args);
            ref.current.timer = setTimeout(() => {
                ref.current.fn.call(this, ...args);
                clearTimeout(ref.current.timer);
                ref.current.timer = null;
            }, delay)
        } else {
            ref.current.timer = null;
            ref.current.timer = setTimeout(() => {
                ref.current.fn.call(this, ...args);
                clearTimeout(ref.current.timer);
                ref.current.timer = null;
            }, delay)
        }
    }, [])
}