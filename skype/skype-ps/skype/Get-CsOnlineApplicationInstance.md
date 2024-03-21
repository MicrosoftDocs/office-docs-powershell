---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/skype/get-csonlineapplicationinstance
applicable: Microsoft Teams
title: Get-CsOnlineApplicationInstance
schema: 2.0.0
manager: bulenteg
author: jenstrier
ms.author: serdars
ms.reviewer:
---

# Get-CsOnlineApplicationInstance

## SYNOPSIS
Get application instance for the tenant from Microsoft Entra ID.

## SYNTAX

```
Get-CsOnlineApplicationInstance [[-Identity] <string>] [[-ResultSize] <int>] [[-Skip] <int>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet is used to get details of an application instance.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```powershell
Get-CsOnlineApplicationInstance -Identity appinstance01@contoso.com
```

This example returns the application instance with identity "appinstance01@contoso.com".

### -------------------------- Example 2 --------------------------
```powershell
Get-CsOnlineApplicationInstance -ResultSize 10
```

This example returns the first 10 application instances.

### -------------------------- Example 3 --------------------------
```powershell
Get-CsOnlineApplicationInstance
```

This example returns the details of all application instances.

## PARAMETERS

### -Identity
The UPN or the object ID of the application instance to retrieve. If this parameter is not provided, it will retrieve all application instances in the tenant.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResultSize
The result size for bulk get. This parameter is currently not working.

```yaml
Type: System.Int32
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Skip
Skips the first specified number of returned results. The default value is 0. This parameter is currently not working.

```yaml
Type: System.Int32
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
This switch specifies whether to suppress warning and confirmation messages. It can be useful in scripting to suppress interactive prompts. If it isn't provided in the command, you're prompted for administrative input if required.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: False
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
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information`, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Set-CsOnlineApplicationInstance](Set-CsOnlineApplicationInstance.md)

[New-CsOnlineApplicationInstance](New-CsOnlineApplicationInstance.md)

[Find-CsOnlineApplicationInstance](Find-CsOnlineApplicationInstance.md)

[Sync-CsOnlineApplicationInstance](Sync-CsOnlineApplicationInstance.md)
