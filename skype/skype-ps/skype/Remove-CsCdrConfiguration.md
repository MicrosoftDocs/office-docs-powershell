---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Remove-CsCdrConfiguration

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Removes the specified collection of call detail recording (CDR) settings.
CDR enables you to track usage of such things as peer-to-peer instant messaging sessions, Voice over Internet Protocol (VoIP) phone calls, and conferencing calls.
This usage data includes information about who called whom, when they called, and how long they talked.

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Removes the specified collection of call detail recording (CDR) settings.
CDR enables you to track usage of such things as peer-to-peer instant messaging sessions, Voice over Internet Protocol (VoIP) phone calls, and conferencing calls.
This usage data includes information about who called whom, when they called, and how long they talked.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Remove-CsCdrConfiguration [-Identity] <XdsIdentity> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

Call detail recording (CDR) provides a way for you to track usage of Microsoft Lync Server 2010 capabilities such as Voice over Internet Protocol (VoIP) phone calls; instant messaging; file transfers; audio/video (A/V) conferencing; and application sharing sessions.
CDR (which is available only if you have deployed the Monitoring service) keeps usage information: it logs information such as the parties involved in the call; the length of the call; and whether or not any files were transferred.(However, CDR does not make a recording of the call itself.)

CDR also keeps track of call error information: detailed diagnostic data for both peer-to-peer sessions and for conferencing calls.

As an administrator, you can determine whether or not CDR is used in your organization.
If Monitoring Service has been deployed, you can easily enable or disable CDR.
In addition, you can make this decision globally (in which case CDR will either be enabled or disabled throughout the organization) or on a site-by-site basis; for example, you could use CDR in the Redmond site but not use CDR in the Paris site.

Site-specific settings you create by using New-CsCdrConfiguration can later be removed by using the Remove-CsCdrConfiguration cmdlet.
When you remove site-specific settings, then CDR for the affected site will automatically be governed by the global CDR configuration settings.

You can also run Remove-CsCdrConfiguration against the global CDR settings.
However, because the global settings cannot be removed, they will instead be reset to their default values.
For example, suppose, you set the value of the KeepCallDetailForDays property in the global settings to 90.
If you run Remove-CsCdrConfiguration against the global settings, that property will be reset to its default value of 60.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsCdrConfiguration cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsCdrConfiguration"}

**Below Content Applies To:** Lync Server 2013

Call detail recording (CDR) provides a way for you to track usage of Lync Server capabilities such as Voice over Internet Protocol (VoIP) phone calls; instant messaging; file transfers; audio/video (A/V) conferencing; and application sharing sessions.
CDR (which is available only if you have deployed the Monitoring service) keeps usage information: it logs information such as the parties involved in the call; the length of the call; and whether or not any files were transferred.
(However, CDR does not make a recording of the call itself.)

CDR also keeps track of call error information: detailed diagnostic data for both peer-to-peer sessions and for conferencing calls.

As an administrator, you can determine whether or not CDR is used in your organization.
If Monitoring Service has been deployed, you can easily enable or disable CDR.
In addition, you can make this decision globally (in which case CDR will either be enabled or disabled throughout the organization) or on a site-by-site basis; for example, you could use CDR in the Redmond site but not use CDR in the Paris site.

Site-specific settings you create by using New-CsCdrConfiguration can later be removed by using the Remove-CsCdrConfiguration cmdlet.
When you remove site-specific settings, then CDR for the affected site will automatically be governed by the global CDR configuration settings.

You can also run Remove-CsCdrConfiguration against the global CDR settings.
However, because the global settings cannot be removed, they will instead be reset to their default values.
For example, suppose, you set the value of the KeepCallDetailForDays property in the global settings to 90.
If you run Remove-CsCdrConfiguration against the global settings, that property will be reset to its default value of 60.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsCdrConfiguration cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsCdrConfiguration"}

**Below Content Applies To:** Skype for Business Server 2015

Call detail recording (CDR) provides a way for you to track usage of Skype for Business Server 2015 capabilities such as Voice over Internet Protocol (VoIP) phone calls; instant messaging; file transfers; audio/video (A/V) conferencing; and application sharing sessions.
CDR (which is available only if you have deployed the Monitoring service) keeps usage information: it logs information such as the parties involved in the call; the length of the call; and whether or not any files were transferred.
(However, CDR does not make a recording of the call itself.)

CDR also keeps track of call error information: detailed diagnostic data for both peer-to-peer sessions and for conferencing calls.

As an administrator, you can determine whether or not CDR is used in your organization.
If Monitoring Service has been deployed, you can easily enable or disable CDR.
In addition, you can make this decision globally (in which case CDR will either be enabled or disabled throughout the organization) or on a site-by-site basis; for example, you could use CDR in the Redmond site but not use CDR in the Paris site.

Site-specific settings you create by using the New-CsCdrConfiguration cmdlet can later be removed by using the Remove-CsCdrConfiguration cmdlet.
When you remove site-specific settings, then CDR for the affected site will automatically be governed by the global CDR configuration settings.

