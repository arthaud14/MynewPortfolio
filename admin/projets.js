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
                        <button type="submit">Supprimer</button>
                    </tbody>
                </table>
            </Layout>
        </div>
    );
}