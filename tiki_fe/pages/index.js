import Home from '../components/home';
import Layout from '../components/layout';
import { MASTER_GET_ENTRY_POINT, POST, request } from '../src/utils/apiRequest';

const HomePage = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
};

Home.getInitialProps = async (ctx) => {
  try {
    const rootCategories = await request(POST, MASTER_GET_ENTRY_POINT);
    return {
      rootCategories
    };
  } catch (err) {
    console.log(err);
  }
};

export default HomePage;