You can also run the Remove-CsCdrConfiguration cmdlet against the global CDR settings.
However, because the global settings cannot be removed, they will instead be reset to their default values.
For example, suppose, you set the value of the KeepCallDetailForDays property in the global settings to 90.
If you run the Remove-CsCdrConfiguration cmdlet against the global settings, that property will be reset to its default value of 60.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Remove-CsCdrConfiguration -Identity site:Redmond
```

The preceding command uses Remove-CsCdrConfiguration to remove the CDR settings assigned to the Redmond site.
Using the Identity parameter ensures that only the settings assigned to the specified site will be removed.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

Example 1 uses Remove-CsCdrConfiguration to remove the CDR settings assigned to the Redmond site.
Using the Identity parameter ensures that only the settings assigned to the specified site will be removed.

Remove-CsCdrConfiguration -Identity site:Redmond

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

Example 1 uses the Remove-CsCdrConfiguration cmdlet to remove the CDR settings assigned to the Redmond site.
Using the Identity parameter ensures that only the settings assigned to the specified site will be removed.

Remove-CsCdrConfiguration -Identity site:Redmond

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
Get-CsCdrConfiguration -Filter site:* | Remove-CsCdrConfiguration
```

The command shown in Example 2 removes all the CDR settings that have been assigned at the site scope.
To do this, the command first uses Get-CsCdrConfiguration and the Filter parameter to retrieve the appropriate CDR settings; the string value "site:*" ensures that only those settings that have an Identity that begins with the characters "site:" are returned.
The filtered collection is then piped to Remove-CsCdrConfiguration, which deletes all the items in the collection.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 2 removes all the CDR settings that have been assigned at the site scope.
To do this, the command first uses Get-CsCdrConfiguration and the Filter parameter to retrieve the appropriate CDR settings; the string value "site:*" ensures that only those settings that have an Identity that begins with the characters "site:" are returned.
The filtered collection is then piped to Remove-CsCdrConfiguration, which deletes all the items in the collection.

Get-CsCdrConfiguration -Filter site:* | Remove-CsCdrConfiguration

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 2 removes all the CDR settings that have been assigned at the site scope.
To do this, the command first uses the Get-CsCdrConfiguration cmdlet and the Filter parameter to retrieve the appropriate CDR settings; the string value "site:*" ensures that only those settings that have an Identity that begins with the characters "site:" are returned.
The filtered collection is then piped to the Remove-CsCdrConfiguration cmdlet, which deletes all the items in the collection.

Get-CsCdrConfiguration -Filter site:* | Remove-CsCdrConfiguration

### -------------------------- Example 3 -------------------------- (Lync Server 2010)
```
Get-CsCdrConfiguration | Where-Object {$_.KeepCallDetailForDays -lt 30} | Remove-CsCdrConfiguration
```

In Example 3, any CDR settings where the KeepCallDetailForDays property is less than 30 days are deleted.
To carry out this task, the command calls Get-CsCdrConfiguration without any parameters in order to return a collection of all the CDR settings currently in use in the organization.
This collection is then piped to the Where-Object cmdlet, which picks out only those settings where the KeepCallDetailForDays property is less than 30 days.
The filtered collection is then piped to Remove-CsCdrConfiguration, which deletes each item in that collection.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

In Example 3, any CDR settings where the KeepCallDetailForDays property is less than 30 days are deleted.
To carry out this task, the command calls Get-CsCdrConfiguration without any parameters in order to return a collection of all the CDR settings currently in use in the organization.
This collection is then piped to the Where-Object cmdlet, which picks out only those settings where the KeepCallDetailForDays property is less than 30 days.
The filtered collection is then piped to Remove-CsCdrConfiguration, which deletes each item in that collection.

Get-CsCdrConfiguration | Where-Object {$_.KeepCallDetailForDays -lt 30} | Remove-CsCdrConfiguration

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

In Example 3, any CDR settings where the KeepCallDetailForDays property is less than 30 days are deleted.
To carry out this task, the command calls the Get-CsCdrConfiguration cmdlet without any parameters in order to return a collection of all the CDR settings currently in use in the organization.
This collection is then piped to the Where-Object cmdlet, which picks out only those settings where the KeepCallDetailForDays property is less than 30 days.
The filtered collection is then piped to the Remove-CsCdrConfiguration cmdlet, which deletes each item in that collection.

Get-CsCdrConfiguration | Where-Object {$_.KeepCallDetailForDays -lt 30} | Remove-CsCdrConfiguration

## PARAMETERS

### -Identity
Unique identifier of the CDR configuration settings to be removed.
To "remove" the global settings, use this syntax: -Identity global.
(Note, again, that you cannot actually remove the global settings; all you can do is reset the properties to their default values.) To remove settings from the site scope, use syntax similar to this: -Identity site:Redmond.
You cannot use wildcards when specifying an Identity.

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
Microsoft.Rtc.Management.WritableConfig.Settings.CallDetailRecording.CdrSettings.
Remove-CsCdrConfiguration accepts pipelined input of CDR configuration objects.

###  
Microsoft.Rtc.Management.WritableConfig.Settings.CallDetailRecording.CdrSettings.
The Remove-CsCdrConfiguration cmdlet accepts pipelined input of CDR configuration objects.

## OUTPUTS

###  
None.
Instead, the cmdlet deletes instances of the Microsoft.Rtc.Management.WritableConfig.Settings.CallDetailRecording.CdrSettings object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/64352746-a03c-434a-9baf-4d9cd630e9da(OCS.14).aspx)

[Get-CsCdrConfiguration]()

[New-CsCdrConfiguration]()

[Set-CsCdrConfiguration]()

[Online Version](http://technet.microsoft.com/EN-US/library/64352746-a03c-434a-9baf-4d9cd630e9da(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/64352746-a03c-434a-9baf-4d9cd630e9da(OCS.16).aspx)

