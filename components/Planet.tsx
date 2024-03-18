import Image from 'next/image';

type Props = { planet: string };

// functional component displays an image of a planet with its name as the image source.
const Planet: React.FC<Props> = ({ planet }) => {
  const name = planet.replace(/ /g, '_');

  return (
    <div className={`w-32 h-32 absolute top-11 right-16 rounded-full bg-bgGrey
      md:w-60 md:h-60 md:top-11 md:right-36`}>
      <div className="opacity-40 w-full h-full">
        <Image
          src={`/planets/${name}.jpeg`}
          alt={`${planet} image`}
          width={700}
          height={700}
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Planet;
