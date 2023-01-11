import { ReactNode } from "react";
import { IconContainer, InfoWithIconContainer } from "./style";

interface InfoWithIconProps {
  icon: ReactNode;
  text: string | ReactNode;
}

export function InfoWithIcon({ icon }: InfoWithIconProps) {
  return (
    <InfoWithIconContainer>
      <IconContainer>{icon}</IconContainer>
    </InfoWithIconContainer>
  );
}
