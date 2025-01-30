---
external help file: MicrosoftTeams-help.xml
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/get-csteamstargetingpolicy
title: Get-CsTeamsTargetingPolicy
schema: 2.0.0
---

# Get-CsTeamsTargetingPolicy

## SYNOPSIS

The Teams Targeting Policy cmdlets enable administrators to control the type of Tenant tag setting that users can create or the features that they can access while in a meeting. It also helps determine how meetings deal with anonymous or external users.

## SYNTAX

### Identity (Default)

```powershell
Get-CsTeamsTargetingPolicy [[-Identity] <String>] [-MsftInternalProcessingMode <String>] [<CommonParameters>]
```

### Filter

```powershell
Get-CsTeamsTargetingPolicy [-MsftInternalProcessingMode <String>] [-Filter <String>] [<CommonParameters>]
```

## DESCRIPTION

The CsTeamsTargetingPolicy cmdlets enable administrators to control the type of tags that users can create or the features that they can access in Teams. It also helps determine how tags deal with Teams members or guest users.

The Get-CsTeamsTargetingPolicy cmdlet enables you to return information about all the Tenant tag setting policies that have been configured for use in your organization.

## EXAMPLES

### Example 1

```powershell
PS C:\> Get-CsTeamsTargetingPolicy -Identity SalesPolicy
```

In this example Get-CsTeamsTargetingPolicy is used to return the per-tenant tag policy that has an Identity SalesPolicy. Because identities are unique, this command will never return more than one item.

## PARAMETERS

### -Filter

Enables you to use wildcard characters when indicating the policy (or policies) to be returned.

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

Unique identifier of the policy to be returned. To refer to the global policy, use this syntax: -Identity global. To refer to a per-tenant policy, use syntax similar to this: -Identity SalesDepartmentPolicy. If this parameter is omitted, then all the tenant tag setting policies configured for use in your organization will be returned.

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

For Internal use only.

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

### System.String

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
[Set-CsTargetingPolicy](https://learn.microsoft.com/powershell/module/teams/set-csteamstargetingpolicy)
[Remove-CsTargetingPolicy](https://learn.microsoft.com/powershell/module/teams/remove-csteamstargetingpolicy)
