export interface Files {
  name: string;
  type: 'file' | 'directory';
  children?: Files[];
}
