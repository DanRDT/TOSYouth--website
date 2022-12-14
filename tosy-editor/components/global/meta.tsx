import Head from 'next/head'

const Meta = ({title, description}) => {
    if (title == "") {
        title = "TOSY Website Editor"
    }
    else if (description == "") {
        description = "Tabernacle of Salvation Youth"
    }

    return (
        <Head>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" key="meta-edge"/>
            <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0" key="meta-viewport"/>
            <title>{title}</title>
            <meta name="description" content={description}/>
            <link rel="icon" href="/imgs/favicon.svg" key="meta-icon"/>
        </Head>
    )
}

Meta.defaultProps = {
    title: 'TOSY Website Editor',
    description: 'TOSY Youth Website Editor'
}

export default Meta