import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  Clock,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { getBlogData } from "@/lib/getBlogData";
const contactDetails = [
  { name: "Our Story", path: "/about" },
  { name: "Contact Us", path: "/contact" },
  { name: "Privacy Policy", path: "/" },
  { name: "Terms & Conditions", path: "/" },
];
export default function Footer() {
  const blogs = getBlogData();

  // Extract categories and remove duplicates
  const uniqueCategories = [...new Set(blogs.map((blog) => blog.category))];

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <h2 className="text-lg font-bold uppercase tracking-wide">
              Customer Care
            </h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>support@beautyblog.com</span>
              </li>
              <li className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>Mon - Fri: 9:00 AM - 6:00 PM EST</span>
              </li>
              <li className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span>123 Beauty Street, NY 10001</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-lg font-bold uppercase tracking-wide">
              Categories
            </h2>
            <ul className="space-y-2">
              {uniqueCategories.map((item, index) => (
                <li
                  key={index}
                  className="transition-transform hover:translate-x-1"
                >
                  <Link href={"/"} className="hover:underline">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-lg font-bold uppercase tracking-wide">
              About Us
            </h2>
            <ul className="space-y-2">
              {contactDetails.map((item, index) => (
                <li
                  key={index}
                  className="transition-transform hover:translate-x-1"
                >
                  <Link href={item.path} className="hover:underline">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-lg font-bold uppercase tracking-wide">
              Newsletter
            </h2>
            <p className="text-sm">
              Stay up to date with our latest trends and tips!
            </p>
            <form className="flex space-x-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-primary-foreground text-primary"
              />
              <Button type="submit" variant="secondary">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <Separator className="my-8 bg-primary-foreground/20" />
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm">
            &copy; 2024 BeautyBlog. All rights reserved.
          </p>
          <div className="flex space-x-4">
            {[
              { icon: Twitter, label: "Twitter" },
              { icon: Facebook, label: "Facebook" },
              { icon: Instagram, label: "Instagram" },
              { icon: Youtube, label: "YouTube" },
            ].map((social, index) => (
              <Link
                key={index}
                href={`https://${social.label.toLowerCase()}.com/beautyblog`}
                className="bg-primary-foreground text-primary p-2 rounded-full transition-transform hover:scale-110"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
