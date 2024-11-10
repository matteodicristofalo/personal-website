import { Hero } from "@/components/hero/hero";
import { Introduction } from "@/components/introduction/introduction";
import { Jobs } from "@/components/jobs/jobs";
import { Skills } from "@/components/skills/skills";
import { Contacts } from "@/components/contacts/contacts";

export default function Page() {
  return (
    <>
      <Hero />

      <Introduction />

      <Jobs />

      <Skills />

      <Contacts />
    </>
  );
}
