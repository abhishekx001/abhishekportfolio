"use client";

import { Home, User, Briefcase, FileText, Mail } from 'lucide-react';
import { NavBar } from "@/components/NavBar.js";

export function NavBarDemo() {
  const navItems = [
    { name: 'Home', url: '#', icon: Home },
    { name: 'About', url: '#', icon: User },
    { name: 'Skills', url: '#', icon: FileText },
    { name: 'Projects', url: '#', icon: Briefcase },
    { name: 'Contact', url: '#', icon: Mail }
  ];

  return <NavBar items={navItems} />;
}
