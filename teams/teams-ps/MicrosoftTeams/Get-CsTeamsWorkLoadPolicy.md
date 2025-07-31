---
external help file: MicrosoftTeams-help.xml
Locale: en-US
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/get-csteamsworkloadpolicy
schema: 2.0.0
title: Get-CsTeamsWorkLoadPolicy
---

# Get-CsTeamsWorkLoadPolicy

## SYNOPSIS

This cmdlet applies an instance of the Teams Workload policy to users or groups in a tenant.

## SYNTAX

### Identity (Default)

```powershell
Get-CsTeamsWorkLoadPolicy [[-Identity] <String>] [-MsftInternalProcessingMode <String>] [<CommonParameters>]
```

### Filter

```powershell
Get-CsTeamsWorkLoadPolicy [-MsftInternalProcessingMode <String>] [-Filter <String>] [<CommonParameters>]
```

## DESCRIPTION

The TeamsWorkLoadPolicy determines the workloads like meeting, messaging, calling that are enabled and/or pinned for the user.

## EXAMPLES

### Example 1

```powershell
PS C:\> Get-CsTeamsWorkLoadPolicy
```

Retrieves the Teams Workload Policy instances and shows assigned values.

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

Identity of the Teams Workload Policy.

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

For Microsoft internal use only.

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

[Remove-CsTeamsWorkLoadPolicy](https://learn.microsoft.com/powershell/module/teams/remove-csteamsworkloadpolicy)

[New-CsTeamsWorkLoadPolicy](https://learn.microsoft.com/powershell/module/teams/new-csteamsworkloadpolicy)

[Set-CsTeamsWorkLoadPolicy](https://learn.microsoft.com/powershell/module/teams/set-csteamsworkloadpolicy)

[Grant-CsTeamsWorkLoadPolicy](https://learn.microsoft.com/powershell/module/teams/grant-csteamsworkloadpolicy)
