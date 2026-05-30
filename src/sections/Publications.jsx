import { ExternalLink, FileText } from "lucide-react";

export const Publications = () => {
  const articles = [
    {
      title: "From RAG to Vectorless RAG",
      publisher:
        "Computer Science Association, University of Sri Jayewardenepura",
      date: "2025",
      description:
        "Published in the CS department magazine and shared on social platforms.",
      cover: "/articles/articleRAG.jpeg",
      links: [
        // Replace with your real links
        { label: "Medium", url: "https://csa-usj.medium.com/from-rag-to-vectorless-rag-0f55e451fcf4" },
        { label: "Facebook", url: "https://web.facebook.com/61554124413847/posts/122254652588137480/?rdid=OcbuLoFhYA17Aq83#" },
      ],
    },
  ];

  return (
    <section id="publications" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mx-auto max-w-3xl mb-12">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            Writings
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
            Blog &
            <span className="font-serif italic font-normal text-white">
              {" "}
              Publications
            </span>
          </h2>
          <p className="text-muted-foreground">
            Articles and posts I’ve written and published.
          </p>
        </div>

        {/* Articles */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-xl bg-primary/10 text-primary">
            <FileText className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-semibold text-secondary-foreground">
            Articles
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {articles.map((a) => (
            <article
              key={a.title}
              className="group glass rounded-2xl p-6 border border-border/40 hover:border-primary/40 transition-all"
            >
              {a.cover ? (
                <img
                  src={a.cover}
                  alt={`${a.title} cover`}
                  className="w-full rounded-xl border border-border/40 object-cover"
                  loading="lazy"
                />
              ) : null}

              <h4 className="mt-4 text-xl font-semibold text-secondary-foreground">
                {a.title}
              </h4>

              <p className="mt-1 text-sm text-muted-foreground">
                {a.publisher}
                {a.date ? ` • ${a.date}` : ""}
              </p>

              {a.description ? (
                <p className="mt-3 text-sm text-muted-foreground">
                  {a.description}
                </p>
              ) : null}

              <div className="mt-4 flex flex-wrap gap-3">
                {a.links?.map((l) => (
                  <a
                    key={l.url}
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {l.label} <ExternalLink className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};