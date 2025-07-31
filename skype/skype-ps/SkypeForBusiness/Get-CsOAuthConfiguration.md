---
applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
author: tomkau
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: bulenteg
Module Name: SkypeForBusiness
ms.author: tomkau
ms.reviewer: rogupta
online version: https://learn.microsoft.com/powershell/module/skype/get-csoauthconfiguration
schema: 2.0.0
title: Get-CsOAuthConfiguration
---

# Get-CsOAuthConfiguration

## SYNOPSIS
Returns information about the Open Authorization (OAuth) configuration settings currently in use in the organization.
OAuth is a standard protocol used for server-to-server authentication and authorization.
This cmdlet was introduced in Lync Server 2013.


## SYNTAX

### Identity (Default)
```
Get-CsOAuthConfiguration [[-Identity] <XdsIdentity>] [-LocalStore] [-Tenant <Guid>] [<CommonParameters>]
```

### Filter
```
Get-CsOAuthConfiguration [-Filter <String>] [-LocalStore] [-Tenant <Guid>] [<CommonParameters>]
```


## DESCRIPTION
In Skype for Business Server, server-to-server authentication (for example, the authentication that enables Skype for Business Server and Exchange to share information) is carried out using the OAuth security protocol.
OAuth is always on in Skype for Business Server; there is no need (or even any way) to enable or disable the protocol.
However, if Skype for Business Server needs to communicate with other server products you might need to modify your OAuth configuration settings; for example, you might need to specify the autodiscover URL for the Office 365 version of Exchange, and you might need to specify your Realm name.
These settings can only be managed by using the CsOAuthConfiguration cmdlets; options for managing OAuth settings are not available in the Skype for Business Server Control Panel.

Note that, for the on-premises version of Skype for Business Server, you can have only a single, global collection of OAuth settings: you cannot not create additional collections of OAuth settings nor can you delete the global collection.
Each Skype for Business Online tenant is also limited to a single collection of OAuth configuration settings.

The functions carried out by the Get-CsOAuthConfiguration cmdlet are not available in the Skype for Business Server Control Panel.


## EXAMPLES

### Example 1
```
Get-CsOAuthConfiguration
```

The command shown in Example 1 returns information for the OAuth configuration settings in use in the organization.


## PARAMETERS

### -Filter

> Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Enables you to use wildcard values when referencing a collection of OAuth configuration settings.
Because you can only have a single, global instance of these settings there is no reason to use the Filter parameter.
However, if you prefer you can use the following syntax to reference the global settings:

`-Filter "g*"`

That syntax brings back all the OAuth configuration settings that have an Identity that begins with the letter "g".

```yaml
Type: String
Parameter Sets: Filter, (All)
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
Because you can only have a single, global instance of these settings, you do not need to specify an Identity when calling the Get-CsOAuthConfiguration cmdlet.
If you prefer, however, you can use the following syntax to reference the global settings:

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

### -LocalStore

> Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Retrieves the OAuth configuration data from the local replica of the Central Management store rather than from the Central Management store itself.

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

### -Tenant

> Applicable: Skype for Business Online

Globally unique identifier (GUID) of the Skype for Business Online tenant account whose OAuth configuration settings are to be retrieved.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).


## INPUTS

### None


## OUTPUTS

### Microsoft.Rtc.Management.WritableConfig.Settings.SSAuth.OAuthSettings


## NOTES


## RELATED LINKS
[Set-CsOAuthConfiguration](Set-CsOAuthConfiguration.md)
