type JsonLdProps<T> = { data: T; id?: string }

export function JsonLd<T>({ data, id }: JsonLdProps<T>) {
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003C"),
      }}
    />
  )
}
