---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Remove-CsArchivingConfiguration

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Removes the specified collection of archiving settings.
Archiving settings are used to enable or disable the automatic saving of instant messaging (IM) sessions, and to optionally block any instant message that cannot be archived.

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Removes the specified collection of archiving settings.
Archiving settings are used to enable or disable the automatic saving of instant messaging (IM) sessions, and to optionally block any instant message that cannot be archived.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Remove-CsArchivingConfiguration [-Identity] <XdsIdentity> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

Many organizations find it useful to keep a transcript of all the IM sessions and conferences their users participate in.
For other organizations, it's mandatory to keep such transcripts; for example, many organizations in the financial world are required by law to keep copies of all their electronic communications.

Microsoft Lync Server 2010 gives you flexibility when it comes to archiving IM and web conferencing sessions.
If you have deployed Archiving Server, you can use the various CsArchivingConfiguration cmdlets to enable and disable IM session archiving and to manage your archiving database.
You can also suspend IM should archiving fail; this helps to ensure that you keep a record of all your electronic communications.

When you install Lync Server 2010, a collection of global archiving settings will be created for you; by default, these settings will apply to your entire organization.
Alternatively, you can use the New-CsArchivingConfiguration cmdlet to create custom configuration settings on a site-by-site basis.
Any site-specific settings created using New-CsArchivingConfiguration can later be removed by using the Remove-CsArchivingConfiguration cmdlet.
When you remove the settings for a site, the affected site will then be governed by the global settings.

Note that you can also run Remove-CsArchivingConfiguration against the global archiving settings.
In that case, however, the settings will not be removed; that's because you cannot delete the global settings.
Instead, all the global properties will be reset to their default values.
For example, suppose you have enabled IM session archiving at the global scope; sometime later, you run the command Remove-CsArchivingConfiguration -Identity global.
Running that command will reset the property values for the global settings; that means that EnableArchiving will revert to its default value of None.
In turn, that will disable archiving at the global scope.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsArchivingConfiguration cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsArchivingConfiguration"}

**Below Content Applies To:** Lync Server 2013

Many organizations find it useful to keep a transcript of all the IM sessions and conferences their users participate in.
For other organizations, it's mandatory to keep such transcripts; for example, many organizations in the financial world are required by law to keep copies of all their electronic communications.

Lync Server gives you flexibility when it comes to archiving IM and web conferencing sessions.
If you have deployed Archiving Server, you can use the various CsArchivingConfiguration cmdlets to enable and disable IM session archiving and to manage your archiving database.
You can also suspend IM should archiving fail; this helps to ensure that you keep a record of all your electronic communications.

When you install Lync Server, a collection of global archiving settings will be created for you; by default, these settings will apply to your entire organization.
Alternatively, you can use the New-CsArchivingConfiguration cmdlet to create custom configuration settings on a site-by-site basis.
Any site-specific settings created using New-CsArchivingConfiguration can later be removed by using the Remove-CsArchivingConfiguration cmdlet.
When you remove the settings for a site, the affected site will then be governed by the global settings.

Note that you can also run Remove-CsArchivingConfiguration against the global archiving settings.
In that case, however, the settings will not be removed; that's because you cannot delete the global settings.
Instead, all the global properties will be reset to their default values.
For example, suppose you have enabled IM session archiving at the global scope; sometime later, you run the command Remove-CsArchivingConfiguration -Identity global.
Running that command will reset the property values for the global settings; that means that EnableArchiving will revert to its default value of None.
In turn, that will disable archiving at the global scope.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsArchivingConfiguration cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsArchivingConfiguration"}

**Below Content Applies To:** Skype for Business Server 2015

Many organizations find it useful to keep a transcript of all the IM sessions and conferences their users participate in.
For other organizations, it's mandatory to keep such transcripts; for example, many organizations in the financial world are required by law to keep copies of all their electronic communications.

Skype for Business Server 2015 gives you flexibility when it comes to archiving IM and web conferencing sessions.
If you have deployed Archiving Server, you can use the various CsArchivingConfiguration cmdlets to enable and disable IM session archiving and to manage your archiving database.
You can also suspend IM should archiving fail; this helps to ensure that you keep a record of all your electronic communications.

When you install Skype for Business Server 2015, a collection of global archiving settings will be created for you; by default, these settings will apply to your entire organization.
Alternatively, you can use the New-CsArchivingConfiguration cmdlet to create custom configuration settings on a site-by-site basis.
Any site-specific settings created using the New-CsArchivingConfiguration cmdlet can later be removed by using the Remove-CsArchivingConfiguration cmdlet.
When you remove the settings for a site, the affected site will then be governed by the global settings.

Note that you can also run the Remove-CsArchivingConfiguration cmdlet against the global archiving settings.
In that case, however, the settings will not be removed; that's because you cannot delete the global settings.
Instead, all the global properties will be reset to their default values.
For example, suppose you have enabled IM session archiving at the global scope; sometime later, you run this command:

Remove-CsArchivingConfiguration -Identity global

Running that command will reset the property values for the global settings; that means that EnableArchiving will revert to its default value of None.
In turn, that will disable archiving at the global scope.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Remove-CsArchivingConfiguration -Identity site:Redmond
```

The preceding example uses Remove-CsArchivingConfiguration to delete the archiving configuration settings with the identity site:Redmond.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

Example 1 uses Remove-CsArchivingConfiguration to delete the archiving configuration settings with the identity site:Redmond.

Remove-CsArchivingConfiguration -Identity site:Redmond

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

Example 1 uses the Remove-CsArchivingConfiguration cmdlet to delete the archiving configuration settings with the identity site:Redmond.

Remove-CsArchivingConfiguration -Identity site:Redmond

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
Get-CsArchivingConfiguration -Filter "site:*" | Remove-CsArchivingConfiguration
```

