import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Fácil de usar',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
      El editor procura apoyar la labor de crear archivos GTFS feed de manera rápida y sencilla.
      </>
    ),
  },
  {
    title: 'Óptimizado para el trópico',
    imageUrl: 'img/tucan.png',
    description: (
      <>
	    Las tecnologías se aplican de diferentes formas en todas partes del mundo es por esto que este editor ha sido elaborado con el objetivo de adaptar el formato a las necesidades específicas de la región.
      </>
    ),
  },
  {
    title: 'Tecnología web',
    imageUrl: 'img/open_source.png',
    description: (
      <>
	    Las tecnologías utilizadas para la elaboración del editor son en su mayoría Web, lo que lo convierte en una opción sencilla de utilizar en cualquier plataforma.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
            Iniciar 
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
