"use client";

import { Home, User, Briefcase, FileText, Mail } from 'lucide-react';
import { FloatingNav } from "@/components/FloatingNav.js";

export function NavBarDemo() {
  const navItems = [
    { name: 'Home', link: '#', icon: <Home size={18} /> },
    { name: 'About', link: '#', icon: <User size={18} /> },
    { name: 'Skills', link: '#', icon: <FileText size={18} /> },
    { name: 'Projects', link: '#', icon: <Briefcase size={18} /> },
    { name: 'Contact', link: '#', icon: <Mail size={18} /> }
  ];

  return <FloatingNav navItems={navItems} />;
}
