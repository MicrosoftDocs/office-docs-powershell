---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015
schema: 2.0.0
---

# Remove-CsConferencingPolicy

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Removes the specified conferencing policy.
Conferencing policies determine the features and capabilities that can be used in a conference; this includes everything from whether or not the conference can include IP audio and video to the maximum number of people who can attend a meeting.

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Removes the specified conferencing policy.
Conferencing policies determine the features and capabilities that can be used in a conference; this includes everything from whether or not the conference can include IP audio and video to the maximum number of people who can attend a meeting.
This cmdlet was introduced in Lync Server 2010.

**Below Content Applies To:** Skype for Business Online

Remove-CsConferencingPolicy \[-Identity\] \<XdsIdentity\> \[-Tenant \<guid\>\] \[-BypassDualWrite \<bool\>\] \[-Force\] \[-WhatIf\] \[-Confirm\] \[\<CommonParameters\>\]



## SYNTAX

```
Remove-CsConferencingPolicy [-Identity] <XdsIdentity> [-Force] [-WhatIf] [-Confirm] [-BypassDualWrite <Object>]
 [-Tenant <Object>] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

Conferencing is an important part of Microsoft Lync Server 2010: conferencing enables groups of users (as few as two people to as many as 250 people) to come together online to view slides and video, share applications, exchange files, and otherwise communicate and collaborate.

It's important for administrators to maintain control over conferences and conference settings.
In some cases, there might be security concerns: by default, anyone, including unauthenticated users, can participate in meetings and save any of the slides or handouts distributed during those meetings.
In other cases, there might be bandwidth concerns: having a multitude of simultaneous meetings, each involving hundreds of participants and each featuring video feeds and file sharing, has the potential to cause problems with your network.
In addition, there might be legal concerns.
For example, by default meeting participants are allowed to make annotations on shared content; however, these annotations are not saved when the meeting is archived.
If your organization is required to keep a record of all electronic communication, you might want to disable annotations.

Of course, needing to manage conferencing settings is one thing; actually managing these settings is another.
In Lync Server 2010, conferences are managed by using conferencing policies.
(In previous versions of the software, these were known as meeting policies.) As noted, conferencing policies determine the features and capabilities that can be used in a conference, including everything from whether or not the conference can include IP audio and video to the maximum number of people who can attend a meeting.
Conferencing policies can be configured at the global scope; at the site scope; or at the per-user scope.
This provides administrators with enormous flexibility when it comes to deciding which capabilities will be made available to which users.

You can use the Remove-CsConferencingPolicy to delete any of the conferencing policies configured for use in your organization, with one exception: you cannot delete the global policy.
You can still run Remove-CsConferencingPolicy against the global policy.
In that case, however the policy will not be removed; instead, all the global policy properties will be reset to their default values.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsConferencingPolicy cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsConferencingPolicy"}

**Below Content Applies To:** Lync Server 2013

Conferencing is an important part of Lync Server: conferencing enables groups of users to come together online to view slides and video, share applications, exchange files, and otherwise communicate and collaborate.

It's important for administrators to maintain control over conferences and conference settings.
In some cases, there might be security concerns: by default, anyone, including unauthenticated users, can participate in meetings and save any of the slides or handouts distributed during those meetings.
In other cases, there might be bandwidth concerns: having a multitude of simultaneous meetings, each involving hundreds of participants and each featuring video feeds and file sharing, has the potential to cause problems with your network.
In addition, there might be legal concerns.
For example, by default meeting participants are allowed to make annotations on shared content; however, these annotations are not saved when the meeting is archived.
If your organization is required to keep a record of all electronic communication, you might want to disable annotations.

Of course, needing to manage conferencing settings is one thing; actually managing these settings is another.
In Lync Server, conferences are managed by using conferencing policies.
(In previous versions of the software, these were known as meeting policies.) As noted, conferencing policies determine the features and capabilities that can be used in a conference, including everything from whether or not the conference can include IP audio and video to the maximum number of people who can attend a meeting.
Conferencing policies can be configured at the global scope; at the site scope; or at the per-user scope.
This provides administrators with enormous flexibility when it comes to deciding which capabilities will be made available to which users.

You can use the Remove-CsConferencingPolicy to delete any of the conferencing policies configured for use in your organization, with one exception: you cannot delete the global policy.
You can still run Remove-CsConferencingPolicy against the global policy.
In that case, however the policy will not be removed; instead, all the global policy properties will be reset to their default values.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsConferencingPolicy cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsConferencingPolicy"}

**Below Content Applies To:** Skype for Business Online

{{Fill in the Description}}

**Below Content Applies To:** Skype for Business Server 2015

Conferencing is an important part of Skype for Business Server 2015: conferencing enables groups of users to come together online to view slides and video, share applications, exchange files, and otherwise communicate and collaborate.

It's important for administrators to maintain control over conferences and conference settings.
In some cases, there might be security concerns: by default, anyone, including unauthenticated users, can participate in meetings and save any of the slides or handouts distributed during those meetings.
In other cases, there might be bandwidth concerns: having a multitude of simultaneous meetings, each involving hundreds of participants and each featuring video feeds and file sharing, has the potential to cause problems with your network.
In addition, there might be legal concerns.
For example, by default meeting participants are allowed to make annotations on shared content; however, these annotations are not saved when the meeting is archived.
If your organization is required to keep a record of all electronic communication, you might want to disable annotations.

Of course, needing to manage conferencing settings is one thing; actually managing these settings is another.
In Skype for Business Server 2015, conferences are managed by using conferencing policies.
(In previous versions of the software, these were known as meeting policies.) As noted, conferencing policies determine the features and capabilities that can be used in a conference, including everything from whether or not the conference can include IP audio and video to the maximum number of people who can attend a meeting.
Conferencing policies can be configured at the global scope; at the site scope; or at the per-user scope.
This provides administrators with enormous flexibility when it comes to deciding which capabilities will be made available to which users.

You can use the Remove-CsConferencingPolicy cmdlet to delete any of the conferencing policies configured for use in your organization, with one exception: you cannot delete the global policy.
You can still run the Remove-CsConferencingPolicy cmdlet against the global policy.
In that case, however the policy will not be removed; instead, all the global policy properties will be reset to their default values.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Remove-CsConferencingPolicy -Identity SalesConferencingPolicy
```

