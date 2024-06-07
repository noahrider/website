import { useRouter } from 'next/router';

export default function Custom404() {
  const router = useRouter();
  const unknownPage = router.asPath;

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <title>404 </title>
      <h1>404 Page Not Found</h1>
      <br></br>
      <p>Tried to search for <code>{unknownPage}</code> returned nothing</p>
    </div>
  );
}
