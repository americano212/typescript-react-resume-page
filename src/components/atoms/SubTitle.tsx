import { DescriptionText, SubtitleText, SubtitleWrapper } from "../../styles/subtitle";

type SubtitleProps = {
  subtitle: string;
  description?: string;
};

export default function Subtitle(props: SubtitleProps) {
  return (
    <SubtitleWrapper>
      <SubtitleText>{props.subtitle}</SubtitleText>
      {props.description ? <DescriptionText> - {props.description}</DescriptionText> : <></>}
    </SubtitleWrapper>
  );
}
