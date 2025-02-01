---
external help file: MicrosoftTeams-help.xml
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/set-csteamssurvivablebranchappliancepolicy
title: Set-CsTeamsSurvivableBranchAppliancePolicy
schema: 2.0.0
---

# Set-CsTeamsSurvivableBranchAppliancePolicy

## SYNOPSIS

The Survivable Branch Appliance (SBA) Policy cmdlets facilitate the continuation of Teams Phone operations, allowing for the placement and reception of Public Switched Telephone Network (PSTN) calls during service disruptions. These cmdlets are exclusively intended for Tenant Administrators and Session Border Controller (SBC) Vendors. In the absence of SBA configuration within a Tenant, the cmdlets will be inoperative.

## SYNTAX

```powershell
Set-CsTeamsSurvivableBranchAppliancePolicy [[-Identity] <String>]
 [-BranchApplianceFqdns <Object>]
 [-MsftInternalProcessingMode <String>]
 [-WhatIf]
 [-Confirm]
 [<CommonParameters>]
```

## PARAMETERS

### -Identity

The identity of the policy.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BranchApplianceFqdns

The FQDN of the SBA(s) in the site.

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

### None

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
