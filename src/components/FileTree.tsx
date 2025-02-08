import FileNode from '@/components/FileNode';
import type { Files } from '@/types/files';
import { type Component } from 'solid-js';

interface Props {
  files: Files;
}

const FileTree: Component<Props> = (props) => {
  return (
    <div class="flex flex-row">
      <ul class="menu menu-xs bg-base-200 rounded-box w-full max-w-xs">
        <FileNode {...props.files} isRoot />
      </ul>
    </div>
  );
};

export default FileTree;
