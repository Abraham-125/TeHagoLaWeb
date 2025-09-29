import { useState, useEffect } from "react";

export function useSequentialTypewriter(
  lines: string[], // Array de líneas
  charDelay = 100, // Velocidad de escritura por letra
  lineDelay = 300 // Pausa entre líneas
) {
  const [displayedLines, setDisplayedLines] = useState<string[]>(
    Array(lines.length).fill("")
  );
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);

  useEffect(() => {
    if (currentLine >= lines.length) return;

    const lineText = lines[currentLine];

    if (currentChar < lineText.length) {
      const timeout = setTimeout(() => {
        setDisplayedLines((prev) => {
          const newLines = [...prev];
          newLines[currentLine] += lineText[currentChar];
          return newLines;
        });
        setCurrentChar(currentChar + 1);
      }, charDelay);

      return () => clearTimeout(timeout);
    } else {
      // pasa a la siguiente línea después de lineDelay
      const timeout = setTimeout(() => {
        setCurrentLine(currentLine + 1);
        setCurrentChar(0);
      }, lineDelay);
      return () => clearTimeout(timeout);
    }
  }, [currentChar, currentLine, lines, charDelay, lineDelay]);

  return displayedLines;
}
