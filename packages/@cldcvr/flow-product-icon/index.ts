import { ConfigUtil } from '@cldcvr/flow-core-config';
import IconPack from './icon-pack';

ConfigUtil.setConfig({ iconPack: { ...IconPack, ...ConfigUtil.getConfig().iconPack } });
export default IconPack;
