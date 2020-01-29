---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://docs.microsoft.com/powershell/module/skype/get-csonlineapplicationinstance
applicable: Skype for Business Online
title: Get-CsOnlineApplicationInstance
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer:
---

# Get-CsOnlineApplicationInstance

## SYNOPSIS
Get application instance for the tenant from Azure Active Directory.

## SYNTAX

```
Get-CsOnlineApplicationInstance [[-Identity] <string>] [[-ResultSize] <int>] [-Tenant <guid>] [-Force] [-WhatIf] [-Confirm]  [<CommonParameters>]
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
The URI or the object ID of the application instance to retrieve. If this parameter is not provided, it will retrieve all application instances in the tenant.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResultSize
The result size for bulk get.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
The Tenant ID.

```yaml
Type: System.Guid
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information`, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
