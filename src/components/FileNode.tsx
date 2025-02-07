import type { Files } from '@/types/files';
import { For, Match, Switch, type Component } from 'solid-js';
import IconFile from '~icons/lucide/file';
import IconFolder from '~icons/lucide/folder';

const FileNode: Component<Files> = (props) => {
  return (
    <li>
      <Switch>
        <Match when={props.type == 'file'}>
          <a>
            <IconFile class="size-4" />
            {props.name}
          </a>
        </Match>
        <Match when={props.type == 'directory'}>
          <details>
            <summary>
              <IconFolder class="size-4" />
              {props.name}
            </summary>
            <ul>
              <For each={props.childs}>
                {(child) => <FileNode {...child} />}
              </For>
            </ul>
          </details>
        </Match>
      </Switch>
    </li>
  );
};

export default FileNode;
