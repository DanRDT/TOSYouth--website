import Head from 'next/head'

const Meta = ({title, description}) => {
    
    return (
        <Head>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" key="meta-edge"/>
            <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0" key="meta-viewport"/>
            <title>{title}</title>
            <meta name="description" content={description}/>
            <link rel="icon" href="/imgs/logo.svg" key="meta-icon"/>
        </Head>
    )
}

Meta.defaultProps = {
    title: 'Tabernacle of Salvation Youth',
    description: 'Tabernacle of Salvation Youth Website'
}

export default Meta