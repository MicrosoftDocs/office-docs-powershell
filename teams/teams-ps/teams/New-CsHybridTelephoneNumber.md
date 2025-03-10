---
external help file: Microsoft.Open.Teams.CommonLibrary.dll-Help.xml
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/new-cshybridtelephonenumber
applicable: Microsoft Teams
title: New-CsHybridTelephoneNumber
schema: 2.0.0
author: serdarsoysal
ms.author: serdars
ms.reviewer:
manager:
---

# New-CsHybridTelephoneNumber

### ATTENTION
This cmdlet is being deprecated and will not be available after April 7, 2025. Teams administrators will need to use the new cmdlet "New-CsOnlineDirectRoutingTelephoneNumberUploadOrder" to add a telephone number to the tenant that can be used for Audio Conferencing with Direct Routing for GCC High and DoD clouds. Detailed instructions on how to use the new cmdlet can be found here [New-CsOnlineDirectRoutingTelephoneNumberUploadOrder](https://learn.microsoft.com/en-us/powershell/module/teams/new-csonlinedirectroutingtelephonenumberuploadorder?view=teams-ps)

## SYNOPSIS
This cmdlet adds a hybrid telephone number to the tenant.

## SYNTAX

### Identity (Default)
```powershell
New-CsHybridTelephoneNumber -TelephoneNumber <string> [-Force] -InputObject <IConfigApiBasedCmdletsIdentity> [<CommonParameters>]
```

## DESCRIPTION
This cmdlet adds a hybrid telephone number to the tenant that can be used for Audio Conferencing with Direct Routing for GCC High and DoD clouds.

## EXAMPLES

### Example 1
```powershell
New-CsHybridTelephoneNumber -TelephoneNumber +14025551234
```
This example adds the hybrid phone number +1 (402) 555-1234.

## PARAMETERS

### -TelephoneNumber
The telephone number to add. The number should be specified with a prefixed "+". The phone number can't have "tel:" prefixed.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: True
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses the display of any non-fatal error message that might arise when running the command.

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

### -InputObject
The identity parameter.

```yaml
Type: IConfigApiBasedCmdletsIdentity
Parameter Sets: NewViaIdentity
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### None

## NOTES

The cmdlet is only available in GCC High and DoD cloud instances.

## RELATED LINKS
[Remove-CsHybridTelephoneNumber](https://learn.microsoft.com/powershell/module/teams/remove-cshybridtelephonenumber)

[Get-CsHybridTelephoneNumber](https://learn.microsoft.com/powershell/module/teams/get-cshybridtelephonenumber)
