---
external help file: 
applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsOAuthConfiguration

## SYNOPSIS
**Below Content Applies To:** Lync Server 2013

Returns information about the Open Authorization (OAuth) configuration settings currently in use in the organization.
OAuth is a standard protocol used for server-to-server authentication and authorization.
This cmdlet was introduced in Lync Server 2013 Preview.

**Below Content Applies To:** Skype for Business Online

Get-CsOAuthConfiguration \[\[-Identity\] \<XdsIdentity\>\] \[-Tenant \<guid\>\] \[-LocalStore\] \[-BypassDualWrite \<bool\>\] \[\<CommonParameters\>\]

Get-CsOAuthConfiguration \[-Tenant \<guid\>\] \[-Filter \<string\>\] \[-LocalStore\] \[-BypassDualWrite \<bool\>\] \[\<CommonParameters\>\]

**Below Content Applies To:** Skype for Business Server 2015

Returns information about the Open Authorization (OAuth) configuration settings currently in use in the organization.
OAuth is a standard protocol used for server-to-server authentication and authorization.
This cmdlet was introduced in Lync Server 2013.



## SYNTAX

### Filter
```
Get-CsOAuthConfiguration [-Filter <String>] [-LocalStore] [-Tenant <Guid>] [<CommonParameters>]
```

### Identity
```
Get-CsOAuthConfiguration [[-Identity] <XdsIdentity>] [-LocalStore] [-Tenant <Guid>] [<CommonParameters>]
```

###  (Default)
```
Get-CsOAuthConfiguration [[-Identity] <Object>] [-BypassDualWrite <Object>] [-Filter <Object>] [-LocalStore]
 [-Tenant <Object>] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2013

In Microsoft Lync Server 2013 Preview, server-to-server authentication (for example, the authentication that enables Lync Server and Microsoft Exchange Server 2013 Preview to share information) is carried out using the OAuth security protocol.
OAuth is always on in Lync Server 2013 Preview; there is no need (or even any way) to enable or disable the protocol.
However, if Lync Server needs to communicate with other server products (such as Exchange 2013 Preview or Microsoft SharePoint 2013) you might need to modify your OAuth configuration settings; for example, you might need to specify the autodiscover URL for the Office 365 version of Exchange, and you might need to specify your Realm name.
These settings can only be managed by using the CsOAuthConfiguration cmdlets; options for managing OAuth settings are not available in the Lync Server 2013 Preview Control Panel.

Note that, for the on-premises version of Lync Server 2013 Preview, you can have only a single, global collection of OAuth settings: you cannot not create additional collections of OAuth settings nor can you delete the global collection.
Each Office 365 tenant is also limited to a single collection of OAuth configuration settings.

To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsOAuthConfiguration"}

Lync Server Control Panel: The functions carried out by the Get-CsOAuthConfiguration cmdlet are not available in theLync Server Control Panel.

**Below Content Applies To:** Skype for Business Online

{{Fill in the Description}}

**Below Content Applies To:** Skype for Business Server 2015

In Skype for Business Server 2015, server-to-server authentication (for example, the authentication that enables Skype for Business Server 2015 and Exchange to share information) is carried out using the OAuth security protocol.
OAuth is always on in Skype for Business Server 2015; there is no need (or even any way) to enable or disable the protocol.
However, if Skype for Business Server 2015 needs to communicate with other server products you might need to modify your OAuth configuration settings; for example, you might need to specify the autodiscover URL for the Office 365 version of Exchange, and you might need to specify your Realm name.
These settings can only be managed by using the CsOAuthConfiguration cmdlets; options for managing OAuth settings are not available in the Skype for Business Server Control Panel.

Note that, for the on-premises version of Skype for Business Server 2015, you can have only a single, global collection of OAuth settings: you cannot not create additional collections of OAuth settings nor can you delete the global collection.
Each Skype for Business Online tenant is also limited to a single collection of OAuth configuration settings.

Skype for Business Server Control Panel: The functions carried out by the Get-CsOAuthConfiguration cmdlet are not available in the Skype for Business Server Control Panel.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 returns information for the OAuth configuration settings in use in the organization.

Get-CsOAuthConfiguration

### Example 1 (Skype for Business Online)
```
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}

### -------------------------- Example 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 returns information for the OAuth configuration settings in use in the organization.

Get-CsOAuthConfiguration

## PARAMETERS

### -Filter
**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Enables you to use wildcard values when referencing a collection of OAuth configuration settings.
Because you can only have a single, global instance of these settings there is no reason to use the Filter parameter.
However, if you prefer you can use the following syntax to reference the global settings:

-Filter "g*"

That syntax brings back all the OAuth configuration settings that have an Identity that begins with the letter "g".



**Below Content Applies To:** Skype for Business Online

{{Fill Filter Description}}



```yaml
Type: String
Parameter Sets: Filter, (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
**Below Content Applies To:** Lync Server 2013

Unique Identity of the OAuth configuration settings.
Because you can only have a single, global instance of these settings, you do not need to specify an Identity when calling Get-CsOAuthConfiguration.
If you prefer, however, you can use the following syntax to reference the global settings:

-Identity global



**Below Content Applies To:** Skype for Business Online

{{Fill Identity Description}}



**Below Content Applies To:** Skype for Business Server 2015

Unique Identity of the OAuth configuration settings.
Because you can only have a single, global instance of these settings, you do not need to specify an Identity when calling the Get-CsOAuthConfiguration cmdlet.
If you prefer, however, you can use the following syntax to reference the global settings:

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

### -LocalStore
**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Retrieves the OAuth configuration data from the local replica of the Central Management store rather than from the Central Management store itself.



**Below Content Applies To:** Skype for Business Online

{{Fill LocalStore Description}}



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

### -Tenant
**Below Content Applies To:** Lync Server 2013

Globally unique identifier (GUID) of the Office 365 tenant account whose OAuth configuration settings are to be retrieved.

For example:

-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"

You can return the tenant ID for each of your tenants by running this command:

Get-CsTenant | Select-Object DisplayName, TenantID



**Below Content Applies To:** Skype for Business Online

{{Fill Tenant Description}}



**Below Content Applies To:** Skype for Business Server 2015

Globally unique identifier (GUID) of the Skype for Business Online tenant account whose OAuth configuration settings are to be retrieved.

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
None.
Get-CsOAuthConfiguration does not accept pipelined input.

### None

###  
None.
The Get-CsOAuthConfiguration cmdlet does not accept pipelined input.

## OUTPUTS

###  
Get-CsOAuthConfiguration returns instances of the Microsoft.Rtc.Management.WritableConfig.Settings.SSAuth.OAuthSettings object.

### System.Object

###  
The Get-CsOAuthConfiguration cmdlet returns instances of the Microsoft.Rtc.Management.WritableConfig.Settings.SSAuth.OAuthSettings object.

## NOTES

## RELATED LINKS

[Set-CsOAuthConfiguration]()

[Online Version](http://technet.microsoft.com/EN-US/library/a3fda8bf-84e3-4d14-a1c5-093e6eb36ffe(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/a3fda8bf-84e3-4d14-a1c5-093e6eb36ffe(OCS.16).aspx)

