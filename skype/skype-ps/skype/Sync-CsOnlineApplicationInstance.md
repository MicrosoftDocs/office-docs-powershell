---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://docs.microsoft.com/powershell/module/skype/sync-csonlineapplicationinstance
applicable: Skype for Business Online
title: Sync-CsOnlineApplicationInstance
schema: 2.0.0
author: xixian73
ms.author: xixian
manager:naveenv
ms.reviewer:
---

# Sync-CsOnlineApplicationInstance

## SYNOPSIS
Use the Sync-CsOnlineApplicationInstance cmdlet to sync the application instance from Azure Active Directory into Agent Provisioning Service.

## SYNTAX

```
Sync-CsOnlineApplicationInstance [-ObjectId <guid>] [-Tenant <Guid>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Use the Sync-CsOnlineApplicationInstance cmdlet to sync application instances from Azure Active Directory into Agent Provisioning Service.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```powershell
Sync-CsOnlineApplicationInstance -ObjectId 00000000-0000-0000-0000-000000000000
```

This example sync application instance with object id "00000000-0000-0000-0000-000000000000" into Agent Provisioning Service.

## PARAMETERS

### -ObjectId
The application instance ID.

```yaml
Type: System.Guid
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
Applicable: Skype for Business Online
```

### -Tenant
The Tenant ID.

```yaml
Type: System.Guid
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
Applicable: Skype for Business Online
```

### CommonParameters
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information`, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).
