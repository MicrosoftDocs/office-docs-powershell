---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
applicable: Skype for Business Online
title: Remove-CsTeamsTranslationRule
schema: 2.0.0
manager: nmurav
author: filippse
ms.author: filippse
ms.reviewer:
---

# Remove-CsTeamsTranslationRule

## SYNOPSIS
Cmdlet to remove an existing number manipulation rule (or list of rules).

## SYNTAX

```
Remove-CsTeamsTranslationRule [-Confirm] [-WhatIf] [-Identity <string>] [-Tenant <string>] [-Force] [-AsJob]
```

## DESCRIPTION
You can use this cmdlet to remove an existing number manipulation rule (or list of rules). The rule can be used, for example, in the settings of your SBC (Set-CSOnlinePSTNGateway) to convert a callee or caller number to a desired format before entering or leaving Microsoft Phone System.

## EXAMPLES

### Example 1
```powershell
PS C:\> Remove-CsTeamsTranslationRule -Identity AddPlus1 
```

This example removes the "AddPlus1" translation rule. As the rule can be used in some places, integrity check is preformed to ensure that the rule is not in use. If the rule is in use an error thrown with specifying which SBC use this rule.



## PARAMETERS

### -Confirm
Prompts you for confirmation before running the cmdlet.

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

### -Force
Suppresses any confirmation prompts that would otherwise be displayed before making changes and suppresses the display of any non-fatal error message that might arise when running the command.

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
Identifier of the rule. This parameter is required.

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
Globally unique identifier (GUID) of the tenant account whose number manipulation rule is being edited.

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

### -WhatIf
Describes what would happen if you executed the command without actually executing the command. The cmdlet is not run.

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable.
For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
