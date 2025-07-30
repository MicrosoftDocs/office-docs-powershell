---
external help file: MicrosoftTeams-help.xml
Locale: en-US
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/get-csteamssurvivablebranchappliancepolicy
schema: 2.0.0
title: Get-CsTeamsSurvivableBranchAppliancePolicy
---

# Get-CsTeamsSurvivableBranchAppliancePolicy

## SYNOPSIS
Get the Survivable Branch Appliance (SBA) Policy defined in the tenant.

## SYNTAX

### Identity (Default)

```powershell
Get-CsTeamsSurvivableBranchAppliancePolicy [[-Identity] <String>] [-MsftInternalProcessingMode <String>]
 [<CommonParameters>]
```

### Filter

```powershell
Get-CsTeamsSurvivableBranchAppliancePolicy [-MsftInternalProcessingMode <String>] [-Filter <String>]
 [<CommonParameters>]
```

## DESCRIPTION
The Survivable Branch Appliance (SBA) Policy cmdlets facilitate the continuation of Teams Phone operations, allowing for the placement and reception of Public Switched Telephone Network (PSTN) calls during service disruptions. These cmdlets are exclusively intended for Tenant Administrators and Session Border Controller (SBC) Vendors. In the absence of SBA configuration within a Tenant, the cmdlets will be inoperative.

## PARAMETERS

### -Filter

This parameter can be used to fetch policy instances based on partial matches on the Identity field.

```yaml
Type: String
Parameter Sets: Filter
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity

This parameter can be used to fetch a specific instance of the policy.

```yaml
Type: String
Parameter Sets: Identity
Aliases:

Required: False
Position: 1
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

### CommonParameters

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
