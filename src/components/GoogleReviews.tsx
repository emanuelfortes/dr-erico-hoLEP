import { useEffect, useState } from "react";

interface GoogleReviewsProps {
  placeId: string;
}

interface Review {
  authorName: string;
  rating: number;
  text: string;
  relativePublishTimeDescription: string;
  authorPhotoURI?: string;
}

function waitForGoogleMaps(timeout = 10000): Promise<void> {
  return new Promise((resolve, reject) => {
    const start = Date.now();
    const check = () => {
      const g = (window as any).google;
      if (g?.maps?.importLibrary) resolve();
      else if (Date.now() - start > timeout) reject(new Error("Google Maps não carregou."));
      else setTimeout(check, 200);
    };
    check();
  });
}

const montserrat: React.CSSProperties = { fontFamily: "'Montserrat Variable', sans-serif" };

const gradients = [
  "linear-gradient(135deg,#667eea,#764ba2)",
  "linear-gradient(135deg,#f093fb,#f5576c)",
  "linear-gradient(135deg,#4facfe,#00f2fe)",
  "linear-gradient(135deg,#43e97b,#38f9d7)",
  "linear-gradient(135deg,#fa709a,#fee140)",
  "linear-gradient(135deg,#a18cd1,#fbc2eb)",
];

const MAX_CHARS = 120;

function ReviewCard({ review, index }: { review: Review; index: number }) {
  const [hovered, setHovered] = useState(false);
  const isLong = review.text.length > MAX_CHARS;
  const displayText = isLong ? review.text.slice(0, MAX_CHARS) + "…" : review.text;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: "#fff",
        borderRadius: "16px",
        padding: "24px",
        width: "280px",
        minWidth: "280px",
        display: "flex",
        flexDirection: "column",
        flexShrink: 0,
        position: "relative",
        zIndex: hovered ? 10 : 1,
        transform: hovered ? "scale(1.07)" : "scale(1)",
        transition: "transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.35s ease",
        boxShadow: hovered
          ? "0 24px 48px rgba(0,0,0,0.22)"
          : "0 2px 8px rgba(0,0,0,0.06)",
        cursor: "default",
      }}
    >
      {/* Avatar + Stars */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "4px" }}>
        {review.authorPhotoURI ? (
          <img
            src={review.authorPhotoURI}
            alt={review.authorName}
            style={{ width: 40, height: 40, borderRadius: "50%", flexShrink: 0, objectFit: "cover" }}
          />
        ) : (
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              background: gradients[index % gradients.length],
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontWeight: "bold",
              fontSize: "14px",
              flexShrink: 0,
              ...montserrat,
            }}
          >
            {review.authorName.charAt(0).toUpperCase()}
          </div>
        )}
        <div style={{ display: "flex", gap: "2px", color: "#f5c518", fontSize: "16px" }}>
          {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
        </div>
      </div>

      {/* Texto */}
      <p
        style={{
          color: "#333",
          fontSize: "13px",
          lineHeight: "1.6",
          fontStyle: "italic",
          margin: "10px 0 16px",
          flex: 1,
          ...montserrat,
        }}
      >
        "{displayText}"
      </p>

      {/* Autor + tempo */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <p style={{ color: "#9ca3af", fontSize: "11px", fontWeight: 600, margin: 0, ...montserrat }}>
          — {review.authorName}
        </p>
        <small style={{ color: "#c4c4c4", fontSize: "10px", ...montserrat }}>
          {review.relativePublishTimeDescription}
        </small>
      </div>
    </div>
  );
}

export default function GoogleReviews({ placeId }: GoogleReviewsProps) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        await waitForGoogleMaps();
        const { Place } = await (window as any).google.maps.importLibrary("places");
        const place = new Place({ id: placeId, requestedLanguage: "pt-BR" });
        await place.fetchFields({ fields: ["displayName", "rating", "reviews"] });

        const mapped: Review[] = (place.reviews ?? []).map((r: any) => ({
          authorName: r.authorAttribution?.displayName ?? "Anônimo",
          rating: r.rating ?? 0,
          text: r.text ?? "",
          relativePublishTimeDescription: r.relativePublishTimeDescription ?? "",
          authorPhotoURI: r.authorAttribution?.photoURI ?? null,
        }));

        setReviews(mapped);
      } catch (err: any) {
        setError(err.message ?? "Não foi possível carregar as avaliações.");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [placeId]);

  if (loading) return <p style={{ color: "#8a9bb5", textAlign: "center", ...montserrat }}>Carregando avaliações...</p>;
  if (error) return <p style={{ color: "#f5576c", textAlign: "center", ...montserrat }}>{error}</p>;
  if (reviews.length === 0) return <p style={{ color: "#8a9bb5", textAlign: "center", ...montserrat }}>Nenhuma avaliação encontrada.</p>;

  const doubled = [...reviews, ...reviews];
  const duration = reviews.length * 6;

  return (
    <>
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee ${duration}s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div
        style={{
          position: "relative",
          overflowX: "clip",
          overflowY: "visible",
          marginTop: "20px",
          paddingTop: "16px",
          paddingBottom: "16px",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        <div
          className="marquee-track"
          style={{
            display: "flex",
            gap: "20px",
            width: "max-content",
          }}
        >
          {doubled.map((review, index) => (
            <ReviewCard key={index} review={review} index={index % reviews.length} />
          ))}
        </div>
      </div>
    </>
  );
}