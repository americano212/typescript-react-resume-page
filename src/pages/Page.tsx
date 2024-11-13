import TitleBox from "../components/atoms/TitleBox";
import Contents from "../components/Contents";
import { ContentsBox } from "../styles/global";
import { PageWrapper } from "../styles/page";
import { Content } from "../types/content.interface";

type PageProps = {
  title: string;
  contents: Content[];
};

export default function Page(props: PageProps) {
  return (
    <PageWrapper>
      <TitleBox title={props.title} />
      <ContentsBox>
        {props.contents.map(
          (data, index) =>
            data.isDisplay && (
              <Contents
                key={index}
                enSubtitle={data.enSubtitle}
                krSubtitle={data.krSubtitle}
                enDescription={data.enDescription}
                krDescription={data.krDescription}
                enSubDescription={data.enSubDescription}
                krSubDescription={data.krSubDescription}
                details={data.details}
              ></Contents>
            )
        )}
      </ContentsBox>
    </PageWrapper>
  );
}
