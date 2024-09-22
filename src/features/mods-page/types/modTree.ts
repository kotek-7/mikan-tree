import { Image, isImage } from "@/types/image";

// Root of mod tree nodes
export interface ModTree {
  readonly nodes: ModTreeNode[];
}

export interface ModTreeBranchNode {
  readonly id: string;
  readonly name: string;
  readonly nodes: ModTreeNode[];
}

export interface ModTreeLeafNode {
  readonly id: string;
  readonly name: string;
  readonly icon: Image;
}

// Accepts ModTree or ModTreeBranchNode
export interface HasNodes {
  readonly nodes: ModTreeNode[];
}

export function findNodes(sourceNode: HasNodes, targetId: string): ModTreeNode[] {
  const foundNodes: ModTreeNode[] = [];

  foundNodes.push(...findBranchNodes(sourceNode, targetId));
  foundNodes.push(...findLeafNodes(sourceNode, targetId));

  return foundNodes;
}

export function findBranchNodes(sourceNode: HasNodes, targetId: string): ModTreeBranchNode[] {
  const foundNodes: ModTreeBranchNode[] = [];

  sourceNode.nodes.forEach((node) => {
    if (isBranchNode(node)) {
      if (node.id === targetId) foundNodes.push(node);
      if (node.id !== targetId) foundNodes.push(...findBranchNodes(node, targetId));
    }
  });

  return foundNodes;
}

export function findLeafNodes(sourceNode: HasNodes, targetId: string): ModTreeLeafNode[] {
  console.log(`findLeafNodes: Searching node with id of ${targetId} from among %o...`, sourceNode)

  const foundNodes: ModTreeLeafNode[] = [];

  sourceNode.nodes.forEach((node) => {
    if (isLeafNode(node) && node.id === targetId) foundNodes.push(node);
    if (isBranchNode(node)) foundNodes.push(...findLeafNodes(node, targetId));
  });

  console.log("findLeafNodes: Found %o", foundNodes)

  return foundNodes;
}

export function isModTreeNode(obj: unknown): obj is ModTreeNode {
  if (isBranchNode(obj)) return true;
  if (isLeafNode(obj)) return true;
  return false;
}

export function isBranchNode(obj: unknown): obj is ModTreeBranchNode {
  console.log("isBranchNode: Checking is %o branch node...", obj);

  if (typeof obj !== "object" || obj === null) {
    console.log("isBranchNode: Passed obj is not object");
    console.log("isBranchNode: Passed obj is not branch node");
    return false;
  }

  const branchNode = obj as { [_ in keyof ModTreeBranchNode]: unknown };

  if (typeof branchNode.id !== "string") {
    console.log("isBranchNode: Passed obj does not have correct id");
    console.log("isBranchNode: Passed obj is not branch node");
    return false;
  }
  if (typeof branchNode.name !== "string") {
    console.log("isBranchNode: Passed obj does not have correct name");
    console.log("isBranchNode: Passed obj is not branch node");
    return false;
  }
  if (!(Array.isArray(branchNode.nodes) && branchNode.nodes.every(isModTreeNode))) {
    console.log("isBranchNode: Passed obj does not have correct nodes");
    console.log("isBranchNode: Passed obj is not branch node");
    return false;
  }

  console.log("isBranchNode: Passed obj is branch node");
  return true;
}

export function isLeafNode(obj: unknown): obj is ModTreeLeafNode {
  console.log("isLeafNode: Checking is %o leaf node...", obj);

  if (typeof obj !== "object" || obj === null) {
    console.log("isLeafNode: Passed obj is not object");
    console.log("isLeafNode: Passed obj is not branch node");
    return false;
  }

  const leafNode = obj as { [_ in keyof ModTreeLeafNode]: unknown };

  if (typeof leafNode.id !== "string") {
    console.log("isLeafNode: Passed obj does not have correct id");
    console.log("isLeafNode: Passed obj is not branch node");
    return false;
  }
  if (typeof leafNode.name !== "string") {
    console.log("isLeafNode: Passed obj does not have correct name");
    console.log("isLeafNode: Passed obj is not branch node");
    return false;
  }
  if (!isImage(leafNode.icon)) {
    console.log("isLeafNode: Passed obj does not have correct icon");
    console.log("isLeafNode: Passed obj is not branch node");
    return false;
  }

  console.log("isLeafNode: Passed obj is leaf node");
  return true;
}

export type ModTreeNode = ModTreeBranchNode | ModTreeLeafNode;
