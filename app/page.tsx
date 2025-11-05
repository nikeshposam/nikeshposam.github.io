
import { Badge } from '@/components/ui/badge';
import { Item, ItemContent, ItemDescription, ItemFooter, ItemHeader, ItemTitle } from '@/components/ui/item';
import { Github, Linkedin } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-200 text-indigo-900 font-sans dark:bg-gray-900">
      <div className="flex min-h-screen items-start justify-center gap-16 w-[90%] mx-auto">
        <header className="flex flex-col min-h-screen max-h-screen top-0 sticky py-20 gap-14">
          <div className="flex flex-col gap-2">
            <h1 className="text-6xl font-extrabold">Nikesh Posam</h1>
            <h3 className="text-2xl font-semibold">Fullstack Engineer</h3>
            <h6 className="text-lg">Experienced tech professional skilled in leading development teams, ensuring code quality, project estimation, and delivering scalable, high-quality software solutions on time.</h6>
          </div>
          <nav className="grow">
            <ul className="flex flex-col gap-5">
              <li className="text-md font-bold uppercase hover:text-indigo-950"><a href="#about">About</a></li>
              <li className="text-md font-bold uppercase hover:text-indigo-950"><a href="#experience">Experience</a></li>
              <li className="text-md font-bold uppercase hover:text-indigo-950"><a href="#about">Projects</a></li>
            </ul>
          </nav>
          <ul className="flex gap-5">
            <li><a href="#"><Linkedin /></a></li>
            <li><a href="#"><Github /></a></li>
            <li><a href="#"><Github /></a></li>
          </ul>
        </header>
        <main className="flex w-full max-w-3xl flex-col items-center justify-between py-20">
          <section id="about" className="text-lg">
            <p className="mb-4">
              I’m a developer and technical lead passionate about crafting reliable, scalable, and thoughtfully designed digital experiences. I love working at the intersection of architecture and engineering, bringing structure and polish to complex systems while ensuring every feature feels intuitive and purposeful.
            </p>
            <p className="mb-4">
              Currently, I lead development at Quolam Business Solutions, where I guide a talented team in building full-stack web applications, reviewing code, shaping technical direction, and ensuring smooth project delivery from concept to production. My work spans across Node.js, React, Java, and AWS, with a focus on building solutions that balance performance, maintainability, and usability.
            </p>
            <p className="mb-4">
              Over the years, I’ve contributed to projects across start-ups and enterprise environments—collaborating closely with product and design teams to transform ideas into well-engineered software. I find joy in mentoring developers, simplifying complex problems, and building systems that scale gracefully.
            </p>
            <p className="mb-4">
              When I’m not coding, you’ll probably find me exploring new tech ideas, gaming, or listening to music to unwind.
            </p>
          </section>
          <section id="experience">
            <div className="flex flex-col">
              <Item className="px-0">
                <ItemHeader>SEP 2022 – present</ItemHeader>
                <ItemContent>
                  <ItemTitle>QUOLAM BUSINESS SOLUTIONS (Technical Lead)</ItemTitle>
                  <ItemDescription>Responsible for leading a development team, conducting code reviews, preparing project estimates, and overseeing end-to-end application development to ensure quality and timely delivery.</ItemDescription>
                </ItemContent>
                <ItemFooter>
                  <Badge>Javascript</Badge>
                  <Badge>Nodejs</Badge>
                  <Badge>Express</Badge>
                  <Badge>React</Badge>
                </ItemFooter>
              </Item>
              <Item className="px-0">
                <ItemHeader>SEP 2022 – present</ItemHeader>
                <ItemContent>
                  <ItemTitle>QUOLAM BUSINESS SOLUTIONS (Technical Lead)</ItemTitle>
                  <ItemDescription>Responsible for leading a development team, conducting code reviews, preparing project estimates, and overseeing end-to-end application development to ensure quality and timely delivery.</ItemDescription>
                </ItemContent>
                <ItemFooter>
                  <Badge>Javascript</Badge>
                  <Badge>Nodejs</Badge>
                  <Badge>Express</Badge>
                  <Badge>React</Badge>
                </ItemFooter>
              </Item>
              <Item className="px-0">
                <ItemHeader>SEP 2022 – present</ItemHeader>
                <ItemContent>
                  <ItemTitle>QUOLAM BUSINESS SOLUTIONS (Technical Lead)</ItemTitle>
                  <ItemDescription>Responsible for leading a development team, conducting code reviews, preparing project estimates, and overseeing end-to-end application development to ensure quality and timely delivery.</ItemDescription>
                </ItemContent>
                <ItemFooter>
                  <Badge>Javascript</Badge>
                  <Badge>Nodejs</Badge>
                  <Badge>Express</Badge>
                  <Badge>React</Badge>
                </ItemFooter>
              </Item>
            </div>
            <div>
              <a href="">View Full Resume</a>
            </div>
          </section>
          <section id="projects">
            <div>Coming Soon</div>
          </section>
          <footer>
            Loosely designed in Figma and coded in Visual Studio Code by yours truly. Built with Next.js and Tailwind CSS, deployed with Vercel. All text is set in the Inter typeface.
          </footer>
        </main>
      </div>
    </div>
  );
}
