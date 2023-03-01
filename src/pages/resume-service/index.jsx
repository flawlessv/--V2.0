import React, { memo } from "react";
import Sbanner from "./c-cpns/s-banner";
import Scase from "./c-cpns/s-case";
import Soptimize from "./c-cpns/s-optimize";
import SorderDialog from "./c-cpns/s-order";
import Sstep from "./c-cpns/s-step";
import Steam from "./c-cpns/s-team";
import { RServiceWrapper } from "./style";
const ResumeService = memo(() => {
  return (
    <RServiceWrapper>
      <Sbanner></Sbanner>
      <Soptimize></Soptimize>
      <Steam></Steam>
      <Scase></Scase>
      <Sstep> </Sstep>
      <SorderDialog></SorderDialog>
    </RServiceWrapper>
  );
});

export default ResumeService;
