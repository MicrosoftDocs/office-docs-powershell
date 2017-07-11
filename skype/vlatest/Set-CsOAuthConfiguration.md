---
applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015
schema: 2.0.0
---

# Set-CsOAuthConfiguration

## SYNOPSIS
Below Content Applies To: Lync Server 2013

Modifies the Open Authorization (OAuth) configuration settings currently in use in the organization.
OAuth is a standard protocol used for server-to-server authentication and authorization.
This cmdlet was introduced in Lync Server 2013 Preview.

Below Content Applies To: Skype for Business Online

Set-CsOAuthConfiguration \[\[-Identity\] \<XdsIdentity\>\] \[-Tenant \<guid\>\] \[-Realm \<string\>\] \[-ServiceName \<string\>\] \[-ClientAuthorizationOAuthServerIdentity \<string\>\] \[-ExchangeAutodiscoverAllowedDomains \<string\>\] \[-ExchangeAutodiscoverUrl \<string\>\] \[-ClientAdalAuthOverride \<ClientAdalAuthOverride\>\] \[-AlternateAudienceUrl \<string\>\] \[-AdditionalAudienceUrls \<string\>\] \[-BypassDualWrite \<bool\>\] \[-Force\] \[-WhatIf\] \[-Confirm\] \[\<CommonParameters\>\]

Set-CsOAuthConfiguration \[-Tenant \<guid\>\] \[-Instance \<psobject\>\] \[-BypassDualWrite \<bool\>\] \[-Force\] \[-WhatIf\] \[-Confirm\] \[\<CommonParameters\>\]

Below Content Applies To: Skype for Business Server 2015

Modifies the Open Authorization (OAuth) configuration settings currently in use in the organization.
OAuth is a standard protocol used for server-to-server authentication and authorization.
This cmdlet was introduced in Lync Server 2013.



## SYNTAX

### Identity
```
Set-CsOAuthConfiguration [[-Identity] <XdsIdentity>] [-Confirm] [-ExchangeAutodiscoverAllowedDomains <String>]
 [-ExchangeAutodiscoverUrl <String>] [-Force] [-Realm <String>] [-ServiceName <String>] [-Tenant <Guid>]
 [-WhatIf] [-ClientAuthorizationOAuthServerIdentity <String>] [<CommonParameters>]
```

### Instance
```
Set-CsOAuthConfiguration [-Confirm] [-Force] [-Instance <PSObject>] [-Tenant <Guid>] [-WhatIf]
 [<CommonParameters>]
```

###  (Default)
```
Set-CsOAuthConfiguration [[-Identity] <Object>] [-AdditionalAudienceUrls <Object>]
 [-AlternateAudienceUrl <Object>] [-BypassDualWrite <Object>] [-ClientAdalAuthOverride <Object>]
 [-ClientAuthorizationOAuthServerIdentity <Object>] [-Confirm] [-ExchangeAutodiscoverAllowedDomains <Object>]
 [-ExchangeAutodiscoverUrl <Object>] [-Force] [-Instance <Object>] [-Realm <Object>] [-ServiceName <Object>]
 [-Tenant <Object>] [-WhatIf] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2013

In Microsoft Lync Server 2013 Preview, server-to-server authentication (for example, the authentication that enables Lync Server and Microsoft Exchange Server 2013 Preview to share information) is carried out using the OAuth security protocol.
OAuth is always on in Lync Server 2013 Preview; there is no need (or even any way) to enable or disable the protocol.
However, if Lync Server needs to communicate with other server products (such as Exchange 2013 Preview or Microsoft SharePoint 2013) you might need to modify your OAuth configuration settings; for example, you might need to specify the autodiscover URL for the Office 365 version of Exchange, and you might need to specify your Realm name.
These settings can only be managed by using the CsOAuthConfiguration cmdlets; options for managing OAuth settings are not available in the Lync Server 2013 Preview Control Panel.

Note that, for the on-premises version of Lync Server 2013 Preview, you can have only a single, global collection of OAuth settings: you cannot not create additional collections of OAuth settings nor can you delete the global collection.
Each Office 365 tenant is also limited to a single collection of OAuth configuration settings.

To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Set-CsOAuthConfiguration"}

Lync Server Control Panel: The functions carried out by the Set-CsOAuthConfiguration cmdlet are not available in the Lync Server Control Panel.

Below Content Applies To: Skype for Business Online

{{Fill in the Description}}

Below Content Applies To: Skype for Business Server 2015

In Skype for Business Server 2015, server-to-server authentication (for example, the authentication that enables Skype for Business Server 2015 and Exchange to share information) is carried out using the OAuth security protocol.
OAuth is always on in Skype for Business Server 2015; there is no need (or even any way) to enable or disable the protocol.
However, if Skype for Business Server 2015 needs to communicate with other server products you might need to modify your OAuth configuration settings; for example, you might need to specify the autodiscover URL for the Office 365 version of Exchange, and you might need to specify your Realm name.
These settings can only be managed by using the CsOAuthConfiguration cmdlets; options for managing OAuth settings are not available in the Skype for Business Server Control Panel.

Note that, for the on-premises version of Skype for Business Server 2015, you can have only a single, global collection of OAuth settings: you cannot not create additional collections of OAuth settings nor can you delete the global collection.
Each Skype for Business Online tenant is also limited to a single collection of OAuth configuration settings.

Skype for Business Server Control Panel: The functions carried out by the Set-CsOAuthConfiguration cmdlet are not available in the Skype for Business Server Control Panel.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 modifies the global collection of OAuth configuration settings.
In this example, the Realm property is set to "contoso.com".

Set-CsOAuthConfiguration -Identity global -Realm "contoso.com"

### Example 1 (Skype for Business Online)
```
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}

