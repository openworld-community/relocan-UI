import { Header } from "@/app/pages/index/components/header";
import { Hero } from "@/app/pages/index/components/hero";
import {Projects} from "@/app/pages/index/components/projects";

export default function Home() {
    return (
        <div>
            <Header />
            <main>
                <Hero />
                <Projects />
            </main>
        </div>
    )
}
