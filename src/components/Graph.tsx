import { ReactFlow, Background, type Node, type Edge } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const nodes: Node[] = [
  {
    id: 'W1',
    position: { x: 0, y: 0 },
    data: { label: 'Wayland Client' },
    type: 'input',
  },
  {
    id: 'W2',
    position: { x: 200, y: 0 },
    data: { label: 'Wayland Client' },
    type: 'input',
  },
  {
    id: 'W3',
    position: { x: 400, y: 0 },
    data: { label: 'Wayland Client' },
    type: 'input',
  },
  {
    id: 'XWayland',
    position: { x: 400, y: 0 },
    data: { label: 'XWayland' },
    type: 'input',
    style: {
      width: 200,
      height: 220,
    },
  },
  {
    id: 'X1',
    position: { x: 25, y: 40 },
    data: { label: 'X Client' },
    type: 'input',
    parentId: 'XWayland',
    extent: 'parent',
  },
  {
    id: 'X2',
    position: { x: 25, y: 100 },
    data: { label: 'X Client' },
    type: 'input',
    parentId: 'XWayland',
    extent: 'parent',
  },
  {
    id: 'X3',
    position: { x: 25, y: 160 },
    data: { label: 'X Client' },
    type: 'input',
    parentId: 'XWayland',
    extent: 'parent',
  },
  {
    id: 'Socket',
    position: { x: 200, y: 200 },
    data: { label: 'Unix Socket' },
  },
  {
    id: 'WGPU',
    position: { x: 200, y: 300 },
    data: { label: 'WGPU' },
  },

  {
    id: 'Kernel',
    position: { x: 175, y: 400 },
    data: { label: 'Kernel' },
    style: {
      width: 200,
      height: 100,
    },
  },
  {
    id: 'KMS',
    position: { x: 25, y: 40 },
    data: { label: 'KMS/DRM' },
    type: 'input',
    parentId: 'Kernel',
    extent: 'parent',
  },
];

const edges: Edge[] = [
  { id: 'W1-S', source: 'W1', target: 'Socket' },
  { id: 'W2-S', source: 'W2', target: 'Socket' },
  { id: 'W3-S', source: 'W3', target: 'Socket' },
  { id: 'XW-S', source: 'XWayland', target: 'Socket' },
];

const Graph = () => {
  return (
    <div className="h-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        proOptions={{ hideAttribution: true }}
      >
        <Background />
      </ReactFlow>
    </div>
  );
};

export default Graph;
