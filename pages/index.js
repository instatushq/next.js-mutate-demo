function Index({ date }) {
  return <div>{date}</div>
}

export async function getStaticProps() {
  const date = new Date().toString()

  return {
    props: {
      revalidate: 200,
      date,
    },
  }
}

export default Index