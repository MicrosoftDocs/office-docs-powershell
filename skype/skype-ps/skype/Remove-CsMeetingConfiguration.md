---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
title: Remove-CsMeetingConfiguration
schema: 2.0.0
---

# Remove-CsMeetingConfiguration

## SYNOPSIS
The `Remove-CsMeetingConfiguration` cmdlet enables you to delete an existing collection of meeting configuration settings.
Meeting configuration settings help dictate the type of meetings (also called "conferences") that users can create, as well as control how (or even if) anonymous users and dial-in conferencing users can join these meetings.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Remove-CsMeetingConfiguration [-Identity] <XdsIdentity> [-Force] [-Tenant <Guid>] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
Online meetings (also called conferences) are an integral part of Skype for Business Server.
The CsMeetingConfiguration cmdlets enable administrators to control the type of meetings that users can create as well as determine how meetings deal with anonymous users and dial-in conferencing users.
For example, you can configure meetings so that anyone dialing in over the public switched telephone network (PSTN) is automatically admitted to the meeting.
Alternatively, you can configure meetings so that dial-in users are not automatically admitted the meeting, but are instead routed to the meeting lobby.
These dial-in users remain on hold in the lobby until a presenter admits them to the meeting.

Meeting configuration settings can be assigned to the global, site, or service scopes.
If you create new settings at the site or service scope, those settings can later be removed by using the `Remove-CsMeetingConfiguration` cmdlet.
The `Remove-CsMeetingConfiguration` cmdlet can also be run against the global meeting settings.
In that case, however, the settings will not be removed; that's because the global settings cannot be removed.
Instead, all the properties in the global collection will be reset to their default values.


## EXAMPLES

### -------------------------- Example 1 ------------------------
```
Remove-CsMeetingConfiguration -Identity site:Redmond
```

In Example 1, the meeting configuration settings that have the Identity site:Redmond are removed.
When these settings are removed from the Redmond site users in that site will automatically inherit the global meeting configuration settings.


### -------------------------- Example 2 ------------------------
```
Get-CsMeetingConfiguration -Filter "site:*" | Remove-CsMeetingConfiguration
```

The command shown in Example 2 removes all the meeting settings that have been configured at the site scope.
To do this, the command first calls the `Get-CsMeetingConfiguration` cmdlet along with the Filter parameter; the filter value "site:*" ensures that only settings that have an Identity that begins with the characters "site:" are selected.
This filtered collection is then piped to the `Remove-CsMeetingConfiguration` cmdlet, which deletes each item in the collection.


### -------------------------- Example 3 ------------------------
```
Get-CsMeetingConfiguration | Where-Object {$_.AdmitAnonymousUsersByDefault -eq $True} | Remove-CsMeetingConfiguration
```

Example 3 deletes each collection of meeting configuration settings where the AdmitAnonymousUsersByDefault property is True.
To carry out this task, the command first calls the `Get-CsMeetingConfiguration` cmdlet in order to return a collection of all the meeting configuration settings currently in use.
This collection is then piped to the `Where-Object` cmdlet, which picks out only those settings where the AdmitAnonymousUsersByDefault property is equal to True.
The filtered collection is then piped to the `Remove-CsMeetingConfiguration` cmdlet, which proceeds to remove each item in that collection.


## PARAMETERS

### -Identity
Unique identifier of the meeting configuration settings to be removed.
To "remove" the global settings, use this syntax: `-Identity global`.
(As noted previously, you cannot actually remove the global settings; all you can do is reset the properties to their default values.) To remove settings from the site scope, use syntax similar to this: `-Identity site:Redmond.`
Service settings can be removed using this syntax: `-Identity service:UserServer:atl-cs-001.litwareinc.com`.

Note that you cannot use wildcards when specifying an Identity.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Force
Suppresses the display of any non-fatal error message that might occur when running the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
Globally unique identifier (GUID) of the Skype for Business Online tenant account for the meeting configuration settings being deleted.
For example:

`-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"`

You can return the tenant ID for each of your tenants by running this command:

`Get-CsTenant | Select-Object DisplayName, TenantID`


```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Microsoft.Rtc.Management.WritableConfig.Settings.UserServices.MeetingConfiguration object.
The `Remove-CsMeetingConfiguration` cmdlet accepts pipelined instances of the meeting configuration object.

## OUTPUTS

###  
None.
Instead, the `Remove-CsMeetingConfiguration` cmdlet deletes existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.UserServices.MeetingConfiguration object.

## NOTES

## RELATED LINKS

[Get-CsMeetingConfiguration](Get-CsMeetingConfiguration.md)

[New-CsMeetingConfiguration](New-CsMeetingConfiguration.md)

[Set-CsMeetingConfiguration](Set-CsMeetingConfiguration.md)
