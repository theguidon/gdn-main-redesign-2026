import TitleLine from "@/components/title-line";
import Chip from "@/components/chip";

type Member = {
  name: string;
  program?: string;
  email: string;
  position: string;
};

type Cluster = {
  label: string;
  color: string;
  members: Member[];
  single?: boolean;
};

const standard: Member = {
  name: "Name",
  program: "(Year and Degree Program)",
  email: "Email Address",
  position: "Position",
};

const moderator: Member = {
  name: "Name",
  email: "Email Address",
  position: "Position",
};

const clusters: Cluster[] = [
  {
    label: "Executives",
    color: "#807E7C",
    members: Array.from({ length: 4 }, () => standard),
  },
  {
    label: "Writing Cluster",
    color: "#E0A526",
    members: Array.from({ length: 12 }, () => standard),
  },
  {
    label: "Design Cluster",
    color: "#5BC0F0",
    members: Array.from({ length: 8 }, () => standard),
  },
  {
    label: "Organizational Cluster",
    color: "#FF8A7B",
    members: Array.from({ length: 8 }, () => standard),
  },
  {
    label: "Moderator and Faculty Adviser",
    color: "#101212",
    members: [moderator],
    single: true,
  },
];

function ClusterBox({ cluster }: { cluster: Cluster }) {
  return (
    <section className="bg-(--off-white) border border-black/10 px-8 py-6">
      <Chip text={cluster.label} bgColor={cluster.color} />
      <div
        className={
          cluster.single
            ? "mt-6 flex flex-col gap-8"
            : "mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8"
        }
      >
        {cluster.members.map((m, i) => (
          <MemberCard key={i} member={m} />
        ))}
      </div>
    </section>
  );
}

function MemberCard({ member }: { member: Member }) {
  return (
    <div className="flex flex-row gap-4 items-start">
      <div
        className="w-24 h-24 rounded-full bg-[#d4d4d4] shrink-0"
        aria-hidden="true"
      />
      <div className="font-chivo text-(--alt-black)">
        <p>{member.name}</p>
        {member.program ? <p>{member.program}</p> : null}
        <p>{member.email}</p>
        <p className="mt-3 font-bold">{member.position}</p>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <>
      <section className="relative w-full min-h-[150px] overflow-hidden bg-[#1c4480] flex items-center">
        <div className="absolute inset-0 bg-[url('/about-banner.png')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-[#1c4480]/75" />
        <h1 className="relative z-10 px-12 font-tiempos-headline font-bold text-white text-4xl md:text-5xl">
          About The GUIDON
        </h1>
      </section>
      <div className="mx-auto w-full max-w-[860px] px-6 py-10 flex flex-col gap-6">
        <section className="bg-(--off-white) px-8 py-6 flex flex-col gap-3">
          <TitleLine title="Purpose" />
          <p className="font-tiempos-text text-(--alt-black) leading-relaxed">
            Committed to its mission of truth-telling, The GUIDON seeks to
            document the existing realities of the Ateneo community and beyond,
            relaying such experiences through informative reportage and
            impactful journalistic storytelling. The GUIDON maximizes its print
            and multimedia platforms for well-researched and timely
            human-centered narratives. Its outputs directly respond to the
            current contexts of the university, national, and global
            socio-political landscapes, crafting spaces for critical discourse
            and positive change.
          </p>
        </section>

        <section className="bg-(--off-white) px-8 py-6 flex flex-col gap-3">
          <TitleLine title="About the Publication" />
          <p className="font-tiempos-text text-(--alt-black) leading-relaxed">
            The GUIDON is the official student publication of the Ateneo de
            Manila University. Founded in 1929 by Rev. Frank O&apos;Hara, SJ and
            first led by Manuel C. Colayco in 1930, it has since been a training
            ground for countless writers, designers and managers in the practice
            of responsible journalism.
          </p>
          <p className="font-tiempos-text text-(--alt-black) leading-relaxed">
            Email{" "}
            <a
              href="mailto:desk@theguidon.com"
              className="text-(--gdn-blue) underline"
            >
              desk@theguidon.com
            </a>{" "}
            for any comments, suggestions, or inquiries.
          </p>
        </section>

        <section className="mt-4 flex flex-col gap-6">
          <TitleLine title="The Editorial Board" />
          {clusters.map((cluster, idx) => (
            <ClusterBox key={idx} cluster={cluster} />
          ))}
        </section>
      </div>
    </>
  );
}
