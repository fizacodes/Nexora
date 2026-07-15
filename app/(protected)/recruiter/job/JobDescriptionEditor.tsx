// "use client";

// import { useEditor, EditorContent } from "@tiptap/react";
// import StarterKit from "@tiptap/starter-kit";
// import type { MouseEvent } from "react";
// import Placeholder from "@tiptap/extension-placeholder";

// export default function JobDescriptionEditor({
//   onChange,
// }: {
//   onChange: (value: string) => void;
// }) {


// const editor = useEditor({
//   immediatelyRender: true,

//   extensions: [
//     StarterKit.configure({
//       heading: {
//         levels: [1, 2, 3],
//       },
//     }),

//     Placeholder.configure({
//       placeholder:
//         "Describe the role, responsibilities, qualifications, benefits, and any other important details...",
//     }),
//   ],

//   content: "<p></p>",

//   editorProps: {
//     attributes: {
//       class: `
//         min-h-[350px]
//         p-5
//         text-base
//         leading-7
//         outline-none
//       `,
//     },
//   },

//   onUpdate: ({ editor }) => {
//     onChange(editor.getHTML());
//   },
// });

//   if (!editor) {
//     return null;
//   }

//   const handleBold = (e: MouseEvent<HTMLButtonElement>) => {
//     e.preventDefault();
//     e.stopPropagation();
//     editor.chain().focus().toggleBold().run();
//   };

 

//   return (
// <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
//   {/* Toolbar */}
//   <div className="flex items-center gap-2 border-b border-gray-200 bg-gray-50 p-3">
//     {/* Buttons */}
       
//         <button
//           type="button"
//           onMouseDown={handleBold}
//           className={`rounded border px-3 py-1 ${
//             editor.isActive("heading", { level: 3 })
//               ? "bg-accent text-background"
//               : ""
//           }`}
//         >
//          Bold
//         </button>
//       </div>

//       <EditorContent className="h-14" editor={editor} />
//     </div>
//   );
// }

"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import type { MouseEvent } from "react";
import Placeholder from "@tiptap/extension-placeholder";

export default function JobDescriptionEditor({
  onChange,
}: {
  onChange: (value: string) => void;
}) {
  const editor = useEditor({
    immediatelyRender: true,

    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
      }),

      Placeholder.configure({
        placeholder:
          "Describe the role, responsibilities, qualifications, benefits, and any other important details...",
      }),
    ],

    content: "<p></p>",

    editorProps: {
      attributes: {
        class: "min-h-[350px] p-5 text-base leading-7 outline-none",
      },
    },

    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  if (!editor) {
    return null;
  }

  const handleBold = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    editor.chain().focus().toggleBold().run();
  };

  const handleHeading2 = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    editor.chain().focus().toggleHeading({ level: 2 }).run();
  };

  const handleBulletList = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    editor.chain().focus().toggleBulletList().run();
  };

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <div className="flex items-center gap-2 border-b border-gray-200 bg-gray-50 p-3">
        

        <button
          type="button"
          onMouseDown={handleBold}
          className={`rounded border px-3 py-1 ${
            editor.isActive("heading", { level: 2 })
              ? "bg-accent text-background"
              : ""
          }`}
        >
          Bold
        </button>

        <button
          type="button"
          onMouseDown={handleBulletList}
          className="rounded border px-3 py-1"
        >
          • List
        </button>
      </div>

      <EditorContent editor={editor} />
    </div>
  );
}