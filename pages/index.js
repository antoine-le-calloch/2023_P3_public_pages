import Source from "@/components/Source";
import RootLayout from "@/components/layout";

// This function gets called at build time on server-side
export async function getStaticProps() {
    // the source data
    const data = {
        objectID: 'ZTF21aaqjyho',
        id: 'ZTF21aaqjyho',
        ra: 0.0,
        dec: 0.0,
        redshift: 0.0,
        summary: 'This is a fake source, bla bla bla',
        cutouts: '/images/cutouts.png',
        updateDate: new Date().toLocaleString(),
    }

    return {
        props: {
            source: data,
        },
        // The data will be revalidate every 20s
        revalidate: 20,
    };
}

export default function Index({ source }) {
    return (
        <RootLayout>
            <Source source={source}/>
        </RootLayout>
    );
}
