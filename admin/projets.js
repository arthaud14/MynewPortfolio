import Layout from "../components/Layout";

export default function projets() {
    return (
        <div>
            <Layout>
                <table>
                    <thead></thead>
                    <tbody>
                        <tr>Titre du projet</tr>
                        <tr>Action</tr>
                        <button className="py-2 px-4  bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg" type="submit">Supprimer</button>
                    </tbody>
                </table>
            </Layout>
        </div>
    );
}