import React from "react";
import Recruit from "../components/Recruitment/Recruit";
import { useRouter } from "next/dist/client/router";
function RecruitmentPage() {
  const router = useRouter();
  const handleDetail = () => {
    router.push({ pathname: `/tuyen-dung/detail` });
  };

  return (
    <div>
      <Recruit handleDetail={handleDetail} />
    </div>
  );
}
export default RecruitmentPage;
