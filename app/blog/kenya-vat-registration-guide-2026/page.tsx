import { redirect } from "next/navigation"

// Old URL permanently redirects to the canonical /resources slug
export default function OldArticleRedirect() {
  redirect("/resources/how-to-register-for-vat-in-kenya")
}
