function Index({ date }) {
  return <div>{date}</div>
}

export async function getStaticProps() {
  const date = new Date()

  return {
    props: {
      revalidate: 300,
      date,
    },
  }
}

export default Index