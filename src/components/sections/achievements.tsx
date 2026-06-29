"use client";

import { ACHIEVEMENTS, CERTIFICATIONS, EDUCATION } from "@/data/achievements";
import { SectionHeader } from "./section-header";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";
import SectionWrapper from "../ui/section-wrapper";
import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, BookOpen, GraduationCap } from "lucide-react";

// ─── Education ────────────────────────────────────────────────────────────────

const EducationSection = () => (
  <SectionWrapper className="flex flex-col items-center justify-center min-h-[100vh] py-20 z-10">
    <div className="w-full max-w-4xl px-4 md:px-8 mx-auto">
      <SectionHeader
        id="education"
        title="Education"
        desc="My academic background."
        className="mb-12 md:mb-20 mt-0"
      />
      <div className="flex flex-col gap-8 md:gap-12 relative">
        <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-px bg-border hidden md:block -translate-x-1/2" />
        {EDUCATION.map((edu, index) => (
          <div key={edu.id} className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <Card
                className={cn(
                  "bg-card text-card-foreground border-border",
                  "hover:border-primary/20 transition-colors duration-300",
                  "shadow-sm hover:shadow-md"
                )}
              >
                <CardHeader className="pb-3">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <GraduationCap className="mt-1 h-5 w-5 text-muted-foreground shrink-0" />
                      <div className="space-y-1">
                        <CardTitle className="text-xl font-bold tracking-tight">
                          {edu.institution}
                        </CardTitle>
                        <div className="text-base font-medium text-muted-foreground">
                          {edu.degree} · {edu.field}
                        </div>
                      </div>
                    </div>
                    <Badge variant="secondary" className="w-fit font-mono text-xs font-normal">
                      {edu.status}
                    </Badge>
                  </div>
                </CardHeader>
                {edu.description && (
                  <CardContent>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {edu.description}
                    </p>
                  </CardContent>
                )}
              </Card>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

// ─── Achievements ─────────────────────────────────────────────────────────────

const AchievementsSubSection = () => (
  <SectionWrapper className="flex flex-col items-center justify-center min-h-[100vh] py-20 z-10">
    <div className="w-full max-w-4xl px-4 md:px-8 mx-auto">
      <SectionHeader
        id="achievements"
        title="Achievements"
        desc="Hackathons, competitions, and milestones."
        className="mb-12 md:mb-20 mt-0"
      />
      <div className="flex flex-col gap-8 md:gap-12 relative">
        <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-px bg-border hidden md:block -translate-x-1/2" />
        {ACHIEVEMENTS.map((item, index) => (
          <div key={item.id} className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <Card
                className={cn(
                  "bg-card text-card-foreground border-border",
                  "hover:border-primary/20 transition-colors duration-300",
                  "shadow-sm hover:shadow-md"
                )}
              >
                <CardHeader className="pb-3">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <Award className="mt-1 h-5 w-5 text-muted-foreground shrink-0" />
                      <div className="space-y-1">
                        <CardTitle className="text-xl font-bold tracking-tight">
                          {item.title}
                        </CardTitle>
                        <div className="text-base font-medium text-muted-foreground">
                          {item.event}
                        </div>
                      </div>
                    </div>
                    <Badge variant="secondary" className="w-fit font-mono text-xs font-normal">
                      {item.date}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

// ─── Certifications ───────────────────────────────────────────────────────────

const CertificationsSection = () => (
  <SectionWrapper className="flex flex-col items-center justify-center min-h-[100vh] py-20 z-10">
    <div className="w-full max-w-4xl px-4 md:px-8 mx-auto">
      <SectionHeader
        id="certifications"
        title="Certifications"
        desc="Verified skills and completed programs."
        className="mb-12 md:mb-20 mt-0"
      />
      <div className="flex flex-col gap-8 md:gap-12 relative">
        <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-px bg-border hidden md:block -translate-x-1/2" />
        {CERTIFICATIONS.map((cert, index) => (
          <div key={cert.id} className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <Card
                className={cn(
                  "bg-card text-card-foreground border-border",
                  "hover:border-primary/20 transition-colors duration-300",
                  "shadow-sm hover:shadow-md"
                )}
              >
                <CardHeader className="pb-3">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <BookOpen className="mt-1 h-5 w-5 text-muted-foreground shrink-0" />
                      <div className="space-y-1">
                        <CardTitle className="text-xl font-bold tracking-tight">
                          {cert.title}
                        </CardTitle>
                        <div className="text-base font-medium text-muted-foreground">
                          {cert.issuer}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                {cert.description && (
                  <CardContent>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {cert.description}
                    </p>
                  </CardContent>
                )}
              </Card>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

// ─── Composed export ──────────────────────────────────────────────────────────

const AchievementsSection = () => (
  <>
    <EducationSection />
    <AchievementsSubSection />
    <CertificationsSection />
  </>
);

export default AchievementsSection;
