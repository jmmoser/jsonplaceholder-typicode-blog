import { useRouter } from 'next/router';
import useSWR from 'swr';
import Header from '../../components/Header';
import InfoField from '../../components/InfoField';
import InfoSection from '../../components/InfoSection';
import Page from '../../components/Page';
import ErrorMessage from '../../components/ErrorMessage';
import * as API from '../../lib/api';

export default function Author() {
  const router = useRouter();
  const { id } = router.query;

  const { data: author, error } = useSWR(id ? `/users/${id}` : null, () => API.getAuthor(id));

  return (
    <Page>
      <Header />
      <ErrorMessage error={error} />
      {author && (
        <div className="flex justify-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-center mb-6">{author.name}</h1>
            <main className="grid gap-6 flex-1 md:grid-cols-2">
              <InfoSection title="Contact Information">
                <InfoField label="Email">
                  <a className="link" href={`mailto:${author.email}`}>
                    {author.email}
                  </a>
                </InfoField>

                <InfoField label="Username">
                  {author.username}
                </InfoField>

                <InfoField label="Website">
                  <a className="link" href={'//' + author.website}>
                    {author.website}
                  </a>
                </InfoField>

                <InfoField label="Phone Number">
                  {author.phone}
                </InfoField>

                <InfoField label="Address">
                  <div>
                    {`${author.address.street}, ${author.address.suite}`}
                  </div>
                  <div>
                    {`${author.address.city}, ${author.address.zipcode}`}
                  </div>
                </InfoField>

                <InfoField label="Latitude,Longitude">
                  <a
                    className="link"
                    href={`https://maps.google.com/?q=${author.address.geo.lat},${author.address.geo.lng}`}
                  >
                    {`${author.address.geo.lat},${author.address.geo.lng}`}
                  </a>
                </InfoField>
              </InfoSection>

              <InfoSection title="Company">
                <InfoField label="Name">{author.company.name}</InfoField>
                <InfoField label="Catch Phrase">{author.company.catchPhrase}</InfoField>
                <InfoField label="BS">{author.company.bs}</InfoField>
              </InfoSection>
            </main>
          </div>
        </div>
      )}
    </Page>
  );
}