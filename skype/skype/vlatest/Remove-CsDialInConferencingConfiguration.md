---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Remove-CsDialInConferencingConfiguration

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Removes one or more collections of dial-in conferencing configuration settings.
These settings determine how Microsoft Lync Server 2010 responds when users join or leave a dial-in conference.

**Below Content Applies To:** Lync Server 2013

Removes one or more collections of dial-in conferencing configuration settings.
These settings determine how Lync Server responds when users join or leave a dial-in conference.
This cmdlet was introduced in Lync Server 2010.

**Below Content Applies To:** Skype for Business Server 2015

Removes one or more collections of dial-in conferencing configuration settings.
These settings determine how Skype for Business Server 2015 responds when users join or leave a dial-in conference.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Remove-CsDialInConferencingConfiguration [-Identity] <XdsIdentity> [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

When users join (or leave) a dial-in conference, Lync Server 2010 can respond in different ways.
For example, participants might be asked to record their name before they can enter the conference itself.
Likewise, administrators can decide whether they want to have Lync Server announce that dial-in participants have either left or joined a conference.

These conference "join behaviors" are managed using dial-in conferencing configuration settings; these settings can be configured at the global scope or at the site scope.
(Settings configured at the site scope take precedence over settings configured at the global scope.) When you install Lync Server, a global collection of dial-in conferencing configuration settings will be created for you.
If you want to have different settings for a site (or set of sites), you can create those collections by using the New-CSDialInConferencingConfiguration cmdlet.

The Remove-CSDialInConferencingConfiguration cmdlet deletes any dial-in conferencing settings that have been configured at the site scope.
When these site-specific settings are deleted, users in the affected sites will have their dial-in conferencing behaviors governed by the global settings.

You can also run Remove-CSDialInConferencingConfiguration against the global dial-in conferencing settings.
If you do that, the global settings will not be removed; that's because the global settings cannot be removed.
Instead, all the properties within that collection of settings will be reset to their default values.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsDialInConferencingConfiguration cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsDialInConferencingConfiguration"}

**Below Content Applies To:** Lync Server 2013

When users join (or leave) a dial-in conference, Lync Server can respond in different ways.
For example, participants might be asked to record their name before they can enter the conference itself.
Likewise, administrators can decide whether they want to have Lync Server announce that dial-in participants have either left or joined a conference.

These conference "join behaviors" are managed using dial-in conferencing configuration settings; these settings can be configured at the global scope or at the site scope.
(Settings configured at the site scope take precedence over settings configured at the global scope.) When you install Lync Server, a global collection of dial-in conferencing configuration settings will be created for you.
If you want to have different settings for a site (or set of sites), you can create those collections by using the New-CSDialInConferencingConfiguration cmdlet.

The Remove-CSDialInConferencingConfiguration cmdlet deletes any dial-in conferencing settings that have been configured at the site scope.
When these site-specific settings are deleted, users in the affected sites will have their dial-in conferencing behaviors governed by the global settings.

You can also run Remove-CSDialInConferencingConfiguration against the global dial-in conferencing settings.
If you do that, the global settings will not be removed; that's because the global settings cannot be removed.
Instead, all the properties within that collection of settings will be reset to their default values.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsDialInConferencingConfiguration cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsDialInConferencingConfiguration"}

**Below Content Applies To:** Skype for Business Server 2015

When users join (or leave) a dial-in conference, Skype for Business Server 2015 can respond in different ways.
For example, participants might be asked to record their name before they can enter the conference itself.
Likewise, administrators can decide whether they want to have Skype for Business Server 2015 announce that dial-in participants have either left or joined a conference.

These conference "join behaviors" are managed using dial-in conferencing configuration settings; these settings can be configured at the global scope or at the site scope.
(Settings configured at the site scope take precedence over settings configured at the global scope.) When you install Skype for Business Server 2015, a global collection of dial-in conferencing configuration settings will be created for you.
If you want to have different settings for a site (or set of sites), you can create those collections by using the New-CSDialInConferencingConfiguration cmdlet.

The Remove-CSDialInConferencingConfiguration cmdlet deletes any dial-in conferencing settings that have been configured at the site scope.
When these site-specific settings are deleted, users in the affected sites will have their dial-in conferencing behaviors governed by the global settings.

You can also run the Remove-CSDialInConferencingConfiguration cmdlet against the global dial-in conferencing settings.
If you do that, the global settings will not be removed; that's because the global settings cannot be removed.
Instead, all the properties within that collection of settings will be reset to their default values.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Remove-CSDialInConferencingConfiguration -Identity "site:Redmond"
```

In Example 1, the dial-in conferencing configuration settings for the Redmond site are deleted.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

In Example 1, the dial-in conferencing configuration settings for the Redmond site are deleted.

Remove-CSDialInConferencingConfiguration -Identity "site:Redmond"

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

In Example 1, the dial-in conferencing configuration settings for the Redmond site are deleted.

Remove-CSDialInConferencingConfiguration -Identity "site:Redmond"

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Get-CSDialInConferencingConfiguration -Filter "site:*" | Remove-CSDialInConferencingConfiguration
```

In the preceding example, all the dial-in conferencing settings that have been configured at the site scope are deleted.
To do this, the command first uses Get-CSDialInConferencingConfiguration and the Filter parameter to return a collection of all the dial-in conferencing settings that have been configured at the site scope.
(The filter value "site:*" ensures that only settings that have an Identity that begins with the string value "site:" are returned.) This filtered collection is then piped to Remove-CSDialInConferencingConfiguration, which removes each item in the collection.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

In Example 2, all the dial-in conferencing settings that have been configured at the site scope are deleted.
To do this, the command first uses Get-CSDialInConferencingConfiguration and the Filter parameter to return a collection of all the dial-in conferencing settings that have been configured at the site scope.
(The filter value "site:*" ensures that only settings that have an Identity that begins with the string value "site:" are returned.) This filtered collection is then piped to Remove-CSDialInConferencingConfiguration, which removes each item in the collection.

Get-CSDialInConferencingConfiguration -Filter "site:*" | Remove-CSDialInConferencingConfiguration

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

In Example 2, all the dial-in conferencing settings that have been configured at the site scope are deleted.
To do this, the command first uses the Get-CSDialInConferencingConfiguration cmdlet and the Filter parameter to return a collection of all the dial-in conferencing settings that have been configured at the site scope.
(The filter value "site:*" ensures that only settings that have an Identity that begins with the string value "site:" are returned.) This filtered collection is then piped to the Remove-CSDialInConferencingConfiguration cmdlet, which removes each item in the collection.

Get-CSDialInConferencingConfiguration -Filter "site:*" | Remove-CSDialInConferencingConfiguration

### -------------------------- Example 3 ------------------------ (Lync Server 2010)
```
Get-CSDialInConferencingConfiguration | Where-Object {$_.EnableNameRecording -eq $False} | Remove-CSDialInConferencingConfiguration
```

In Example 3, all the dial-in conferencing configuration settings that do not use name recording are deleted.
To carry out this task, the command first calls Get-CSDialInConferencingConfiguration without any parameters in order to return a collection of all the dial-in conferencing configuration settings currently in use in the organization.
This collection is then piped to the Where-Object cmdlet, which picks out only those settings where the EnableNameRecording property is equal to False.
In turn, this filtered collection is piped to Remove-CSDialInConferencingConfiguration, which deletes each item in the collection.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

In Example 3, all the dial-in conferencing configuration settings that do not use name recording are deleted.
To carry out this task, the command first calls Get-CSDialInConferencingConfiguration without any parameters in order to return a collection of all the dial-in conferencing configuration settings currently in use in the organization.
This collection is then piped to the Where-Object cmdlet, which picks out only those settings where the EnableNameRecording property is equal to False.
In turn, this filtered collection is piped to Remove-CSDialInConferencingConfiguration, which deletes each item in the collection.

Get-CSDialInConferencingConfiguration | Where-Object {$_.EnableNameRecording -eq $False} | Remove-CSDialInConferencingConfiguration

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

In Example 3, all the dial-in conferencing configuration settings that do not use name recording are deleted.
To carry out this task, the command first calls the Get-CSDialInConferencingConfiguration cmdlet without any parameters in order to return a collection of all the dial-in conferencing configuration settings currently in use in the organization.
This collection is then piped to the Where-Object cmdlet, which picks out only those settings where the EnableNameRecording property is equal to False.
In turn, this filtered collection is piped to the Remove-CSDialInConferencingConfiguration cmdlet, which deletes each item in the collection.

Get-CSDialInConferencingConfiguration | Where-Object {$_.EnableNameRecording -eq $False} | Remove-CSDialInConferencingConfiguration

## PARAMETERS

### -Identity
Indicates the Identity of the dial-in conferencing configuration settings to be removed.
To refer to the global settings, use this syntax: -Identity global.
To refer to site settings, use syntax similar to this: -Identity site:Redmond.
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
Microsoft.Rtc.Management.WritableConfig.Settings.DialInConferencingSettings.DialInConferencingConfiguration object.
Remove-CSDialInConferencingConfiguration accepts pipelined instances of the dial-in conferencing configuration object.

###  
Microsoft.Rtc.Management.WritableConfig.Settings.DialInConferencingSettings.DialInConferencingConfiguration object.
The Remove-CSDialInConferencingConfiguration cmdlet accepts pipelined instances of the dial-in conferencing configuration object.

## OUTPUTS

###  
None.
Instead, Remove-CSDialInConferencingConfiguration deletes instances of the Microsoft.Rtc.Management.WritableConfig.Settings.DialInConferencingSettings.DialInConferencingConfiguration object.

###  
None.
Instead, the Remove-CSDialInConferencingConfiguration cmdlet deletes instances of the Microsoft.Rtc.Management.WritableConfig.Settings.DialInConferencingSettings.DialInConferencingConfiguration object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/0c7f2a69-eeed-41bf-8ba7-5cc36dfdfa3c(OCS.14).aspx)

[Get-CsDialInConferencingConfiguration]()

[New-CsDialInConferencingConfiguration]()

[Set-CsDialInConferencingConfiguration]()

[Online Version](http://technet.microsoft.com/EN-US/library/0c7f2a69-eeed-41bf-8ba7-5cc36dfdfa3c(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/0c7f2a69-eeed-41bf-8ba7-5cc36dfdfa3c(OCS.16).aspx)

