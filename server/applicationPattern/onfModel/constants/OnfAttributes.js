/**
 * The file consists of the ONF core-model attributes.
 *  
 **/

/******************************************
 ********global nd local class*************
 *****************************************/

const GLOBAL_CLASS = {
    UUID: "uuid"
};

const LOCAL_CLASS = {
    LOCAL_ID: "local-id"
};

const NAME = {
    VALUE_NAME: "value-name",
    VALUE: "value"
};

/******************************************
 ********control-construct****************
 *****************************************/

const CONTROL_CONSTRUCT = {
    PROFILE_COLLECTION: "profile-collection",
    LOGICAL_TERMINATION_POINT: "logical-termination-point",
    FORWARDING_DOMAIN: "forwarding-domain",
    LINK: "link"
};

/******************************************
 ********************link******************
 *****************************************/

 const LINK = {
    LINK_PORT: "link-port",
    PORT_DIRECTION: "port-direction",
    LOGICAL_TERMINATION_POINT: "logical-termination-point"
};

/******************************************
 ********Profile-collection****************
 *****************************************/

const PROFILE_COLLECTION = {
    PROFILE: "profile"
};

const PROFILE = {
    PROFILE_NAME: "profile-name"
};

const APPLICATION_PROFILE = {
    PAC: "application-profile-1-0:application-profile-pac",
    CAPABILITY: "application-profile-capability",
    CONFIGURATION: "application-profile-configuration",
    APPLICATION_NAME: "application-name",
    RELEASE_NUMBER: "release-number",
    APPROVAL_STATUS: "approval-status"
};

/******************************************
 ********logical-termination-point*********
 *****************************************/

const LOGICAL_TERMINATION_POINT = {
    LAYER_PROTOCOL: "layer-protocol",
    LTP_DIRECTION: "ltp-direction",
    CLIENT_LTP: "client-ltp",
    SERVER_LTP: "server-ltp"
};

const LAYER_PROTOCOL = {
    LAYER_PROTOCOL_NAME: "layer-protocol-name",
    OPERATION_SERVER_INTERFACE_PAC: "operation-server-interface-1-0:operation-server-interface-pac",
    HTTP_SERVER_INTERFACE_PAC: "http-server-interface-1-0:http-server-interface-pac",
    TCP_SERVER_INTERFACE_PAC: "tcp-server-interface-1-0:tcp-server-interface-pac",
    OPERATION_CLIENT_INTERFACE_PAC: "operation-client-interface-1-0:operation-client-interface-pac",
    HTTP_CLIENT_INTERFACE_PAC: "http-client-interface-1-0:http-client-interface-pac",
    TCP_CLIENT_INTERFACE_PAC: "tcp-client-interface-1-0:tcp-client-interface-pac"
};

const HTTP_SERVER = {
    CAPABILITY: "http-server-interface-capability",
    CONFIGURATION: "http-server-interface-configuration",
    APPLICATION_NAME: "application-name",
    RELEASE_NUMBER: "release-number",
    RELEASE_DATE: "release-date",
    RELEASE_LIST: "release-list",
    CHANGES : "changes"
};

const HTTP_CLIENT = {
    CAPABILITY: "http-client-interface-capability",
    CONFIGURATION: "http-client-interface-configuration",
    APPLICATION_NAME: "application-name",
    RELEASE_NUMBER: "release-number"
};

const OPERATION_SERVER = {
    CAPABILITY: "operation-server-interface-capability",
    CONFIGURATION: "operation-server-interface-configuration",
    OPERATION_NAME: "operation-name",
    LIFE_CYCLE_STATE: "life-cycle-state",
    OPERATION_KEY: "operation-key"
};

const OPERATION_CLIENT = {
    CAPABILITY: "operation-client-interface-capability",
    CONFIGURATION: "operation-client-interface-configuration",
    OPERATION_NAME: "operation-name",
    LIFE_CYCLE_STATE: "life-cycle-state",
    OPERATION_KEY: "operation-key",
    OPERATIONAL_STATE: "operational-state"
};

const TCP_SERVER = {
    CAPABILITY: "tcp-server-interface-capability",
    CONFIGURATION: "tcp-server-interface-configuration",
    IPV_4_ADDRESS: "ipv-4-address",
    LOCAL_PORT: "local-port"
};

const TCP_CLIENT = {
    CAPABILITY: "tcp-client-interface-capability",
    CONFIGURATION: "tcp-client-interface-configuration",
    REMOTE_ADDRESS: "remote-address",
    IP_ADDRESS: "ip-address",
    IPV_4_ADDRESS: "ipv-4-address",
    REMOTE_PORT: "remote-port"
}

/******************************************
 ********forwarding-domain**************
 *****************************************/

const FORWARDING_DOMAIN = {
    FORWARDING_CONSTRUCT: "forwarding-construct"
};

const FORWARDING_CONSTRUCT = {
    NAME: "name",
    FC_PORT: "fc-port"
};

const FC_PORT = {
    PORT_DIRECTION: "port-direction",
    LOGICAL_TERMINATION_POINT: "logical-termination-point"
};

module.exports = {
    GLOBAL_CLASS,
    LOCAL_CLASS,
    NAME,
    CONTROL_CONSTRUCT,
    LINK,
    PROFILE_COLLECTION,
    PROFILE,
    APPLICATION_PROFILE,
    LOGICAL_TERMINATION_POINT,
    LAYER_PROTOCOL,
    HTTP_SERVER,
    HTTP_CLIENT,
    OPERATION_SERVER,
    OPERATION_CLIENT,
    TCP_SERVER,
    TCP_CLIENT,
    FORWARDING_DOMAIN,
    FORWARDING_CONSTRUCT,
    FC_PORT
}