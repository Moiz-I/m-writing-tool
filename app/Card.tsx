interface CardProps {
  title: string;
  content: string;
}

export function Card({ title, content }: CardProps) {
  return (
    <div className="card">
      <div className="card-body">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
}
