---
applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
author: tomkau
external help file: Microsoft.Rtc.Management.dll-help.xml
Locale: en-US
manager: bulenteg
Module Name: SkypeForBusiness
ms.author: tomkau
ms.reviewer: rogupta
online version: https://learn.microsoft.com/powershell/module/skype/set-csoauthconfiguration
schema: 2.0.0
title: Set-CsOAuthConfiguration
---

# Set-CsOAuthConfiguration

## SYNOPSIS
Modifies the Open Authorization (OAuth) configuration settings currently in use in the organization.
OAuth is a standard protocol used for server-to-server authentication and authorization.
This cmdlet was introduced in Lync Server 2013.


## SYNTAX

### Identity (Default)
```
Set-CsOAuthConfiguration [-Tenant <Guid>] [-Realm <String>] [-ServiceName <String>]
 [-ClientAuthorizationOAuthServerIdentity <String>] [-ExchangeAutodiscoverAllowedDomains <String>]
 [-ExchangeAutodiscoverUrl <String>] [-ClientAdalAuthOverride <ClientAdalAuthOverride>]
 [-AlternateAudienceUrl <String>] [-AdditionalAudienceUrls <String>] [[-Identity] <XdsIdentity>] [-Force]
 [-WhatIf] [-Confirm] [<CommonParameters>]
```

### Instance
```
Set-CsOAuthConfiguration [-Tenant <Guid>] [-Instance <PSObject>] [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
In Skype for Business Server, server-to-server authentication (for example, the authentication that enables Skype for Business Server and Exchange to share information) is carried out using the OAuth security protocol.
OAuth is always on in Skype for Business Server; there is no need (or even any way) to enable or disable the protocol.
However, if Skype for Business Server needs to communicate with other server products you might need to modify your OAuth configuration settings; for example, you might need to specify the autodiscover URL for the Office 365 version of Exchange, and you might need to specify your Realm name.
These settings can only be managed by using the CsOAuthConfiguration cmdlets; options for managing OAuth settings are not available in the Skype for Business Server Control Panel.

Note that, for the on-premises version of Skype for Business Server, you can have only a single, global collection of OAuth settings: you cannot not create additional collections of OAuth settings nor can you delete the global collection.
Each Skype for Business Online tenant is also limited to a single collection of OAuth configuration settings.

Skype for Business Server Control Panel: The functions carried out by the `Set-CsOAuthConfiguration` cmdlet are not available in the Skype for Business Server Control Panel.

The following parameters are not applicable to Skype for Business Online: AdditionalAudienceUrls, AlternateAudienceUrl, ClientAuthorizationOAuthServerIdentity, ExchangeAutodiscoverAllowedDomains, ExchangeAutodiscoverUrl, Force, Identity, Instance, PipelineVariable, Realm, ServiceName, and Tenant

## EXAMPLES

### Example 1
```
Set-CsOAuthConfiguration -Identity global -Realm "contoso.com"
```

The command shown in Example 1 modifies the global collection of OAuth configuration settings.
In this example, the Realm property is set to "contoso.com".


## PARAMETERS

### -AdditionalAudienceUrls

> Applicable: Skype for Business Online

This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AlternateAudienceUrl

> Applicable: Skype for Business Online

This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ClientAdalAuthOverride

> Applicable: Skype for Business Online

Enable or disable ADAL (Modern Authentication) for Skype for Business Online in your tenant. Valid values are

NoOverride, use global OAuth configuration

Allowed, Enables OAuth for the tenant

Disallowed, Disables OAuth for the tenant

For more information, see [Hybrid Modern Authentication overview and prerequisites for using it with on-premises Skype for Business and Exchange servers](https://learn.microsoft.com/office365/enterprise/hybrid-modern-auth-overview)

```yaml
Type: ClientAdalAuthOverride
Parameter Sets: (All)
Aliases:
Accepted values: NoOverride, Allowed, Disallowed

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ClientAuthorizationOAuthServerIdentity

> Applicable: Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

URI of the OAuth server used for client authentication.


```yaml
Type: String
Parameter Sets: Identity, (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExchangeAutodiscoverAllowedDomains

> Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Collection of domains that autodiscover requests can be redirected to.
For example:

`-ExchangeAutodiscoverAllowedDomains "*.contoso.com;*.fabrikam.com"`


```yaml
Type: String
Parameter Sets: Identity, (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExchangeAutodiscoverUrl

> Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

URL for the autodiscovery service used by the Office 365 version of Microsoft Exchange Server.


```yaml
Type: String
Parameter Sets: Identity, (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force

> Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Suppresses the display of any non-fatal error message that might occur when running the command.


```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity

> Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Unique Identity of the OAuth configuration settings.
Because you can only have a single, global instance of these settings, you do not need to specify an Identity when calling the `Set-CsOAuthConfiguration` cmdlet.
You can, however, use the following syntax to reference the global settings:

`-Identity global`


```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases:

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance

> Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Allows you to pass a reference to an object to the cmdlet rather than set individual parameter values.

```yaml
Type: PSObject
Parameter Sets: Instance
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Realm

> Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Server-to-server security container.
By default, Skype for Business Server uses your default SIP domain as its OAuth realm.

```yaml
Type: String
Parameter Sets: Identity, (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ServiceName

> Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Globally unique identifier (GUID) assigned to the OAuth service.


```yaml
Type: String
Parameter Sets: Identity, (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant

> Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Globally unique identifier (GUID) of the Skype for Business Online tenant account for which the OAuth configuration settings are being modified.
For example:

`-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"`

You can return the tenant ID for each of your tenants by running this command:

`Get-CsTenant | Select-Object DisplayName, TenantID`


```yaml
Type: Guid
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Prompts you for confirmation before executing the command.


```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Describes what would happen if you executed the command without actually executing the command.


```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.Rtc.Management.WritableConfig.Settings.SSAuth.OAuthSettings
The `Set-CsOAuthConfiguration` cmdlet accepts pipelined instances of the Microsoft.Rtc.Management.WritableConfig.Settings.SSAuth.OAuthSettings object.

## OUTPUTS

### None
Instead, the `Set-CsOAuthConfiguration` cmdlet modifies existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.SSAuth.OAuthSettings object.

## NOTES

## RELATED LINKS

[Get-CsOAuthConfiguration](Get-CsOAuthConfiguration.md)
