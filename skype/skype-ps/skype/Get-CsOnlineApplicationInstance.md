---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
applicable: Skype for Business Online
title: Get-CsOnlineApplicationInstance
schema: 2.0.0
author: kenwith
ms.author: kenwith
ms.reviewer:
---

# Get-CsOnlineApplicationInstance

## SYNOPSIS
Get application instance for the tenant from AAD.

## SYNTAX

```
Get-CsOnlineApplicationInstance [[-Identity] <string>] [[-ResultSize] <int>] [-Tenant <guid>] [-Force] [-WhatIf] [-Confirm]  [<CommonParameters>]
```

## DESCRIPTION
This cmdlet is used to get application instance for the tenant from AAD.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```powershell
Get-CsOnlineApplicationInstance -Identity appinstance01@contoso.com
```

This example returns the metadata of application instance with UserPrincipalName "appinstance01@contoso.com".

### -------------------------- Example 2 --------------------------
```powershell
Get-CsOnlineApplicationInstance -ResultSize 10
```

This example returns the first 10 application instances.

### -------------------------- Example 3 --------------------------
```powershell
Get-CsOnlineApplicationInstance -Tenant 00000000-0000-0000-0000-000000000000
```

This example returns the metadata of application instance with TenantId "00000000-0000-0000-0000-000000000000".

## PARAMETERS

### -Identity
The URI of the application instance to retrieve. If this parameter is not provided, it'll retrieve all application instances in the tenant (bulk get).

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
The GUID for the tenant.

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
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information`, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
