"use client";

import type { Snippet } from "@prisma/client";
import { Editor } from "@monaco-editor/react";
import { FormEvent, useState } from "react";
import * as actions from "@/actions";

interface SnippetEditFormProps {
  snippet: Snippet;
}

export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
  const [code, setCode] = useState<string>("");

  const handleEditorChange = (value: string = "") => {
    setCode(value);
  };

  const editSnippetAction = actions.editSnippet.bind(null, snippet.id, code);

  return (
    <form action={editSnippetAction}>
      <input id="title" name="title" defaultValue={snippet.title} />
      <Editor
        height="40vh"
        theme="vs-dark"
        defaultLanguage="javascript"
        defaultValue={snippet.code}
        options={{
          minimap: { enabled: false },
        }}
        onChange={handleEditorChange}
      />

      <button type="submit">Update</button>
    </form>
  );
}
