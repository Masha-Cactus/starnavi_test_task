"use client";

import ReactFlow from "reactflow";
import "reactflow/dist/style.css";
import CustomNode from "./CustomNode";
import { EdgeType, NodeType } from "../types/node";

type Props = {
  nodes: NodeType[];
  edges: EdgeType[];
};

const nodeTypes = { custom: CustomNode };

// functional component that generates an instance of ReactFlow
const Flow: React.FC<Props> = ({ nodes, edges }) => {

  return (
    <ReactFlow
      defaultNodes={nodes}
      defaultEdges={edges}
      fitView
      nodeTypes={nodeTypes}
      fitViewOptions={{
        includeHiddenNodes: true,
        maxZoom: 5,
        minZoom: 0
      }}
    />
  );
};

export default Flow;
