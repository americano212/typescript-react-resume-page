import { Content, ContentDetail } from "../types/content.interface";
import { Language } from "../types/language.enum";
import { useSelector } from "react-redux";
import { RootState } from "../store/modules";
import { ContentsDate, ContentsWrapper, DetailLiBox, DetailUlBox, SubDescriptionText } from "../styles/contents";
import Detail from "./Detail";
import Subtitle from "./atoms/Subtitle";

export default function Contents(props: Content) {
  const language: Language = useSelector((state: RootState) => state.setLanguage.language);
  const subtitle = language === Language.eng ? props.enSubtitle : props.krSubtitle;
  const description = language === Language.eng ? props.enDescription : props.krDescription;

  const subDescription = language === Language.eng ? props.enSubDescription : props.krSubDescription;
  const details: ContentDetail[] = props.details;

  return (
    <ContentsWrapper>
      {subtitle ? <Subtitle subtitle={subtitle} description={description} /> : <></>}

      {props.date ? <ContentsDate>{props.date}</ContentsDate> : <></>}
      {subDescription ? <SubDescriptionText>{subDescription}</SubDescriptionText> : <></>}
      <DetailUlBox>
        {details.map(
          (detail, index) =>
            detail.isDisplay && (
              <DetailLiBox>
                <Detail
                  key={index}
                  linkUrl={detail.linkUrl}
                  linkText={detail.linkText}
                  krText={detail.krText}
                  enText={detail.enText}
                  frontBold={detail.frontBold}
                  enEndBold={detail.enEndBold}
                  krEndBold={detail.krEndBold}
                />
                {detail.date ? <ContentsDate>{detail.date}</ContentsDate> : <></>}
              </DetailLiBox>
            )
        )}
      </DetailUlBox>
    </ContentsWrapper>
  );
}
