---
external help file: MicrosoftTeams-help.xml
Locale: en-US
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/new-csteamssurvivablebranchappliance
schema: 2.0.0
title: New-CsTeamsSurvivableBranchAppliance
---

# New-CsTeamsSurvivableBranchAppliance

## SYNOPSIS
Creates a new Survivable Branch Appliance (SBA) object in the tenant.

## SYNTAX

### Identity (Default)

```powershell
New-CsTeamsSurvivableBranchAppliance [-Identity] <String> [-Description <String>] [-Site <String>]
 [-MsftInternalProcessingMode <String>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### ParentAndRelativeKey

```powershell
New-CsTeamsSurvivableBranchAppliance [-Description <String>] [-Site <String>]
 [-MsftInternalProcessingMode <String>] -Fqdn <String> [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
The Survivable Branch Appliance (SBA) cmdlets facilitate the continuation of Teams Phone operations, allowing for the placement and reception of Public Switched Telephone Network (PSTN) calls during service disruptions. These cmdlets are exclusively intended for Tenant Administrators and Session Border Controller (SBC) Vendors. In the absence of SBA configuration within a Tenant, the cmdlets will be inoperative.


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

### -Description

Free format text.

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

### -Fqdn

The FQDN of the SBA.

```yaml
Type: String
Parameter Sets: ParentAndRelativeKey
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity

The identity of the SBA.

```yaml
Type: String
Parameter Sets: Identity
Aliases:

Required: True
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

### -Site

The TenantNetworkSite where the SBA is located

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
