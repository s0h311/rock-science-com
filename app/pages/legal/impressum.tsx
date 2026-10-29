import { createFileRoute } from '@tanstack/react-router'

type ImpressumSearch = {
  source?: string
}

export const Route = createFileRoute('/legal/impressum')({
  validateSearch: (search: Record<string, unknown>): ImpressumSearch => ({
    source: typeof search['source'] === 'string' ? search['source'] : undefined,
  }),
  head: () => ({
    meta: [
      {
        title: 'Impressum',
      },
    ],
  }),
  component: ImpressumPage,
})

function ImpressumPage() {
  const { source } = Route.useSearch()

  return (
    <div className='mx-auto flex flex-col gap-8 text-pretty md:max-w-xl'>
      <h1 className='text-3xl font-bold'>Impressum</h1>

      <section className='flex flex-col gap-4'>
        <h2 className='text-xl font-semibold'>Angaben gemäß § 5 DDG</h2>

        <p>
          {source !== undefined && (
            <>
              {source} ist ein Angebot von:
              <br />
            </>
          )}
          Liam Funk
          <br />
          Rock Science
          <br />
          Oldachstr. 8
          <br />
          22307 Hamburg
          <br />
          Deutschland
        </p>
      </section>

      <section className='flex flex-col gap-4'>
        <h3 className='text-lg font-semibold'>Kontakt</h3>

        <div>
          <p>
            <strong>E-Mail:</strong>&nbsp;hello@rock-science.com
          </p>
          <p>
            <strong>Telefon:</strong>&nbsp;+49 151 6271 2892
          </p>
        </div>
      </section>

      <section className='flex flex-col gap-4'>
        <h3 className='text-lg font-semibold'>Umsatzsteuer</h3>

        <p>Kleinunternehmer gemäß § 19 UStG, keine Umsatzsteuer-Identifikationsnummer.</p>
      </section>
    </div>
  )
}
