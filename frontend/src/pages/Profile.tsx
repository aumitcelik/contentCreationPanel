import Layout from '../components/layout';
import UpdateProfile from '../components/profile/UpdateProfile';
export default function Profile() {
  return (
    <Layout>
      <h1 className="font-semibold text-3xl mb-5">Profile</h1>
      <hr />
      <div className="mt-5 flex flex-col gap-5">
        <UpdateProfile />
,      </div>
    </Layout>
  );
}
