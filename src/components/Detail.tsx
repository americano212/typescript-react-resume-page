import { useSelector } from "react-redux";
import { RootState } from "../store/modules";
import { ContentsBoldText, ContentsLink, ContentsRegularText, DetailWrapper } from "../styles/contents";
import { ContentDetail } from "../types/content.interface";
import { Language } from "../types/language.enum";

export default function Detail(props: ContentDetail) {
  const language: Language = useSelector((state: RootState) => state.setLanguage.language);
  const text = language === Language.eng ? props.enText : props.krText;
  const endBold = language === Language.eng ? props.enEndBold : props.krEndBold;

  return (
    <DetailWrapper>
      {props.frontBold ? <ContentsBoldText>{props.frontBold}</ContentsBoldText> : <></>}

      <ContentsRegularText>{text}</ContentsRegularText>

      {endBold ? <ContentsBoldText>{endBold}</ContentsBoldText> : <></>}

      {props.linkUrl ? (
        <ContentsLink href={props.linkUrl} target="_blank">
          ({props.linkText})
        </ContentsLink>
      ) : (
        <></>
      )}
    </DetailWrapper>
  );
}
