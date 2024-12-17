# litem

Literal String Templates - A lightweight utility for building multi-line strings
in TypeScript/JavaScript.

## Installation

```bash
deno add @tzador/litem
```

## Overview

`litem` (Literal Template) is a utility that helps you build multi-line strings
using template literals while maintaining clean, readable code.
It's particularly useful when you need to programmatically construct
text content, LLM prompts, SQL queries, or any other string-based output
that spans multiple lines.

## Features

- Template literal support with variable interpolation
- Line-by-line string construction
- Flexible line joining with custom separators
- Zero dependencies
- TypeScript support
- Small footprint (~1KB)

## Usage

### Basic Example

```typescript
import litem from "litem";

const l = litem();

l`Hello`;
l`World`;

console.log(l.join());
//// Output:
// Hello
// World
```

### LLM Prompt Construction

```typescript
import litem from "litem";

const l = litem();
const context = "JavaScript programming";
const userQuestion = "How do I use async/await?";

l`You are an expert in ${context}.`;
l`Please help the user with their question.`;
l`User question: ${userQuestion}`;
l`Provide a clear, concise explanation with examples.`;

console.log(l.join("\n\n"));
//// Output:
// You are an expert in JavaScript programming.
//
// Please help the user with their question.
//
// User question: How do I use async/await?
//
// Provide a clear, concise explanation with examples.
```

### Variable Interpolation

```typescript
import litem from "litem";

const l = litem();
const name = "Alice";
const age = 30;

l`Name: ${name}`;
l`Age: ${age}`;

console.log(l.join());
//// Output:
// Name: Alice
// Age: 30
```

### Custom Separator

```typescript
import litem from "litem";

const l = litem();

l`First`;
l`Second`;
l`Third`;

console.log(l.join(" | "));
//// Output: First | Second | Third
```

## API

### `litem()`

Creates a new template buffer instance.

Returns: `Litem` - A function with the following capabilities:

- **As a tagged template**: Creates a new line from a template literal

  ```typescript
  (strings: TemplateStringsArray, ...values: unknown[]): string
  ```

- **join method**: Joins all accumulated lines
  ```typescript
  join(separator?: string): string
  ```
  - `separator`: Optional string to use between lines (defaults to '\n')

## Use Cases

- Constructing LLM prompts with dynamic content
- Building structured AI conversations
- Generating prompt templates
- Building SQL queries
- Creating formatted text output
- Template generation
- Text-based code generation

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
