---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Remove-CsMeetingConfiguration

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Remove-CsMeetingConfiguration enables you to delete an existing collection of meeting configuration settings.
Meeting configuration settings help dictate the type of meetings (also called "conferences") that users can create, as well as control how (or even if) anonymous users and dial-in conferencing users can join these meetings.

**Below Content Applies To:** Lync Server 2013

Remove-CsMeetingConfiguration enables you to delete an existing collection of meeting configuration settings.
Meeting configuration settings help dictate the type of meetings (also called "conferences") that users can create, as well as control how (or even if) anonymous users and dial-in conferencing users can join these meetings.
This cmdlet was introduced in Lync Server 2010.

**Below Content Applies To:** Skype for Business Server 2015

The Remove-CsMeetingConfiguration cmdlet enables you to delete an existing collection of meeting configuration settings.
Meeting configuration settings help dictate the type of meetings (also called "conferences") that users can create, as well as control how (or even if) anonymous users and dial-in conferencing users can join these meetings.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Remove-CsMeetingConfiguration [-Identity] <XdsIdentity> [-Force] [-Tenant <Guid>] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

Online meetings (also called conferences) are an integral part of Microsoft Lync Server 2010.
The CsMeetingConfiguration cmdlets enable administrators to control the type of meetings that users can create as well as determine how meetings deal with anonymous users and dial-in conferencing users.
For example, you can configure meetings so that anyone dialing in over the public switched telephone network (PSTN) is automatically admitted to the meeting.
Alternatively, you can configure meetings so that dial-in users are not automatically admitted the meeting, but are instead routed to the meeting lobby.
These dial-in users remain on hold in the lobby until a presenter admits them to the meeting.

Meeting configuration settings can be assigned to the global, site, or service scopes.
If you create new settings at the site or service scope, those settings can later be removed by using the Remove-CsMeetingConfiguration cmdlet.
Remove-CsMeetingConfiguration can also be run against the global meeting settings.
In that case, however, the settings will not be removed; that's because the global settings cannot be removed.
Instead, all the properties in the global collection will be reset to their default values.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsMeetingConfiguration cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsMeetingConfiguration"}

**Below Content Applies To:** Lync Server 2013

Online meetings (also called conferences) are an integral part of Lync Server.
The CsMeetingConfiguration cmdlets enable administrators to control the type of meetings that users can create as well as determine how meetings deal with anonymous users and dial-in conferencing users.
For example, you can configure meetings so that anyone dialing in over the public switched telephone network (PSTN) is automatically admitted to the meeting.
Alternatively, you can configure meetings so that dial-in users are not automatically admitted the meeting, but are instead routed to the meeting lobby.
These dial-in users remain on hold in the lobby until a presenter admits them to the meeting.

Meeting configuration settings can be assigned to the global, site, or service scopes.
If you create new settings at the site or service scope, those settings can later be removed by using the Remove-CsMeetingConfiguration cmdlet.
Remove-CsMeetingConfiguration can also be run against the global meeting settings.
In that case, however, the settings will not be removed; that's because the global settings cannot be removed.
Instead, all the properties in the global collection will be reset to their default values.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsMeetingConfiguration cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsMeetingConfiguration"}

**Below Content Applies To:** Skype for Business Server 2015

Online meetings (also called conferences) are an integral part of Skype for Business Server 2015.
The CsMeetingConfiguration cmdlets enable administrators to control the type of meetings that users can create as well as determine how meetings deal with anonymous users and dial-in conferencing users.
For example, you can configure meetings so that anyone dialing in over the public switched telephone network (PSTN) is automatically admitted to the meeting.
Alternatively, you can configure meetings so that dial-in users are not automatically admitted the meeting, but are instead routed to the meeting lobby.
These dial-in users remain on hold in the lobby until a presenter admits them to the meeting.

Meeting configuration settings can be assigned to the global, site, or service scopes.
If you create new settings at the site or service scope, those settings can later be removed by using the Remove-CsMeetingConfiguration cmdlet.
The Remove-CsMeetingConfiguration cmdlet can also be run against the global meeting settings.
In that case, however, the settings will not be removed; that's because the global settings cannot be removed.
Instead, all the properties in the global collection will be reset to their default values.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Remove-CsMeetingConfiguration -Identity site:Redmond
```

In Example 1, the meeting configuration settings that have the Identity site:Redmond are removed.
When these settings are removed from the Redmond site users in that site will automatically inherit the global meeting configuration settings.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

In Example 1, the meeting configuration settings that have the Identity site:Redmond are removed.
When these settings are removed from the Redmond site users in that site will automatically inherit the global meeting configuration settings.

Remove-CsMeetingConfiguration -Identity site:Redmond

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

In Example 1, the meeting configuration settings that have the Identity site:Redmond are removed.
When these settings are removed from the Redmond site users in that site will automatically inherit the global meeting configuration settings.

Remove-CsMeetingConfiguration -Identity site:Redmond

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Get-CsMeetingConfiguration -Filter "site:*" | Remove-CsMeetingConfiguration
```