In Example 1, Remove-CsConferencingPolicy is used to delete the conferencing policy with the Identity SalesConferencingPolicy.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

In Example 1, Remove-CsConferencingPolicy is used to delete the conferencing policy with the Identity SalesConferencingPolicy.

Remove-CsConferencingPolicy -Identity SalesConferencingPolicy

### Example 1 (Skype for Business Online)
```
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

In Example 1, the Remove-CsConferencingPolicy cmdlet is used to delete the conferencing policy with the Identity SalesConferencingPolicy.

Remove-CsConferencingPolicy -Identity SalesConferencingPolicy

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
Get-CsConferencingPolicy -Filter "site:*" | Remove-CsConferencingPolicy
```

In the preceding example, all the conferencing policies that have been configured at the site scope are deleted.
To accomplish this task, the command first uses Get-CsConferencingPolicy and the Filter parameter to return a collection of all the site-level policies; the filter value "site:*" ensures that only policies that have an Identity that begins with the string value "site" are returned.
That filtered collection is then piped to Remove-CsConferencingPolicy, which deletes each item  in the collection.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

In Example 2, all the conferencing policies that have been configured at the site scope are deleted.
To accomplish this task, the command first uses Get-CsConferencingPolicy and the Filter parameter to return a collection of all the site-level policies; the filter value "site:*" ensures that only policies that have an Identity that begins with the string value "site" are returned.
That filtered collection is then piped to Remove-CsConferencingPolicy, which deletes each item in the collection.

Get-CsConferencingPolicy -Filter "site:*" | Remove-CsConferencingPolicy

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

In Example 2, all the conferencing policies that have been configured at the site scope are deleted.
To accomplish this task, the command first uses the Get-CsConferencingPolicy cmdlet and the Filter parameter to return a collection of all the site-level policies; the filter value "site:*" ensures that only policies that have an Identity that begins with the string value "site" are returned.
That filtered collection is then piped to the Remove-CsConferencingPolicy cmdlet, which deletes each item in the collection.

Get-CsConferencingPolicy -Filter "site:*" | Remove-CsConferencingPolicy

### -------------------------- Example 3 -------------------------- (Lync Server 2010)
```
Get-CsConferencingPolicy | Where-Object {$_.MaxMeetingSize -gt 100} | Remove-CsConferencingPolicy
```

In Example 3, all the policies that allow a maximum meeting size (MaxMeetingSize) of more than 100 people are deleted.
To do this, the command first uses Get-CsConferencingPolicy to retrieve a collection of all the conferencing policies configured for use in the organization.
That collection is then piped to the Where-Object cmdlet, which applies a filter that limits the returned data to those policies where the MaxMeetingSize value is greater than 100.
Finally, that filtered collection is passed to Remove-CsConferencingPolicy, which deletes all the policies in the filtered collection.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

