import React, { useEffect, useRef, useState } from "react";
import { Editor, EditorState, RichUtils, convertFromRaw } from "draft-js";

import "draft-js/dist/Draft.css";

const CustomEditor = ({ options, onChange, onSave, isEditing, jsonContent }) => {
    const editorRef = useRef(null);
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    useEffect(() => {
        if (isEditing && jsonContent) {
            try {
                // Parse the JSON content and convert it to ContentState
                const rawContent = typeof jsonContent === "string" ? JSON.parse(jsonContent) : jsonContent;
                const contentState = convertFromRaw(rawContent);
                setEditorState(EditorState.createWithContent(contentState));
            } catch (error) {
                // eslint-disable-next-line no-console
                console.error("Failed to parse or convert raw content:", error);
            }
        } else if (!isEditing) {
            // Reset to empty editor state if not editing
            setEditorState(EditorState.createEmpty());
        }
    }, [isEditing, jsonContent]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.ctrlKey && e.key === "s") {
                e.preventDefault();
                if (onSave) {
                    onSave(editorState);
                }
            }
        };

        const editorNode = editorRef.current;
        editorNode.addEventListener("keydown", handleKeyDown);

        return () => {
            editorNode.removeEventListener("keydown", handleKeyDown);
        };
    }, [editorState, onSave]);

    const handleEditorChange = (newEditorState) => {
        setEditorState(newEditorState);
        if (onChange) {
            onChange(newEditorState);
        }
    };

    const handleKeyCommand = (command) => {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            handleEditorChange(newState);
            return "handled";
        }
        return "not-handled";
    };

    const toggleInlineStyle = (style) => {
        const newState = RichUtils.toggleInlineStyle(editorState, style);
        handleEditorChange(newState);
    };

    const renderToolbar = () => {
        if (!options) return null;
        return (
            <div className="flex space-x-2 mb-4">
                {options.map((option) => (
                    <button
                        key={option.style}
                        onClick={() => toggleInlineStyle(option.style)}
                        className={`px-3 py-1 border rounded text-sm font-medium transition-colors ${editorState.getCurrentInlineStyle().has(option.style)
                            ? "bg-blue-500 text-white"
                            : "bg-gray-200 text-gray-800"
                            } hover:bg-blue-400`}
                    >
                        {option.label}
                    </button>
                ))}
                <button
                    onClick={() => onSave && onSave(editorState)}
                    className="px-3 py-1 border rounded bg-green-500 text-white text-sm font-medium hover:bg-green-400"
                >
                    Save
                </button>
            </div>
        );
    };

    return (
        <div className="p-4 border rounded-lg shadow-md bg-white transition-all ease-in-out">
            {renderToolbar()}
            <div className="border border-gray-300 p-2 min-h-[200px]" ref={editorRef}>
                <Editor
                    editorState={editorState}
                    onChange={handleEditorChange}
                    handleKeyCommand={handleKeyCommand}
                />
            </div>
        </div>
    );
};

export default CustomEditor;
