---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015
title: Get-CsVoiceNormalizationRule
schema: 2.0.0
---

# Get-CsVoiceNormalizationRule

## SYNOPSIS
Returns information about the voice normalization rules used in your organization.
Voice normalization rules convert telephone dialing requirements (for example, dialing 9 to access an outside line) to the E.164 phone number format used by Skype for Business Server.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Identity
```
Get-CsVoiceNormalizationRule [[-Identity] <XdsIdentity>] [-LocalStore] [<CommonParameters>]
```

### Filter
```
Get-CsVoiceNormalizationRule [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

###  (Default)
```
Get-CsVoiceNormalizationRule [[-Identity] <Object>] [-BypassDualWrite <Object>] [-Filter <Object>]
 [-LocalStore] [-Tenant <Object>] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet returns a named voice normalization rule or a collection of voice normalization rules.
These rules are a required part of phone authorization and call routing.
They define the requirements for converting--or translating--numbers from an internal Skype for Business Server format to a standard (E.164) format.
An understanding of regular expressions is helpful in order to define number patterns that will be translated.

The same rules accessed by this cmdlet can also be accessed through the NormalizationRules property returned by a call to the Get-CsDialPlan cmdlet.



## EXAMPLES

### -------------------------- Example 1 -------------------------- 
```
Get-CsVoiceNormalizationRule
```

This example retrieves all voice normalization rules defined for the organization.


### -------------------------- Example 2 -------------------------- 
```
Get-CsVoiceNormalizationRule -Filter site*
```

Example 2 retrieves all voice normalization rules specified for all sites.

### -------------------------- Example 3 -------------------------- 
```
Get-CsVoiceNormalizationRule -Filter *s*
```

Example 3 retrieves all voice normalization rules with the letter s anywhere in the scope.
For example, this will return all site- and service-level rules, as well as per-user rules with an s in the scope name, such as RedmondEastUsers.


### -------------------------- Example 4 -------------------------- 
```
Get-CsVoiceNormalizationRule | Where-Object {$_.Name -match "seattle"}
```

The Filter parameter used in Examples 2 and 3 matches only on the scope portion of the Identity.
This example performs a match on the name portion to return all rules with a Name containing the string "seattle".
To do this, we first call the Get-CsVoiceNormalizationRule cmdlet to retrieve all the normalization rules for the organization.
We then pipe this collection to the Where-Object cmdlet to find all the items in the collection where the Name property matches the string "seattle".

## PARAMETERS

### -Identity

A unique identifier for the rule.
If a value is specified for this parameter, it must be in the format scope/name; for example, site:Redmond/Rule1, where site:Redmond is the scope and Rule1 is the name.



```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
Uses wildcard strings to return a collection of normalization rules based on Identity.
Note that Filter works only on the scope portion of the Identity, not on the name.
For example, the filter value *lob* will return all rules at the global scope (scopes that contain the letters lob), but not a rule with the identity site:Redmond/lobby, where lob is only in the name portion of the identity, not the scope.


```yaml
Type: String
Parameter Sets: Filter, (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Retrieves the voice normalization rule from the local replica of the Central Management store, rather than the Central Management store itself.


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
{{Fill Tenant Description}}

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
None.

## OUTPUTS

### System.Object

###  
The Get-CsVoiceNormalizationRule cmdlet returns instances of the Microsoft.Rtc.Management.WritableConfig.Policy.Voice.NormalizationRule object.

## NOTES

## RELATED LINKS

[New-CsVoiceNormalizationRule](New-CsVoiceNormalizationRule.md)

[Remove-CsVoiceNormalizationRule](Remove-CsVoiceNormalizationRule.md)

[Set-CsVoiceNormalizationRule](Set-CsVoiceNormalizationRule.md)

[Test-CsVoiceNormalizationRule](Test-CsVoiceNormalizationRule.md)

[Get-CsDialPlan](Get-CsDialPlan.md)
