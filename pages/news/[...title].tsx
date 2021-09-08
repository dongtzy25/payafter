import { useEffect } from "react";


const NewsDetailsPage = ({ planId }) => {
    useEffect(() => {
        console.log(planId)
      }, [planId]);
      
}
export const getServerSideProps = async ({ params }) => {
    const planId = params?.title;
    return {
      props: { planId: planId[0] },
    };
  };

export default NewsDetailsPage