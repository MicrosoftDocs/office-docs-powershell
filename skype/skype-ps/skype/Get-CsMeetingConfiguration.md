---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019
title: Get-CsMeetingConfiguration
schema: 2.0.0
---

# Get-CsMeetingConfiguration

## SYNOPSIS
The Get-CsMeetingConfiguration cmdlet enables you to return information about the meeting configuration settings currently in use in your organization.
Meeting configuration settings help dictate the type of meetings (also called "conferences") that users can create, and determine such things as how (or even if) anonymous users and dial-in conferencing users can join these meetings.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Identity
```
Get-CsMeetingConfiguration [[-Identity] <XdsIdentity>] [-Tenant <Guid>] [-LocalStore] [<CommonParameters>]
```

### Filter
```
Get-CsMeetingConfiguration [-Filter <String>] [-Tenant <Guid>] [-LocalStore] [<CommonParameters>]
```

###  (Default)
```
Get-CsMeetingConfiguration [[-Identity] <Object>] [-BypassDualWrite <Object>] [-Filter <Object>] [-LocalStore]
 [-Tenant <Object>] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
Meetings (also called "conferences") are an integral part of Skype for Business.
The CsMeetingConfiguration cmdlets enable administrators to control the type of meetings that users can create, and determine how meetings handle anonymous users and dial-in conferencing users.
For example, you can configure meetings so that anyone dialing in over the public switched telephone network (PSTN) is automatically admitted to the meeting.
Alternatively, you can configure meetings so that dial-in users are not automatically admitted the meeting, but are instead routed to the meeting lobby.
These dial-in users remain on hold in the lobby until a presenter admits them to the meeting.

When used in on-premises environments, the Get-CsMeetingConfiguration cmdlet enables you to return information about the meeting configuration setting collections currently in use in your organization.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsMeetingConfiguration
```

The command shown in Example 1 returns a collection of all the meeting configuration settings currently in use in the organization.

### -------------------------- Example 2 --------------------------
```
Get-CsMeetingConfiguration -Identity site:Redmond
```

In Example 2, only one collection of meeting configuration settings is returned: the settings that have the Identity site:Redmond.

### -------------------------- Example 3 --------------------------
```
Get-CsMeetingConfiguration -Filter "service:*"
```

Example 3 returns all the meeting configuration settings that have been configured at the service scope.
This is done by including the Filter parameter and the filter value "service:*", which limits returned data to settings where the Identity property begins with the characters "service:".

### -------------------------- Example 4 --------------------------
```
Get-CsMeetingConfiguration | Where-Object {$_.AdmitAnonymousUsersByDefault -eq $True}
```

In Example 4, information is returned for all the meeting configuration settings where anonymous users are admitted by default.
To accomplish this task, the command first uses the Get-CsMeetingConfiguration cmdlet without any parameters to return a collection of all the meeting configuration settings currently in use.
That collection is then piped to the Where-Object cmdlet, which selects only those settings where the AdmitAnonymousUsersByDefault property is equal to True.


## PARAMETERS

### -Identity
Specifies the collection of meeting configuration settings to be returned.
Because each tenant is limited to a single, global collection of meeting configuration settings there is no need include this parameter when calling the Get-CsMeetingConfiguration cmdlet.
If you do choose to use the Identity parameter you must also include the Tenant parameter for Online environments.
For example:

`Get-CsMeetingConfiguration -Tenant "bf19b7db-6960-41e5-a139-2aa373474354" -Identity "global"`

This parameter can be used as follows when using Skype for Business Server (on-premises). To refer to the global settings, use this syntax: 
`-Identity global`

To refer to a collection configured at the site scope, use syntax similar to this:
`-Identity site:Redmond`

Settings configured at the service scope can be retrieved using syntax like this:
`-Identity service:UserServer:atl-cs-001.litwareinc.com`

If this parameter is not specified, then the Get-CsMeetingConfiguration cmdlet will return a collection of all the meeting settings in use in the organization.

Note that you cannot use wildcards when specifying an Identity.
If you need to use wildcards, then include the Filter parameter instead.

```yaml
Type: XdsIdentity
Parameter Sets: Identity, (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
Enables you to use wildcard characters in order to return a collection of meeting configuration settings.
Because each tenant is limited to a single, global collection of meeting configuration settings there is no need to use the Filter parameter.
However, this is valid syntax for the Get-CsMeetingConfiguration cmdlet:

`Get-CsMeetingConfiguration " -Filter "g*"`

This parameter can be used as follows when using Skype for Business Server (on-premises).

To return a collection of all the settings configured at the site scope, use this syntax: 
`-Filter site:*`
To return a collection of all the settings that have the string value "EMEA" somewhere in their Identity (the only property you can filter on) use this syntax: 
`-Filter *EMEA*`

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
Globally unique identifier (GUID) of the Skype for Business Online tenant account whose meeting configuration settings are to be retrieved.

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
Retrieves the meeting configuration data from the local replica of the Central Management store rather than from the Central Management store itself.

This parameter is not used with Skype for Business Online.

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
PARAMVALUE: $true | $false

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

### Microsoft.Rtc.Management.WritableConfig.Settings.UserServices.MeetingConfiguration


## NOTES


## RELATED LINKS

[New-CsMeetingConfiguration](New-CsMeetingConfiguration.md)

[Remove-CsMeetingConfiguration](Remove-CsMeetingConfiguration.md)

[Set-CsMeetingConfiguration](Set-CsMeetingConfiguration.md)

