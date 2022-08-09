import 'reflect-metadata';
import Container from "typedi";

import { ConfigLoaderBase, DateLoaderBase } from "../..";
import { JsYamlConfigLoader, DateLoader } from "..";

export async function initIoC() {
  Container.set(ConfigLoaderBase, new JsYamlConfigLoader());
  Container.set(DateLoaderBase, new DateLoader());
}