In Example 3, all the policies that allow a maximum meeting size (MaxMeetingSize) of more than 100 people are deleted.
To do this, the command first uses Get-CsConferencingPolicy to retrieve a collection of all the conferencing policies configured for use in the organization.
That collection is then piped to the Where-Object cmdlet, which applies a filter that limits the returned data to those policies where the MaxMeetingSize value is greater than 100.
Finally, that filtered collection is passed to Remove-CsConferencingPolicy, which deletes all the policies in the filtered collection.

Get-CsConferencingPolicy | Where-Object {$_.MaxMeetingSize -gt 100} | Remove-CsConferencingPolicy

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

In Example 3, all the policies that allow a maximum meeting size (MaxMeetingSize) of more than 100 people are deleted.
To do this, the command first uses the Get-CsConferencingPolicy cmdlet to retrieve a collection of all the conferencing policies configured for use in the organization.
That collection is then piped to the Where-Object cmdlet, which applies a filter that limits the returned data to those policies where the MaxMeetingSize value is greater than 100.
Finally, that filtered collection is passed to the Remove-CsConferencingPolicy cmdlet, which deletes all the policies in the filtered collection.

Get-CsConferencingPolicy | Where-Object {$_.MaxMeetingSize -gt 100} | Remove-CsConferencingPolicy

## PARAMETERS

### -Identity
**Below Content Applies To:** Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Unique identifier for the conferencing policy to be removed.
Conferencing policies can be configured at the global, site, or per-user scopes.
To remove the global policy, use this syntax: -Identity global.
(Note that the global policy cannot actually be removed.
Instead, all the policy properties will be reset to their default values.) To remove a site policy, use syntax similar to this: -Identity site:Redmond.
To remove a per-user policy, use syntax similar to this: -Identity SalesConferencingPolicy.

Wildcards are not allowed when specifying an Identity.



**Below Content Applies To:** Skype for Business Online

{{Fill Identity Description}}



```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Force
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

If present, causes Remove-CsConferencingPolicy to delete the per-user policy even if the policy in question is currently assigned to at least one user.
If not present, you will be asked to confirm the deletion request before the policy will be removed.



**Below Content Applies To:** Skype for Business Online

{{Fill Force Description}}



**Below Content Applies To:** Skype for Business Server 2015

If present, causes the Remove-CsConferencingPolicy cmdlet to delete the per-user policy even if the policy in question is currently assigned to at least one user.
If not present, you will be asked to confirm the deletion request before the policy will be removed.



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
**Below Content Applies To:** Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Describes what would happen if you executed the command without actually executing the command.



**Below Content Applies To:** Skype for Business Online

Shows what would happen if the cmdlet runs.
The cmdlet is not run.



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
**Below Content Applies To:** Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Prompts you for confirmation before executing the command.



**Below Content Applies To:** Skype for Business Online

Prompts you for confirmation before running the cmdlet.



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

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

### -Tenant
**Below Content Applies To:** Skype for Business Online

{{Fill Tenant Description}}



**Below Content Applies To:** Skype for Business Server 2015

Globally unique identifier (GUID) of the Skype for Business Online tenant account for whom the conferencing policy is being removed.
For example:

-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"

You can return the tenant ID for each of your Skype for Business Online tenants by running this command:

Get-CsTenant | Select-Object DisplayName, TenantID



```yaml
Type: Object
Parameter Sets: (All)
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
Microsoft.Rtc.Management.WritableConfig.Policy.Meeting.MeetingPolicy object.
Remove-CsConferencingPolicy accepts pipelined instances of the meeting policy object.

### Microsoft.Rtc.Management.Xds.XdsIdentity

###  
Microsoft.Rtc.Management.WritableConfig.Policy.Meeting.MeetingPolicy object.
The Remove-CsConferencingPolicy cmdlet accepts pipelined instances of the meeting policy object.

## OUTPUTS

###  
Remove-CsConferencingPolicy does not return a value or object.
Instead, the cmdlet deletes instances of the Microsoft.Rtc.Management.WritableConfig.Policy.Meeting.MeetingPolicy object.

### System.Object

###  
The Remove-CsConferencingPolicy cmdlet does not return a value or object.
Instead, the cmdlet deletes instances of the Microsoft.Rtc.Management.WritableConfig.Policy.Meeting.MeetingPolicy object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/8fe81ace-d167-414b-9455-8be7ddc0cab5(OCS.14).aspx)

[Get-CsConferencingPolicy]()

[Grant-CsConferencingPolicy]()

[New-CsConferencingPolicy]()

[Set-CsConferencingPolicy]()

[Online Version](http://technet.microsoft.com/EN-US/library/8fe81ace-d167-414b-9455-8be7ddc0cab5(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/8fe81ace-d167-414b-9455-8be7ddc0cab5(OCS.16).aspx)

