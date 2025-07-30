---
applicable: Microsoft Teams
author: serdarsoysal
external help file: Microsoft.Open.Teams.CommonLibrary.dll-Help.xml
Locale: en-US
Module Name: MicrosoftTeams
ms.author: serdars
online version: https://learn.microsoft.com/powershell/module/teams/new-cshybridtelephonenumber
schema: 2.0.0
title: New-CsHybridTelephoneNumber
---

# New-CsHybridTelephoneNumber

## SYNOPSIS
This cmdlet adds a hybrid telephone number to the tenant.

## SYNTAX

### Identity (Default)
```powershell
New-CsHybridTelephoneNumber -TelephoneNumber <string> [-Force] -InputObject <IConfigApiBasedCmdletsIdentity> [<CommonParameters>]
```

## DESCRIPTION
This cmdlet adds a hybrid telephone number to the tenant that can be used for Audio Conferencing with Direct Routing for GCC High and DoD clouds.

> [!IMPORTANT]
> This cmdlet is being deprecated. Use the **New-CsOnlineDirectRoutingTelephoneNumberUploadOrder** cmdlet to add a telephone number for Audio Conferencing with Direct Routing in Microsoft 365 GCC High and DoD clouds. Detailed instructions on how to use the new cmdlet can be found at [New-CsOnlineDirectRoutingTelephoneNumberUploadOrder]([New-CsOnlineDirectRoutingTelephoneNumberUploadOrder.md).

## EXAMPLES

### Example 1
```powershell
New-CsHybridTelephoneNumber -TelephoneNumber +14025551234
```
This example adds the hybrid phone number +1 (402) 555-1234.

## PARAMETERS

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

### -TelephoneNumber

> Applicable: Microsoft Teams

The telephone number to add. The number should be specified with a prefixed "+". The phone number can't have "tel:" prefixed.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: True
Default value: None
Accept pipeline input: False
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