### -------------------------- Example 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 modifies the global collection of OAuth configuration settings.
In this example, the Realm property is set to "contoso.com".

Set-CsOAuthConfiguration -Identity global -Realm "contoso.com"

## PARAMETERS

### -Confirm
Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

Prompts you for confirmation before executing the command.



Below Content Applies To: Skype for Business Online

Prompts you for confirmation before running the cmdlet.



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExchangeAutodiscoverAllowedDomains
Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

Collection of domains that autodiscover requests can be redirected to.
For example:

-ExchangeAutodiscoverAllowedDomains "*.contoso.com","*.fabrikam.com"



Below Content Applies To: Skype for Business Online

{{Fill ExchangeAutodiscoverAllowedDomains Description}}



```yaml
Type: String
Parameter Sets: Identity, (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExchangeAutodiscoverUrl
Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

URL for the autodiscovery service used by the Office 365 version of Microsoft Exchange Server.



Below Content Applies To: Skype for Business Online

{{Fill ExchangeAutodiscoverUrl Description}}



```yaml
Type: String
Parameter Sets: Identity, (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

Suppresses the display of any non-fatal error message that might occur when running the command.



Below Content Applies To: Skype for Business Online

{{Fill Force Description}}



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Below Content Applies To: Lync Server 2013

Unique Identity of the OAuth configuration settings.
Because you can only have a single, global instance of these settings, you do not need to specify an Identity when calling Set-CsOAuthConfiguration.
You can, however, use the following syntax to reference the global settings:

-Identity global



Below Content Applies To: Skype for Business Online

{{Fill Identity Description}}



Below Content Applies To: Skype for Business Server 2015

Unique Identity of the OAuth configuration settings.
Because you can only have a single, global instance of these settings, you do not need to specify an Identity when calling the Set-CsOAuthConfiguration cmdlet.
You can, however, use the following syntax to reference the global settings:

-Identity global



```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance
Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

Allows you to pass a reference to an object to the cmdlet rather than set individual parameter values.



Below Content Applies To: Skype for Business Online

{{Fill Instance Description}}



```yaml
Type: PSObject
Parameter Sets: Instance
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

```yaml
Type: PSObject
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Realm
Below Content Applies To: Lync Server 2013

Server-to-server security container.
By default, Lync Server 2013 Preview uses your default SIP domain as its OAuth realm.



Below Content Applies To: Skype for Business Online

{{Fill Realm Description}}



Below Content Applies To: Skype for Business Server 2015

Server-to-server security container.
By default, Skype for Business Server 2015 uses your default SIP domain as its OAuth realm.



```yaml
Type: String
Parameter Sets: Identity, (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ServiceName
Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

Globally unique identifier (GUID) assigned to the OAuth service.



Below Content Applies To: Skype for Business Online

{{Fill ServiceName Description}}



```yaml
Type: String
Parameter Sets: Identity, (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
Below Content Applies To: Lync Server 2013

Globally unique identifier (GUID) of the Office 365 tenant account for which the OAuth configuration settings are being modified.
For example:

-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"

You can return the tenant ID for each of your tenants by running this command:

Get-CsTenant | Select-Object DisplayName, TenantID



Below Content Applies To: Skype for Business Online

{{Fill Tenant Description}}



Below Content Applies To: Skype for Business Server 2015

Globally unique identifier (GUID) of the Skype for Business Online tenant account for which the OAuth configuration settings are being modified.
For example:

-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"

You can return the tenant ID for each of your tenants by running this command:

Get-CsTenant | Select-Object DisplayName, TenantID



```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

Describes what would happen if you executed the command without actually executing the command.



Below Content Applies To: Skype for Business Online

Shows what would happen if the cmdlet runs.
The cmdlet is not run.



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AdditionalAudienceUrls
{{Fill AdditionalAudienceUrls Description}}

```yaml
Type: Object
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
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BypassDualWrite
{{Fill BypassDualWrite Description}}

```yaml
Type: Object
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
{{Fill ClientAdalAuthOverride Description}}

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
Below Content Applies To: Skype for Business Online

{{Fill ClientAuthorizationOAuthServerIdentity Description}}



Below Content Applies To: Skype for Business Server 2015

URI of the OAuth server used for client authentication.



```yaml
Type: Object
Parameter Sets: Identity, (All)
Aliases: 
Applicable: Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AsJob
{{Fill AsJob Description}}

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
Set-CsOAuthConfiguration accepts pipelined instances of the Microsoft.Rtc.Management.WritableConfig.Settings.SSAuth.OAuthSettings object.

### System.Management.Automation.PSObject

###  
The Set-CsOAuthConfiguration cmdlet accepts pipelined instances of the Microsoft.Rtc.Management.WritableConfig.Settings.SSAuth.OAuthSettings object.

## OUTPUTS

###  
None.
Instead, Set-CsOAuthConfiguration modifies existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.SSAuth.OAuthSettings object.

### System.Object

###  
None.
Instead, the Set-CsOAuthConfiguration cmdlet modifies existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.SSAuth.OAuthSettings object.

## NOTES

## RELATED LINKS

[Get-CsOAuthConfiguration]()

[Online Version](http://technet.microsoft.com/EN-US/library/43193254-acb1-47c8-8e21-143b610c2edc(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/43193254-acb1-47c8-8e21-143b610c2edc(OCS.16).aspx)

