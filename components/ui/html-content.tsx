import DOMPurify from "isomorphic-dompurify";

interface HtmlContentProps {
  content: string;
  className?: string;
}

export default function HtmlContent({
  content,
  className = "",
}: HtmlContentProps) {
  const sanitizedContent = DOMPurify.sanitize(content);

  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: sanitizedContent }}
    />
  );
}
