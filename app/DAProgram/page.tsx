import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
export default function DAProgramPage() {
  return (
    <div className="grid w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl gap-4 mx-auto py-20 md:py-20">
      <h1 className="text-3xl text-primary font-bold flex items-center justify-between flex-wrap">
        DevSphere Apprenticeship Program
        <a href="https://forms.gle/u2JFnjvTk5BX2Ve3A" target="_blank">
          <Badge className="text-sm flex py-2 md:mt-0 mt-2 items-start">
            <span className="mr-2">
              <Badge className="bg-black">✨</Badge>
            </span>
            <span className="hover:underline">Apply now!</span>
          </Badge>
        </a>
      </h1>
      <p>
        The DevSphere Apprenticeship Program is where you get to shine, learn,
        and make a real impact.
      </p>
      <Separator />
      <p>
        Members of DevSphere can apply to become an apprentice, and if selected,
        you'll get -
      </p>
      <div className="ml-4">
        <ul className="list-disc space-y-1.5">
          <li>One on one mentorship from core members of the club.</li>
          <li>
            The opportunity to work on exciting, real-world tasks tailored to
            your skills.
          </li>
          <li>
            Points for every task you complete, with top contributors featured
            on our socials every month.
          </li>
        </ul>
      </div>
      <Separator />
      <h2 className="text-xl text-primary font-bold">
        How The Recruiting Works
      </h2>
      <div className="ml-4">
        <ul className="list-disc space-y-1.5">
          <li>
            <p className="font-bold pb-2">Step 1: Join the Club </p>DevSphere is
            now open for everyone! Simply fill out this{" "}
            <a
              href="https://forms.gle/ZaXY3jk2NP1zeSK66"
              className="font-bold underline"
            >
              form
            </a>{" "}
            to become a member.
          </li>
          <li>
            <p className="font-bold pb-2">
              Step 2: Apply to Be a DevSphere Apprentice
            </p>
            Once you're in, you can apply to the DevSphere Apprenticeship
            Program. Apprentices get access to personalized mentorship and work
            on impactful projects.
          </li>
          <li>
            <p className="font-bold pb-2">Step 3: Become a Core Member</p>
            After being an apprentice for more than 3 months, you'll be eligible
            to apply for a core member role. This is your chance to lead,
            mentor, and shape the future of DevSphere.
          </li>
        </ul>
      </div>
      <Separator />
      <h2 className="text-xl text-primary font-bold">
        Perks of Being an Apprentice
      </h2>
      <div className="ml-7">
        <ol className="list-decimal space-y-1.5">
          <li>
            <p className="font-bold pb-2">Personalized Mentorship</p>Work
            closely with DevSphere core members who'll guide and support you
            every step of the way.
          </li>
          <li>
            <p className="font-bold pb-2">Task-Based Contributions</p>Take on
            tasks that match your skills—from building projects to creating
            content and documentation. Each task has points associated with it.
          </li>
          <li>
            <p className="font-bold pb-2">Leaderboards and Recognition</p>Top
            point holders are featured on our socials every month. It's your
            time to shine and inspire others.
          </li>
          <li>
            <p className="font-bold pb-2">Path to Leadership</p>Stick with us
            for 3 months or more as an apprentice, and you can apply to become a
            core member of DevSphere.
          </li>
        </ol>
      </div>
      <Separator />
      <h2 className="text-xl text-primary font-bold">
        Who are we looking for?
      </h2>
      <h3 className="text-lg font-bold">Tech Apprentice</h3>
      <div className="ml-4">
        <ul className="list-disc space-y-1.5">
          <li>
            Builders who can create, debug, and contribute to impactful
            projects.
          </li>
        </ul>
      </div>
      <h3 className="text-lg font-bold">Content Apprentice</h3>
      <div className="ml-4">
        <ul className="list-disc space-y-1.5">
          <li>
            Creators who craft stories, visuals, or posts that resonate and
            engage.
          </li>
        </ul>
      </div>
      <h3 className="text-lg font-bold">Writing Apprentice</h3>
      <div className="ml-4">
        <ul className="list-disc space-y-1.5">
          <li>
            People who write processes clear, concise, and accessible
            documentation and blogs.
          </li>
        </ul>
      </div>
      <Separator />
      <h2 className="text-xl text-primary font-bold">
        Expectations from an Apprentice
      </h2>
      <div className="ml-7">
        <ol className="list-decimal space-y-1.5">
          <li>
            <p className="font-bold pb-2">Show Up and Contribute</p>Be
            consistent and complete tasks that make a difference.
          </li>
          <li>
            <p className="font-bold pb-2">Collaborate and Learn</p>Work with
            core members and other apprentice to bring out the best in each
            other.
          </li>
          <li>
            <p className="font-bold pb-2">Lead by Example</p>As an apprentice,
            you're setting the standard for others in the club. Bring your
            A-game.
          </li>
        </ol>
      </div>
      <Separator />
      <h2 className="text-xl text-primary font-bold">
        Why Join the DevSphere Apprenticeship Program?
      </h2>
      <p>
        It's a platform for growth, creativity, and leadership. From
        personalized mentorship to public recognition, the Apprentice Program is
        where you build not just skills, but a reputation. It's your gateway to
        becoming a core member and shaping the future of DevSphere.
      </p>
      <Separator />
      <h2 className="text-xl text-primary font-bold">How to Apply?</h2>
      <div className="ml-4">
        <ul className="list-disc space-y-1.5">
          <li>
            Fill out our{" "}
            <a
              href="https://forms.gle/u2JFnjvTk5BX2Ve3A"
              target="_blank"
              className="font-bold underline"
            >
              Apprentice Recruitment Form.
            </a>
          </li>
          <li>
            Share your skills, past work, and what excites you about being an
            apprentice.
          </li>
          <li>
            If selected, get ready for one-on-one mentorship and tasks that make
            an impact.
          </li>
        </ul>
      </div>
    </div>
  );
}
