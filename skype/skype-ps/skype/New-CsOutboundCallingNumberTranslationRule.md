---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: New-CsOutboundCallingNumberTranslationRule
schema: 2.0.0
---

# New-CsOutboundCallingNumberTranslationRule

## SYNOPSIS

Creates a new outbound calling number translation rule.
An outbound calling number translation rule converts the E.164 phone numbers used by Skype for Business Server to a format that can be used by trunking peers that do not support E.164 numbers.
This cmdlet was introduced in Lync Server 2013.



## SYNTAX

### Identity
```
New-CsOutboundCallingNumberTranslationRule [-Identity] <XdsIdentity> [-Confirm] [-Description <String>]
 [-Force] [-InMemory] [-Pattern <String>] [-Priority <Int32>] [-Translation <String>] [-WhatIf]
 [<CommonParameters>]
```

### ParentAndRelativeKey
```
New-CsOutboundCallingNumberTranslationRule -Name <String> -Parent <String> [-Confirm] [-Description <String>]
 [-Force] [-InMemory] [-Pattern <String>] [-Priority <Int32>] [-Translation <String>] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION

Outbound calling number translation rules convert the E.164 phone numbers used by Skype for Business to a format that can be used by trunking peers that do not support E.164 numbers; when you create a translation rule you supply a regular expression representing the outbound E.164 number (the Pattern) as well as a regular expression representing the converted number (the Translation).

Outbound calling number translation rules must be bound to a collection of trunk configuration settings; when you create a new translation rule you must specify both the Identity of the trunking configuration settings and a name for the new rule (for example, site:Redmond/RedmondTranslationRule).
Note that the trunking configuration settings do not necessarily have to exist at the time you create a new rule.
For example, suppose you create the rule site:Redmond/RedmondTranslationRule but no trunk configuration settings have been created for the Redmond site.
If the Redmond site is a valid site, trunk configuration settings will automatically be created for the site and the new translation rule will be assigned to that collection of settings.
However, your command will fail if the Redmond site does not exist.

Skype for Business Server Control Panel: To create a new outbound calling number translation rule using the Skype for Business Server Control Panel, click Voice Routing then click Trunk Configuration, and then double-click the appropriate item in the Name column.
In the Edit Trunk Configuration dialog box scroll down to the section labeled Calling number translation rules and then click New.



## EXAMPLES

### -------------------------- Example 1 -------------------------- 
```

New-CsOutboundCallingNumberTranslationRule -Parent "site:Redmond" -Name SevenDigit -Description "Converts a dialed number to seven digits" -Pattern '^\+1206(\d{7})$' -Translation '$1'
```

The command shown in Example 1 creates a new outbound calling number translation rule that converts an E.164 number that begins with the string value +1206 (for example, +12065551219) to a seven-digit value (for example, 5551219, stripping off the +1206).


## PARAMETERS

### -Identity
Unique identifier for the new translation rule.
Names are composed of the scope (parent), a "/" character, and a unique name within that scope.
For example, a rule named RedmondDialing created for the Redmond site would have an Identity that looked like this:

`-Identity "site:Redmond/RedmondDialing"`

If you use the Identity parameter then your command cannot contain either the Parent or the Name parameter.

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
Name for the new translation rule; names must be unique for the given scope.
For example:

`-Name "RedmondDialing"`

Any time you use the Name parameter you must also use the Parent parameter.
The Name parameter cannot be used in the same command as the Identity parameter.

```yaml
Type: String
Parameter Sets: ParentAndRelativeKey
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Parent
Scope at which the new translation rule will be configured.
To configure a rule at the global scope, use this syntax:

`-Parent "global"`

To configure a rule at the site scope, use syntax similar to this:

`-Parent "site:Redmond"`

To configure a rule at the service scope (for the PstnGateway service only) use syntax like this:

`-Parent "service:PstnGateway:192.168.0.100"`

Any time you use the Parent parameter you must also use the Name parameter.
The Parent parameter cannot be used in the same command as the Identity parameter.

```yaml
Type: String
Parameter Sets: ParentAndRelativeKey
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
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
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InMemory
Creates an object reference without actually committing the object as a permanent change.
If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set- cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Pattern
A regular expression representing the number pattern to which the Translation will be applied.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

###  
None.
The New-CsOutboundCallingNumberTranslationRule cmdlet does not accept pipelined data.

## OUTPUTS


###  
The New-CsOutboundCallingNumberTranslationRule cmdlet creates new instances of the Microsoft.Rtc.Management.WritableConfig.Settings.TrunkConfiguration.CallingNumberTranslationRule#Decorated object.

## NOTES

## RELATED LINKS

[Get-CsOutboundCallingNumberTranslationRule](Get-CsOutboundCallingNumberTranslationRule.md)

[Remove-CsOutboundCallingNumberTranslationRule](Remove-CsOutboundCallingNumberTranslationRule.md)

[Set-CsOutboundCallingNumberTranslationRule](Set-CsOutboundCallingNumberTranslationRule.md)


