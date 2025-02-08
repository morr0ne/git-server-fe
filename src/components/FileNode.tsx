import type { Files } from '@/types/files';
import { sortFiles } from '@/utils';
import { For, Match, Show, Switch, type Component } from 'solid-js';
import IconFile from '~icons/lucide/file';
import IconFolder from '~icons/lucide/folder';

export type Props = Files & {
  isRoot?: boolean;
};

const DirectoryContent: Component<Props> = (props) => (
  <ul>
    <For each={props.childs?.sort(sortFiles)}>
      {(child) => <FileNode {...child} />}
    </For>
  </ul>
);

const FileNode: Component<Props> = (props) => (
  <Show
    when={props.isRoot && props.type === 'directory'}
    fallback={
      <li>
        <Switch>
          <Match when={props.type === 'file'}>
            <a>
              <IconFile class="size-4" />
              {props.name}
            </a>
          </Match>

          <Match when={props.type === 'directory'}>
            <details>
              <summary>
                <IconFolder class="size-4" />
                {props.name}
              </summary>
              <DirectoryContent {...props} />
            </details>
          </Match>
        </Switch>
      </li>
    }
  >
    <DirectoryContent {...props} />
  </Show>
);

export default FileNode;
