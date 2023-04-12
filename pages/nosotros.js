import Image from 'next/image';
import Layout from "@/components/layout";
import styles from "@/styles/nosotros.module.css"
export default function Nosotros() {
  return (
    <Layout
      title={"Nosotros"}
      description="Sobre nosotros, GuitarLA, tienda de música."
    >
      <main className="contenedor">
        <h1 className="heading">Nosotros</h1>

        <div className={styles.contenido}>
          <Image src="/img/nosotros.jpg" width={1000} height={800} alt="Imagen sobre nosotros" />
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              sit amet ante in turpis semper iaculis. Nunc a auctor mi, sed
              pretium ligula. Aenean cursus eget urna vitae aliquam. Phasellus
              porttitor consequat risus, eu iaculis metus ultricies eget. Nam
              pellentesque est ac gravida vulputate. Suspendisse eget dolor sit
              amet diam gravida iaculis vitae sit amet mauris. Ut urna purus,
              posuere in eleifend a, luctus eget turpis. Maecenas et orci quam.
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              sit amet ante in turpis semper iaculis. Nunc a auctor mi, sed
              pretium ligula. Aenean cursus eget urna vitae aliquam. Phasellus
              porttitor consequat risus, eu iaculis metus ultricies eget. Nam
              pellentesque est ac gravida vulputate. Suspendisse eget dolor sit
              amet diam gravida iaculis vitae sit amet mauris. Ut urna purus.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
