import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight, BarChart3, FileText } from 'lucide-react';

const ContentStrategyDashboard = () => {
  const [expandedPages, setExpandedPages] = useState(new Set(['template_1']));
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    // Real data from HTML file Content Strategy - all 13 templates
    const realData = {
      pages: [
        {
          id: 'page_0',
          name: 'Template 1: Home Page',
          description: 'Global Page',
          icon: '🏠',
          pageCount: 1,
          totalWords: '~1,200',
          blocks: [
            { id: 'block_1_0', name: 'Hero Section', type: 'Headline + subtitle + CTA button', wordCount: '40–50', priority: 'high', icon: '🎯' },
            { id: 'block_1_1', name: 'Quick Navigation by Needs - Health Conditions Search', type: 'Browse tests by symptoms, risk factors, family history', wordCount: '50–60', priority: 'high', icon: '🧭' },
            { id: 'block_1_2', name: 'Trust & Accreditations', type: 'Logos + short text', wordCount: '80–100', priority: 'medium', icon: '📝' },
            { id: 'block_1_3', name: 'Our Medical Team', type: 'Grid of doctors + bios', wordCount: '120–150', priority: 'medium', icon: '👨‍⚕️' },
            { id: 'block_1_4', name: 'Our Approach to Treatment', type: 'Section with bullets + diagram', wordCount: '150–180', priority: 'medium', icon: '📝' },
            { id: 'block_1_5', name: 'Our Medical Services', type: 'Grid of service categories', wordCount: '100–120', priority: 'medium', icon: '🔬' },
            { id: 'block_1_6', name: 'Why Choose Us', type: 'Bullet points + highlights', wordCount: '100–120', priority: 'medium', icon: '📝' },
            { id: 'block_1_7', name: 'Our Results in Numbers', type: 'Infographic with KPIs', wordCount: '80–100', priority: 'medium', icon: '📊' },
            { id: 'block_1_8', name: 'Patient Testimonials', type: 'Quotes + photos', wordCount: '100–120', priority: 'medium', icon: '💬' },
            { id: 'block_1_9', name: 'Blog', type: 'Grid of articles + intro text', wordCount: '60–80', priority: 'high', icon: '📝' },
            { id: 'block_1_10', name: 'GetChecked at Home Banner', type: 'Banner + CTA', wordCount: '40–50', priority: 'medium', icon: '📝' },
            { id: 'block_1_11', name: 'Convenient Ways to Contact Us', type: 'List of contact options', wordCount: '60–70', priority: 'high', icon: '📞' },
            { id: 'block_1_12', name: 'Location & Working Hours', type: 'Map + short text', wordCount: '50–60', priority: 'medium', icon: '📍' },
            { id: 'block_1_13', name: 'Cookie Banner', type: 'Short legal text', wordCount: '20–30', priority: 'low', icon: '⚖️' },
            { id: 'block_1_14', name: 'Medical Disclaimers', type: 'Legal disclaimer block', wordCount: '80–100', priority: 'low', icon: '⚖️' }
          ]
        },
        {
          id: 'page_1',
          name: 'Template 2: About Page',
          description: 'Global Page',
          icon: 'ℹ️',
          pageCount: 1,
          totalWords: '~900',
          blocks: [
            { id: 'block_2_0', name: 'Hero Section — Clinic Mission', type: 'Headline + short intro', wordCount: '50–60', priority: 'high', icon: '🎯' },
            { id: 'block_2_1', name: 'History & Foundation (Timeline)', type: 'Timeline blocks', wordCount: '100–110', priority: 'medium', icon: '📅' },
            { id: 'block_2_2', name: 'Our Values & Principles', type: 'Bullet points + short text', wordCount: '60–70', priority: 'medium', icon: '📝' },
            { id: 'block_2_3', name: 'Our Approach to Treatment', type: 'Section with diagram', wordCount: '80–90', priority: 'medium', icon: '📝' },
            { id: 'block_2_4', name: 'Clinic Leadership, Achievements & Statistics', type: 'Profiles + key numbers', wordCount: '100–110', priority: 'medium', icon: '👥' },
            { id: 'block_2_5', name: 'Our Medical Team', type: 'Doctors grid', wordCount: '80–90', priority: 'medium', icon: '👨‍⚕️' },
            { id: 'block_2_6', name: 'Accreditations & Licenses', type: 'Logos + description', wordCount: '60–70', priority: 'medium', icon: '🏆' },
            { id: 'block_2_7', name: 'International Partnerships', type: 'Logos + 1–2 lines', wordCount: '40–50', priority: 'medium', icon: '🌍' },
            { id: 'block_2_8', name: 'Modern Equipment', type: 'Visuals + short text', wordCount: '40–50', priority: 'medium', icon: '⚙️' },
            { id: 'block_2_9', name: 'Patient Testimonials', type: 'Quotes + photos', wordCount: '70–80', priority: 'medium', icon: '💬' },
            { id: 'block_2_10', name: 'Our Commitments to Patients', type: 'Short section + bullets', wordCount: '60–70', priority: 'medium', icon: '💛' },
            { id: 'block_2_11', name: 'Facilities & Comfort', type: 'Photos + captions', wordCount: '40–50', priority: 'low', icon: '🏢' },
            { id: 'block_2_12', name: 'Social Responsibility', type: 'Section with highlights', wordCount: '40–50', priority: 'low', icon: '🤝' },
            { id: 'block_2_13', name: 'Convenient Ways to Contact Us', type: 'List of contact options', wordCount: '60–70', priority: 'high', icon: '📞' },
            { id: 'block_2_14', name: 'Location & Working Hours', type: 'Map + short text', wordCount: '50–60', priority: 'medium', icon: '📍' },
            { id: 'block_2_15', name: 'Medical Disclaimers', type: 'Legal disclaimer block', wordCount: '80–100', priority: 'low', icon: '⚖️' }
          ]
        },
        {
          id: 'page_2',
          name: 'Template 3: Contact Page',
          description: 'Global Page',
          icon: '📞',
          pageCount: 1,
          totalWords: '~500',
          blocks: [
            { id: 'block_3_0', name: 'Hero Section', type: 'Headline + short text', wordCount: '40–50', priority: 'high', icon: '🎯' },
            { id: 'block_3_1', name: 'Specialized Contact Form', type: 'Form + short intro', wordCount: '50–60', priority: 'high', icon: '📝' },
            { id: 'block_3_2', name: 'Location & Working Hours', type: 'Map + short text', wordCount: '50–60', priority: 'high', icon: '📍' },
            { id: 'block_3_3', name: 'Patient Information (Before Visit)', type: 'Checklist or bullets', wordCount: '70–80', priority: 'medium', icon: '📋' },
            { id: 'block_3_4', name: 'Payment & Insurance', type: 'Section with bullets', wordCount: '70–80', priority: 'medium', icon: '💰' },
            { id: 'block_3_5', name: 'Contact Center Team', type: 'Staff photos + text', wordCount: '50–60', priority: 'medium', icon: '👥' },
            { id: 'block_3_6', name: 'Emergency Situations', type: 'Highlighted box', wordCount: '50–60', priority: 'high', icon: '🚨' },
            { id: 'block_3_7', name: 'GetChecked at Home Banner', type: 'Banner + CTA', wordCount: '30–40', priority: 'medium', icon: '🏠' },
            { id: 'block_3_8', name: 'FAQ — Contact Questions', type: 'Collapsible Q&A', wordCount: '50–60', priority: 'medium', icon: '❓' },
            { id: 'block_3_9', name: 'Medical Disclaimers', type: 'Legal disclaimer block', wordCount: '80–100', priority: 'low', icon: '⚖️' }
          ]
        },
        {
          id: 'page_3',
          name: 'Template 4: Privacy Policy Page',
          description: 'Global Page',
          icon: '⚖️',
          pageCount: 1,
          totalWords: '~1,200',
          blocks: [
            { id: 'block_4_0', name: 'Privacy Policy Text', type: 'Long-form legal text, structured with headings (H2/H3)', wordCount: '1,200–1,500', priority: 'low', icon: '⚖️' }
          ]
        },
        {
          id: 'page_4',
          name: 'Template 5: GetChecked at Home',
          description: 'Global Page',
          icon: '🏠',
          pageCount: 1,
          totalWords: '~700',
          blocks: [
            { id: 'block_5_0', name: 'Hero Section – Main Offer', type: 'Headline + short intro + CTA', wordCount: '40–50', priority: 'high', icon: '🎯' },
            { id: 'block_5_1', name: 'Quick Service Selection', type: 'Icons + short text', wordCount: '40–50', priority: 'high', icon: '🧭' },
            { id: 'block_5_2', name: 'Available Tests & Lab Packages', type: 'Grid + descriptions', wordCount: '80–90', priority: 'high', icon: '🧪' },
            { id: 'block_5_3', name: 'Doctors at GetChecked at Home', type: 'Doctor cards + bios', wordCount: '60–70', priority: 'medium', icon: '👨‍⚕️' },
            { id: 'block_5_4', name: 'Procedural Services at Home', type: 'List + short descriptions', wordCount: '60–70', priority: 'medium', icon: '🔬' },
            { id: 'block_5_5', name: 'Service Areas & Logistics', type: 'Map + text', wordCount: '40–50', priority: 'medium', icon: '📍' },
            { id: 'block_5_6', name: 'Advantages of Home Services', type: 'Bullets + highlights', wordCount: '60–70', priority: 'medium', icon: '✨' },
            { id: 'block_5_7', name: 'Preparation for Home Visit', type: 'Checklist', wordCount: '50–60', priority: 'medium', icon: '📋' },
            { id: 'block_5_8', name: 'Pricing & Packages', type: 'Packages grid', wordCount: '70–80', priority: 'high', icon: '💰' },
            { id: 'block_5_9', name: 'Working Hours & Availability', type: 'Short text', wordCount: '30–40', priority: 'medium', icon: '🕒' },
            { id: 'block_5_10', name: 'Tracking & Notifications', type: 'Short section', wordCount: '40–50', priority: 'low', icon: '📱' },
            { id: 'block_5_11', name: 'Safety & Quality Standards', type: 'Bullets + badges', wordCount: '60–70', priority: 'medium', icon: '🛡️' },
            { id: 'block_5_12', name: 'FAQ — Home Services', type: 'Q&A accordion', wordCount: '50–60', priority: 'medium', icon: '❓' },
            { id: 'block_5_13', name: 'Client Testimonials', type: 'Quotes + photos', wordCount: '50–60', priority: 'medium', icon: '💬' },
            { id: 'block_5_14', name: 'Convenient Ways to Contact Us', type: 'List of contact options', wordCount: '60–70', priority: 'high', icon: '📞' },
            { id: 'block_5_15', name: 'Location & Working Hours', type: 'Map + short text', wordCount: '50–60', priority: 'medium', icon: '📍' },
            { id: 'block_5_16', name: 'Medical Disclaimers', type: 'Legal disclaimer block', wordCount: '80–100', priority: 'low', icon: '⚖️' }
          ]
        },
        {
          id: 'page_5',
          name: 'Template 6: Section Landing (L1)',
          description: 'Top-level section pages that provide an overview, introductory content, and navigation to subcategories or individual services/programs. Optimized for broad, high-level search queries. Overview pages for Get Tested, Get Treated, Regenerate, Live Beyond 100',
          icon: '📄',
          pageCount: 4,
          totalWords: '~700',
          blocks: [
            { id: 'block_6_0', name: 'Hero Section', type: 'Headline + subtitle + CTA', wordCount: '40–50', priority: 'high', icon: '🎯' },
            { id: 'block_6_1', name: 'Section Overview', type: 'Intro text + sub-section highlights', wordCount: '120–150', priority: 'high', icon: '📝' },
            { id: 'block_6_2', name: 'Featured Services', type: 'Cards or grid with short descriptions', wordCount: '70–90', priority: 'medium', icon: '⭐' },
            { id: 'block_6_3', name: 'Medical Team', type: 'Mini-grid with photos + titles', wordCount: '60–80', priority: 'medium', icon: '👨‍⚕️' },
            { id: 'block_6_4', name: 'Services Categories (L2) Showcase', type: 'Grid/list of categories with intros', wordCount: '150–180', priority: 'high', icon: '📂' },
            { id: 'block_6_5', name: 'Success Stories', type: 'Short testimonials or case blurbs', wordCount: '60–80', priority: 'medium', icon: '💬' },
            { id: 'block_6_6', name: 'FAQ — Section (L1)', type: 'Collapsible Q&A list', wordCount: '100–120', priority: 'medium', icon: '❓' },
            { id: 'block_6_7', name: 'Convenient Ways to Contact Us', type: 'List of contact options', wordCount: '60–70', priority: 'high', icon: '📞' },
            { id: 'block_6_8', name: 'Location & Working Hours', type: 'Map + short text', wordCount: '50–60', priority: 'medium', icon: '📍' },
            { id: 'block_6_9', name: 'Medical Disclaimers', type: 'Legal disclaimer block', wordCount: '80–100', priority: 'low', icon: '⚖️' }
          ]
        },
        {
          id: 'page_6',
          name: 'Template 7: Get Tested — Category (L2)',
          description: 'Subpages under L1, each dedicated to a specific test category',
          icon: '🧪',
          pageCount: 13,
          totalWords: '~800',
          blocks: [
            { id: 'block_7_0', name: 'Testing Category Hero', type: 'Category intro + value prop + CTA + breadcrumbs', wordCount: '60–80', priority: 'high', icon: '🎯' },
            { id: 'block_7_1', name: 'Category Medical Overview', type: 'Clinical rationale, what tests detect', wordCount: '120–150', priority: 'high', icon: '📋' },
            { id: 'block_7_2', name: 'Tests Catalog Grid', type: 'Interactive list of tests (name, desc, price, turnaround, CTA)', wordCount: '200–220', priority: 'high', icon: '🧪' },
            { id: 'block_7_3', name: 'Testing Specialists', type: 'Mini-profiles of doctors/experts', wordCount: '80–100', priority: 'medium', icon: '👨‍⚕️' },
            { id: 'block_7_4', name: 'Who Should Get Tested', type: 'Recommendations by age, gender, risk groups', wordCount: '100–120', priority: 'medium', icon: '👥' },
            { id: 'block_7_5', name: 'Test Preparation Guide', type: 'Preparation rules for patients', wordCount: '80–100', priority: 'medium', icon: '📋' },
            { id: 'block_7_6', name: 'Testing Packages & Combos', type: 'Bundles, subscriptions, combos', wordCount: '80–100', priority: 'medium', icon: '📦' },
            { id: 'block_7_7', name: 'Technology & Accuracy', type: 'Lab equipment, certifications, accuracy rates', wordCount: '80–100', priority: 'medium', icon: '⚙️' },
            { id: 'block_7_8', name: 'Medical Disclaimers', type: 'Legal disclaimer block', wordCount: '80–100', priority: 'low', icon: '⚖️' }
          ]
        },
        {
          id: 'page_7',
          name: 'Template 8: Get Treated — Category (L2)',
          description: 'Subpages under L1, each dedicated to a specific treatment category',
          icon: '🏥',
          pageCount: 10,
          totalWords: '~800',
          blocks: [
            { id: 'block_8_0', name: 'Category Hero', type: 'Breadcrumbs, category title, value proposition, hero visual, call-to-action', wordCount: '70–80', priority: 'high', icon: '🎯' },
            { id: 'block_8_1', name: 'Category Overview', type: 'Philosophy, general approach, conditions addressed, scientific foundation, expected outcomes', wordCount: '100–110', priority: 'high', icon: '📝' },
            { id: 'block_8_2', name: 'Treatments Categories Grid', type: 'Interactive grid of sub-programs with short intro, duration, price range, benefits, and CTA', wordCount: '130–140', priority: 'high', icon: '🔬' },
            { id: 'block_8_3', name: 'Category Specialists Medical Team', type: 'Featured doctors and medical experts, credentials, research background, consultation CTA', wordCount: '70–80', priority: 'medium', icon: '👨‍⚕️' },
            { id: 'block_8_4', name: 'Treatment Approach', type: 'Unified methodology: assessment → protocol design → implementation → integration & maintenance', wordCount: '60–70', priority: 'medium', icon: '📋' },
            { id: 'block_8_5', name: 'Conditions Treated', type: 'List of key conditions under this category, severity levels, treatment timelines, potential combinations', wordCount: '70–80', priority: 'medium', icon: '🏥' },
            { id: 'block_8_6', name: 'Treatment Outcomes', type: 'Success metrics (biomarkers, quality of life, recovery rates), patient stories, long-term impact', wordCount: '60–70', priority: 'medium', icon: '📊' },
            { id: 'block_8_7', name: 'Patient Journey', type: 'Step-by-step journey: discovery → consultation → treatment → follow-up → long-term wellness', wordCount: '50–60', priority: 'medium', icon: '🗺️' },
            { id: 'block_8_8', name: 'Testimonials & Case Studies', type: 'Patient reviews, before & after cases, evidence-based success stories, ethical diversity', wordCount: '40–50', priority: 'medium', icon: '💬' },
            { id: 'block_8_9', name: 'FAQ — Category (L2)', type: '5–7 FAQs (general + category-specific), medically reviewed answers', wordCount: '70–80', priority: 'medium', icon: '❓' },
            { id: 'block_8_10', name: 'Convenient Ways to Contact Us', type: 'Contact options list (phone, WhatsApp, email, online form), CTA', wordCount: '60–70', priority: 'high', icon: '📞' },
            { id: 'block_8_11', name: 'Medical Disclaimers', type: 'Legal disclaimer block; medically reviewed, compliance with DHA/MOHAP', wordCount: '80–100', priority: 'low', icon: '⚖️' }
          ]
        },
        {
          id: 'page_8',
          name: 'Template 9: Regenerate — Category/Program (L2)',
          description: 'Subpages under L1, each dedicated to regenerative protocols programs',
          icon: '🔄',
          pageCount: 7,
          totalWords: '~900',
          blocks: [
            { id: 'block_9_0', name: 'Program Hero', type: 'Intro with value proposition, visuals, CTA', wordCount: '60–70', priority: 'high', icon: '🎯' },
            { id: 'block_9_1', name: 'Program-Specific Science', type: 'Scientific basis, simplified, references', wordCount: '80–100', priority: 'high', icon: '🔬' },
            { id: 'block_9_2', name: 'Biological Age Assessment', type: 'Link with baseline markers', wordCount: '40–60', priority: 'medium', icon: '📊' },
            { id: 'block_9_3', name: 'Program Protocol Details', type: 'Step-by-step outline', wordCount: '60–70', priority: 'medium', icon: '📋' },
            { id: 'block_9_4', name: 'Longevity Experts Team', type: 'Doctors & specialists', wordCount: '50–70', priority: 'medium', icon: '👨‍⚕️' },
            { id: 'block_9_5', name: 'Personalized Protocol Design', type: 'Customization, diagnostics', wordCount: '50–70', priority: 'medium', icon: '🎨' },
            { id: 'block_9_6', name: 'Regenerative Technologies', type: 'Equipment, labs, methods', wordCount: '50–70', priority: 'medium', icon: '⚙️' },
            { id: 'block_9_7', name: 'Candidacy Assessment', type: 'Eligibility criteria, questionnaires', wordCount: '50–70', priority: 'medium', icon: '📋' },
            { id: 'block_9_8', name: 'Program Timeline', type: 'Duration, milestones (short & clear)', wordCount: '30–40', priority: 'medium', icon: '📅' },
            { id: 'block_9_9', name: 'Biomarker Tracking Dashboard', type: 'Progress monitoring with data', wordCount: '30–40', priority: 'medium', icon: '📊' },
            { id: 'block_9_10', name: 'Safety & Contraindications', type: 'Warnings & safety protocols', wordCount: '50–70', priority: 'medium', icon: '⚠️' },
            { id: 'block_9_11', name: 'Scientific Validation', type: 'Clinical studies, expert endorsements', wordCount: '50–70', priority: 'medium', icon: '🔬' },
            { id: 'block_9_12', name: 'Lifestyle Integration', type: 'Diet, exercise, sleep, mindfulness', wordCount: '50–70', priority: 'medium', icon: '🌱' },
            { id: 'block_9_13', name: 'Program-Specific Results', type: 'Outcomes, success rates, case studies', wordCount: '60–80', priority: 'medium', icon: '📈' },
            { id: 'block_9_14', name: 'Investment & Value', type: 'Pricing tiers, ROI on health outcomes', wordCount: '50–70', priority: 'high', icon: '💰' },
            { id: 'block_9_15', name: 'Sub-Programs & Combinations', type: 'Only if applicable – for complex programs', wordCount: '50–70', priority: 'medium', icon: '🔗' },
            { id: 'block_9_16', name: 'FAQ (Category L2)', type: '8–10 FAQs, medically reviewed', wordCount: '70–90', priority: 'medium', icon: '❓' },
            { id: 'block_9_17', name: 'Convenient Ways to Contact Us', type: 'Contact channels, booking', wordCount: '60–70', priority: 'high', icon: '📞' },
            { id: 'block_9_18', name: 'Medical Disclaimers', type: 'Legal & compliance info', wordCount: '80–100', priority: 'low', icon: '⚖️' }
          ]
        },
        {
          id: 'page_9',
          name: 'Template 10: Live Beyond 100 — Program (L2)',
          description: 'Subpages under L1, each dedicated to longevity programs',
          icon: '💚',
          pageCount: 4,
          totalWords: '~900',
          blocks: [
            { id: 'block_10_0', name: 'Program Hero', type: 'Intro section with key value proposition, visuals, CTA', wordCount: '50–70', priority: 'high', icon: '🎯' },
            { id: 'block_10_1', name: 'Program-Specific Science', type: 'Scientific basis of this program, simplified explanations, references', wordCount: '90–110', priority: 'high', icon: '🔬' },
            { id: 'block_10_2', name: 'Biological Age Assessment', type: 'Integration with biological age and baseline health markers', wordCount: '70–90', priority: 'medium', icon: '📊' },
            { id: 'block_10_3', name: 'Protocol Overview', type: 'Step-by-step structure: phases, duration, intensity', wordCount: '80–100', priority: 'medium', icon: '📋' },
            { id: 'block_10_4', name: 'Technologies & Tools', type: 'Devices, lab methods, innovations unique to the program', wordCount: '70–90', priority: 'medium', icon: '⚙️' },
            { id: 'block_10_5', name: 'Medical Team Expertise', type: 'Specialists leading this intervention, credentials', wordCount: '60–80', priority: 'medium', icon: '👨‍⚕️' },
            { id: 'block_10_6', name: 'Personalized Assessment', type: 'Pre-checks, readiness criteria, questionnaires, diagnostics', wordCount: '60–80', priority: 'medium', icon: '📝' },
            { id: 'block_10_7', name: 'Patient Journey Timeline', type: 'What happens before, during, after the intervention', wordCount: '70–90', priority: 'medium', icon: '🗺️' },
            { id: 'block_10_8', name: 'Outcomes & Metrics', type: 'Expected improvements, measurable KPIs, tracking approach', wordCount: '70–90', priority: 'medium', icon: '📊' },
            { id: 'block_10_9', name: 'Program Testimonials', type: 'Real cases or patient reviews relevant to this program', wordCount: '50–70', priority: 'medium', icon: '💬' },
            { id: 'block_10_10', name: 'Program FAQs', type: 'Preparation, risks, aftercare, common questions', wordCount: '80–100', priority: 'medium', icon: '❓' },
            { id: 'block_10_11', name: 'Safety & Contraindications', type: 'Warnings, exclusions, protocols for high-risk patients', wordCount: '50–70', priority: 'medium', icon: '⚠️' },
            { id: 'block_10_12', name: 'Investment & Value', type: 'Pricing tiers, program value, ROI on health outcomes', wordCount: '60–80', priority: 'high', icon: '💰' },
            { id: 'block_10_13', name: 'Booking & Consultation', type: 'Options for consultation (free/paid), telemedicine, VIP services', wordCount: '60–80', priority: 'high', icon: '📞' },
            { id: 'block_10_14', name: 'Medical Disclaimers', type: 'Legal & compliance notes (DHA/MOHAP, not a substitute for consultation)', wordCount: '80–100', priority: 'low', icon: '⚖️' }
          ]
        },
        {
          id: 'page_10',
          name: 'Template 11: Get Tested — Test Detail (L3)',
          description: 'A level used for specific tests within an L2 page. Each L3 page has its own unique URL, allowing for detailed content, SEO targeting, and direct linking.',
          icon: '🧪',
          pageCount: 58,
          totalWords: '~900',
          blocks: [
            { id: 'block_11_0', name: 'Test Hero', type: 'Intro with breadcrumbs, test title, value proposition, key metrics (sample, TAT, price, accuracy, biomarkers), hero visual, primary CTA', wordCount: '60–80', priority: 'high', icon: '🎯' },
            { id: 'block_11_1', name: 'Test Overview', type: 'Clinical importance, what the test measures, actionable insights, scientific backing', wordCount: '100–120', priority: 'high', icon: '📝' },
            { id: 'block_11_2', name: 'Diagnostic Technology', type: 'Platforms used (NGS, WGS, chemistry analyzers, imaging), quality standards (CAP, ISO, DHA), innovation advantages', wordCount: '80–100', priority: 'medium', icon: '⚙️' },
            { id: 'block_11_3', name: 'Specimen Collection & Logistics', type: 'Sample type & requirements, collection options (clinic, home, corporate), integrity & chain-of-custody', wordCount: '60–80', priority: 'medium', icon: '🧪' },
            { id: 'block_11_4', name: 'Preparation Guidelines', type: 'General (fasting, hydration, meds) + test-specific (e.g., genetic, hormones, cardiac), Dubai climate & Ramadan considerations', wordCount: '80–100', priority: 'medium', icon: '📋' },
            { id: 'block_11_5', name: 'Results & Interpretation', type: 'Turnaround times (TAT), delivery channels (portal, app, email, SMS), report contents, physician/genetic counseling options', wordCount: '80–100', priority: 'medium', icon: '📊' },
            { id: 'block_11_6', name: 'Medical Conditions Addressed', type: 'Primary conditions detected, risk stratification, clinical utility for treatment/prevention', wordCount: '100–120', priority: 'medium', icon: '🏥' },
            { id: 'block_11_7', name: 'Pricing & Value Proposition', type: 'Transparent pricing, cost breakdown, package deals, international comparison, insurance/payment options', wordCount: '80–100', priority: 'high', icon: '💰' },
            { id: 'block_11_8', name: 'Scheduling & Logistics', type: 'Step-by-step process: booking → collection → lab → report → follow-up; appointment options; locations & timings', wordCount: '60–80', priority: 'medium', icon: '📅' },
            { id: 'block_11_9', name: 'Who Should Get Tested', type: 'Demographics, risk factors, gender-specific, cultural/regional predispositions', wordCount: '80–100', priority: 'medium', icon: '👥' },
            { id: 'block_11_10', name: 'Health Conditions Search (Optional)', type: '"If you have X symptoms/family history → consider this test" (symptom-to-test matcher)', wordCount: '50–60', priority: 'low', icon: '🔍' },
            { id: 'block_11_11', name: 'Frequently Asked Questions (FAQ)', type: '15–20 test-specific questions + universal (accuracy, insurance, fasting, abnormal results)', wordCount: '120–150', priority: 'medium', icon: '❓' },
            { id: 'block_11_12', name: 'Convenient Ways to Contact Us', type: 'Phone, WhatsApp, chat, email, in-person; language support; response times', wordCount: '60–70', priority: 'high', icon: '📞' },
            { id: 'block_11_13', name: 'Location & Working Hours', type: 'Main lab, collection points, maps, parking, metro/bus, holiday/Ramadan adjustments', wordCount: '50–60', priority: 'medium', icon: '📍' },
            { id: 'block_11_14', name: 'Medical Disclaimers', type: 'DHA/MOHAP license info, CAP/ISO accreditations, disclaimer text ("not a diagnostic replacement"), privacy/confidentiality, limitations', wordCount: '80–100', priority: 'low', icon: '⚖️' },
            { id: 'block_11_15', name: 'Related Tests & Recommendations', type: 'Complementary tests, package bundles, next-step guidance, family screening options', wordCount: '50–70', priority: 'medium', icon: '🔗' }
          ]
        },
        {
          id: 'page_11',
          name: 'Template 12: Get Treated — Treatment Detail (L3)',
          description: 'A level used for specific treatments and procedures within an L2 page. Each L3 page has its own unique URL, allowing for detailed content, SEO targeting, and direct linking.',
          icon: '🏥',
          pageCount: 33,
          totalWords: '~1,100',
          blocks: [
            { id: 'block_12_0', name: 'Treatment Hero', type: 'Headline, subtitle, KPIs, hero visual, CTA', wordCount: '70–90', priority: 'high', icon: '🎯' },
            { id: 'block_12_1', name: 'Medical Indications & Conditions', type: 'Approved indications, candidates, exclusions', wordCount: '60–80', priority: 'high', icon: '🏥' },
            { id: 'block_12_2', name: 'Treatment Protocol Details', type: 'Step-by-step flow', wordCount: '70–90', priority: 'medium', icon: '📋' },
            { id: 'block_12_3', name: 'Duration & Timeline', type: 'Consult, active phase, milestones', wordCount: '50–70', priority: 'medium', icon: '📅' },
            { id: 'block_12_4', name: 'Risks & Contraindications', type: 'Contraindications, risk stratification', wordCount: '60–80', priority: 'medium', icon: '⚠️' },
            { id: 'block_12_5', name: 'Preparation Requirements', type: 'Prep, fasting, meds stop, Ramadan/travel', wordCount: '50–70', priority: 'medium', icon: '📋' },
            { id: 'block_12_6', name: 'Aftercare Protocols', type: 'Immediate care, follow-up, red flags', wordCount: '60–80', priority: 'medium', icon: '🔄' },
            { id: 'block_12_7', name: 'Expected Outcomes & Success Metrics', type: 'Outcomes, improvements, biomarkers', wordCount: '70–90', priority: 'medium', icon: '📊' },
            { id: 'block_12_8', name: 'Pricing & Investment', type: 'Pricing, tiers, insurance, justification', wordCount: '70–90', priority: 'high', icon: '💰' },
            { id: 'block_12_9', name: 'Specialist Team', type: 'Lead doctor, staff, DHA license', wordCount: '50–70', priority: 'medium', icon: '👨‍⚕️' },
            { id: 'block_12_10', name: 'Technology & Equipment', type: 'Devices, certifications, innovation', wordCount: '50–70', priority: 'medium', icon: '⚙️' },
            { id: 'block_12_11', name: 'Booking & Consultation Process', type: 'Journey map, intl. support', wordCount: '60–80', priority: 'medium', icon: '📞' },
            { id: 'block_12_12', name: 'Frequently Asked Questions (FAQ)', type: 'Universal + treatment-specific', wordCount: '100–120', priority: 'medium', icon: '❓' },
            { id: 'block_12_13', name: 'Success Stories & Testimonials', type: 'Case studies, reviews, outcomes', wordCount: '70–90', priority: 'medium', icon: '💬' },
            { id: 'block_12_14', name: 'Scientific Evidence & Research', type: 'Clinical studies, references', wordCount: '50–70', priority: 'medium', icon: '🔬' },
            { id: 'block_12_15', name: 'Convenient Ways to Contact Us', type: 'Channels, language support', wordCount: '60–70', priority: 'high', icon: '📞' },
            { id: 'block_12_16', name: 'Location & Working Hours', type: 'Center, maps, schedule', wordCount: '50–60', priority: 'medium', icon: '📍' },
            { id: 'block_12_17', name: 'Medical Disclaimers', type: 'Licenses, disclaimers, privacy', wordCount: '80–100', priority: 'low', icon: '⚖️' },
            { id: 'block_12_18', name: 'Related Treatments & Recommendations', type: 'Complementary, bundles, next steps', wordCount: '50–70', priority: 'medium', icon: '🔗' }
          ]
        },
        {
          id: 'page_12',
          name: 'Template 13: Regenerate — Regenerative Protocol Detail (L3)',
          description: 'A level used for specific regenerative protocols within an L2 page. Each L3 page has its own unique URL, allowing for detailed content, SEO targeting, and direct linking.',
          icon: '🔄',
          pageCount: 12,
          totalWords: '~1,300',
          blocks: [
            { id: 'block_13_0', name: 'Protocol Hero', type: 'Intro with key value proposition, target metrics, visuals, CTA', wordCount: '80–100', priority: 'high', icon: '🎯' },
            { id: 'block_13_1', name: 'Molecular Mechanism of Action', type: 'Explanation of biological pathways, simplified diagrams, biomarker links', wordCount: '120–150', priority: 'high', icon: '🔬' },
            { id: 'block_13_2', name: 'Eligibility Criteria & Patient Selection', type: 'Inclusion/exclusion rules, candidate profiles, screening flow', wordCount: '90–110', priority: 'medium', icon: '📋' },
            { id: 'block_13_3', name: 'Evidence Level & Scientific Validation', type: 'Evidence grading, studies, outcome data, ongoing trials', wordCount: '120–150', priority: 'medium', icon: '📚' },
            { id: 'block_13_4', name: 'Informed Consent', type: 'Risks, benefits, alternatives, side effects, privacy, financial details', wordCount: '100–120', priority: 'medium', icon: '⚖️' },
            { id: 'block_13_5', name: 'Monitoring Protocols', type: 'Baseline tests, during-treatment checks, follow-up, wearables, AI analysis', wordCount: '100–120', priority: 'medium', icon: '📊' },
            { id: 'block_13_6', name: 'Protocol Timeline & Milestones', type: 'Phase-based plan, expected results, adaptive modifications', wordCount: '90–110', priority: 'medium', icon: '📅' },
            { id: 'block_13_7', name: 'Biomarker Tracking & Outcomes', type: 'Lab markers, patient-reported outcomes, dashboards, longitudinal tracking', wordCount: '90–110', priority: 'medium', icon: '📊' },
            { id: 'block_13_8', name: 'Safety Protocols', type: 'Adverse event classification, risk stratification, emergency response', wordCount: '90–110', priority: 'medium', icon: '🛡️' },
            { id: 'block_13_9', name: 'Regulatory Compliance & Quality Assurance', type: 'DHA/MOHAP, ISSCR, ISO, CAP standards, SOPs, audits', wordCount: '100–120', priority: 'medium', icon: '📜' },
            { id: 'block_13_10', name: 'Cost & Value Proposition', type: 'Transparent pricing, value justification, ROI, financing/insurance', wordCount: '90–110', priority: 'high', icon: '💰' },
            { id: 'block_13_11', name: 'Patient Consultation Process', type: 'Free screening, paid assessment, planning, initiation, decision tools', wordCount: '80–100', priority: 'medium', icon: '🗺️' }
          ]
        }
      ],
      totalBlocks: 171
    };

    setDashboardData(realData);
    setExpandedPages(new Set(realData.pages.map(page => page.id))); // Open all pages by default
  }, []);

  const togglePageExpansion = (pageId) => {
    const newExpanded = new Set(expandedPages);
    if (newExpanded.has(pageId)) {
      newExpanded.delete(pageId);
    } else {
      newExpanded.add(pageId);
    }
    setExpandedPages(newExpanded);
  };



  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const filteredPages = dashboardData?.pages || [];

  if (!dashboardData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading dashboard data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <FileText className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <p className="text-sm sm:text-base text-gray-600 mt-1">Content Strategy Dashboard</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 w-full sm:w-auto">
              <div className="bg-green-50 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg border border-green-200 w-full sm:w-auto">
                <span className="text-green-700 font-semibold text-sm sm:text-base">13 Templates</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 w-full sm:w-auto">
                <span className="text-gray-600 font-medium text-sm">SEO Priority:</span>
                <div className="flex items-center gap-1 flex-wrap">
                  <span className="px-2 py-1 text-xs font-medium rounded-full border bg-red-100 text-red-800 border-red-200">high</span>
                  <span className="px-2 py-1 text-xs font-medium rounded-full border bg-yellow-100 text-yellow-800 border-yellow-200">medium</span>
                  <span className="px-2 py-1 text-xs font-medium rounded-full border bg-green-100 text-green-800 border-green-200">low</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Page Level Definitions */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4 sm:p-6 mb-6 sm:mb-8">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Page Level Definitions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-2">L1 - Category Pages</h4>
              <p className="text-sm text-blue-800 leading-relaxed">
                Top-level section pages that provide an overview, introductory content, and navigation to subcategories or individual services/programs. Optimized for broad, high-level search queries.
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-900 mb-2">L2 - Program / Service Pages</h4>
              <p className="text-sm text-green-800 leading-relaxed">
                Subpages under L1, each dedicated to a specific service, program, or offering. Contains full descriptions, images, calls-to-action, and SEO-focused content.
              </p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-900 mb-2">L3 - Detailed Item Pages</h4>
              <p className="text-sm text-purple-800 leading-relaxed">
                An additional level used for specific items (tests, packages, procedures) within an L2 page. Each L3 page has its own unique URL, allowing for detailed content, SEO targeting, and direct linking.
              </p>
            </div>
          </div>
          <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-2">Global Pages - Standalone</h4>
            <p className="text-sm text-gray-700 leading-relaxed">
              Top-level pages that are not part of the L1-L3 service hierarchy but are essential for the overall site structure. They each have a unique URL and can be optimized for brand-related or informational search queries.
            </p>
          </div>
        </div>




        {/* Pages */}
        <div className="space-y-4 sm:space-y-6">
          {filteredPages.map((page) => (
            <div key={page.id} className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
              <div 
                className="flex items-start justify-between p-4 sm:p-6 cursor-pointer hover:bg-gray-50 transition-colors min-h-[80px] sm:min-h-0"
                onClick={() => togglePageExpansion(page.id)}
              >
                <div className="flex items-start gap-3 sm:gap-4 flex-1 min-w-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center text-white text-lg sm:text-xl flex-shrink-0 mt-1">
                    {page.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h2 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 leading-tight">{page.name}</h2>
                    {page.description && (
                      <p className="text-xs sm:text-sm text-blue-600 mt-1 leading-tight">{page.description}</p>
                    )}
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-end sm:items-center gap-2 sm:gap-3 flex-shrink-0 mt-1">
                  <div className="bg-blue-50 px-2 py-1 sm:px-3 sm:py-1 rounded-full border border-blue-200">
                    <span className="text-blue-700 text-xs sm:text-sm font-medium">{page.blocks.length} blocks</span>
                  </div>
                  {page.pageCount && (
                    <div className="bg-green-50 px-2 py-1 sm:px-3 sm:py-1 rounded-full border border-green-200">
                      <span className="text-green-700 text-xs sm:text-sm font-medium">{page.pageCount} pages</span>
                    </div>
                  )}
                  {page.totalWords && (
                    <div className="bg-purple-50 px-2 py-1 sm:px-3 sm:py-1 rounded-full border border-purple-200">
                      <span className="text-purple-700 text-xs sm:text-sm font-medium">{page.totalWords} words</span>
                    </div>
                  )}
                  {expandedPages.has(page.id) ? 
                    <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" /> : 
                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
                  }
                </div>
              </div>

              {expandedPages.has(page.id) && (
                <div className="border-t border-gray-200 p-4 sm:p-6 bg-gray-50">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                    {page.blocks.map((block) => (
                      <div key={block.id} className="bg-white rounded-lg border border-gray-200 p-3 sm:p-4 hover:shadow-md transition-all">
                        <div className="flex items-start justify-between mb-2 sm:mb-3">
                          <div className="flex items-start gap-2 flex-1 min-w-0">
                            <span className="text-base sm:text-lg flex-shrink-0">{block.icon}</span>
                            <h3 className="font-semibold text-gray-900 text-xs sm:text-sm leading-tight">{block.name}</h3>
                          </div>
                          {block.priority && (
                            <span className={`px-1.5 py-0.5 sm:px-2 sm:py-1 text-xs font-medium rounded-full border ${getPriorityColor(block.priority)} flex-shrink-0 ml-2`}>
                              {block.priority}
                            </span>
                          )}
                        </div>
                        <p className="text-gray-600 text-xs sm:text-sm mb-2 leading-relaxed">{block.type}</p>
                        {block.wordCount && (
                          <div className="flex items-center gap-1 text-xs text-gray-500">
                            <BarChart3 className="w-3 h-3 flex-shrink-0" />
                            <span>{block.wordCount} words</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-8 sm:mt-12 text-center text-gray-500 px-4">
          <p className="text-sm sm:text-base">Content Strategy Dashboard</p>
        </div>
      </div>
    </div>
  );
};

export default ContentStrategyDashboard;