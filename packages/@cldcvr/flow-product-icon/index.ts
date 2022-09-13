import { ConfigUtil } from '@cldcvr/flow-core';
import p_aws_dark from './svg/p-aws-dark';
import p_azure from './svg/p-azure';
import p_gcp from './svg/p-gcp';
import p_aws_light from './svg/p-aws-light';
import p_gitlab from './svg/p-gitlab';
import p_google from './svg/p-google';
import p_docker from './svg/p-docker';
import p_kubernetes from './svg/p-kubernetes';
import p_cloudcover_dark_full from './svg/p-cloudcover-dark-full';
import p_asana from './svg/p-asana';
import l_mongodb from './svg/l-mongodb';
import p_jira from './svg/p-jira';
import p_sql_server from './svg/p-sql-server';
import p_mongodb from './svg/p-mongodb';
import p_oracle from './svg/p-oracle';
import p_slack from './svg/p-slack';
import p_mysql from './svg/p-mysql';
import p_postgresql from './svg/p-postgresql';
import p_cloudcover_dark from './svg/p-cloudcover-dark';
import p_dataiku from './svg/p-dataiku';
import p_golang from './svg/p-golang';
import p_discord from './svg/p-discord';
import p_jupyter from './svg/p-jupyter';
import p_prometheus from './svg/p-prometheus';
import p_datapipes from './svg/p-datapipes';
import p_hadoop from './svg/p-hadoop';
import p_tableau from './svg/p-tableau';
import p_tomcat from './svg/p-tomcat';
import p_postmark from './svg/p-postmark';
import p_fortify from './svg/p-fortify';
import p_sonarqube_dark from './svg/p-sonarqube-dark';
import p_sonarcloud from './svg/p-sonarcloud';
import p_terraform from './svg/p-terraform';
import p_memcache from './svg/p-memcache';
import p_sonarqube_light from './svg/p-sonarqube-light';
import p_sonatype from './svg/p-sonatype';
import p_redis from './svg/p-redis';
import p_vscode from './svg/p-vscode';
import p_github from './svg/p-github';
const IconPack = {
    'p-aws-dark': p_aws_dark,
    'p-azure': p_azure,
    'p-gcp': p_gcp,
    'p-aws-light': p_aws_light,
    'p-gitlab': p_gitlab,
    'p-google': p_google,
    'p-docker': p_docker,
    'p-kubernetes': p_kubernetes,
    'p-cloudcover-dark-full': p_cloudcover_dark_full,
    'p-asana': p_asana,
    'l-mongodb': l_mongodb,
    'p-jira': p_jira,
    'p-sql-server': p_sql_server,
    'p-mongodb': p_mongodb,
    'p-oracle': p_oracle,
    'p-slack': p_slack,
    'p-mysql': p_mysql,
    'p-postgresql': p_postgresql,
    'p-cloudcover-dark': p_cloudcover_dark,
    'p-dataiku': p_dataiku,
    'p-golang': p_golang,
    'p-discord': p_discord,
    'p-jupyter': p_jupyter,
    'p-prometheus': p_prometheus,
    'p-datapipes': p_datapipes,
    'p-hadoop': p_hadoop,
    'p-tableau': p_tableau,
    'p-tomcat': p_tomcat,
    'p-postmark': p_postmark,
    'p-fortify': p_fortify,
    'p-sonarqube-dark': p_sonarqube_dark,
    'p-sonarcloud': p_sonarcloud,
    'p-terraform': p_terraform,
    'p-memcache': p_memcache,
    'p-sonarqube-light': p_sonarqube_light,
    'p-sonatype': p_sonatype,
    'p-redis': p_redis,
    'p-vscode': p_vscode,
    'p-github': p_github,
} as Record<string, string>;

ConfigUtil.setConfig({ iconPack: { ...IconPack, ...ConfigUtil.getConfig().iconPack } });
export default IconPack;
