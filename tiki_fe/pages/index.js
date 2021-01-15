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

HomePage.getInitialProps = async (ctx) => {
  let rootCategories = [];
  try {
    console.log(ctx.store);
    // rootCategories = await request(POST, MASTER_GET_ENTRY_POINT);
  } catch (err) {
    console.log(err);
  }

  return {
    rootCategories
  };
};

export default HomePage;
