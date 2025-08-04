import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { ModelScene } from './components/ModelScene';
import { TypeAnimation } from 'react-type-animation';
import { Stars } from '@react-three/drei';
import StarParticles from './components/StarParticle';
import FloatingRetroIcons from './components/FloatRetroIcon';
import HeroSection from './components/HeroSection';
import QuickLinksSection from './components/QuickLinksSection';
import MeetingsSection from './components/MeetingsSection';
import PerformanceSection from './components/PerformanceSection';
import AnnouncementsSection from './components/AnnouncementsSection';
import NewsSection from './components/NewsSection';
import ProjectsSection from './components/ProjectsSection';
import TeamsSection from './components/TeamsSection';
const GameDevIntranet = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [animateChart, setAnimateChart] = useState(false);
  // Sidebar state for mobile nav
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1 },
    },
  };

  // Navigation handler
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setSidebarOpen(false); // Close sidebar on nav click
    }
  };

  // Intersection Observer Hook
  const useScrollAnimation = () => {
    const controls = useAnimation();
    const ref = useRef(null);
    const inView = useInView(ref, {
      threshold: 0.1,
      triggerOnce: false
    });

    useEffect(() => {
      if (inView) {
        controls.start('visible');
      }
      else
      {
        controls.start('hidden');
      }
    }, [controls, inView]);

    return [ref, controls];
  };

  // Helper hook for in-view animation
  function useSectionAnimation() {
    const controls = useAnimation();
    const ref = useRef(null);
    const inView = useInView(ref, { threshold: 0.2 });
    useEffect(() => {
      if (inView) {
        controls.start('visible');
      } else {
        controls.start('hidden');
      }
    }, [inView, controls]);
    return [ref, controls];
  }

  // Data
  const quickLinks = [
    { icon: '🎮', title: 'Game Design', color: 'from-blue-500 to-purple-500' },
    { icon: '🎨', title: 'Art Assets', color: 'from-pink-500 to-red-500' },
    { icon: '💻', title: 'Development', color: 'from-green-500 to-teal-500' },
    { icon: '🏗️', title: 'Infrastructure', color: 'from-yellow-500 to-orange-500' },
    { icon: '📚', title: 'Support Docs', color: 'from-indigo-500 to-blue-500' },
    { icon: '✅', title: 'Quality Assurance', color: 'from-purple-500 to-pink-500' }
  ];

  const meetings = [
    {
      title: 'Project Alpha Sync-Up',
      date: 'Tomorrow at 2:00 PM',
      icon: '🚀',
      avatars: ['JS', 'AL', 'MK']
    },
    {
      title: 'Design Review & Feedback',
      date: 'Friday at 10:00 AM',
      icon: '🎨',
      avatars: ['EM', 'RJ']
    },
    {
      title: 'Game Engine Deep Dive',
      date: 'Monday at 3:00 PM',
      icon: '🔧',
      avatars: ['TK', 'LP']
    },
    {
      title: 'Sprint Planning',
      date: 'Wednesday at 9:00 AM',
      icon: '🎯',
      avatars: ['DJ', 'SK', 'NM']
    }
  ];

  const chartData = [
    { height: 60, color: 'bg-blue-500' },
    { height: 80, color: 'bg-pink-500' },
    { height: 45, color: 'bg-teal-500' },
    { height: 90, color: 'bg-purple-500' },
    { height: 70, color: 'bg-orange-500' },
    { height: 85, color: 'bg-indigo-500' }
  ];

  const announcements = [
    {
      icon: '🎉',
      title: 'Happy Birthday Jessica!',
      description: 'Wishing our amazing UI/UX designer a fantastic day!',
      color: 'from-pink-400 to-purple-400'
    },
    {
      icon: '⭐',
      title: 'Employee of the Month: David Lee',
      description: 'Outstanding performance in our latest game release!',
      color: 'from-blue-400 to-teal-400'
    },
    {
      icon: '🎊',
      title: 'Studio Holiday Party Announced!',
      description: 'Join us next Friday for celebrations and team bonding!',
      color: 'from-purple-400 to-pink-400'
    }
  ];

  const news = [
    {
      title: 'Studio X Launches New Game Title',
      description: 'Our latest RPG adventure hits the market next month with revolutionary gameplay mechanics.',
      date: 'Published: Dec 15, 2024'
    },
    {
      title: 'Innovation Hub Opens Next Week',
      description: 'New collaborative space for experimental projects and creative brainstorming sessions.',
      date: 'Published: Dec 18, 2024'
    }
  ];

  const projects = [
    {
      title: 'Project Nova Level Design',
      description: 'Environment art and level architecture progressing smoothly',
      progress: 75,
      due: 'Jan 15, 2025'
    },
    {
      title: 'Phoenix Engine Optimization',
      description: 'Performance improvements and bug fixes for next release',
      progress: 60,
      due: 'Feb 20, 2025'
    }
  ];

 
  // Hook instances for each section
  const [quickLinksTitleRef, quickLinksTitleControls] = useSectionAnimation();
  const [quickLinksGridRef, quickLinksGridControls] = useSectionAnimation();
  const [meetingsTitleRef, meetingsTitleControls] = useSectionAnimation();
  const [meetingsGridRef, meetingsGridControls] = useSectionAnimation();
  const [performanceTitleRef, performanceTitleControls] = useSectionAnimation();
  const [performanceGridRef, performanceGridControls] = useSectionAnimation();
  const [announcementsTitleRef, announcementsTitleControls] = useSectionAnimation();
  const [announcementsGridRef, announcementsGridControls] = useSectionAnimation();
  const [newsTitleRef, newsTitleControls] = useSectionAnimation();
  const [newsGridRef, newsGridControls] = useSectionAnimation();
  const [projectsTitleRef, projectsTitleControls] = useSectionAnimation();
  const [projectsGridRef, projectsGridControls] = useSectionAnimation();
  const [teamsTitleRef, teamsTitleControls] = useSectionAnimation();
  const [teamsGridRef, teamsGridControls] = useSectionAnimation();

  return (
    <div className="h-screen w-full overflow-y-auto scroll-smooth snap-y snap-mandatory font-sans bg-gradient-to-br from-[#0a0c1b] via-[#181c2f] to-[#2d3250] overflow-x-hidden relative scrollbar-hide">
      {/* Blurred Gradient Overlays */}
      <div className="pointer-events-none fixed top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-gradient-to-br from-pink-500/30 via-purple-500/20 to-blue-500/10 rounded-full blur-3xl z-0" />
      <div className="pointer-events-none fixed bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-gradient-to-br from-yellow-400/20 via-pink-400/20 to-purple-400/10 rounded-full blur-3xl z-0" />
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#181c2f]/80 to-[#23274a]/80 backdrop-blur-lg px-8 py-5 flex justify-between items-center shadow-2xl rounded-b-3xl border-b border-[#23274a]/40">
        <div className="text-3xl font-extrabold bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent tracking-wide drop-shadow-lg">GameDevHub</div>
        <ul className="hidden md:flex space-x-8 text-white font-semibold text-lg uppercase">
          {['home','projects','teams','meetings','announcements','performance'].map((section) => (
            <li key={section} onClick={() => scrollToSection(section)} className={`cursor-pointer px-3 py-1 rounded-full transition relative ${activeSection===section ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg' : 'hover:bg-white/10'}`}>{section.charAt(0).toUpperCase()+section.slice(1)}</li>
          ))}
        </ul>
      </nav>
      {/* Hero Section */}
      <HeroSection />
      {/* Quick Links - Glassy Cards */}
      <QuickLinksSection
        quickLinks={quickLinks}
        titleRef={quickLinksTitleRef}
        titleControls={quickLinksTitleControls}
        gridRef={quickLinksGridRef}
        gridControls={quickLinksGridControls}
        containerVariants={containerVariants}
        cardVariants={cardVariants}
      />
      {/* Upcoming Meetings - Glassy Cards */}
      <MeetingsSection
        meetings={meetings}
        titleRef={meetingsTitleRef}
        titleControls={meetingsTitleControls}
        gridRef={meetingsGridRef}
        gridControls={meetingsGridControls}
        containerVariants={containerVariants}
        cardVariants={cardVariants}
      />
      {/* Studio Performance - Glassy Card with Animated Bars */}
      <PerformanceSection
        chartData={chartData}
        titleRef={performanceTitleRef}
        titleControls={performanceTitleControls}
        gridRef={performanceGridRef}
        gridControls={performanceGridControls}
        containerVariants={containerVariants}
        cardVariants={cardVariants}
      />
      {/* Announcements - Glassy Cards */}
      <AnnouncementsSection
        announcements={announcements}
        titleRef={announcementsTitleRef}
        titleControls={announcementsTitleControls}
        gridRef={announcementsGridRef}
        gridControls={announcementsGridControls}
        containerVariants={containerVariants}
        cardVariants={cardVariants}
      />
      {/* Company News - Glassy Cards */}
      <NewsSection
        news={news}
        titleRef={newsTitleRef}
        titleControls={newsTitleControls}
        gridRef={newsGridRef}
        gridControls={newsGridControls}
        containerVariants={containerVariants}
        cardVariants={cardVariants}
      />
      {/* Project Updates - Glassy Cards */}
      <ProjectsSection
        projects={projects}
        titleRef={projectsTitleRef}
        titleControls={projectsTitleControls}
        gridRef={projectsGridRef}
        gridControls={projectsGridControls}
        containerVariants={containerVariants}
        cardVariants={cardVariants}
      />
      {/* Team Spotlight - Glassy Card */}
      <TeamsSection
        titleRef={teamsTitleRef}
        titleControls={teamsTitleControls}
        gridRef={teamsGridRef}
        gridControls={teamsGridControls}
        cardVariants={cardVariants}
      />
    </div>
  );
};

export default GameDevIntranet;