The command shown in Example 2 removes all of the archiving configuration settings that have been configured at the site scope.
To do this, the command first uses Get-CsArchivingConfiguration and the Filter parameter to return a collection of all of the settings configured at the site scope.
This is done by using the filter value "site:*", which limits the returned data to settings that have an Identity that begins with the characters "site:".
The filtered collection is then piped to Remove-CsArchivingConfiguration, which deletes each item in that collection.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 2 removes all of the archiving configuration settings that have been configured at the site scope.
To do this, the command first uses Get-CsArchivingConfiguration and the Filter parameter to return a collection of all of the settings configured at the site scope.
This is done by using the filter value "site:*", which limits the returned data to settings that have an Identity that begins with the characters "site:".
The filtered collection is then piped to Remove-CsArchivingConfiguration, which deletes each item in that collection.

Get-CsArchivingConfiguration -Filter "site:*" | Remove-CsArchivingConfiguration

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 2 removes all of the archiving configuration settings that have been configured at the site scope.
To do this, the command first uses the Get-CsArchivingConfiguration cmdlet and the Filter parameter to return a collection of all of the settings configured at the site scope.
This is done by using the filter value "site:*", which limits the returned data to settings that have an Identity that begins with the characters "site:".
The filtered collection is then piped to the Remove-CsArchivingConfiguration cmdlet, which deletes each item in that collection.

Get-CsArchivingConfiguration -Filter "site:*" | Remove-CsArchivingConfiguration

### -------------------------- Example 3 -------------------------- (Lync Server 2010)
```
Get-CsArchivingConfiguration | Where-Object {$_.EnableArchiving -eq "None"} | Remove-CsArchivingConfiguration
```

Example 3 deletes all the archiving configuration settings where the EnableArchiving property has been set to "None".
To carry out this task, Get-CsArchivingConfiguration is called without any parameters in order to return a collection of all the archiving settings configured for use in the organization.
This collection is then piped to the Where-Object cmdlet, which picks out only those settings where the EnableArchiving property is equal to "None".
The filtered collection is then piped to Remove-CsArchivingConfiguration, which deletes each item in the collection.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

Example 3 deletes all the archiving configuration settings where the EnableArchiving property has been set to "None".
To carry out this task, Get-CsArchivingConfiguration is called without any parameters in order to return a collection of all the archiving settings configured for use in the organization.
This collection is then piped to the Where-Object cmdlet, which picks out only those settings where the EnableArchiving property is equal to "None".
The filtered collection is then piped to Remove-CsArchivingConfiguration, which deletes each item in the collection.

Get-CsArchivingConfiguration | Where-Object {$_.EnableArchiving -eq "None"} | Remove-CsArchivingConfiguration

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

Example 3 deletes all the archiving configuration settings where the EnableArchiving property has been set to "None".
To carry out this task, the Get-CsArchivingConfiguration cmdlet is called without any parameters in order to return a collection of all the archiving settings configured for use in the organization.
This collection is then piped to the Where-Object cmdlet, which picks out only those settings where the EnableArchiving property is equal to "None".
The filtered collection is then piped to the Remove-CsArchivingConfiguration cmdlet, which deletes each item in the collection.

Get-CsArchivingConfiguration | Where-Object {$_.EnableArchiving -eq "None"} | Remove-CsArchivingConfiguration

## PARAMETERS

### -Identity
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Unique identifier for the collection of archiving configuration settings to be removed.
To remove the global collection, use the following syntax: -Identity global.
(Note that you cannot actually remove the global settings; instead, you can only reset the properties to their default values.) To remove a site collection, use syntax similar to this: -Identity site:Redmond.
You cannot use wildcards when specifying a policy Identity.



**Below Content Applies To:** Skype for Business Server 2015

Unique identifier for the collection of archiving configuration settings to be removed.
To remove the global collection, use the following syntax: -Identity global.
(Note that you cannot actually remove the global settings; instead, you can only reset the properties to their default values.) To remove a site collection, use syntax similar to this: -Identity site:Redmond.
To remove settings configured for an individual Registrar pool syntax like this:

-Identity "service:Registrar:atl-cs-001.litwareinc.com"

Note that pool-level settings are available only in Skype for Business Server 2015.

You cannot use wildcards when specifying a policy Identity.



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
Microsoft.Rtc.Management.WritableConfig.Settings.Archiving.ArchivingSettings object.
Remove-CsArchivingConfiguration accepts pipelined input of archiving configuration objects.

###  
Microsoft.Rtc.Management.WritableConfig.Settings.Archiving.ArchivingSettings object.
The Remove-CsArchivingConfiguration cmdlet accepts pipelined input of archiving configuration objects.

## OUTPUTS

###  
Set-CsArchivingConfiguration does not return a value or object.
Instead, the cmdlet removes instances of the Microsoft.Rtc.Management.WritableConfig.Settings.Archiving.ArchivingSettings object.

###  
The Remove-CsArchivingConfiguration cmdlet does not return a value or object.
Instead, the cmdlet removes instances of the Microsoft.Rtc.Management.WritableConfig.Settings.Archiving.ArchivingSettings object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/d83b8935-079e-47d0-ba48-c95dd07965c0(OCS.14).aspx)

[Get-CsArchivingConfiguration]()

[New-CsArchivingConfiguration]()

[Set-CsArchivingConfiguration]()

[Set-CsArchivingServer]()

[Online Version](http://technet.microsoft.com/EN-US/library/d83b8935-079e-47d0-ba48-c95dd07965c0(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/d83b8935-079e-47d0-ba48-c95dd07965c0(OCS.16).aspx)

