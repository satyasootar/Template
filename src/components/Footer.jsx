import { Hexagon, Github, Twitter, Instagram } from "lucide-react"
import { Footer } from "@/components/ui/footer"

function Footer1() {
    return (
        <div className="w-full">
            <Footer
                logo={<Hexagon className="h-10 w-10" />}
                brandName="WEB BUCKET"
                socialLinks={[
                    {
                        icon: <Twitter className="h-5 w-5" />,
                        href: "https://twitter.com",
                        label: "Twitter",
                    },
                    {
                        icon: <Github className="h-5 w-5" />,
                        href: "https://github.com",
                        label: "GitHub",
                    },
                    {
                        icon: <Instagram className="h-5 w-5" />,
                        href: "https://instagram.com",
                        label: "Instagram",
                    }

                ]}
                mainLinks={[
                    { href: "/products", label: "Products" },
                    { href: "/about", label: "About" },
                    { href: "/blog", label: "Blog" },
                    { href: "/contact", label: "Contact" },
                ]}
                legalLinks={[
                    { href: "/privacy", label: "Privacy" },
                    { href: "/terms", label: "Terms" },
                ]}
                copyright={{
                    text: "© 2024 Web Bucket",
                    license: "All rights reserved",
                }}
            />
        </div>
    )
}

export { Footer1 }