import SiteHeader from "@/components/ui/site-header";
import SiteFooter from "@/components/ui/site-footer";
import { log } from "console";

interface SkillProgramDetailProps {
  program: string;
}

const SkillProgramDetail = async ({
  params,
}: {
  params: Promise<SkillProgramDetailProps>;
}) => {
  const { program } = await params;

  log("Received skill program:", program);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <h2 className="text-2xl font-bold text-center py-12">
        Skill Program Details - {program}
      </h2>
      <SiteFooter />
    </div>
  );
};

export default SkillProgramDetail;
