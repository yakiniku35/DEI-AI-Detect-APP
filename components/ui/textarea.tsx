import React from 'react'

export const Textarea: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement>> = (props) => {
  return <textarea {...props} className={`w-full p-2 border rounded ${props.className || ''}`} />
}

export default Textarea
