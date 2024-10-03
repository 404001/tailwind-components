import Instalation from '@/app/markdown/instalation.mdx'
import Overview from '@/app/markdown/overview.mdx'

const components = {
    h1: ({ children }: any) => <h1 className='text-white font-black text-[48px]'>{children}</h1>,
    h2: ({ children }: any) => <h2 className='text-white font-black text-[32px]'>{children}</h2>,
    h3: ({ children }: any) => <h3 className='text-white font-black text-[24px]'>{children}</h3>,
    p: ({ children }: any) => <p className='text-white/70 font-[400] text-[18px]'>{children}</p>,
    hr: () => <hr className='my-2'></hr>,
    strong: ({ children }: any) => <strong className='font-[600] text-white/90'>{children}</strong>,
    ul: ({ children }: any) => <ul className='list-disc list-inside ml-4'>{children}</ul>,
    li: ({ children }: any) => <li className='mb-2'>{children}</li>,
    ol: ({ children }: any) => <ol className='list-decimal list-inside ml-4'>{children}</ol>,
    dl: ({ children }: any) => <dl>{children}</dl>,
    dt: ({ children }: any) => <dt>{children}</dt>,
    dd: ({ children }: any) => <dd>{children}</dd>,
};

const mdxComponents: { [key: string]: (props: any) => JSX.Element } = {
    instalation: Instalation,
    overview: Overview,
};

export default function Page({ params }: { params: { slug: string } }) {
    const { slug } = params
    const MDXComponent = mdxComponents[slug];

    return <MDXComponent components={components} />;
}