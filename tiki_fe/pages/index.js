import Home from '../components/home';
import Layout from '../components/layout';
import { saveCategories } from '../src/actions/home.action';
import { wrapper } from '../src/store';
import { GET, MASTER_GET_ENTRY_POINT, request } from '../src/utils/apiRequest';

const HomePage = (props) => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export const getStaticProps = wrapper.getServerSideProps(async ({ store }) => {
  try {
    const result = await request(GET, MASTER_GET_ENTRY_POINT);

    store.dispatch(saveCategories(result.data));

    return {
      props: {
        status: 'ok'
      }
    };
  } catch (err) {
    console.log(err);
    return {
      notFound: true
    };
  }
});

export default HomePage;