The command shown in Example 2 removes all the meeting settings that have been configured at the site scope.
To do this, the command first calls Get-CsMeetingConfiguration along with the Filter parameter; the filter value "site:*" ensures that only settings that have an Identity that begins with the characters "site:" are selected.
This filtered collection is then piped to the Remove-CsMeetingConfiguration cmdlet, which deletes each item in the collection.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 2 removes all the meeting settings that have been configured at the site scope.
To do this, the command first calls Get-CsMeetingConfiguration along with the Filter parameter; the filter value "site:*" ensures that only settings that have an Identity that begins with the characters "site:" are selected.
This filtered collection is then piped to the Remove-CsMeetingConfiguration cmdlet, which deletes each item in the collection.

Get-CsMeetingConfiguration -Filter "site:*" | Remove-CsMeetingConfiguration

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 2 removes all the meeting settings that have been configured at the site scope.
To do this, the command first calls the Get-CsMeetingConfiguration cmdlet along with the Filter parameter; the filter value "site:*" ensures that only settings that have an Identity that begins with the characters "site:" are selected.
This filtered collection is then piped to the Remove-CsMeetingConfiguration cmdlet, which deletes each item in the collection.

Get-CsMeetingConfiguration -Filter "site:*" | Remove-CsMeetingConfiguration

### -------------------------- Example 3 ------------------------ (Lync Server 2010)
```
Get-CsMeetingConfiguration | Where-Object {$_.AdmitAnonymousUsersByDefault -eq $True} | Remove-CsMeetingConfiguration
```

The preceding command deletes each collection of meeting configuration settings where the AdmitAnonymousUsersbyDefault property is True.
To carry out this task, the command first calls Get-CsMeetingConfiguration in order to return a collection of all the meeting configuration settings currently in use.
This collection is then piped to Where-Object, which picks out only those settings where the AdmitAnonymousUsersByDefault property is equal to True.
The filtered collection is then piped to Remove-CsMeetingConfiguration, which proceeds to remove each item in that collection.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

Example 3 deletes each collection of meeting configuration settings where the AdmitAnonymousUsersbyDefault property is True.
To carry out this task, the command first calls Get-CsMeetingConfiguration in order to return a collection of all the meeting configuration settings currently in use.
This collection is then piped to Where-Object, which picks out only those settings where the AdmitAnonymousUsersByDefault property is equal to True.
The filtered collection is then piped to Remove-CsMeetingConfiguration, which proceeds to remove each item in that collection.

Get-CsMeetingConfiguration | Where-Object {$_.AdmitAnonymousUsersByDefault -eq $True} | Remove-CsMeetingConfiguration

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

Example 3 deletes each collection of meeting configuration settings where the AdmitAnonymousUsersByDefault property is True.
To carry out this task, the command first calls the Get-CsMeetingConfiguration cmdlet in order to return a collection of all the meeting configuration settings currently in use.
This collection is then piped to the Where-Object cmdlet, which picks out only those settings where the AdmitAnonymousUsersByDefault property is equal to True.
The filtered collection is then piped to the Remove-CsMeetingConfiguration cmdlet, which proceeds to remove each item in that collection.

Get-CsMeetingConfiguration | Where-Object {$_.AdmitAnonymousUsersByDefault -eq $True} | Remove-CsMeetingConfiguration

## PARAMETERS

### -Identity
Unique identifier of the meeting configuration settings to be removed.
To "remove" the global settings, use this syntax: -Identity global.
(As noted previously, you cannot actually remove the global settings; all you can do is reset the properties to their default values.) To remove settings from the site scope, use syntax similar to this: -Identity site:Redmond.
Service settings can be removed using this syntax: -Identity service:UserServer:atl-cs-001.litwareinc.com.

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
**Below Content Applies To:** Lync Server 2010

This parameter is not used with the on-premises version of Lync Server 2010.



**Below Content Applies To:** Lync Server 2013

Globally unique identifier (GUID) of the Office 365 tenant account for the meeting configuration settings being deleted.
For example:

-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"

You can return the tenant ID for each of your tenants by running this command:

Get-CsTenant | Select-Object DisplayName, TenantID



**Below Content Applies To:** Skype for Business Server 2015

Globally unique identifier (GUID) of the Skype for Business Online tenant account for the meeting configuration settings being deleted.
For example:

-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"

You can return the tenant ID for each of your tenants by running this command:

Get-CsTenant | Select-Object DisplayName, TenantID



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
Remove-CsMeetingConfiguration accepts pipelined instances of the meeting configuration object.

###  
Microsoft.Rtc.Management.WritableConfig.Settings.UserServices.MeetingConfiguration object.
The Remove-CsMeetingConfiguration cmdlet accepts pipelined instances of the meeting configuration object.

## OUTPUTS

###  
None.
Instead, Remove-CsMeetingConfiguration deletes existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.UserServices.MeetingConfiguration object.

###  
None.
Instead, the Remove-CsMeetingConfiguration cmdlet deletes existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.UserServices.MeetingConfiguration object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/a5d4c758-25f6-4cdb-a5b7-dbb0fb1d8488(OCS.14).aspx)

[Get-CsMeetingConfiguration]()

[New-CsMeetingConfiguration]()

[Set-CsMeetingConfiguration]()

[Online Version](http://technet.microsoft.com/EN-US/library/a5d4c758-25f6-4cdb-a5b7-dbb0fb1d8488(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/a5d4c758-25f6-4cdb-a5b7-dbb0fb1d8488(OCS.16).aspx)

