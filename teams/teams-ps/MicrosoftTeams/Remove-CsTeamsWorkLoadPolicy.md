---
external help file: MicrosoftTeams-help.xml
Locale: en-US
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/microsoftteams/remove-csteamsworkloadpolicy
schema: 2.0.0
title: Remove-CsTeamsWorkLoadPolicy
---

# Remove-CsTeamsWorkLoadPolicy

## SYNOPSIS

This cmdlet deletes a Teams Workload Policy instance.

## SYNTAX

```powershell
Remove-CsTeamsWorkLoadPolicy [-Identity] <String> [-MsftInternalProcessingMode <String>] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION

The TeamsWorkLoadPolicy determines the workloads like meeting, messaging, calling that are enabled and/or pinned for the user.

## EXAMPLES

### Example 1

```powershell
PS C:\> Remove-CsTeamsWorkLoadPolicy -Identity "Test"
```

Deletes a Teams Workload policy instance with the identity of "Test".

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

### -Identity

Identity of the Teams Workload Policy.

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

### -MsftInternalProcessingMode

For Microsoft Internal Use Only

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

[Set-CsTeamsWorkLoadPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsworkloadpolicy)

[Get-CsTeamsWorkLoadPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/get-csteamsworkloadpolicy)

[New-CsTeamsWorkLoadPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/new-csteamsworkloadpolicy)

[Grant-CsTeamsWorkLoadPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/grant-csteamsworkloadpolicy)
