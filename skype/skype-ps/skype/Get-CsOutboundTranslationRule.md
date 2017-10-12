---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
title: Get-CsOutboundTranslationRule
schema: 2.0.0
---

# Get-CsOutboundTranslationRule

## SYNOPSIS
Retrieves one or more outbound translation rules.
An outbound translation rule converts phone numbers to the local dialing format for interaction with private branch exchange (PBX) systems and public switched telephone network (PSTN) gateways.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Identity
```
Get-CsOutboundTranslationRule [[-Identity] <XdsIdentity>] [-LocalStore] [<CommonParameters>]
```

### Filter
```
Get-CsOutboundTranslationRule [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
Call this cmdlet to retrieve an existing outbound translation rule.
Skype for Business Server normalizes phone numbers to E.164 format.
However, many private branch exchange (PBX) systems aren't able to work with this format.
Outbound translations rules translate the number to the local dialing format prior to sending the number to the Mediation Server or gateway.

Each outbound translation rule is associated with a trunk configuration.
More than one outbound translation rule can be associated with each trunk configuration.
Therefore, the Identity for each rule consists of a scope along with a name that is unique within the scope (in the format scope/name, for example site:Redmond/OBR1).
The rule is automatically associated with the trunk configuration with the same scope.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsOutboundTranslationRule
```

This example retrieves all outbound translation rules for the Skype for Business Server deployment.

### -------------------------- Example 2 --------------------------
```
Get-CsOutboundTranslationRule -Identity "site:Redmond/Prefix Redmond"
```

This example retrieves a single outbound translation rule: the rule with Identity site:Redmond/Prefix Redmond.

### -------------------------- Example 3 --------------------------
```
Get-CsOutboundTranslationRule -Filter site:*
```

This example retrieves all site-level outbound translation rules.
The command calls the Get-CsOutboundTranslationRule cmdlet with a Filter of site:*, which will return a collection of all rules with Identity values beginning with the string site:.


## PARAMETERS

### -Identity
The unique identifier for the outbound translation rule you want to retrieve.
The Identity consists of the scope followed by a unique name within each scope (for example, site:Redmond/OutboundRule1).
Specifying a value for Identity will return at most one outbound translation rule.

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
Performs a wildcard search on Identity that allows you to narrow down your results to only those outbound translation rules whose identities match the given wildcard string.

```yaml
Type: String
Parameter Sets: Filter
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Retrieves the outbound translation rule from the local replica of the Central Management store, rather than the Central Management store itself.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).


## INPUTS

### None


## OUTPUTS

### Microsoft.Rtc.Management.WritableConfig.Settings.TrunkConfiguration.TranslationRule


## NOTES


## RELATED LINKS

[New-CsOutboundTranslationRule](New-CsOutboundTranslationRule.md)

[Remove-CsOutboundTranslationRule](Remove-CsOutboundTranslationRule.md)

[Set-CsOutboundTranslationRule](Set-CsOutboundTranslationRule.md)
