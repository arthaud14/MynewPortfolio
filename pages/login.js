import Layout from "../components/Layout";
import { getCsrfToken } from 'next-auth/react';


export default function SignIn({ csrfToken }) {
  return (
    <Layout>
      <div className="mt-20 h-96 bg-gradient-to-br flex justify-center items-center w-full">
        <form method='post' action='/api/auth/callback/credentials'>
      <input name='csrfToken' type='hidden' defaultValue={csrfToken} />
          <div className="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
            <div className="space-y-4">
              <h1 className="text-center text-2xl font-semibold text-gray-600">
                Connexion Administrateur
              </h1>
              <div>
                <label
                  forHtml="email"
                  className="block mb-1 text-gray-600 font-semibold"
                >
                  Username
                </label>
                <input
                  type="text"
                  name='username'
                  className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                />
              </div>
              <div>
                <label
                  forHtml="email"
                  className="block mb-1 text-gray-600 font-semibold"
                >
                  Password
                  <input  />
                </label>
                <input
                  name='password' type='password'
                  className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                />
              </div>
            </div>
            <button type='submit' className="mt-4 w-full bg-gradient-to-tr bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-indigo-200 text-white py-2 rounded-md text-lg tracking-wide">
              Connexion
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
    return {
      props: {
        csrfToken: await getCsrfToken(context),
      },
    };
  }

