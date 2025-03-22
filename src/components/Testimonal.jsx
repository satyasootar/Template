import { TestimonialsSection } from "@/components/testimonials-with-marquee"

const testimonials = [
    {
        author: {
            name: "Emma Thompson",
            handle: "@emmaits",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
        },
        text: "Leveraging these IT services has revolutionized our infrastructure management. The responsiveness and efficiency are truly remarkable.",
        href: "https://twitter.com/emmaits"
    },
    {
        author: {
            name: "David Park",
            handle: "@davidtech",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
        },
        text: "The seamless system integration has significantly enhanced our operations, reducing costs and boosting overall productivity.",
        href: "https://twitter.com/davidtech"
    },
    {
        author: {
            name: "Sofia Rodriguez",
            handle: "@sofiaml",
            avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
        },
        text: "An IT service that truly understands our needs! Their proactive support and innovative solutions have been a game changer."
    }
]

export function Testimonial() {
    return (
        <TestimonialsSection
            title="Trusted by businesses worldwide"
            description="Join thousands of companies already transforming their operations with our comprehensive IT solutions."
            testimonials={testimonials}
        />
    )
}
