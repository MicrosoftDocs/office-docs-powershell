---
applicable: Microsoft Teams
author: serdarsoysal
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: bulenteg
Module Name: MicrosoftTeams
ms.author: serdars
online version: https://learn.microsoft.com/powershell/module/microsoftteams/get-csonlineapplicationinstance
schema: 2.0.0
title: Get-CsOnlineApplicationInstance
---

# Get-CsOnlineApplicationInstance

## SYNOPSIS
Get application instance for the tenant from Microsoft Entra ID.

## SYNTAX

```
Get-CsOnlineApplicationInstance [[-Identity] <string>] [[-Identities] <string>] [[-ResultSize] <int>] [[-Skip] <int>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet is used to get details of an application instance.

## EXAMPLES

### Example 1
```powershell
Get-CsOnlineApplicationInstance -Identity appinstance01@contoso.com
```

This example returns the application instance with identity "appinstance01@contoso.com".
### Example 2
```powershell
Get-CsOnlineApplicationInstance -Identities appinstance01@contoso.com,appinstance02@contoso.com
```

This example returns the application instance with identities "appinstance01@contoso.com" and "appinstance02@contoso.com". Query with multiple comma separated Identity.

### Example 3
```powershell
Get-CsOnlineApplicationInstance -ResultSize 10
```

This example returns the first 10 application instances.

### Example 4
```powershell
Get-CsOnlineApplicationInstance
```

This example returns the details of all application instances.

## PARAMETERS

### -Confirm

> Applicable: Microsoft Teams

Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force

> Applicable: Microsoft Teams

This switch specifies whether to suppress warning and confirmation messages. It can be useful in scripting to suppress interactive prompts. If it isn't provided in the command, you're prompted for administrative input if required.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identities

> Applicable: Microsoft Teams

The UPNs or the object IDs of the application instances to retrieve, separated with comma. If this parameter nor parameter Identity are not provided, it will retrieve all application instances in the tenant.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity

> Applicable: Microsoft Teams

The UPN or the object ID of the application instance to retrieve. If this parameter nor parameter Identities are not provided, it will retrieve all application instances in the tenant.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResultSize

> Applicable: Microsoft Teams

The result size for bulk get. This parameter is currently not working.

```yaml
Type: System.Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Skip

> Applicable: Microsoft Teams

Skips the first specified number of returned results. The default value is 0. This parameter is currently not working.

```yaml
Type: System.Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Microsoft Teams

Shows what would happen if the cmdlet runs.
The cmdlet is not run.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information`, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Set-CsOnlineApplicationInstance](https://learn.microsoft.com/powershell/module/microsoftteams/set-csonlineapplicationinstance)

[New-CsOnlineApplicationInstance](https://learn.microsoft.com/powershell/module/microsoftteams/new-csonlineapplicationinstance)

[Find-CsOnlineApplicationInstance](https://learn.microsoft.com/powershell/module/microsoftteams/find-csonlineapplicationinstance)

[Sync-CsOnlineApplicationInstance](https://learn.microsoft.com/powershell/module/microsoftteams/sync-csonlineapplicationinstance)
