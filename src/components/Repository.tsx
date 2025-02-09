import type { Files } from '@/types/files';
import { sortFiles } from '@/utils';
import { createMemo, For, Match, Switch, type Component } from 'solid-js';
import IconFile from '~icons/lucide/file';
import IconFolder from '~icons/lucide/folder';

export interface Props {
  files: Files;
  readme: string;
}

function timeAgo(timestamp: number) {
  const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });
  const now = Math.floor(Date.now() / 1000);
  const diff = timestamp - now;

  if (Math.abs(diff) < 60) {
    return rtf.format(Math.floor(diff), 'second');
  }

  if (Math.abs(diff) < 3600) {
    return rtf.format(Math.floor(diff / 60), 'minute');
  }

  if (Math.abs(diff) < 86400) {
    return rtf.format(Math.floor(diff / 3600), 'hour');
  }

  if (Math.abs(diff) < 2592000) {
    return rtf.format(Math.floor(diff / 86400), 'day');
  }

  if (Math.abs(diff) < 31536000) {
    return rtf.format(Math.floor(diff / 2592000), 'month');
  }

  return rtf.format(Math.floor(diff / 31536000), 'year');
}

interface Info {
  lastModified: number;
  commit: string;
  message: string;
}

function getDirectoryInfo(directory: Files): Info {
  if (directory.type === 'file') {
    return {
      lastModified: directory.modified,
      commit: directory.commit,
      message: directory.message,
    };
  }

  const childrenInfo = directory.childs.map((child) => getDirectoryInfo(child));

  const mostRecent = childrenInfo.reduce((latest, current) =>
    current.lastModified > latest.lastModified ? current : latest,
  );

  return mostRecent;
}

const Entry: Component<Files> = (props) => {
  const info = createMemo(() => {
    return getDirectoryInfo(props);
  });

  return (
    <tr>
      <td class="flex flex-row items-center gap-2">
        <Switch>
          <Match when={props.type === 'directory'}>
            <IconFolder class="size-4" />
          </Match>
          <Match when={props.type === 'file'}>
            <IconFile class="size-4" />
          </Match>
        </Switch>
        <a class="link link-hover">{props.name}</a>
      </td>
      <td>
        <a href={`/${info().commit}`} class="link link-hover">
          {info().message}
        </a>
      </td>
      <td class="text-right">{timeAgo(info().lastModified)}</td>
    </tr>
  );
};

const Repo: Component<Props> = (props) => {
  return (
    <div class="flex min-h-screen w-full items-center justify-center">
      <div class="max-w-5xl p-8">
        <div class="rounded-box border-base-content/5 bg-base-100 overflow-x-auto border">
          <table class="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Last commit</th>
                <th class="text-right">Last modified</th>
              </tr>
            </thead>
            <tbody>
              <For each={props.files.childs?.sort(sortFiles)}>
                {(child) => <Entry {...child} />}
              </For>
            </tbody>
          </table>
        </div>
        <article
          class="rounded-box border-base-content/5 bg-base-100 my-4 overflow-x-auto border p-8"
          innerHTML={props.readme}
        ></article>
      </div>
    </div>
  );
};

export default Repo;
