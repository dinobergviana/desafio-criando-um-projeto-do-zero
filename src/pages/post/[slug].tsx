import { GetStaticPaths, GetStaticProps } from 'next';
import { FiCalendar, FiClock, FiUser } from 'react-icons/fi';
import Header from '../../components/Header';

import { getPrismicClient } from '../../services/prismic';

import commonStyles from '../../styles/common.module.scss';
import styles from './post.module.scss';

interface Post {
  first_publication_date: string | null;
  data: {
    title: string;
    banner: {
      url: string;
    };
    author: string;
    content: {
      heading: string;
      body: {
        text: string;
      }[];
    }[];
  };
}

interface PostProps {
  post: Post;
}

export default function Post(post: PostProps): JSX.Element {
  return (
    <>
      <Header />
      <img src="/teste.png" alt="imagem" className={styles.banner} />
      <main className={commonStyles.container}>
        <div className={styles.post}>
          <div className={styles.postTop}>
            <h1>Exemplo</h1>
            <ul>
              <li>
                <FiCalendar />
                18 Mar 2022
              </li>
              <li>
                <FiUser />
                Dinobergue Viana
              </li>
              <li>
                <FiClock />5 min
              </li>
            </ul>
          </div>

          <article>
            <h2>Titulo</h2>
            <p>
              Lorem ipsum
              <strong> dolor</strong> sit amet consectetur adipisicing elit.
              Tempore, dolorum tenetur? Tenetur suscipit commodi impedit,
              ducimus eos corrupti veniam numquam optio est aliquid, dolorem
              nisi itaque, dolores eveniet. Error, delectus?
            </p>
          </article>
        </div>
      </main>
    </>
  );
}

// export const getStaticPaths = async () => {
//   const prismic = getPrismicClient();
//   const posts = await prismic.query(TODO);

//   // TODO
// };

// export const getStaticProps = async context => {
//   const prismic = getPrismicClient();
//   const response = await prismic.getByUID(TODO);

//   // TODO
// };
