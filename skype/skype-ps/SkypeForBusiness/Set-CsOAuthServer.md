---
applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
author: paulkwo-msft2
external help file: Microsoft.Rtc.Management.dll-help.xml
Locale: en-US
manager: paulkwo
Module Name: SkypeForBusiness
ms.author: paulkwo
online version: https://learn.microsoft.com/powershell/module/skypeforbusiness/set-csoauthserver
schema: 2.0.0
title: Set-CsOAuthServer
---

# Set-CsOAuthServer

## SYNOPSIS

Modifies an existing Open Authorization (OAuth) server. OAuth servers, also known as security token servers, issue security tokens used in server-to-server authentication and authorization. This cmdlet was introduced in Lync Server 2013. 

## Syntax 

```
Set-CsOAuthServer 
    [-Identity] <XdsGlobalRelativeIdentity> 
    [-Confirm] 
    [-Force] 
    [-Instance <PSObject>] 
    [-MetadataUrl <String>] 
    [-Tenant <Guid>] 
    [-WhatIf] 
    [-AcceptSecurityIdentifierInformation <Boolean>] 
    [-AuthorizationUriOverride <String>] 
    [-GraphEndpoint <String>] 
    [-Type <String>] 
    [<CommonParameters>] 

## Description 

In Skype for Business Server, server-to-server authentication (for example, the authentication that enables Skype for Business Server and Exchange to share information) is carried out using the OAuth security protocol. This type of authentication typically requires three servers: the two servers that need to communicate with one another (Server A and B) and a third-party security token server. If Servers A and B need to communicate with one another, the two servers contact the token server (also known as an OAuth server) and obtain mutually-trusted security tokens that the two servers can exchange in order to prove their identities. 

If you are using an on-premises version of Skype for Business Server and you need to communicate with another server product that fully supports the OAuth then you typically do not need to use a token server; that's because these server products are able to issue their own security tokens. However, if you need to communicate with another server product (including server products found on Office 365) then you will need to use a token servers. These token servers can be managed by using the CsOAuthServer cmdlets. 

Skype for Business Server Control Panel: The functions carried out by the Set-CsOAuthServer cmdlet are not available in the Skype for Business Server Control Panel. 

## Examples 

### Example 1 

```
Set-CsOAuthServer -Identity "Office 365" -MetadataUrl "https://sts.office365.microsoft.com/metadata/json/1" 
```

The command shown in Example 1 updates the metadata URL for the OAuth Server Office 365. 

## Parameters 

### -AcceptSecurityIdentifierInformation 

Applicable: Skype for Business Server 2015, Skype for Business Server 2019 

When set to True ($True), security identifiers (SIDs) can be used for authentication purposes. The default value is False. 

Parameter properties 

Type: 

Boolean 

Default value: 

None 

Supports wildcards: 

False 

DontShow: 

False 

 

Parameter sets 

(All) 

Position: 

Named 

Mandatory: 

False 

Value from pipeline: 

False 

Value from pipeline by property name: 

False 

Value from remaining arguments: 

False 

 

### -AuthorizationUriOverride 

Applicable: Skype for Business Server 2015, Skype for Business Server 2019 

URI used for OAuth authorization override. The override prevents authenticated users from being reprompted for their credentials after they have logged on. 

Parameter properties 

Type: 

String 

Default value: 

None 

Supports wildcards: 

False 

DontShow: 

False 

 

Parameter sets 

(All) 

Position: 

Named 

Mandatory: 

False 

Value from pipeline: 

False 

Value from pipeline by property name: 

False 

Value from remaining arguments: 

False 

 

### -Confirm 

Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019 

Prompts you for confirmation before executing the command. 

Parameter properties 

Type: 

SwitchParameter 

Default value: 

None 

Supports wildcards: 

False 

DontShow: 

False 

Aliases: 

cf 

 

Parameter sets 

(All) 

Position: 

Named 

Mandatory: 

False 

Value from pipeline: 

False 

Value from pipeline by property name: 

False 

Value from remaining arguments: 

False 

 

### -Force 

Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019 

Suppresses the display of any non-fatal error message that might occur when running the command. 

Parameter properties 

Type: 

SwitchParameter 

Default value: 

None 

Supports wildcards: 

False 

DontShow: 

False 

 

Parameter sets 

(All) 

Position: 

Named 

Mandatory: 

False 

Value from pipeline: 

False 

Value from pipeline by property name: 

False 

Value from remaining arguments: 

False 

 

### -GraphEndpoint 

Applicable: Skype for Business Server Subscription Edition 

Microsoft Graph service root that Skype for Business Server uses to reach Exchange Online mailboxes (for example, for user photos and conversation history). For example: 

-GraphEndpoint "https://graph.microsoft.us" 

The value must be an absolute HTTPS URL. If your tenant is in a sovereign cloud or in an air-gapped environment, set this parameter to the Microsoft Graph endpoint for that cloud. For the public (worldwide) cloud, setting this parameter is not mandatory. 

To remove the value, set the parameter to an empty string: 

-GraphEndpoint "" 

Parameter properties 

Type: 

String 

Default value: 

None 

Supports wildcards: 

False 

DontShow: 

False 

 

Parameter sets 

(All) 

Position: 

Named 

Mandatory: 

False 

Value from pipeline: 

False 

Value from pipeline by property name: 

False 

Value from remaining arguments: 

False 

 

### -Identity 

Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019 

Friendly (and unique) name used to identify the OAuth server. 

Parameter properties 

Type: 

XdsGlobalRelativeIdentity 

Default value: 

None 

Supports wildcards: 

False 

DontShow: 

False 

 

Parameter sets 

(All) 

Position: 

2 

Mandatory: 

True 

Value from pipeline: 

False 

Value from pipeline by property name: 

False 

Value from remaining arguments: 

False 

 

### -Instance 

Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019 

Allows you to pass a reference to an object to the cmdlet rather than set individual parameter values. 

Parameter properties 

Type: 

PSObject 

Default value: 

None 

Supports wildcards: 

False 

DontShow: 

False 

 

Parameter sets 

(All) 

Position: 

Named 

Mandatory: 

False 

Value from pipeline: 

True 

Value from pipeline by property name: 

False 

Value from remaining arguments: 

False 

 

### -MetadataUrl 

Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019 

URL where the WS-FederationMetadata for the server is published. Servers use the metadata to agree on the types of tokens that will be exchanged as well the keys that will be used to sign these tokens. 

Parameter properties 

Type: 

String 

Default value: 

None 

Supports wildcards: 

False 

DontShow: 

False 

 

Parameter sets 

(All) 

Position: 

Named 

Mandatory: 

False 

Value from pipeline: 

False 

Value from pipeline by property name: 

False 

Value from remaining arguments: 

False 

 

### -Tenant 

Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019 

Globally unique identifier (GUID) of the Skype for Business Online tenant account for the OAuth server being modified. For example: 

-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308" 

You can return the tenant ID for each of your tenants by running this command: 

Get-CsTenant | Select-Object DisplayName, TenantID 

Parameter properties 

Type: 

Guid 

Default value: 

None 

Supports wildcards: 

False 

DontShow: 

False 

 

Parameter sets 

(All) 

Position: 

Named 

Mandatory: 

False 

Value from pipeline: 

False 

Value from pipeline by property name: 

False 

Value from remaining arguments: 

False 

 

### -Type 

Applicable: Skype for Business Server 2015, Skype for Business Server 2019 

Type of authentication used by the server. For example, this syntax configures the server to use Active Directory Federation Services authentication: 

-Type "ADFS" 

Parameter properties 

Type: 

String 

Default value: 

None 

Supports wildcards: 

False 

DontShow: 

False 

 

Parameter sets 

(All) 

Position: 

Named 

Mandatory: 

False 

Value from pipeline: 

False 

Value from pipeline by property name: 

False 

Value from remaining arguments: 

False 

 

### -WhatIf 

Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019 

Describes what would happen if you executed the command without actually executing the command. 

Parameter properties 

Type: 

SwitchParameter 

Default value: 

None 

Supports wildcards: 

False 

DontShow: 

False 

Aliases: 

wi 

 

Parameter sets 

(All) 

Position: 

Named 

Mandatory: 

False 

Value from pipeline: 

False 

Value from pipeline by property name: 

False 

Value from remaining arguments: 

False 

 

### CommonParameters 

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216). 

## Inputs 

Microsoft.Rtc.Management.WritableConfig.Settings.SSAuth.OAuthServer#Decorated 

The Set-CsOAuthServer cmdlet accepts pipelined instances of the Microsoft.Rtc.Management.WritableConfig.Settings.SSAuth.OAuthServer#Decorated object. 

## Outputs 

None 

Instead, the Set-CsOAuthServer cmdlet modifies existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.SSAuth.OAuthServer#Decorated object. 

## Related Links 

Get-CsOAuthServer 

New-CsOAuthServer 

Remove-CsOAuthServer 