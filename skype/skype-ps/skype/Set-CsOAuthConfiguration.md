---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019
title: Set-CsOAuthConfiguration
schema: 2.0.0
---

# Set-CsOAuthConfiguration

## SYNOPSIS
Modifies the Open Authorization (OAuth) configuration settings currently in use in the organization.
OAuth is a standard protocol used for server-to-server authentication and authorization.
This cmdlet was introduced in Lync Server 2013.


## SYNTAX

### Identity (Default)
```
Set-CsOAuthConfiguration [[-Identity] <XdsIdentity>] [-AdditionalAudienceUrls <String>]  [-AlternateAudienceUrl <String>] [-ClientAdalAuthOverride <Object>] [-ClientAuthorizationOAuthServerIdentity <String>] [-Confirm] [-ExchangeAutodiscoverAllowedDomains <String>] [-ExchangeAutodiscoverUrl <String>] [-Force] [-Instance <PSObject>] [-Realm <String>] [-ServiceName <String>]
 [-Tenant <Guid>] [-WhatIf] [-AsJob] [<CommonParameters>]
```

### Instance
```
Set-CsOAuthConfiguration [-Confirm] [-Force] [-Instance <PSObject>] [-Tenant <Guid>] [-WhatIf]
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

The following parameters are not applicable to Skype for Business Online: AdditionalAudienceUrls, AlternateAudienceUrl, AsJob, ClientAuthorizationOAuthServerIdentity, ExchangeAutodiscoverAllowedDomains, ExchangeAutodiscoverUrl, Force, Identity, Instance, PipelineVariable, Realm, ServiceName, and Tenant

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-CsOAuthConfiguration -Identity global -Realm "contoso.com"
```

The command shown in Example 1 modifies the global collection of OAuth configuration settings.
In this example, the Realm property is set to "contoso.com".


## PARAMETERS

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExchangeAutodiscoverAllowedDomains
Collection of domains that autodiscover requests can be redirected to.
For example:

`-ExchangeAutodiscoverAllowedDomains "*.contoso.com","*.fabrikam.com"`

```yaml
Type: String
Parameter Sets: Identity, (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExchangeAutodiscoverUrl
URL for the autodiscovery service used by the Office 365 version of Microsoft Exchange Server.

```yaml
Type: String
Parameter Sets: Identity, (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses the display of any non-fatal error message that might occur when running the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Unique Identity of the OAuth configuration settings.
Because you can only have a single, global instance of these settings, you do not need to specify an Identity when calling the `Set-CsOAuthConfiguration` cmdlet.
You can, however, use the following syntax to reference the global settings:

`-Identity global`

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance
Allows you to pass a reference to an object to the cmdlet rather than set individual parameter values.

```yaml
Type: PSObject
Parameter Sets: Instance
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Realm
Server-to-server security container.
By default, Skype for Business Server uses your default SIP domain as its OAuth realm.

```yaml
Type: String
Parameter Sets: Identity, (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ServiceName
Globally unique identifier (GUID) assigned to the OAuth service.

```yaml
Type: String
Parameter Sets: Identity, (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
Globally unique identifier (GUID) of the Skype for Business Online tenant account for which the OAuth configuration settings are being modified.
For example:

`-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"`

You can return the tenant ID for each of your tenants by running this command:

`Get-CsTenant | Select-Object DisplayName, TenantID`

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Describes what would happen if you executed the command without actually executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AdditionalAudienceUrls
{{Fill AdditionalAudienceUrls Description}}

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AlternateAudienceUrl
{{Fill AlternateAudienceUrl Description}}

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ClientAdalAuthOverride
Specifies if modern authentication is allowed or not. Possible values are:
* NoOverride
* Allowed
* Disallowed

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Accepted values: NoOverride, Allowed, Disallowed
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ClientAuthorizationOAuthServerIdentity
URI of the OAuth server used for client authentication.

```yaml
Type: String
Parameter Sets: Identity, (All)
Aliases: 
Applicable: Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AsJob
Indicates that this cmdlet runs as a background job.

When you specify the AsJob parameter, the command immediately returns an object that represents the background job. You can continue to work in the session while the job finishes. The job is created on the local computer and the results from the Skype for Business Online session are automatically returned to the local computer. To get the job results, use the Receive-Job cmdlet.

For more information about Windows PowerShell background jobs, see [about_Jobs](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_jobs?view=powershell-6) and [about_Remote_Jobs](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_remote_jobs?view=powershell-6).

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
The `Set-CsOAuthConfiguration` cmdlet accepts pipelined instances of the Microsoft.Rtc.Management.WritableConfig.Settings.SSAuth.OAuthSettings object.

## OUTPUTS

###  
None.
Instead, the `Set-CsOAuthConfiguration` cmdlet modifies existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.SSAuth.OAuthSettings object.

## NOTES

## RELATED LINKS
[Get-CsOAuthConfiguration](Get-CsOAuthConfiguration.md)

