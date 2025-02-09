export interface BaseFile {
  name: string;
  type: 'file' | 'directory';
}

export interface FileNode extends BaseFile {
  type: 'file';
  modified: number;
  commit: string;
  message: string;
  childs?: never;
}

export interface DirectoryNode extends BaseFile {
  type: 'directory';
  childs: Files[];
  modified?: never;
  commit?: never;
  message?: never;
}

export type Files = FileNode | DirectoryNode;
