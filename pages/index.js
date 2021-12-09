function Index({ date }) {
  return <div>{date}</div>
}

export async function getStaticProps() {
  const date = new Date().toString()

  return {
    props: { date },
    revalidate: 200,
  }
}

export default Index