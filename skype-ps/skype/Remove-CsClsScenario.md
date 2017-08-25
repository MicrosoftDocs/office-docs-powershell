---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Remove-CsClsScenario

## SYNOPSIS
**Below Content Applies To:** Lync Server 2013

Removes the specified centralized logging configuration scenario.
A scenario represents a particular Lync Server 2013 Preview component or situation (such as IM and presence) that administrators can enable or disable for tracing.
This cmdlet was introduced in Lync Server 2013 Preview.

**Below Content Applies To:** Skype for Business Server 2015

Removes the specified centralized logging configuration scenario.
A scenario represents a particular Skype for Business Server 2015 component or situation (such as IM and presence) that administrators can enable or disable for tracing.
This cmdlet was introduced in Lync Server 2013.



## SYNTAX

```
Remove-CsClsScenario [-Identity] <XdsIdentity> [-Confirm] [-Force] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2013

The centralized logging service (which replaces the OCSLogger and OCSTracer tools used in Microsoft Lync Server 2010) provides a way for administrators to manage logging and tracing for all computers and pools running Microsoft Lync Server 2013 Preview.
Centralized logging enables administrators to stop, start, and configure logging for one or more pools and computers by using a single command; for example, you can use one command to enable Address Book service logging on all your Address Book servers.
This differs from the OCSLogger and OCSTracer tools, which had to be individually managed (including individually stopped and started) on each server.
In addition, the centralized logging service also provides a way for administrators to search trace logs from the command, using Windows PowerShell and the Search-CsClsLogging cmdlet.

Centralized logging is built around a series of predefined scenarios that offer a more finely-targeted approach to logging than offered in previous versions of Lync Server.
These scenarios predetermine the server components and logging for you; as a result, an administrator enabling the RGS scenario can be confident that he or she will only log information relevant to the Response Group service and not to, say, the audio conferencing provider service.

The Remove-CsClsScenario cmdlet provides a way for you to remove scenarios from your centralized logging configuration settings.

To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsClsScenario"}

Lync Server Control Panel: The functions carried out by the Remove-CsClsScenario cmdlet are not available in the Lync Server Control Panel.

**Below Content Applies To:** Skype for Business Server 2015

The centralized logging service (which replaces the OCSLogger and OCSTracer tools used in Microsoft Lync Server 2010) provides a way for administrators to manage logging and tracing for all computers and pools running Skype for Business Server 2015.
Centralized logging enables administrators to stop, start, and configure logging for one or more pools and computers by using a single command; for example, you can use one command to enable Address Book service logging on all your Address Book servers.
This differs from the OCSLogger and OCSTracer tools, which had to be individually managed (including individually stopped and started) on each server.
In addition, the centralized logging service also provides a way for administrators to search trace logs from the command, using the Windows PowerShell command-line interface and the Search-CsClsLogging cmdlet.

Centralized logging is built around a series of predefined scenarios that offer a more finely-targeted approach to logging than offered in previous versions of Skype for Business Server 2015.
These scenarios predetermine the server components and logging for you; as a result, an administrator enabling the RGS scenario can be confident that he or she will only log information relevant to the Response Group service and not to, say, the audio conferencing provider service.

The Remove-CsClsScenario cmdlet provides a way for you to remove scenarios from your centralized logging configuration settings.

Skype for Business Server Control Panel: The functions carried out by the Remove-CsClsScenario cmdlet are not available in the Skype for Business Server Control Panel.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 removes the WAC scenario from the global collection of centralized logging configuration settings.

Remove-CsClsScenario -Identity "site:Redmond/WAC"

### -------------------------- Example 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 removes the WAC scenario from the global collection of centralized logging configuration settings.

Remove-CsClsScenario -Identity "site:Redmond/WAC"

### -------------------------- Example 2 -------------------------- (Lync Server 2013)
```

```

In Example 2, the HybridVoice scenario is removed from all the centralized logging configuration settings in use in the organization.
To do this, Get-CsScenario is first called without any parameters in order to return a collection of all the available scenarios.
That collection is then piped to the Where-Object cmdlet, which picks out all the scenarios where the Name property is equal to (-eq) HybridVoice.
The HybridVoice scenarios are then piped to, and deleted by, the Remove-CsScenario cmdlet.

Get-CsClsScenario | Where-Object {$_.Name -eq "HybridVoice" | Remove-CsClsScenario

### -------------------------- Example 2 -------------------------- (Skype for Business Server 2015)
```

```

In Example 2, the HybridVoice scenario is removed from all the centralized logging configuration settings in use in the organization.
To do this, the Get-CsClsScenario cmdlet is first called without any parameters in order to return a collection of all the available scenarios.
That collection is then piped to the Where-Object cmdlet, which picks out all the scenarios where the Name property is equal to (-eq) HybridVoice.
The HybridVoice scenarios are then piped to, and deleted by, the Remove-CsClsScenario cmdlet.

Get-CsClsScenario | Where-Object {$_.Name -eq "HybridVoice" | Remove-CsClsScenario

## PARAMETERS

### -Identity
Unique identifier of the scenario to be removed.
A scenario consists of two parts: the scope where the scenario is configured (that is, the collection of centralized logging configuration settings where the scenario can be found) and the scenario name.
For example:

-Identity "site:Redmond/AddressBook"

You can also specify just the scenario scope; for example:

-Identity "site:Redmond"

If you do that, however, the entire collection of centralized logging configuration settings for the specified scope will be removed, and not just the scenarios.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses the display of any non-fatal error message that might occur when running the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2013, Skype for Business Server 2015

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
Remove-CsScenario accepts pipelined instances of the Microsoft.Rtc.Management.WritableConfig.Settings.CentralizedLogging.Scenario#Decorated object.

###  
The Remove-CsClsScenario cmdlet accepts pipelined instances of the Microsoft.Rtc.Management.WritableConfig.Settings.CentralizedLogging.Scenario#Decorated object.

## OUTPUTS

###  
None.
Instead, Remove-CsScenario deletes existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.CentralizedLogging.Scenario#Decorated object.

###  
None.
Instead, the Remove-CsClsScenario cmdlet deletes existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.CentralizedLogging.Scenario#Decorated object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/747bd4d6-797e-4088-9303-6ceb65f66183(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/747bd4d6-797e-4088-9303-6ceb65f66183(OCS.16).aspx)

