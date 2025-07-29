---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
author: hirenshah1
external help file: Microsoft.Rtc.Management.dll-help.xml
Locale: en-US
manager: rogupta
Module Name: SkypeForBusiness
ms.author: hirshah
online version: https://learn.microsoft.com/powershell/module/skype/remove-csoutboundtranslationrule
schema: 2.0.0
title: Remove-CsOutboundTranslationRule
---

# Remove-CsOutboundTranslationRule

## SYNOPSIS
Removes an existing outbound translation rule.
An outbound translation rule converts phone numbers to the local dialing format for interaction with private branch exchange (PBX) systems.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Remove-CsOutboundTranslationRule [-Identity] <XdsIdentity> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Call this cmdlet to remove an existing outbound translation rule.
Skype for Business Server normalizes phone numbers to E.164 format.
However, many private branch exchange (PBX) systems aren't able to work with this format.
Outbound translations rules translate the number to the local dialing format prior to sending the number to the Mediation Server or gateway.

Each outbound translation rule is associated with a trunk configuration.
That means that using this cmdlet to remove a rule will remove it from the trunk configuration at the corresponding scope.


## EXAMPLES

### Example 1
```
Remove-CsOutboundTranslationRule -Identity "site:Redmond/Prefix Redmond"
```

This example removes an existing outbound translation rule for site Redmond named Prefix Redmond.
Identities are unique, so this command will delete a single rule.


### Example 2
```
Get-CsOutboundTranslationRule -Filter site:* | Remove-CsOutboundTranslationRule
```

This example removes all site-level outbound translation rules.
The first part of the command is a call to the `Get-CsOutboundTranslationRule` cmdlet with a Filter of site:*, which will return a collection of all rules with Identity values beginning with site:.
This collection is then piped to the `Remove-CsOutboundTranslationRule` cmdlet, which removes each rule in the collection.


## PARAMETERS

### -Force

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Suppresses any confirmation prompts that would otherwise be displayed before making changes.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

The unique identifier of the outbound translation rule you want to remove.
The Identity consists of the scope followed by a unique name within each scope.
For example, `site:Redmond/OutboundRule1`.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases:

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Confirm

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Describes what would happen if you executed the command without actually executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.Rtc.Management.WritableConfig.Settings.TrunkConfiguration.TranslationRule

Accepts pipelined input of outbound translation rule objects.

## OUTPUTS

### None
This cmdlet does not return a value.
It removes an object of type Microsoft.Rtc.Management.WritableConfig.Settings.TrunkConfiguration.TranslationRule.

## NOTES

## RELATED LINKS

[New-CsOutboundTranslationRule](New-CsOutboundTranslationRule.md)

[Set-CsOutboundTranslationRule](Set-CsOutboundTranslationRule.md)

[Get-CsOutboundTranslationRule](Get-CsOutboundTranslationRule.md)
