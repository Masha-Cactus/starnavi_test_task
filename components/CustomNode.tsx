import { Handle, Position } from "reactflow";
import Image from "next/image";

type Props = {
  data: {
    category: string;
    name: string;
  };
};

// functional component that generates a styled node.
const CustomNode: React.FC<Props> = ({ data }) => {
  return (
    <article className={`
    px-2 py-2 shadow-md relative w-40 
    rounded-md bg-primary hover:bg-primary-hover`}>
      <div className={`h-auto flex flex-col justify-center items-center bg-bgGrey px-2 py-2`}>
        <Image
          alt="category icon"
          src={`/icons/${data.category}.svg`}
          width={200}
          height={200}
          className="h-6 w-6 bg-cover bg-center bg-no-repeat absolute"
          style={{ top: '-12px', left: '-10px', right: '-10px' }}
        />
        <p className="text-custom text-center">{data.name}</p>
      </div>

      {data.category !== "hero" && (
        <Handle
          type="target"
          position={Position.Top}
          className="w-16 bg-blue"
        />
      )}

      {data.category !== "starship" && (
        <Handle
          type="source"
          position={Position.Bottom}
          className="w-4 bg-blue-500"
        />
      )}
    </article>
  );
};

export default CustomNode;
