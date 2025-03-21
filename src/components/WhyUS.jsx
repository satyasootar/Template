import { FeatureSteps } from "./feature-section"

const features = [
    {
        step: 'Step 1',
        title: 'Discover Effortless Customer Support',
        content: 'This letter expresses our sincere gratitude for the excellent work that your company has done. I would like to note the high professionalism of the entire team, the ability to work with the customer, taking into account all his wishes.',
        image: 'https://img.freepik.com/premium-vector/customer-support-illustration-concept_23152-154.jpg'
    },
    {
        step: 'Step 2',
        title: 'Core Features',
        content: 'Cutting-edge, custom software with user-centric design, scalability, security, and comprehensive support. Reliable and innovative solutions for business success.',
        image: 'https://thumbs.dreamstime.com/b/digital-key-symbol-illuminated-binary-code-representing-security-technology-background-features-circuit-like-design-350583651.jpg'
    },
    {
        step: 'Step 3',
        title: 'Easy Customizable',
        content: 'Flexible software solutions designed for easy customization, allowing seamless adjustments to meet specific business needs. User-friendly interfaces ensure effortless modifications and efficient scalability.',
        image: 'https://www.shutterstock.com/image-photo/special-limited-exclusive-vip-made-600nw-2238875671.jpg'
    },
    {
        step: 'Step 4',
        title: 'Fast Support',
        content: 'Rapid and reliable support services, ensuring quick resolutions and minimal downtime. Our dedicated team is available around the clock to address your needs promptly and efficiently.',
        image: 'https://img.freepik.com/free-photo/man-working-call-center-with-headphones-computer_23-2149256094.jpg'
    },
]

export function WhyUS() {
    return (
        <FeatureSteps
            features={features}
            title="Why Choose Us"
            autoPlayInterval={4000}
            imageHeight="h-[500px]"
        />
    )
}
