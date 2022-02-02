import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';
import lyon from '../public/img/lyon.jpg';
import arthaud from '../public/img/arthaud.jpg';

export default function Home() {
  return (
    <div className="">
      <Layout className="Accueil">
        
           <h1 className="text-black z-10 absolute w-full text-center mt-10 text-2xl">
            Arthaud PRIMEVERT
          </h1> 
          <h3 className="text-black z-10 absolute mt-20 text-center w-full">
            Développeur Web Junior Full Stack
          </h3>
          <Image
            className="object-cover"
            src={lyon}
            layout="responsive"
            alt="image lyon"
            
          />
        
        {/* Description avec Image */}
        <div className="flex bg-white dark:bg-gray-800 rounded-lg shadow mt-4 shadow-gray-400 m-9 mb-20">
          <div className="flex-none w-24 md:w-48 relative">
            <Image
              src={arthaud}
              layout="responsive"
              alt="image arthaud"
              className="absolute rounded-lg inset-0 w-full h-full object-cover"
            />
          </div>
          <form className="flex-auto p-4 border-gray-700">
            <div className="flex flex-wrap">
              <h1 className="flex-auto text-m dark:text-gray-50 text-justify">
                En reconversion professionnelle suite à une longue carrière dans
                l{`'`}environnement et la gestion de l{`'`}eau, j{`'`}ai voulu retourner à
                ce qui me passionnait en l{`'`}occurence le développement web.{" "}
                <br />
                En formation jusqu{`'`}au 11 février 2022, je suis en recherche
                active d{`'`}un stage afin de monter en compétences et progresser à
                côté de collaborateurs expérimentés.
              </h1>
            </div>
          </form>
        </div>
      </Layout>
    </div>
  )
}
