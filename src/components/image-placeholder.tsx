interface ImagePlaceholderProps {
  description: string;
  aspectRatio?: string;
  className?: string;
}

export function ImagePlaceholder({
  description,
  aspectRatio = "16/9",
  className = "",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`image-placeholder ${className}`}
      style={{ aspectRatio }}
    >
      <div className="relative z-10 max-w-xs">
        <div className="mb-3 flex justify-center">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-muted"
          >
            <rect x="3" y="3" width="18" height="18" rx="0" ry="0" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
        </div>
        <p className="font-body text-xs leading-relaxed text-muted">
          {description}
        </p>
      </div>
    </div>
  );
}
