import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { motion } from "framer-motion";

const BlogPage = ({
  tagline = "Latest Updates",
  heading = "Blog & Articles",
  description = "Explore our comprehensive collection of expert insights, tutorials, and industry news in modern web development.",
  buttonText = "Browse All Articles",
  buttonUrl = "#",
  posts = [
    {
      id: "post-1",
      title: "Mastering shadcn/ui Component Customization",
      summary: "Deep dive into advanced customization techniques for shadcn/ui components in Next.js projects.",
      label: "UI Development",
      author: "Sarah Chen",
      published: "Mar 15, 2024",
      readTime: "8 min read",
      url: "#",
      image: "https://www.webbocket.com/static/media/BlogImage.6ccbed4150ad810c808ba5af0b09c4dc.svg"
    },
    {
      id: "post-2",
      title: "Accessibility Best Practices 2024",
      summary: "Comprehensive guide to implementing WCAG 2.2 standards in modern web applications.",
      label: "Accessibility",
      author: "Marcus Rodriguez",
      published: "Mar 12, 2024",
      readTime: "12 min read",
      url: "#",
      image: "https://plus.unsplash.com/premium_photo-1661347859297-859b8ae1d7c5?q=80&w=1498&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: "post-3",
      title: "Tailwind CSS Design Systems",
      summary: "Building scalable design systems with Tailwind CSS and component libraries.",
      label: "Design Systems",
      author: "Emma Thompson",
      published: "Mar 10, 2024",
      readTime: "10 min read",
      url: "#",
      image: "https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: "post-4",
      title: "React Performance Optimization",
      summary: "Advanced techniques for optimizing React application performance in 2024.",
      label: "Performance",
      author: "Alex Johnson",
      published: "Mar 8, 2024",
      readTime: "14 min read",
      url: "#",
      image: "https://images.unsplash.com/photo-1572177812156-58036aae439c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: "post-5",
      title: "TypeScript Best Practices",
      summary: "Modern TypeScript patterns for enterprise-grade applications.",
      label: "TypeScript",
      author: "Rachel Kim",
      published: "Mar 5, 2024",
      readTime: "9 min read",
      url: "#",
      image: "https://images.unsplash.com/photo-1575089976121-8ed7b2a54265?q=80&w=1434&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: "post-6",
      title: "Server Components Deep Dive",
      summary: "Leveraging Next.js server components for optimal performance.",
      label: "Next.js",
      author: "Michael Chen",
      published: "Mar 1, 2024",
      readTime: "11 min read",
      url: "#",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ]
}) => {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <main className="min-h-screen bg-background">
      <section className="py-24 px-5 bg-gradient-to-b from-muted/10 to-background">
        <div className="container mx-auto max-w-7xl">
          {/* Hero Section */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 lg:mb-24"
          >
            <Badge 
              variant="secondary" 
              className="mb-6 text-sm px-4 py-1.5 font-medium hover:bg-secondary/80 transition-colors"
            >
              {tagline}
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-6">
              {heading}
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
              {description}
            </p>
          </motion.div>

          {/* Blog Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
              <motion.div
                key={post.id}
                initial="hidden"
                animate="visible"
                variants={fadeUpVariants}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full group hover:shadow-lg transition-shadow duration-300">
                  <div className="relative aspect-[16/9] overflow-hidden rounded-t-lg">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <Badge className="absolute top-4 left-4 z-10">
                      {post.label}
                    </Badge>
                  </div>
                  
                  <CardHeader className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      {post.published} • {post.readTime}
                    </p>
                    <h3 className="text-2xl font-semibold tracking-tight">
                      {post.title}
                    </h3>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-muted-foreground line-clamp-3">
                      {post.summary}
                    </p>
                  </CardContent>
                  
                  <CardFooter className="flex justify-between items-center">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-muted-foreground">By {post.author}</span>
                    </div>
                    <Button variant="ghost" size="sm" className="gap-1.5" asChild>
                      <a href={post.url}>
                        Read More
                        <ArrowRight className="h-4 w-4 ml-1.5" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Load More Button */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            className="flex justify-center mt-16"
          >
            <Button
              size="lg"
              className="px-8 py-6 text-lg gap-3 hover:gap-4 transition-all"
              asChild
            >
              <a href={buttonUrl}>
                {buttonText}
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Featured Post Section */}
      <section className="py-16 bg-muted/10">
        <div className="container mx-auto max-w-7xl px-5">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="mb-4">
                Featured Article
              </Badge>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Building Modern Web Applications with Next.js 14
              </h2>
              <p className="text-xl text-muted-foreground">
                Comprehensive guide to leveraging the latest features of Next.js 14 
                for building performant and scalable applications.
              </p>
              <Button size="lg" className="gap-2 mt-6" asChild>
                <a href="#">
                  Read Featured Article
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Featured Post"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export { BlogPage };