import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Work',
  description: 'A summary of my work and contributions.',
};

export default function WorkPage() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">My Work</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          On a mission to build amazing products, and
          along the way, try to pass forward the lessons I've learned and will learn along
          my journey. Here's a summary of my work so far.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Boa Vista</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          React | React Native Developer, Nov 2021 — Jul 2023
        </p>
        <p>
          I entered <a href="https://www.boavistaservicos.com.br/">Boa Vista</a> to join
          forces and improve {' '} <a href="https://painel.consumidorpositivo.com.br/">Consumidor Positivo</a>.
          Here, besides working on fixing bugs and improving the product, I also had the opportunity to
          improve the development experience, by refining code linting, formating and enhancing the documentation.
        </p>
        <ul>
          <li>
            In 2023, I was migrated alongside my squad to <a href="https://www.acordocerto.com.br/">Acordo Certo</a>.
          </li>
        </ul>
        <p>
          Since I joined Boa Vista in 2021, The company as grown in a fast pace, and I could add a lot of value
          on ads and new features, such as:
        </p>
        <ul>
          <li>
            <a href="https://www.consumidorpositivo.com.br/consulta-cpf-gratis/">Consulta CPF</a>
          </li>
          <li>
            <a href="https://apps.apple.com/br/app/boa-vista-consumidor-positivo/id1482315306">Mobile App</a>
          </li>
        </ul>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Cantoo</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          React | React Native Developer, Jun 2020 — Oct 2021
        </p>
        <p>
          Collaborated in the development and maintenance of a front-end and mobile app
          designed for children dealing with DYS (Dyslexia, Dyspraxia, etc.).
          Using React, React Native, Next.js, and other technologies to improve user experience.
        </p>
        <p>
          Over the course of my time at Cantoo, I was able to work on and solve some hard problems,
          one of them was back in 2020, was to improve the performance and SEO of the website,
          which was built using Next.js 10. I fully migrated the codebase form create-react-app to a
          NextJS project. This allowed us to improve the SEO and performance of the website, boosting
          it from around the 50th position to almost the 1st position on Google Search.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">UFRN - Qualiparto</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Software Engineer Intern, Mar 2020 — Jun 2020
        </p>
        <p>
          Contributed to the development and maintenance of 'QualiParto',
          a data-driven platform built to enable local hospitals to monitor labor quality using React.
          The platform featured a user-friendly dashboard that streamlined the process for hospital
          managers to track and analyze labor data with the help of visual aids, thereby ensuring the
          quality of future labors.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">iFeira</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Software Engineer Intern, Aug 2019 — Nov 2019
        </p>
        <p>
          Collaborated in the development and maintenance of 'iFeira',
          a mobile app designed to help local farmers to sell their products.
          Using React Native, Redux, and other technologies to improve user experience.
        </p>
        <p>
          I was able to contribute to the project in the early stages, by building and fixing a lot
          of bugs.
        </p>
      </div>
    </section>
  );
}
