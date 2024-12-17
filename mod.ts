/**
 * Represents a literal template (Litem) string buffer,
 * which can push new lines and join them together.
 */
export type Litem = {
  /**
   * Creates a new line from a template literal
   * @param strings - Template string array
   * @param values - Values to interpolate into the template
   * @returns The processed template string
   */
  (strings: TemplateStringsArray, ...values: unknown[]): string;

  /**
   * Joins all accumulated lines
   * @param sep - Separator to use between lines (defaults to newline)
   * @returns All lines joined with the separator
   */
  join(sep?: string): string;
};

/**
 * Creates a new literal template string buffer.
 * @returns An Litem function that can create and join template strings
 */
export default function litem(): Litem {
  const lines: string[] = [];
  const f = function (strings: TemplateStringsArray, ...values: unknown[]) {
    const parts: string[] = [];
    parts.push(strings[0]);
    for (let i = 0; i < values.length; i++) {
      parts.push(values[i] + "");
      parts.push(strings[i + 1]);
    }
    const line = parts.join("");
    lines.push(line);
    return line;
  };
  f.join = (sep = "\n") => {
    return lines.join(sep);
  };
  return f;
}
