import Image from 'next/image';

const logos = [
    {
        name: 'Starbucks',
        url: 'https://storage.googleapis.com/project-spark-b2481-avatars/a6a12b23-263a-46e3-95f7-3620f4b63897.svg',
        width: 100,
        height: 100,
    },
    {
        name: 'Chick-fil-A',
        url: 'https://storage.googleapis.com/project-spark-b2481-avatars/2fe55a30-22c6-4335-859a-a3095315843a.svg',
        width: 160,
        height: 48,
    },
    {
        name: 'Wingstop',
        url: 'https://storage.googleapis.com/project-spark-b2481-avatars/b3017f41-38a3-4853-b184-486110f64c67.svg',
        width: 120,
        height: 48,
    },
];

export function TrustBar() {
  return (
    <div className="py-8">
      <div className="flex justify-center items-center gap-8 md:gap-12 flex-wrap">
        {logos.map((logo) => (
          <div key={logo.name} className="relative" style={{ width: logo.width, height: logo.height }}>
            <Image
              src={logo.url}
              alt={`${logo.name} logo`}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
