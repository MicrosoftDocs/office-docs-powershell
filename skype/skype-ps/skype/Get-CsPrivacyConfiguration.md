---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019
title: Get-CsPrivacyConfiguration
schema: 2.0.0
---

# Get-CsPrivacyConfiguration

## SYNOPSIS
Returns information about the privacy configuration settings currently in use in your organization.
Privacy configuration settings help determine how much information users make available to other users.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Identity
```
Get-CsPrivacyConfiguration [[-Identity] <XdsIdentity>] [-Tenant <Guid>] [-LocalStore] [<CommonParameters>]
```

### Filter
```
Get-CsPrivacyConfiguration [-Filter <String>] [-Tenant <Guid>] [-LocalStore] [<CommonParameters>]
```

###  (Default)
```
Get-CsPrivacyConfiguration [[-Identity] <Object>] [-BypassDualWrite <Object>] [-Filter <Object>] [-LocalStore]
 [-Tenant <Object>] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
Skype for Business Server gives users the opportunity to share a wealth of presence information with other people: they can publish a photograph of themselves; they can provide detailed location information; they can have presence information automatically made available to everyone in the organization (as opposed to having this information available only to people on their Contacts list).

Some users will welcome the opportunity to make this information available to their colleagues; other users might be more reluctant to share this data.
(For example, many people might be hesitant about having their photo included in their presence data.) As a general rule, users have control over what information they will (or will not) share; for example, users can select or clear a check box in order to control whether or not their location information is shared with others.
In addition, the privacy configuration cmdlets enable administrators to manage privacy settings for their users.
In some cases, administrators can enable or disable settings; for example, if the property AutoInitiateContacts is set to True, then team members will automatically be added to each user's Contacts list; if set to False, team members will not be automatically be added to each user's Contacts list.

In other cases, administrators can configure the default values in Skype for Business Server while still giving users the right to change these values.
For example, by default location data is published for users, although users do have the right to stop location publication.
By setting the PublishLocationDataByDefault property to False, administrators can change this behavior: in that case, location data will not be published by default, although users will still have the right to publish this data if they choose.

Privacy configuration settings can be applied at the global scope, the site scope, and at the service scope (albeit only for the User Server service).
The Get-CsPrivacyConfiguration cmdlet enables you to retrieve information about all the privacy configuration settings currently in use in your organization.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsPrivacyConfiguration
```

The command shown in Example 1 returns all the privacy configuration settings currently in use in the organization.

### -------------------------- Example 2 --------------------------
```
Get-CsPrivacyConfiguration -Identity site:Redmond
```

Example 2 returns a single collection of privacy configuration settings: the settings that have the Identity site:Redmond.

### -------------------------- Example 3 --------------------------
```
Get-CsPrivacyConfiguration -Filter "site:*"
```

In Example 3, information is returned for all the privacy configuration settings that have been assigned to the site scope.
To do this, the Filter parameter is included, along with the filter value "site:*".
That filter value ensures that only settings where the Identity (the only property you can filter on) begins with the characters "site:".

### -------------------------- Example 4 --------------------------
```
Get-CsPrivacyConfiguration | Where-Object {$_.EnablePrivacyMode -eq $True}
```

The command shown in Example 4 returns information about all the privacy configuration settings where privacy mode has been enabled.
This is done by first calling the Get-CsPrivacyConfiguration cmdlet without any parameters in order to return a collection of all the privacy settings.
This collection is then piped to the Where-Object cmdlet, which picks out only those settings where the EnablePrivacyMode property is equal to True.


## PARAMETERS

### -Identity
Unique identifier for the privacy configuration settings to be retrieved.
To return the global settings, use this syntax:

`-Identity global`

To return settings configured at the site scope, use syntax similar to this:

`-Identity site:Redmond`

To modify settings at the service level, use syntax like this:

`-Identity service:UserServer:atl-cs-001.litwareinc.com`

If this parameter is not specified then the Get-CsPrivacyConfiguration cmdlet returns all the privacy configuration settings currently in use in your organization.

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
Enables you to use wildcards to return one or more collections of privacy configuration settings.
For example, to return all the settings configured at the site scope, you can use this syntax:

`-Filter "site:*"`

To return all the settings configured at the service scope, use this syntax:

`-Filter "service:*"`

```yaml
Type: String
Parameter Sets: Filter, (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
Globally unique identifier (GUID) of the Skype for Business Online tenant account whose privacy configuration settings are to be retrieved.

For example:

`-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"`

You can return the tenant ID for each of your tenants by running this command:

`Get-CsTenant | Select-Object DisplayName, TenantID`

If you are using a remote session of Windows PowerShell and are connected only to Skype for Business Online you do not have to include the Tenant parameter.
Instead, the tenant ID will automatically be filled in for you based on your connection information.
The Tenant parameter is primarily for use in a hybrid deployment.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Retrieves the privacy configuration data from the local replica of the Central Management store rather than from the Central Management store itself.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

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

### None


## OUTPUTS

### Microsoft.Rtc.Management.WritableConfig.Settings.UserServices.PrivacyConfiguration


## NOTES


## RELATED LINKS

[New-CsPrivacyConfiguration](New-CsPrivacyConfiguration.md)

[Remove-CsPrivacyConfiguration](Remove-CsPrivacyConfiguration.md)

[Set-CsPrivacyConfiguration](Set-CsPrivacyConfiguration.md)

