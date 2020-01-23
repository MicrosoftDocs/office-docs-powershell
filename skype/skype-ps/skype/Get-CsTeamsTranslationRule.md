---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
applicable: Skype for Business Online
title: Get-CsTeamsTranslationRule
schema: 2.0.0
manager: nmurav
author: filippse
ms.author: filippse
ms.reviewer:
---

# Get-CsTeamsTranslationRule

## SYNOPSIS
Cmdlet to get an existing number manipulation rule (or list of rules).

## SYNTAX

```
Get-CsTeamsTranslationRule [-LocalStore] [-Filter <Object>] [-Tenant <string>] [[-Identity] <string>] [-AsJob]
```

## DESCRIPTION
You can use this cmdlet to get an existing number manipulation rule (or list of rules). The rule can be used, for example, in the settings of your SBC (Set-CSOnlinePSTNGateway) to convert a callee or caller number to a desired format before entering or leaving Microsoft Phone System.

## EXAMPLES

### Example 1
```powershell
PS C:\> Get-CsTeamsTranslationRule
```

This command will show all translation rules that exist in the tenant. Identity, Description, Pattern and Translation parameters listed for each rule.

### Example 2
```powershell
PS C:\> Get-CsTeamsTranslationRule -Identity AddPlus1
```

This command will show Identity, Description, Pattern and Translation parameters for "AddPlus1" rule


## PARAMETERS

### -Identity
Identifier of the rule. This parameter is required and later used to assign the rule to Inbound or Outbound Trunk Normalization policy.

```yaml
Type: Object
Parameter Sets: (All)
Aliases:
Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
Globally unique identifier (GUID) of the tenant account whose number manipulation rule is being evoked.

```yaml
Type: Object
Parameter Sets: (All)
Aliases:
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```
### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable.
For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
