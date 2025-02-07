export interface Files {
  name: string;
  type: 'file' | 'directory';
  childs?: Files[];
}
