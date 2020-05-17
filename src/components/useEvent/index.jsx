import { useEffect } from "react";

export default function useEvent(eventName, eventHandel, element) {
    useEffect(() => {
        const _element = element || document;
        const support = _element.addEventListener;
        if (!support) return;

        _element.addEventListener(eventName, eventHandel);
        return () => {
            _element.removeEventListener(eventName, eventHandel);
        }
    }, [eventName, element, eventHandel]) 
}