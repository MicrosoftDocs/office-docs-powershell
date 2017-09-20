---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015
title: Set-CsClsScenario
schema: 2.0.0
---

# Set-CsClsScenario

## SYNOPSIS
Enables you to modify a centralized logging configuration scenario.
A scenario represents a particular Skype for Business Server component or situation (such as IM and presence) that administrators can enable or disable for tracing.
This cmdlet was introduced in Lync Server 2013.


## SYNTAX

### Identity
```
Set-CsClsScenario [[-Identity] <XdsIdentity>] [-Confirm] [-Force] [-Provider <PSListModifier>] [-WhatIf]
 [<CommonParameters>]
```

### Instance
```
Set-CsClsScenario [-Confirm] [-Force] [-Instance <PSObject>] [-Provider <PSListModifier>] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
The centralized logging service (which replaces the OCSLogger and OCSTracer tools used in Microsoft Lync Server 2010) provides a way for administrators to manage logging and tracing for all computers and pools running Skype for Business Server.
Centralized logging enables administrators to stop, start and configure logging for one or more pools and computers by using a single command; for example, you can use one command to enable Address Book service logging on all your Address Book servers.
This differs from the OCSLogger and OCSTracer tools, which had to be individually managed (including individually stopped and started) on each server.
In addition, the centralized logging service also provides a way for administrators to search trace logs from the command, using the Windows PowerShell command-line interface and the `Search-CsClsLogging` cmdlet.

Centralized logging is built around a series of predefined scenarios that offer a more finely-targeted approach to logging than offered in previous versions of Skype for Business Server.
These scenarios predetermine the server components and logging for you; as a result, an administrator enabling the RGS scenario can be confident that he or she will only log information relevant to the Response Group service and not to, say, the audio conferencing provider service.

Custom scenarios by using the `New-CsClsScenario` cmdlet and then adding the new scenario to a collection of centralized logging configuration settings.
Any of your scenarios can then be modified by using the `Set-CsClsScenario` cmdlet.

Skype for Business Server Control Panel: The functions carried out by the `Set-CsClsScenario` cmdlet are not available in the Skype for Business Server Control Panel.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
$provider = New-CsClsProvider -Name "WebInfrastructure" -Type "WPP" -Level "Warning" -Flags "All"

Set-CsClsScenario -Identity "site:Redmond/WAC" -Provider @{Add=$provider}
```

The commands shown in Example 1 create a new centralized logging scenario provider and then add that provider to the WAC scenario configured for the Redmond site.
To do this, the first command in the example uses the `New-CsClsProvider` cmdlet to create a new provider with the name WebInfrastructure; this new provider is stored in a variable named $provider.
The second command in the example then adds this new provider to the scenario site:Redmond/WAC.
Because the command uses the syntax `@{Add=$provider}` the new provider will be added to the WAC scenario in addition to any other providers already configured for that.


### -------------------------- Example 2 --------------------------
```
$provider = New-CsClsProvider -Name "WebInfrastructure" -Type "WPP" -Level "Warning" -Flags "All"

Set-CsClsScenario -Identity "site:Redmond/WAC" -Provider @{Replace=$provider}
```

The command shown in Example 2 is a variation of the command shown in Example 1.
In Example 2, however, the new provider will replace any (and all) the existing providers configured for the WAC scenario.
This is done by using the syntax `@{Replace=$provider}`.


## PARAMETERS

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

### -Identity
Unique identifier of the scenario to be modified.
A scenario consists of two parts: the scope where the scenario is configured (that is, the collection of centralized logging configuration settings where the scenario can be found) and the scenario name.
For example:

`-Identity "site:Redmond/AddressBook"`

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance
Allows you to pass a reference to an object rather than set individual parameter values.

```yaml
Type: PSObject
Parameter Sets: Instance
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Provider
Logging provider for the scenario.
New providers must be created using the `New-CsClsProvider` cmdlet.
For example:

`$provider = New-CsClsProvider -Name "UserServices" -Type "WPP" -Level "Info" -Flags "All"`

```yaml
Type: PSListModifier
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
The `Set-CsClsScenario` cmdlet accepts pipelined instances of the Microsoft.Rtc.Management.WritableConfig.Settings.CentralizedLogging.Scenario#Decorated object.

## OUTPUTS

###  
None.
Instead, the `Set-CsClsScenario` cmdlet modifies existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.CentralizedLogging.Scenario#Decorated object.

## NOTES

## RELATED LINKS
