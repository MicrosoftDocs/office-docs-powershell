---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015
title: Set-CsOutboundCallingNumberTranslationRule
schema: 2.0.0
---

# Set-CsOutboundCallingNumberTranslationRule

## SYNOPSIS
Modifies an existing outbound calling number translation rule.
An outbound calling number translation rule converts the E.164 phone numbers used by Skype for Business Server to a format that can be used by trunking peers that do not support E.164 numbers.
This cmdlet was introduced in Lync Server 2013.


## SYNTAX

### Identity
```
Set-CsOutboundCallingNumberTranslationRule [[-Identity] <XdsIdentity>] [-Confirm] [-Description <String>]
 [-Force] [-Pattern <String>] [-Priority <Int32>] [-Translation <String>] [-WhatIf] [<CommonParameters>]
```

### Instance
```
Set-CsOutboundCallingNumberTranslationRule [-Confirm] [-Description <String>] [-Force] [-Instance <PSObject>]
 [-Pattern <String>] [-Priority <Int32>] [-Translation <String>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
Outbound calling number translation rules convert the E.164 phone numbers used by Skype for Business to a format that can be used by trunking peers that do not support E.164 numbers; when you create a translation rule you supply a regular expression representing the outbound E.164 number (the Pattern) as well as a regular expression representing the converted number (the Translation).

Outbound calling number translation rules must be bound to a collection of trunk configuration settings; when you create a new translation rule you must specify both the Identity of the trunking configuration settings and a name for the new rule (for example, site:Redmond/RedmondTranslationRule).
Note that the trunking configuration settings do not necessarily have to exist at the time you create a new rule.
For example, suppose you create the rule site:Redmond/RedmondTranslationRule but no trunk configuration settings have been created for the Redmond site.
If the Redmond site is a valid site, trunk configuration settings will automatically be created for the site and the new translation rule will be assigned to that collection of settings.
However, your command will fail if the Redmond site does not exist.

Skype for Business Server Control Panel: To edit an existing outbound calling number translation rule using the Skype for Business Server Control Panel, click Voice Routing, click Trunk Configuration, and then double-click the configuration settings containing the rule to be modified.
In the Edit Trunk Configuration dialog box, scroll down to the section labeled Calling number translation rules and then double-click the rule to be modified.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-CsOutboundCallingNumberTranslationRule -Identity "site:Redmond/SevenDigit" -Priority 0
```

The command shown in Example 1 changes the Priority of the outbound calling number translation rule with the Identity site:Redmond/SevenDigit.
In this example, the Priority is set to 0.


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

### -Description
Enables administrators to provide additional text to accompany a translation rule.
This description can be used to help administrators clearly identify the purpose of the rule.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses any confirmation prompts that would otherwise be displayed before making changes.

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
Unique identifier of the translation rule to be modified.
The Identity consists of the scope followed by a unique name within each scope.
For example:

`-Identity "site:Redmond/OutboundRule1"`

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
Allows you to pass a reference to an object to the cmdlet rather than set individual parameter values.

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

### -Pattern
A regular expression representing the number pattern to which the Translation will be applied.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Priority
Priority assigned to the rule.
If a number matches the Pattern of more than one outbound translation rule, rules are applied in priority order.
Rules are processed in order of their assigned priority; the first rule to be processed has a priority of 0; the second rule to be processed has a priority of 1; and so on.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Translation
A regular expression that will be applied to the number matching the Pattern to prepare that number for outbound calling.

```yaml
Type: String
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
The `Set-CsOutboundCallingNumberTranslationRule` cmdlet accepts pipelined instances of the Microsoft.Rtc.Management.WritableConfig.Settings.TrunkConfiguration.CallingNumberTranslationRule#Decorated object.

## OUTPUTS

###  
None.
Instead, the `Set-CsOutboundCallingNumberTranslationRule` cmdlet modifies existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.TrunkConfiguration.CallingNumberTranslationRule#Decorated object.

## NOTES

## RELATED LINKS

[Get-CsOutboundCallingNumberTranslationRule]()

[New-CsOutboundCallingNumberTranslationRule]()

[Remove-CsOutboundCallingNumberTranslationRule]()
