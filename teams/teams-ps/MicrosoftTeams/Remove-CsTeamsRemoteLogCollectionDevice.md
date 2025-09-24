---
applicable: Microsoft Teams
author: lakshmiroy
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: wayvad
Module Name: MicrosoftTeams
ms.author: lakshmiroy
online version: https://learn.microsoft.com/powershell/module/microsoftteams/remove-csTeamsRemoteLogCollectionDevice
schema: 2.0.0
title: Remove-CsTeamsRemoteLogCollectionDevice
---

# Remove-CsTeamsRemoteLogCollectionDevice

## SYNOPSIS
Removes a device for which remote log collection was requested for.

## SYNTAX

```
Remove-CsTeamsRemoteLogCollectionDevice [-Identity] <Guid>> [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
Deletes a previously created TeamsRemoteLogCollectionDevice. 

## EXAMPLES

### Example 1
```powershell
PS C:\> Remove-CsTeamsRemoteLogCollectionDevice -Identity
```

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
Suppresses all non-fatal errors.

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
Unique identifier for the teams remote log collecton device to be removed. 

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
{{ Fill Tenant Description }}

```yaml
Type: Guid
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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.Rtc.Management.Xds.XdsIdentity

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

[Get-CsTeamsRemoteLogCollectionConfiguration](https://learn.microsoft.com/powershell/module/microsoftteams/get-csTeamsRemoteLogCollectionConfiguration)

[Get-CsTeamsRemoteLogCollectionDevice](https://learn.microsoft.com/powershell/module/microsoftteams/get-csTeamsRemoteLogCollectionDevice)

[Set-CsTeamsRemoteLogCollectionDevice](https://learn.microsoft.com/powershell/module/microsoftteams/set-csTeamsRemoteLogCollectionDevice)

[New-CsTeamsRemoteLogCollectionDevice](https://learn.microsoft.com/powershell/module/microsoftteams/new-csTeamsRemoteLogCollectionDevice)

[Remote log collection](aka.ms/logcollection)
