import {useEffect, useState, useCallback, memo} from "react";

interface TypeWriterProps {
    text: string;
    speed?: number;
    className?: string;
}

const TypeWriter = memo(({
                             text,
                             speed = 100,
                             className = ''
                         }: TypeWriterProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const animateText = useCallback(() => {
        if (currentIndex >= text.length) return;

        const timeout = setTimeout(() => {
            setCurrentIndex(i => i + 1);
        }, speed);

        return () => clearTimeout(timeout);
    }, [currentIndex, text.length, speed]);

    useEffect(animateText, [animateText]);

    useEffect(() => {
        setCurrentIndex(0);
    }, [text]);

    return (
        <h1 className={className}>
            {text.slice(0, currentIndex)}
        </h1>
    );
});

TypeWriter.displayName = 'TypeWriter';

export default TypeWriter;