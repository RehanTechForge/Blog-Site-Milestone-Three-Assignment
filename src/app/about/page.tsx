import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import {
  ChevronRight,
  Heart,
  Star,
  Sparkles,
  Feather,
  Users,
} from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/10 to-background p-4 sm:p-6 md:p-8 lg:p-12">
      <main className="max-w-6xl mx-auto space-y-12">
        <section className="text-center space-y-4 animate-fade-in">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-primary tracking-tight">
            BeautyBlog
          </h1>
          <p className="text-2xl sm:text-3xl md:text-4xl text-muted-foreground font-light">
            Empowering beauty through knowledge
          </p>
        </section>

        <Card className="overflow-hidden shadow-2xl">
          <CardContent className="p-0">
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px]">
              <Image
                src="/about.webp"
                alt="Makeup products and brushes"
                fill
                className="rounded-t-lg object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-t-lg"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
                  About Us
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl">
                  Your ultimate destination for all things makeup and beauty
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="group hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl font-bold text-primary group-hover:scale-105 transition-transform duration-300">
                <Heart className="mr-2 text-primary" /> Our Passion
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-lg leading-relaxed">
                At BeautyBlog, we're passionate about helping you discover the
                best products, techniques, and trends in the ever-evolving world
                of cosmetics. Our team of experienced makeup artists and beauty
                enthusiasts are dedicated to bringing you high-quality content
                that inspires and educates.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl font-bold text-primary group-hover:scale-105 transition-transform duration-300">
                <Star className="mr-2 text-primary" /> What We Offer
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground text-lg">
                {[
                  "In-depth product reviews",
                  "Step-by-step makeup tutorials",
                  "Latest beauty trends",
                  "Skincare tips and routines",
                  "Interviews with industry pros",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center transition-transform duration-300 hover:translate-x-2"
                  >
                    <ChevronRight className="mr-2 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-primary/5 hover:bg-primary/10 transition-colors duration-300">
          <CardHeader>
            <CardTitle className="flex items-center text-3xl font-bold text-primary">
              <Sparkles className="mr-2 text-primary" /> Join Our Beauty
              Community
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground text-lg">
              Subscribe to our newsletter for exclusive content, tips, and
              special offers!
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-grow"
              />
              <Button
                type="submit"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Subscribe
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl font-bold text-primary">
                <Feather className="mr-2 text-primary" /> Our Beauty Philosophy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[200px] w-full rounded-md border p-4">
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    At BeautyBlog, we believe that makeup is not just about
                    looking good, but feeling confident and expressing your
                    unique personality. Our mission is to empower you with the
                    knowledge and skills to enhance your natural beauty and
                    creativity.
                  </p>
                  <p>
                    We understand that the world of beauty can be overwhelming,
                    with countless products and techniques to choose from.
                    That's why we're here to guide you through it all, offering
                    expert advice, honest reviews, and easy-to-follow tutorials.
                  </p>
                  <p>
                    Whether you're a makeup novice or a seasoned pro, BeautyBlog
                    is here to inspire, educate, and empower you on your beauty
                    journey. We celebrate diversity and believe that beauty
                    comes in all shapes, sizes, and colors.
                  </p>
                  <p>
                    Join us as we explore the transformative power of makeup,
                    discover new trends, and share the joy of self-expression
                    through beauty. Together, let's create a community where
                    everyone feels beautiful, confident, and empowered.
                  </p>
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl font-bold text-primary">
                <Users className="mr-2 text-primary" /> Meet Our Team
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "Emma", role: "Makeup Artist" },
                  { name: "Sophia", role: "Skincare Specialist" },
                  { name: "Olivia", role: "Beauty Trend Analyst" },
                  { name: "Ava", role: "Product Reviewer" },
                ].map((member, index) => (
                  <div key={index} className="text-center">
                    <div className="w-20 h-20 mx-auto mb-2 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-2xl text-primary">
                        {member.name[0]}
                      </span>
                    </div>
                    <h3 className="font-semibold text-primary">
                      {member.name}
                    </h3>
                    <Badge variant="secondary">{member.role}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-8" />

        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-primary">
            Stay Beautiful, Stay Inspired
          </h2>
          <p className="text-muted-foreground text-lg">
            Thank you for being part of our beauty journey. Let's continue to
            explore, learn, and grow together!
          </p>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href={"/blogs"}>Explore Our Articles</Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
