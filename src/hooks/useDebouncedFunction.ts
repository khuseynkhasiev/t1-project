import { useRef, useEffect } from "react";

export default function useDebouncedFunction<
    T extends (...args: unknown[]) => void
>(
    func: T,
    delay: number,
    cleanUp: boolean = false
): (...args: Parameters<T>) => void {
    const timeoutRef = useRef<number | undefined>(undefined);

    function clearTimer() {
        if (timeoutRef.current !== undefined) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = undefined;
        }
    }

    useEffect(() => (cleanUp ? clearTimer : undefined), [cleanUp]);

    return (...args: Parameters<T>) => {
        clearTimer();
        timeoutRef.current = window.setTimeout(() => func(...args), delay);
    };
}
