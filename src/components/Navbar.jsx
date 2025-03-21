import { Book, Menu, Moon, Sunset, Sun, Trees, Zap } from "lucide-react";
import { useState, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = ({
  logo = {
    url: "",
    src: "https://www.logoai.com/oss/icons/2021/12/02/SU8HhT2n6tL-p-_.png",
    alt: "logo",
    title: "WEB BOCKET",
  },
  menu = [
    { title: "Home", url: "#" },
    {
      title: "Products",
      url: "#",
      items: [
        {
          title: "Hostel Management System",
          description: "A hostel management system streamlines room allocation, bookings, fee tracking, and maintenance for efficient hostel operations.",
          icon: <Book className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Attendance System",
          description: "An attendance system automates time tracking and record-keeping for accurate monitoring of presence and performance.",
          icon: <Trees className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Ecommerse Website",
          description: "An e-commerce website is an online platform for buying and selling products or services.",
          icon: <Sunset className="size-5 shrink-0" />,
          url: "#",
        },
      ],
    },
    {
      title: "Service",
      url: "#",
      items: [
        {
          title: "Web-app Development",
          description: " We offer top-notch web development services that cater to the unique needs of businesses",
          icon: <Zap className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Android Development",
          description: "Develop high-quality mobile applications for Android",
          icon: <Sunset className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "UI UX Design",
          description: "Create stunning and intuitive user interfaces and experiences with WebBocket's UI/UX design services",
          icon: <Trees className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "CRM Software",
          description: "Enhance your customer relationships with our robust CRM software solutions",
          icon: <Book className="size-5 shrink-0" />,
          url: "#",
        },
      ],
    },
    {
      title: "Pricing",
      url: "#",
    },
    {
      title: "Blog",
      url: "#",
    },
  ],
  mobileExtraLinks = [
    { name: "Press", url: "#" },
    { name: "Contact", url: "#" },
    { name: "Imprint", url: "#" },
    { name: "Sitemap", url: "#" },
  ],
  auth = {
    login: { text: "Log in", url: "#" },
    signup: { text: "Know More", url: "#" },
  }
}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setIsDarkMode(savedTheme === 'dark');
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.documentElement.classList.toggle('dark', newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };

  const renderMenuItem = (item) => {
    if (item.items) {
      return (
        <NavigationMenuItem key={item.title} className="text-muted-foreground dark:text-gray-300">
          <NavigationMenuTrigger className="dark:hover:bg-gray-800">
            {item.title}
          </NavigationMenuTrigger>
          <NavigationMenuContent className="dark:bg-gray-800 dark:border-gray-700">
            <ul className="w-80 p-3">
              <NavigationMenuLink>
                {item.items.map((subItem) => (
                  <li key={subItem.title}>
                    <a
                      className="flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-accent-foreground dark:hover:bg-gray-700 dark:text-gray-200"
                      href={subItem.url}>
                      {subItem.icon}
                      <div>
                        <div className="text-sm font-semibold">
                          {subItem.title}
                        </div>
                        {subItem.description && (
                          <p className="text-sm leading-snug text-muted-foreground dark:text-gray-400">
                            {subItem.description}
                          </p>
                        )}
                      </div>
                    </a>
                  </li>
                ))}
              </NavigationMenuLink>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      );
    }
    return (
      <a
        key={item.title}
        className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-accent-foreground dark:text-gray-300 dark:hover:bg-gray-800"
        href={item.url}>
        {item.title}
      </a>
    );
  };

  const renderMobileMenuItem = (item) => {
    if (item.items) {
      return (
        <AccordionItem key={item.title} value={item.title} className="border-b-0">
          <AccordionTrigger className="py-0 font-semibold hover:no-underline dark:text-gray-200">
            {item.title}
          </AccordionTrigger>
          <AccordionContent className="mt-2">
            {item.items.map((subItem) => (
              <a
                key={subItem.title}
                className="flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-muted hover:text-accent-foreground dark:hover:bg-gray-700 dark:text-gray-200"
                href={subItem.url}>
                {subItem.icon}
                <div>
                  <div className="text-sm font-semibold">{subItem.title}</div>
                  {subItem.description && (
                    <p className="text-sm leading-snug text-muted-foreground dark:text-gray-400">
                      {subItem.description}
                    </p>
                  )}
                </div>
              </a>
            ))}
          </AccordionContent>
        </AccordionItem>
      );
    }
    return (
      <a
        key={item.title}
        href={item.url}
        className="font-semibold dark:text-gray-200">
        {item.title}
      </a>
    );
  };

  return (
    <section className="p-8  dark:bg-transparent">
      <div className="container">
        {/* Desktop Navigation */}
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center gap-6">
            <a href={logo.url} className="flex items-center gap-2">
              <img src={logo.src} className="w-8" alt={logo.alt} />
              <span className="text-lg font-semibold dark:text-white">
                {logo.title}
              </span>
            </a>
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  {menu.map((item) => renderMenuItem(item))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <Button
              asChild
              size="sm"
              variant="default"
            >
              <a href={auth.signup.url}>{auth.signup.text}</a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={toggleDarkMode}
              className="rounded-full dark:border-gray-600 dark:hover:bg-gray-800"
            >
              {isDarkMode ? (
                <Sun className="size-4 dark:text-white" />
              ) : (
                <Moon className="size-4" />
              )}
            </Button>

          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            <a href={logo.url} className="flex items-center gap-2">
              <img src={logo.src} className="w-8" alt={logo.alt} />
              <span className="text-lg font-semibold dark:text-white">
                {logo.title}
              </span>
            </a>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={toggleDarkMode}
                className="rounded-full dark:border-gray-600 dark:hover:bg-gray-800"
              >
                {isDarkMode ? (
                  <Sun className="size-4 dark:text-white" />
                ) : (
                  <Moon className="size-4" />
                )}
              </Button>
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="dark:border-gray-600 dark:hover:bg-gray-800"
                  >
                    <Menu className="size-4 dark:text-white" />
                  </Button>
                </SheetTrigger>
                <SheetContent className="overflow-y-auto dark:bg-black dark:border-gray-800">
                  <SheetHeader>
                    <SheetTitle className="dark:text-white">
                      <a href={logo.url} className="flex items-center gap-2">
                        <img src={logo.src} className="w-8" alt={logo.alt} />
                        <span className="text-lg font-semibold">
                          {logo.title}
                        </span>
                      </a>
                    </SheetTitle>
                  </SheetHeader>
                  <div className="my-6 flex flex-col gap-6">
                    <Accordion type="single" collapsible className="flex w-full flex-col gap-4">
                      {menu.map((item) => renderMobileMenuItem(item))}
                    </Accordion>
                    <div className="border-t py-4 dark:border-gray-800">
                      <div className="grid grid-cols-2 justify-start">
                        {mobileExtraLinks.map((link, idx) => (
                          <a
                            key={idx}
                            className="inline-flex h-10 items-center gap-2 whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-accent-foreground dark:text-gray-400 dark:hover:bg-gray-800"
                            href={link.url}>
                            {link.name}
                          </a>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col gap-3">
                      <Button
                        variant="outline"
                        onClick={toggleDarkMode}
                        className="dark:border-gray-600 dark:text-white dark:hover:bg-gray-800"
                      >
                        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                      </Button>

                      <Button
                        asChild
                        className="dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white"
                      >
                        <a href={auth.signup.url}>{auth.signup.text}</a>
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Navbar };