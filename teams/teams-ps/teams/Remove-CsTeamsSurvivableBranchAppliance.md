---
external help file: MicrosoftTeams-help.xml
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/remove-csteamssurvivablebranchappliance
title: Remove-CsTeamsSurvivableBranchAppliance
schema: 2.0.0
---

# Remove-CsTeamsSurvivableBranchAppliance

## SYNOPSIS

The Survivable Branch Appliance (SBA)  cmdlets facilitate the continuation of Teams Phone operations, allowing for the placement and reception of Public Switched Telephone Network (PSTN) calls during service disruptions. These cmdlets are exclusively intended for Tenant Administrators and Session Border Controller (SBC) Vendors. In the absence of SBA configuration within a Tenant, the cmdlets will be inoperative.

## SYNTAX

```powershell
Remove-CsTeamsSurvivableBranchAppliance [-Identity] <String>
 [-Confirm]
 [-MsftInternalProcessingMode <String>]
 [-WhatIf]
 [<CommonParameters>]
```

## PARAMETERS

### -Identity

The Identity parameter is the unique identifier for the SBA.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

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

### -MsftInternalProcessingMode

For internal use only.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

Shows what would happen if the cmdlet runs.
The cmdlet is not run.

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

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.String

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
